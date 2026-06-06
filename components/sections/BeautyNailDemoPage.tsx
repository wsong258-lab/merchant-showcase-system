"use client";

import type { CSSProperties, FormEvent } from "react";
import { useMemo, useState } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
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
      <Badge className="normal-case tracking-normal">{eyebrow}</Badge>
      <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-[var(--beauty-ink)] sm:text-4xl lg:text-5xl">
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
        className="h-11 w-full rounded-md border border-[var(--beauty-line)] bg-white px-3 text-sm text-[var(--beauty-ink)] shadow-sm outline-none transition focus:ring-2 focus:ring-[var(--beauty-rose)]"
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
        className="border-[var(--beauty-line)] bg-white text-[var(--beauty-ink)] placeholder:text-[var(--beauty-muted)] focus-visible:ring-[var(--beauty-rose)]"
      />
    </label>
  );
}

export function BeautyNailDemoPage({
  data,
  theme,
}: BeautyNailDemoPageProps) {
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
      style={theme.cssVars as CSSProperties}
      className={theme.sectionClassName}
    >
      <header className="sticky top-0 z-40 border-b border-[var(--beauty-line)] bg-[rgba(255,250,247,0.9)] backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--beauty-rose)] font-display text-lg text-white shadow-gold-soft">
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

          <Button asChild className="hidden bg-[var(--beauty-rose)] text-white hover:bg-[var(--beauty-rose-deep)] sm:inline-flex">
            <a href="#reservation">
              <CalendarCheck />
              预约
            </a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden px-0 pb-12 pt-8 sm:pt-12 lg:pb-18">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_16%_10%,rgba(197,111,122,0.24),transparent_34%),radial-gradient(circle_at_90%_2%,rgba(215,185,140,0.28),transparent_30%)]" />
        <div className="container relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <Badge className="normal-case tracking-normal">
                {data.hero.eyebrow}
              </Badge>
              <p className="mt-6 text-sm text-[var(--beauty-muted)]">
                {data.brand.city} / {data.contact.shortAddress}
              </p>
              <h1 className="mt-4 font-display text-4xl leading-[1.08] text-[var(--beauty-ink)] sm:text-5xl xl:text-6xl">
                {data.hero.title.split("，").map((line, index, lines) => (
                  <span className="block" key={line}>
                    {line}
                    {index < lines.length - 1 ? "，" : null}
                  </span>
                ))}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--beauty-muted)]">
                {data.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 grid gap-3 rounded-lg border border-[var(--beauty-line)] bg-white/72 p-4 shadow-[0_18px_60px_rgba(129,63,73,0.08)] sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 size-5 text-[var(--beauty-rose)]" />
                  <div>
                    <p className="font-medium text-[var(--beauty-ink)]">
                      {data.contact.status}
                    </p>
                    <p className="text-sm text-[var(--beauty-muted)]">
                      预约制，到店前先确认
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 text-[var(--beauty-rose)]" />
                  <div>
                    <p className="font-medium text-[var(--beauty-ink)]">
                      {data.contact.shortAddress}
                    </p>
                    <p className="text-sm text-[var(--beauty-muted)]">
                      电梯上楼，私密安静
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="bg-[var(--beauty-rose)] text-white hover:bg-[var(--beauty-rose-deep)]"
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
                  className="border-[var(--beauty-rose)] bg-white text-[var(--beauty-rose-deep)] hover:bg-[var(--beauty-panel-soft)]"
                >
                  <a href={data.hero.secondaryCta.href}>
                    <MessageCircle />
                    {data.hero.secondaryCta.label}
                  </a>
                </Button>
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

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white bg-white shadow-[0_26px_90px_rgba(129,63,73,0.18)] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={data.hero.image.src}
                alt={data.hero.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(61,43,43,0.64)] to-transparent p-5 text-white">
                <p className="text-sm">今日可约</p>
                <p className="mt-1 font-display text-2xl">美甲 2 个档 · 美睫 1 个档</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="works" className="py-14 sm:py-18">
        <div className="container">
          <SectionHeading
            eyebrow={data.works.eyebrow}
            title={data.works.title}
            description={data.works.description}
          />

          <Reveal delay={0.08}>
            <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
              {data.works.categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition",
                    activeCategory === category
                      ? "border-[var(--beauty-rose)] bg-[var(--beauty-rose)] text-white"
                      : "border-[var(--beauty-line)] bg-white text-[var(--beauty-muted)] hover:text-[var(--beauty-rose-deep)]",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <Stagger className="mt-6 grid auto-rows-[minmax(220px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleWorks.map((work, index) => (
              <StaggerItem
                key={work.id}
                className={cn(
                  "group overflow-hidden rounded-lg border border-[var(--beauty-line)] bg-white shadow-[0_18px_60px_rgba(129,63,73,0.08)]",
                  (work.featured || index === 0) && "sm:col-span-2 sm:row-span-2",
                )}
              >
                <div
                  className={cn(
                    "relative aspect-[4/5] overflow-hidden",
                    (work.featured || index === 0) && "sm:aspect-[5/4] sm:h-full",
                  )}
                >
                  <Image
                    src={work.image.src}
                    alt={work.image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(61,43,43,0.74)] to-transparent p-4 text-white">
                    <p className="text-xs">{work.category} · {work.style}</p>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <h3 className="font-display text-xl">{work.title}</h3>
                      <span className="shrink-0 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-[var(--beauty-rose-deep)]">
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

      <section id="services" className="bg-[var(--beauty-bg-warm)] py-14 sm:py-18">
        <div className="container">
          <SectionHeading
            eyebrow={data.services.eyebrow}
            title={data.services.title}
            description={data.services.description}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {data.services.groups.map((group) => (
              <Reveal key={group.title}>
                <Card className="h-full border-[var(--beauty-line)] bg-white shadow-[0_16px_54px_rgba(129,63,73,0.08)]">
                  <CardHeader>
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
                                <span className="rounded-full bg-[var(--beauty-soft)] px-2 py-1 text-xs text-[var(--beauty-rose-deep)]">
                                  {item.badge}
                                </span>
                              ) : null}
                            </div>
                            <p className="mt-2 text-sm leading-6 text-[var(--beauty-muted)]">
                              {item.description}
                            </p>
                          </div>
                          <p className="shrink-0 font-medium text-[var(--beauty-rose-deep)]">
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

      <section className="py-14 sm:py-18">
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
                <Card className="h-full border-[var(--beauty-line)] bg-white">
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[var(--beauty-panel-soft)] text-[var(--beauty-rose)]">
                      <Star className="size-5" />
                    </div>
                    <CardTitle className="text-xl text-[var(--beauty-ink)]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-[var(--beauty-muted)]">
                      {item.description}
                    </p>
                    <p className="mt-5 font-medium text-[var(--beauty-rose-deep)]">
                      {item.price}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="reservation" className="bg-[var(--beauty-ink)] py-14 text-white sm:py-18">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow={data.reservation.eyebrow}
            title={data.reservation.title}
            description={data.reservation.description}
          />
          <Reveal>
            <Card className="border-white/15 bg-white p-1 text-[var(--beauty-ink)] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <form onSubmit={handleSubmit} className="grid gap-4 p-4 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <BeautyInput label="姓名" name="name" placeholder="例如：王女士" required />
                  <BeautyInput label="手机号或微信" name="contact" placeholder="用于确认预约" required />
                  <BeautySelect label="预约项目" name="project" options={data.reservation.projects} required />
                  <BeautyInput label="期望日期" name="date" type="date" required />
                  <BeautySelect label="期望时间段" name="timeSlot" options={data.reservation.timeSlots} required />
                  <BeautySelect label="是否需要卸甲" name="removal" options={data.reservation.removalOptions} />
                  <BeautySelect label="是否指定技师" name="technician" options={data.reservation.technicianOptions} />
                </div>
                <label className="grid gap-2 text-sm font-medium text-[var(--beauty-ink)]">
                  想做的风格/款式
                  <Textarea
                    name="style"
                    placeholder={data.reservation.stylePlaceholder}
                    className="border-[var(--beauty-line)] bg-white text-[var(--beauty-ink)] placeholder:text-[var(--beauty-muted)] focus-visible:ring-[var(--beauty-rose)]"
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
                  className="bg-[var(--beauty-rose)] text-white hover:bg-[var(--beauty-rose-deep)]"
                >
                  <CalendarCheck />
                  提交预约意向
                </Button>
                {submitted ? (
                  <p className="rounded-md border border-[rgba(126,139,115,0.28)] bg-[rgba(126,139,115,0.12)] px-4 py-3 text-sm text-[var(--beauty-sage)]">
                    {data.reservation.successMessage}
                  </p>
                ) : null}
              </form>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="hygiene" className="py-14 sm:py-18">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[var(--beauty-line)] bg-white shadow-[0_20px_70px_rgba(129,63,73,0.12)] sm:aspect-[5/4] lg:aspect-[4/5]">
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
                  className="rounded-lg border border-[var(--beauty-line)] bg-white p-5"
                >
                  <ShieldCheck className="mb-4 size-5 text-[var(--beauty-rose)]" />
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

      <section className="bg-[var(--beauty-bg-warm)] py-14 sm:py-18">
        <div className="container">
          <SectionHeading
            eyebrow={data.artists.eyebrow}
            title={data.artists.title}
            description={data.artists.description}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {data.artists.items.map((artist) => (
              <Reveal key={artist.name}>
                <Card className="overflow-hidden border-[var(--beauty-line)] bg-white">
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
                      <p className="text-sm text-[var(--beauty-rose-deep)]">
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

      <section className="py-14 sm:py-18">
        <div className="container">
          <SectionHeading
            eyebrow={data.testimonials.eyebrow}
            title={data.testimonials.title}
            align="center"
          />
          <Stagger className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.testimonials.items.map((item) => (
              <StaggerItem key={item.name}>
                <Card className="h-full border-[var(--beauty-line)] bg-white">
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

      <section className="bg-[var(--beauty-bg-warm)] py-14 sm:py-18">
        <div className="container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionHeading
            eyebrow={data.notices.eyebrow}
            title={data.notices.title}
            description={data.story.body}
          />
          <div className="grid gap-3">
            {data.notices.items.map((notice, index) => (
              <Reveal key={notice} delay={index * 0.03}>
                <div className="flex gap-4 rounded-lg border border-[var(--beauty-line)] bg-white p-4">
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

      <section id="contact" className="py-14 sm:py-18">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="地址联系"
              title="到店前，先确认地址和预约时间"
              description={data.story.body}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="border-[var(--beauty-line)] bg-white">
                <CardHeader>
                  <MapPin className="mb-2 size-5 text-[var(--beauty-rose)]" />
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
                  <Clock3 className="mb-2 size-5 text-[var(--beauty-rose)]" />
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
            <Card className="border-[var(--beauty-line)] bg-[var(--beauty-ink)] text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">联系门店</CardTitle>
                <p className="text-sm leading-7 text-white/70">
                  微信号：{data.contact.wechat}
                </p>
              </CardHeader>
              <CardContent className="grid gap-3">
                <Button asChild className="bg-white text-[var(--beauty-rose-deep)] hover:bg-[var(--beauty-panel-soft)]">
                  <a href={data.contact.wechatHref}>
                    <MessageCircle />
                    微信咨询
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-white/30 text-white hover:bg-white/10">
                  <a href={data.contact.phoneHref}>
                    <Phone />
                    {data.contact.phone}
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-white/30 text-white hover:bg-white/10">
                  <a href={data.contact.navigationUrl} target="_blank" rel="noreferrer">
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

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--beauty-line)] bg-[rgba(255,250,247,0.96)] p-2 shadow-[0_-10px_40px_rgba(129,63,73,0.12)] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-4 gap-2">
          <Button variant="outline" size="sm" asChild className="h-11 border-[var(--beauty-line)] bg-white text-[var(--beauty-rose-deep)]">
            <a href={data.contact.wechatHref}>
              <MessageCircle />
              微信
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="h-11 border-[var(--beauty-line)] bg-white text-[var(--beauty-rose-deep)]">
            <a href={data.contact.phoneHref}>
              <Phone />
              电话
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="h-11 border-[var(--beauty-line)] bg-white text-[var(--beauty-rose-deep)]">
            <a href={data.contact.navigationUrl} target="_blank" rel="noreferrer">
              <Navigation />
              导航
            </a>
          </Button>
          <Button size="sm" asChild className="h-11 bg-[var(--beauty-rose)] text-white hover:bg-[var(--beauty-rose-deep)]">
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
