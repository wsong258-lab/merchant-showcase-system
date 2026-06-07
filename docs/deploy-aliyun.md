# 阿里云 ECS 部署 SOP（merchant-showcase-system）

面向中国大陆生产的部署流程。复用掌灯杭州 ECS（`114.55.254.124`），与其上的 `shopos` 共存、互不影响。
Vercel 仅用于 demo 预览；大陆正式访问走本流程。

> ⚠️ 大陆 ECS 直连 GitHub 经常超时 / HTTP2 报错。**日常更新优先用「方式 B：本机打包 scp」**（见下），最稳。

---

## 一、环境与约定（已就绪，复用）

| 项 | 值 |
|---|---|
| ECS | 阿里云 杭州 `114.55.254.124`，Ubuntu 22 + Node 20 + PM2 + Nginx + git |
| 部署目录 | `/var/www/merchant-showcase-system`（独立，不碰 shopos） |
| 端口 | **3001**（shopos 占 3000） |
| PM2 进程名 | `merchant-showcase`（shopos 是 `shopos`） |
| Nginx | `listen 8080 → 127.0.0.1:3001`（shopos 占 80） |
| 安全组 | 入方向 TCP **8080** / `0.0.0.0/0` |
| 免密 SSH | 本机 `~/.ssh/id_ed25519` → `root@114.55.254.124` |
| 访问 | `http://114.55.254.124:8080/demo/{restaurant,drinks-shop,beauty-nail}` |

---

## 二、日常更新部署（代码已合并进 `main` 之后）

### 方式 A — ECS 直接拉 GitHub（网络通时）
```powershell
ssh -i $env:USERPROFILE\.ssh\id_ed25519 root@114.55.254.124 "cd /var/www/merchant-showcase-system && git fetch origin main --depth 1 && git reset --hard origin/main && npm ci --registry=https://registry.npmmirror.com && npm run build && pm2 reload merchant-showcase"
```

### 方式 B — 本机打包 scp（大陆访问 GitHub 失败时，推荐备选）
本机访问 GitHub 正常，把 `main` 打包推到 ECS：
```powershell
# 1) 本机取最新 main（独立 worktree，不动当前工作区）
cd C:\Projects\merchant-showcase-system
git fetch origin
git worktree add --detach C:\Projects\mss-deploy origin/main

# 2) 打包（排除 node_modules/.next/.git）
cd C:\Projects\mss-deploy
tar czf C:\Projects\mss-deploy.tgz --exclude=node_modules --exclude=.next --exclude=.git .

# 3) scp 到 ECS
scp -i $env:USERPROFILE\.ssh\id_ed25519 C:\Projects\mss-deploy.tgz root@114.55.254.124:/tmp/

# 4) ECS 解包 + 构建 + 热重载
ssh -i $env:USERPROFILE\.ssh\id_ed25519 root@114.55.254.124 "cd /var/www/merchant-showcase-system && tar xzf /tmp/mss-deploy.tgz && npm run build && pm2 reload merchant-showcase && rm -f /tmp/mss-deploy.tgz"

# 5) 清理本机临时文件
cd C:\Projects\merchant-showcase-system
git worktree remove C:\Projects\mss-deploy --force
Remove-Item C:\Projects\mss-deploy.tgz -Force
```
> 依赖没变（`package.json` 未改）时方式 B 可跳过 `npm ci`，直接 `npm run build`，更快。

### 验证（本机）
```powershell
curl.exe -s -o NUL -w "%{http_code}" "http://114.55.254.124:8080/demo/drinks-shop"   # 期望 200
```

---

## 三、首次初始化（换新机 / 重装时一次性）

```bash
# 1) 装环境（若没有）
apt update && apt install -y nginx git
# Node 20（NodeSource 或 nvm），然后：
npm i -g pm2

# 2) 拉代码
mkdir -p /var/www && cd /var/www
git clone --depth 1 https://github.com/wsong258-lab/merchant-showcase-system.git
cd merchant-showcase-system
npm ci --registry=https://registry.npmmirror.com
npm run build

# 3) PM2 启动（端口 3001，开机自启）
PORT=3001 pm2 start npm --name merchant-showcase -- start
pm2 save

# 4) 服务器防火墙放行（若 ufw 启用）
ufw status | grep -q active && ufw allow 8080/tcp
```

免密 SSH（本机一次性）：
```powershell
ssh-keygen -t ed25519 -f $env:USERPROFILE\.ssh\id_ed25519 -N '""'
# 公钥写入 ECS（输一次服务器密码）：
ssh root@114.55.254.124 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && echo '<粘贴 id_ed25519.pub 内容>' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

阿里云**安全组**（控制台）：ECS → 实例 → 网络与安全组 → 入方向 → 手动添加 → 协议 **自定义 TCP**、端口 `8080/8080`、来源 `0.0.0.0/0`、允许。

---

## 四、Nginx 配置

文件 `/etc/nginx/sites-available/merchant-showcase`：
```nginx
server {
    listen 8080;
    listen [::]:8080;
    server_name 114.55.254.124;
    client_max_body_size 5m;
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;
    }
}
```
启用：
```bash
ln -sf /etc/nginx/sites-available/merchant-showcase /etc/nginx/sites-enabled/merchant-showcase
nginx -t && systemctl reload nginx
```

---

## 五、常用运维
```bash
pm2 ls                          # 进程状态（shopos 与 merchant-showcase 并存）
pm2 logs merchant-showcase      # 看日志
pm2 reload merchant-showcase    # 热重载（零停机）
ss -ltnp | grep 3001            # 确认端口监听
nginx -t && systemctl reload nginx
```

---

## 六、正式对外 TODO（备案后）
- 用**已备案域名**指向 `114.55.254.124`，Nginx 改 `server_name <域名>` 走 80/443 + SSL（阿里云免费证书或 certbot）。
- 80 端口当前给 shopos（`server_name 114.55.254.124`）；merchant 用独立域名即可与 shopos 在 80 端口共存（靠 server_name 区分），届时可去掉 8080。
- 备案前对外只用 `IP:8080` 临时验收，不要长期发给客户。
