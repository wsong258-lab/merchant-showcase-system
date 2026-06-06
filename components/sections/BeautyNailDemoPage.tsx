"use client";

import type { CSSProperties, FormEvent, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  BadgeCheck,
  CalendarCheck,
  Clock3,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  WalletCards,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { BeautyNailDemoData } from "@/data/demo/types";
import { cn } from "@/lib/utils";
import type { ThemePreset } from "@/themes/types";

type BeautyNailDemoPageProps = {
  data: BeautyNailDemoData;
  theme: ThemePreset;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <div
      data-beauty-reveal
      className={cn(className)}
      style={{ "--beauty-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-beauty-stagger className={className}>
      {children}
    </div>
  );
}

function StaggerItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      data-beauty-reveal
      className={className}
      style={{ "--beauty-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Badge className="border-[var(--beauty-line)] bg-white text-[var(--beauty-rose-deep)] normal-case tracking-normal">
        {eyebrow}
      </Badge>
      <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-[var(--beauty-ink)] sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[var(--beauty-muted)]">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

function BeautyInput({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[var(--beauty-ink)]">
      {label}
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 border-[var(--beauty-line)] bg-white text-[var(--beauty-ink)] placeholder:text-[var(--beauty-muted)] focus-visible:ring-[var(--beauty-rose)]"
      />
    </label>
  );
}

function BeautySelect({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[var(--beauty-ink)]">
      {label}
      <select
        name={name}
        required={required}
        className="h-12 w-full rounded-md border border-[var(--beauty-line)] bg-white px-3 text-sm text-[var(--beauty-ink)] shadow-sm outline-none transition focus:ring-2 focus:ring-[var(--beauty-rose)]"
      >
        <option value="">请选择</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function InfoPill({
  icon: Icon,
  title,
  detail,
}: {
  icon: typeof Clock3;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-[var(--beauty-line)] bg-white/86 p-3 shadow-[0_12px_34px_rgba(116,68,72,0.08)]">
      <Icon className="mt-0.5 size-5 shrink-0 text-[var(--beauty-rose-deep)]" />
      <div className="min-w-0">
        <p className="text-sm font-medium leading-6 text-[var(--beauty-ink)]">
          {title}
        </p>
        <p className="mt-1 text-xs leading-5 text-[var(--beauty-muted)]">
          {detail}
        </p>
      </div>
    </div>
  );
}

function useBeautyMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-beauty-page]");

    if (!root) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      root.classList.add("beauty-reduced-motion");
      return;
    }

    root.classList.add("beauty-motion-ready");

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const scrollableHeight = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );

      root.classList.toggle("beauty-page-scrolled", scrollY > 10);
      root.style.setProperty(
        "--beauty-scroll-ratio",
        `${Math.min(1, scrollY / scrollableHeight)}`,
      );
      root.style.setProperty(
        "--beauty-hero-shift",
        `${Math.max(-20, scrollY * -0.035)}px`,
      );
    };

    let observer: IntersectionObserver | undefined;
    const observeRevealItem = (item: HTMLElement) => {
      if (item.classList.contains("is-visible")) {
        return;
      }

      if (observer) {
        observer.observe(item);
      } else {
        item.classList.add("is-visible");
      }
    };

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.matches("[data-beauty-reveal]")) {
            observeRevealItem(node);
          }

          node
            .querySelectorAll<HTMLElement>("[data-beauty-reveal]")
            .forEach(observeRevealItem);
        });
      });
    });

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
      );
    }

    root
      .querySelectorAll<HTMLElement>("[data-beauty-reveal]")
      .forEach(observeRevealItem);

    mutationObserver.observe(root, { childList: true, subtree: true });

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);
}

