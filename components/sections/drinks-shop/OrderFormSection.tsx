"use client";

import * as React from "react";
import { CheckCircle2, ClipboardList, RotateCcw, Store } from "lucide-react";

import { Reveal } from "@/components/motion";
import {
  DrinksButton,
  drinksButtonVariants,
} from "@/components/sections/drinks-shop/DrinksButton";
import { DrinksSectionHeading } from "@/components/sections/drinks-shop/DrinksSectionHeading";
import { SectionShell } from "@/components/sections/SectionShell";
import type { DrinksShopDemoData } from "@/data/demo/drinks-shop.types";

const fieldClass =
  "h-11 w-full rounded-xl border border-[var(--ds-line)] bg-[var(--ds-surface)] px-3 text-sm text-[var(--ds-ink)] outline-none transition-colors placeholder:text-[var(--ds-ink-soft)] focus-visible:border-[var(--ds-caramel)] focus-visible:ring-2 focus-visible:ring-[var(--ds-caramel-soft)]";

const textareaClass =
  "w-full rounded-xl border border-[var(--ds-line)] bg-[var(--ds-surface)] px-3 py-2.5 text-sm leading-6 text-[var(--ds-ink)] outline-none transition-colors placeholder:text-[var(--ds-ink-soft)] focus-visible:border-[var(--ds-caramel)] focus-visible:ring-2 focus-visible:ring-[var(--ds-caramel-soft)]";

type OrderFormSectionProps = {
  order: DrinksShopDemoData["order"];
};

export function OrderFormSection({ order }: OrderFormSectionProps) {
  const [result, setResult] = React.useState<{
    name: string;
    drink: string;
  } | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string)?.trim() || "你";
    const drink = (formData.get("drink") as string) || order.drinkOptions[0];
    // 仅前端 mock：不发送请求、不写数据库。
    setResult({ name, drink });
  }

  return (
    <SectionShell id="order">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:gap-14">
        <div>
          <DrinksSectionHeading
            eyebrow={order.eyebrow}
            title={order.title}
            description={order.description}
          />
          <Reveal className="mt-6 rounded-2xl border border-[var(--ds-line)] bg-[var(--ds-cream)] p-5">
            <p className="flex items-center gap-2 font-bold text-[var(--ds-coffee-deep)]">
              <ClipboardList className="size-5" />
              到店自取，三步搞定
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[var(--ds-ink-soft)]">
              <li>填写想喝的饮品和到店时间，提交点单意向。</li>
              <li>门店通过微信 / 电话和你确认。</li>
              <li>到店报名字即取，现场付款，无需在线支付。</li>
            </ol>
          </Reveal>
        </div>

        <Reveal>
          {result ? (
            <div className="rounded-2xl border border-[var(--ds-green)] bg-[var(--ds-green-soft)] p-6 sm:p-8">
              <CheckCircle2 className="size-12 text-[var(--ds-green)]" />
              <h3 className="mt-4 text-xl font-bold text-[var(--ds-ink)]">
                {order.successTitle}
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-[var(--ds-ink-soft)]">
                {result.name}，已记下你的「{result.drink}」点单意向。
                {order.successNote}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setResult(null)}
                  className={drinksButtonVariants({
                    variant: "outline",
                    size: "md",
                  })}
                >
                  <RotateCcw />
                  再点一杯
                </button>
                <DrinksButton href="#visit" variant="ghost" size="md">
                  <Store />
                  查看门店与微信
                </DrinksButton>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 rounded-2xl border border-[var(--ds-line)] bg-[var(--ds-surface)] p-5 shadow-[0_12px_30px_var(--ds-shadow)] sm:p-6"
              aria-label="点单意向表单"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="姓名">
                  <input
                    name="name"
                    required
                    placeholder="怎么称呼你"
                    className={fieldClass}
                  />
                </Field>
                <Field label="手机号 / 微信">
                  <input
                    name="contact"
                    required
                    placeholder="方便门店联系你"
                    className={fieldClass}
                  />
                </Field>
                <Field label="选择饮品">
                  <SelectField name="drink" options={order.drinkOptions} />
                </Field>
                <Field label="数量">
                  <SelectField name="quantity" options={order.quantityOptions} />
                </Field>
                <Field label="甜度">
                  <SelectField name="sweetness" options={order.sweetnessOptions} />
                </Field>
                <Field label="冰量">
                  <SelectField name="ice" options={order.iceOptions} />
                </Field>
                <Field label="加料">
                  <SelectField name="topping" options={order.toppingOptions} />
                </Field>
                <Field label="自取时间">
                  <SelectField name="pickup" options={order.pickupTimeOptions} />
                </Field>
              </div>
              <Field label="备注">
                <textarea
                  name="note"
                  rows={3}
                  placeholder={order.notePlaceholder}
                  className={textareaClass}
                />
              </Field>
              <DrinksButton
                type="submit"
                size="lg"
                variant="primary"
                className="mt-1 w-full"
              >
                {order.submitLabel}
              </DrinksButton>
              <p className="text-center text-xs leading-5 text-[var(--ds-ink-soft)]">
                {order.sideNote}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-[var(--ds-ink)]">{label}</span>
      {children}
    </label>
  );
}

function SelectField({ name, options }: { name: string; options: string[] }) {
  return (
    <select name={name} className={fieldClass} defaultValue={options[0]}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
