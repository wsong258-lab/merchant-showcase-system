import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { DrinkImage } from "@/components/sections/drinks-shop/DrinkImage";
import { DrinksSectionHeading } from "@/components/sections/drinks-shop/DrinksSectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import { cn } from "@/lib/utils";
import type {
  DrinksShopDemoData,
  MenuItem,
} from "@/data/demo/drinks-shop.types";

type MenuSectionProps = {
  menu: DrinksShopDemoData["menu"];
};

export function MenuSection({ menu }: MenuSectionProps) {
  return (
    <SectionShell id="menu" className="bg-[var(--ds-bg-soft)]">
      <DrinksSectionHeading
        eyebrow={menu.eyebrow}
        title={menu.title}
        description={menu.description}
      />

      <Reveal className="mt-6">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {menu.categories.map((category) => (
            <a
              key={category.id}
              href={`#menu-${category.id}`}
              className="shrink-0 rounded-full border border-[var(--ds-line)] bg-[var(--ds-surface)] px-3.5 py-1.5 text-sm font-medium text-[var(--ds-coffee-deep)] transition-colors hover:bg-[var(--ds-cream)]"
            >
              {category.name}
            </a>
          ))}
        </div>
      </Reveal>

      {menu.categories.map((category) => (
        <div
          key={category.id}
          id={`menu-${category.id}`}
          className="mt-10 scroll-mt-24 first:mt-8"
        >
          <h3 className="flex items-center gap-2.5 text-lg font-bold text-[var(--ds-ink)]">
            <span className="h-4 w-1 rounded-full bg-[var(--ds-coffee)]" />
            {category.name}
            <span className="text-sm font-normal text-[var(--ds-ink-soft)]">
              {category.items.length} 款
            </span>
          </h3>
          <Stagger className="mt-4 grid gap-3 sm:grid-cols-2">
            {category.items.map((item) => (
              <StaggerItem key={item.name} className="h-full">
                <MenuRow item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      ))}
    </SectionShell>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div
      className={cn(
        "flex h-full gap-3 rounded-xl border border-[var(--ds-line)] bg-[var(--ds-surface)] p-3",
        item.soldOut && "opacity-60",
      )}
    >
      {item.image ? (
        <DrinkImage
          src={item.image}
          alt={item.name}
          className="size-16 shrink-0 rounded-lg"
          sizes="64px"
        />
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
            <h4 className="font-bold text-[var(--ds-ink)]">{item.name}</h4>
            {item.hot ? (
              <span className="rounded-full bg-[var(--ds-clay-soft)] px-1.5 py-0.5 text-xs font-medium text-[var(--ds-clay)]">
                热卖
              </span>
            ) : null}
            {item.soldOut ? (
              <span className="rounded-full bg-[#ECE5DC] px-1.5 py-0.5 text-xs font-medium text-[var(--ds-ink-soft)]">
                售罄
              </span>
            ) : null}
          </div>
          <span className="shrink-0 font-bold text-[var(--ds-caramel)]">
            {item.price}
          </span>
        </div>
        <p className="mt-1 line-clamp-1 text-sm text-[var(--ds-ink-soft)]">
          {item.desc}
        </p>
        {item.temps.length > 0 || item.recommend ? (
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            {item.temps.map((temp) => (
              <span
                key={temp}
                className="rounded bg-[var(--ds-bg-soft)] px-1.5 py-0.5 text-xs text-[var(--ds-coffee)]"
              >
                {temp}
              </span>
            ))}
            {item.recommend ? (
              <span className="text-xs text-[var(--ds-green)]">
                {item.recommend}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