export function BeautyNailDemoPage({
  data,
  theme,
}: BeautyNailDemoPageProps) {
  useBeautyMotion();

  const [activeCategory, setActiveCategory] = useState(
    data.works.categories[0],
  );
  const [submitted, setSubmitted] = useState(false);

  const visibleWorks = useMemo(() => {
    if (activeCategory === "全部") {
      return data.works.items;
    }

    if (activeCategory === "热门款") {
      return data.works.items.filter(
        (item) => item.featured || item.category === "热门款",
      );
    }

    return data.works.items.filter((item) => item.category === activeCategory);
  }, [activeCategory, data.works.items]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main
      id="top"
      data-beauty-page
      style={theme.cssVars as CSSProperties}
      className={cn(theme.sectionClassName, "beauty-page scroll-smooth")}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .beauty-page {
          --beauty-scroll-ratio: 0;
        }

        [data-beauty-page] [data-beauty-reveal] {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        [data-beauty-page].beauty-motion-ready [data-beauty-reveal] {
          opacity: 0;
          transform: translate3d(0, 18px, 0);
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--beauty-delay, 0s);
          will-change: opacity, transform;
        }

        [data-beauty-page].beauty-motion-ready [data-beauty-reveal].is-visible,
        [data-beauty-page].beauty-reduced-motion [data-beauty-reveal] {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        [data-beauty-page].beauty-motion-ready [data-beauty-stagger] > [data-beauty-reveal]:nth-child(2) {
          transition-delay: calc(var(--beauty-delay, 0s) + 60ms);
        }

        [data-beauty-page].beauty-motion-ready [data-beauty-stagger] > [data-beauty-reveal]:nth-child(3) {
          transition-delay: calc(var(--beauty-delay, 0s) + 120ms);
        }

        [data-beauty-page].beauty-motion-ready [data-beauty-stagger] > [data-beauty-reveal]:nth-child(4) {
          transition-delay: calc(var(--beauty-delay, 0s) + 180ms);
        }

        [data-beauty-page].beauty-motion-ready [data-beauty-stagger] > [data-beauty-reveal]:nth-child(n+5) {
          transition-delay: calc(var(--beauty-delay, 0s) + 220ms);
        }

        .beauty-site-header {
          transition:
            box-shadow 260ms ease,
            background-color 260ms ease,
            border-color 260ms ease;
        }

        .beauty-scroll-progress {
          position: absolute;
          inset-inline: 0;
          bottom: -1px;
          height: 2px;
          transform: scaleX(var(--beauty-scroll-ratio));
          transform-origin: left center;
          background: linear-gradient(
            90deg,
            rgba(143, 62, 75, 0),
            rgba(143, 62, 75, 0.88),
            rgba(200, 154, 129, 0.9)
          );
          transition: transform 120ms linear;
        }

        .beauty-page-scrolled .beauty-site-header {
          border-color: rgba(149, 101, 96, 0.28);
          box-shadow: 0 12px 34px rgba(116, 68, 72, 0.1);
        }

        .beauty-hero-media {
          transform: translate3d(0, var(--beauty-hero-shift, 0px), 0);
          transition: transform 220ms ease-out;
          will-change: transform;
        }

        .beauty-action {
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background-color 180ms ease,
            border-color 180ms ease;
        }

        .beauty-action:active {
          transform: translateY(0) scale(0.99);
        }

        .beauty-work-card {
          transition:
            transform 260ms ease,
            box-shadow 260ms ease,
            border-color 260ms ease;
        }

        .beauty-filter {
          transition:
            transform 180ms ease,
            color 180ms ease,
            background-color 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .beauty-filter:active {
          transform: scale(0.98);
        }

        @media (hover: hover) and (pointer: fine) {
          .beauty-action:hover,
          .beauty-filter:hover {
            transform: translateY(-1px);
          }

          .beauty-work-card:hover {
            border-color: rgba(143, 62, 75, 0.36);
            box-shadow: 0 22px 64px rgba(116, 68, 72, 0.14);
            transform: translateY(-4px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .beauty-hero-media,
          .beauty-action,
          .beauty-work-card,
          .beauty-filter,
          .beauty-scroll-progress,
          [data-beauty-page] [data-beauty-reveal] {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
      <header className="beauty-site-header sticky top-0 z-40 border-b border-[var(--beauty-line)] bg-[rgba(255,250,246,0.92)] backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--beauty-rose-deep)] font-display text-lg text-white shadow-[0_12px_34px_rgba(143,62,75,0.22)]">
              {data.brand.logoMark}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg text-[var(--beauty-ink)]">
                {data.brand.shortName}
              </span>
              <span className="block truncate text-xs text-[var(--beauty-muted)]">
                {data.brand.positioning}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[var(--beauty-muted)] md:flex">
            {data.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[var(--beauty-rose-deep)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            className="beauty-action hidden bg-[var(--beauty-rose-deep)] text-white tracking-normal hover:bg-[var(--beauty-rose)] sm:inline-flex"
          >
            <a href="#reservation">
              <CalendarCheck />
              预约
            </a>
          </Button>
        </div>
        <span className="beauty-scroll-progress" aria-hidden="true" />
      </header>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#fffaf6_0%,#f8efe9_100%)] pb-12 pt-8 sm:pt-12 lg:pb-16 lg:pt-14">
        <div className="container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <Reveal>
              <Badge className="border-[var(--beauty-line)] bg-white text-[var(--beauty-rose-deep)] normal-case tracking-normal">
                {data.hero.eyebrow}
              </Badge>
              <p className="mt-5 text-sm text-[var(--beauty-muted)]">
                {data.brand.city} / {data.contact.shortAddress}
              </p>
              <h1 className="mt-4 font-display text-4xl leading-[1.08] text-balance text-[var(--beauty-ink)] sm:text-5xl xl:text-6xl">
                {data.brand.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--beauty-rose-deep)]">
                {data.brand.positioning}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--beauty-muted)]">
                {data.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="beauty-action bg-[var(--beauty-rose-deep)] text-white tracking-normal hover:bg-[var(--beauty-rose)]"
                >
                  <a href={data.hero.primaryCta.href}>
                    <Sparkles />
                    {data.hero.primaryCta.label}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="beauty-action border-[var(--beauty-rose)] bg-white text-[var(--beauty-rose-deep)] tracking-normal hover:bg-[var(--beauty-panel-soft)]"
                >
                  <a href={data.hero.secondaryCta.href}>
                    <MessageCircle />
                    {data.hero.secondaryCta.label}
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-7 hidden gap-3 lg:grid lg:grid-cols-3">
                <InfoPill
                  icon={Clock3}
                  title={data.contact.status}
                  detail="预约制，到店前先确认"
                />
                <InfoPill
                  icon={MapPin}
                  title={data.contact.shortAddress}
                  detail="地铁商圈，电梯上楼"
                />
                <InfoPill
                  icon={BadgeCheck}
                  title="价格先看清"
                  detail="复杂款式看图确认"
                />
              </div>
            </Reveal>

            <Stagger className="mt-6 hidden flex-wrap gap-2 lg:flex">
              {data.hero.highlights.map((item) => (
                <StaggerItem
                  key={item}
                  className="rounded-full border border-[var(--beauty-line)] bg-white px-3 py-2 text-sm text-[var(--beauty-muted)]"
                >
                  {item}
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.08}>
            <div className="relative">
              <div className="beauty-hero-media relative aspect-[16/9] overflow-hidden rounded-lg border border-white bg-white shadow-[0_24px_80px_rgba(116,68,72,0.16)] sm:aspect-[5/4] lg:aspect-[16/11]">
                <Image
                  src={data.hero.image.src}
                  alt={data.hero.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(59,43,47,0.72)] to-transparent p-5 text-white">
                  <p className="text-sm">今日可约</p>
                  <p className="mt-1 font-display text-2xl">
                    美甲 2 档 · 美睫 1 档
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 hidden rounded-lg border border-white/70 bg-white/92 p-4 shadow-[0_18px_55px_rgba(116,68,72,0.14)] backdrop-blur sm:left-6 sm:right-auto sm:block sm:w-80">
                <p className="text-sm font-medium text-[var(--beauty-ink)]">
                  {data.brand.tagline}
                </p>
                <p className="mt-2 text-xs leading-5 text-[var(--beauty-muted)]">
                  承接微信、朋友圈、小红书、抖音和门店二维码来的预约咨询。
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:hidden">
            <Reveal delay={0.08}>
              <div className="grid gap-3">
                <InfoPill
                  icon={Clock3}
                  title={data.contact.status}
                  detail="预约制，到店前先确认"
                />
                <InfoPill
                  icon={MapPin}
                  title={data.contact.shortAddress}
                  detail="地铁商圈，电梯上楼"
                />
                <InfoPill
                  icon={BadgeCheck}
                  title="价格先看清"
                  detail="复杂款式看图确认"
                />
              </div>
            </Reveal>

            <Stagger className="mt-6 flex flex-wrap gap-2">
              {data.hero.highlights.map((item) => (
                <StaggerItem
                  key={item}
                  className="rounded-full border border-[var(--beauty-line)] bg-white px-3 py-2 text-sm text-[var(--beauty-muted)]"
                >
                  {item}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section id="works" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow={data.works.eyebrow}
            title={data.works.title}
            description={data.works.description}
          />

          <Reveal delay={0.08}>
            <div className="mt-7 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {data.works.categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={cn(
                    "beauty-filter shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition",
                    activeCategory === category
                      ? "border-[var(--beauty-rose-deep)] bg-[var(--beauty-rose-deep)] text-white shadow-[0_10px_26px_rgba(143,62,75,0.18)]"
                      : "border-[var(--beauty-line)] bg-white text-[var(--beauty-muted)] hover:text-[var(--beauty-rose-deep)]",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <Stagger className="mt-6 grid auto-rows-[238px] gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[252px]">
            {visibleWorks.map((work, index) => (
              <StaggerItem
                key={work.id}
                className={cn(
                  "beauty-work-card group overflow-hidden rounded-lg border border-[var(--beauty-line)] bg-white shadow-[0_16px_48px_rgba(116,68,72,0.08)]",
                  index === 0 && "sm:row-span-2 lg:col-span-2",
                  index === 1 && "lg:row-span-2",
                  index === 5 && "lg:col-span-2",
                )}
              >
                <div className="relative h-full min-h-0 overflow-hidden">
                  <Image
                    src={work.image.src}
                    alt={work.image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(59,43,47,0.78)] via-[rgba(59,43,47,0.34)] to-transparent p-4 text-white">
                    <p className="text-xs">
                      {work.category} · {work.style}
                    </p>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <h3 className="font-display text-xl leading-tight">
                        {work.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--beauty-rose-deep)]">
                        {work.price}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 bg-[var(--beauty-bg-warm)] py-16 sm:py-20"
      >
        <div className="container">
          <SectionHeading
            eyebrow={data.services.eyebrow}
            title={data.services.title}
            description={data.services.description}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {data.services.groups.map((group) => (
              <Reveal key={group.title}>
                <Card className="h-full border-[var(--beauty-line)] bg-white shadow-[0_16px_54px_rgba(116,68,72,0.08)]">
                  <CardHeader>
                    <div className="mb-3 grid size-10 place-items-center rounded-full bg-[var(--beauty-panel-soft)] text-[var(--beauty-rose-deep)]">
                      <Scissors className="size-5" />
                    </div>
                    <CardTitle className="font-display text-2xl text-[var(--beauty-ink)]">
                      {group.title}
                    </CardTitle>
                    <p className="text-sm leading-7 text-[var(--beauty-muted)]">
                      {group.description}
                    </p>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-md border border-[var(--beauty-line)] bg-[var(--beauty-bg)] p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-medium text-[var(--beauty-ink)]">
                                {item.name}
                              </h3>
                              {item.badge ? (
                                <span className="rounded-full bg-[var(--beauty-soft)] px-2 py-1 text-xs font-medium text-[var(--beauty-rose-deep)]">
                                  {item.badge}
                                </span>
                              ) : null}
                            </div>
                            <p className="mt-2 text-sm leading-6 text-[var(--beauty-muted)]">
                              {item.description}
                            </p>
                          </div>
                          <p className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--beauty-rose-deep)] shadow-sm">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow={data.campaigns.eyebrow}
            title={data.campaigns.title}
            description={data.campaigns.description}
            align="center"
          />
          <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
            {data.campaigns.items.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full border-[var(--beauty-line)] bg-white shadow-[0_14px_42px_rgba(116,68,72,0.07)]">
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[var(--beauty-sage-soft)] text-[var(--beauty-sage)]">
                      <WalletCards className="size-5" />
                    </div>
                    <CardTitle className="text-xl text-[var(--beauty-ink)]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-[var(--beauty-muted)]">
                      {item.description}
                    </p>
                    <p className="mt-5 font-semibold text-[var(--beauty-rose-deep)]">
                      {item.price}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        id="reservation"
        className="scroll-mt-24 bg-[var(--beauty-ink)] py-16 text-white sm:py-20"
      >
        <div className="container grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={data.reservation.eyebrow}
              title={data.reservation.title}
              description={data.reservation.description}
            />
            <Reveal delay={0.08}>
              <div className="mt-6 rounded-lg border border-white/12 bg-white/8 p-5 text-sm leading-7 text-white/72">
                <p>
                  微信号：
                  <span className="font-semibold text-white">
                    {data.contact.wechat}
                  </span>
                </p>
                <p className="mt-2">
                  提交表单后会显示确认提示，当前为前端 mock，不连接数据库。
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <Card className="border-white/15 bg-white p-1 text-[var(--beauty-ink)] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <form onSubmit={handleSubmit} className="grid gap-4 p-4 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <BeautyInput
                    label="姓名"
                    name="name"
                    placeholder="例如：王女士"
                    required
                  />
                  <BeautyInput
                    label="手机号或微信"
                    name="contact"
                    placeholder="用于确认预约"
                    required
                  />
                  <BeautySelect
                    label="预约项目"
                    name="project"
                    options={data.reservation.projects}
                    required
                  />
                  <BeautyInput
                    label="期望日期"
                    name="date"
                    type="date"
                    required
                  />
                  <BeautySelect
                    label="期望时间段"
                    name="timeSlot"
                    options={data.reservation.timeSlots}
                    required
                  />
                  <BeautySelect
                    label="是否需要卸甲"
                    name="removal"
                    options={data.reservation.removalOptions}
                  />
                  <BeautySelect
                    label="是否指定技师"
                    name="technician"
                    options={data.reservation.technicianOptions}
                  />
                </div>
                <label className="grid gap-2 text-sm font-medium text-[var(--beauty-ink)]">
                  想做的风格/款式
                  <Textarea
                    name="style"
                    placeholder={data.reservation.stylePlaceholder}
                    className="min-h-24 border-[var(--beauty-line)] bg-white text-[var(--beauty-ink)] placeholder:text-[var(--beauty-muted)] focus-visible:ring-[var(--beauty-rose)]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[var(--beauty-ink)]">
                  备注
                  <Textarea
                    name="note"
                    placeholder={data.reservation.notePlaceholder}
                    className="min-h-24 border-[var(--beauty-line)] bg-white text-[var(--beauty-ink)] placeholder:text-[var(--beauty-muted)] focus-visible:ring-[var(--beauty-rose)]"
                  />
                </label>
                <Button
                  type="submit"
                  size="lg"
                  className="beauty-action bg-[var(--beauty-rose-deep)] text-white tracking-normal hover:bg-[var(--beauty-rose)]"
                >
                  <CalendarCheck />
                  提交预约意向
                </Button>
                {submitted ? (
                  <p className="rounded-md border border-[rgba(105,121,95,0.32)] bg-[rgba(105,121,95,0.12)] px-4 py-3 text-sm font-medium text-[var(--beauty-sage)]">
                    {data.reservation.successMessage}
                  </p>
                ) : null}
              </form>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="hygiene" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[var(--beauty-line)] bg-white shadow-[0_20px_70px_rgba(116,68,72,0.12)] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={data.hygiene.image.src}
                alt={data.hygiene.image.alt}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={data.hygiene.eyebrow}
              title={data.hygiene.title}
              description={data.hygiene.description}
            />
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {data.hygiene.items.map((item) => (
                <StaggerItem
                  key={item.title}
                  className="rounded-lg border border-[var(--beauty-line)] bg-white p-5 shadow-[0_12px_34px_rgba(116,68,72,0.06)]"
                >
                  <ShieldCheck className="mb-4 size-5 text-[var(--beauty-rose-deep)]" />
                  <h3 className="font-medium text-[var(--beauty-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--beauty-muted)]">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="bg-[var(--beauty-bg-warm)] py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow={data.artists.eyebrow}
            title={data.artists.title}
            description={data.artists.description}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {data.artists.items.map((artist) => (
              <Reveal key={artist.name}>
                <Card className="overflow-hidden border-[var(--beauty-line)] bg-white shadow-[0_16px_52px_rgba(116,68,72,0.08)]">
                  <div className="grid sm:grid-cols-[0.42fr_0.58fr]">
                    <div className="relative min-h-72">
                      <Image
                        src={artist.image.src}
                        alt={artist.image.alt}
                        fill
                        sizes="(min-width: 1024px) 24vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-[var(--beauty-rose-deep)]">
                        {artist.role}
                      </p>
                      <h3 className="mt-2 font-display text-3xl text-[var(--beauty-ink)]">
                        {artist.name}
                      </h3>
                      <p className="mt-3 text-sm text-[var(--beauty-muted)]">
                        {artist.experience}
                      </p>
                      <p className="mt-4 leading-7 text-[var(--beauty-muted)]">
                        {artist.style}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {artist.projects.map((project) => (
                          <span
                            key={project}
                            className="rounded-full bg-[var(--beauty-panel-soft)] px-3 py-1 text-sm text-[var(--beauty-rose-deep)]"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow={data.testimonials.eyebrow}
            title={data.testimonials.title}
            align="center"
          />
          <Stagger className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.testimonials.items.map((item) => (
              <StaggerItem key={item.name}>
                <Card className="h-full border-[var(--beauty-line)] bg-white shadow-[0_14px_42px_rgba(116,68,72,0.07)]">
                  <CardContent className="p-5">
                    <div className="mb-4 flex gap-1 text-[var(--beauty-champagne)]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="leading-7 text-[var(--beauty-ink)]">
                      “{item.quote}”
                    </p>
                    <p className="mt-5 font-medium text-[var(--beauty-ink)]">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-[var(--beauty-muted)]">
                      {item.tag}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[var(--beauty-bg-warm)] py-16 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={data.notices.eyebrow}
              title={data.notices.title}
              description={data.story.body}
            />
            <Reveal delay={0.08}>
              <div className="mt-6 rounded-lg border border-[var(--beauty-line)] bg-white p-5">
                <p className="text-sm font-medium text-[var(--beauty-rose-deep)]">
                  {data.story.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-2xl text-[var(--beauty-ink)]">
                  {data.story.title}
                </h3>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-3">
            {data.notices.items.map((notice, index) => (
              <Reveal key={notice} delay={index * 0.03}>
                <div className="flex gap-4 rounded-lg border border-[var(--beauty-line)] bg-white p-4 shadow-[0_10px_30px_rgba(116,68,72,0.05)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--beauty-panel-soft)] text-sm font-medium text-[var(--beauty-rose-deep)]">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-[var(--beauty-muted)]">
                    {notice}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="地址与联系"
              title="到店前，先确认地址和预约时间"
              description={data.story.body}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="border-[var(--beauty-line)] bg-white">
                <CardHeader>
                  <MapPin className="mb-2 size-5 text-[var(--beauty-rose-deep)]" />
                  <CardTitle className="text-xl text-[var(--beauty-ink)]">
                    门店地址
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-[var(--beauty-muted)]">
                    {data.contact.address}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[var(--beauty-line)] bg-white">
                <CardHeader>
                  <Clock3 className="mb-2 size-5 text-[var(--beauty-rose-deep)]" />
                  <CardTitle className="text-xl text-[var(--beauty-ink)]">
                    营业时间
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                  {data.contact.hours.map((hour) => (
                    <p key={hour} className="text-sm text-[var(--beauty-muted)]">
                      {hour}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
          <Reveal>
            <Card className="border-[var(--beauty-line)] bg-[var(--beauty-ink)] text-white shadow-[0_22px_70px_rgba(59,43,47,0.18)]">
              <CardHeader>
                <div className="mb-3 grid size-11 place-items-center rounded-full bg-white/10 text-white">
                  <HeartHandshake className="size-5" />
                </div>
                <CardTitle className="text-2xl text-white">联系门店</CardTitle>
                <p className="text-sm leading-7 text-white/70">
                  微信号：{data.contact.wechat}
                </p>
              </CardHeader>
              <CardContent className="grid gap-3">
                <Button
                  asChild
                  className="beauty-action bg-white text-[var(--beauty-rose-deep)] tracking-normal hover:bg-[var(--beauty-panel-soft)]"
                >
                  <a href={data.contact.wechatHref}>
                    <MessageCircle />
                    微信咨询
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="beauty-action border-white/30 text-white tracking-normal hover:bg-white/10"
                >
                  <a href={data.contact.phoneHref}>
                    <Phone />
                    {data.contact.phone}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="beauty-action border-white/30 text-white tracking-normal hover:bg-white/10"
                >
                  <a
                    href={data.contact.navigationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Navigation />
                    打开导航
                  </a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <footer className="pb-28 pt-2 md:pb-10">
        <div className="container flex flex-col gap-3 border-t border-[var(--beauty-line)] pt-8 text-sm text-[var(--beauty-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>
            {data.brand.name} · {data.brand.positioning}
          </span>
          <a href="#top" className="text-[var(--beauty-rose-deep)]">
            回到顶部
          </a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--beauty-line)] bg-[rgba(255,250,246,0.96)] p-2 shadow-[0_-10px_40px_rgba(116,68,72,0.12)] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-4 gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="beauty-action h-11 border-[var(--beauty-line)] bg-white px-2 text-xs text-[var(--beauty-rose-deep)] tracking-normal"
          >
            <a href={data.contact.wechatHref}>
              <MessageCircle />
              微信
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="beauty-action h-11 border-[var(--beauty-line)] bg-white px-2 text-xs text-[var(--beauty-rose-deep)] tracking-normal"
          >
            <a href={data.contact.phoneHref}>
              <Phone />
              电话
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="beauty-action h-11 border-[var(--beauty-line)] bg-white px-2 text-xs text-[var(--beauty-rose-deep)] tracking-normal"
          >
            <a
              href={data.contact.navigationUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation />
              导航
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="beauty-action h-11 bg-[var(--beauty-rose-deep)] px-2 text-xs text-white tracking-normal hover:bg-[var(--beauty-rose)]"
          >
            <a href="#reservation">
              <CalendarCheck />
              预约
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
