"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ls/ui/accordion";
import { WhatsAppCTA } from "@/components/ls/WhatsAppCTA";
import { WHATSAPP_MESSAGES } from "@/components/ls/whatsapp";

import { learningFaqItems } from "@/components/ls/faq-items";

const ITEMS = learningFaqItems;

export function FAQ() {
  return (
    <>
      <Accordion type="single" collapsible className="ls:w-full ls:space-y-3">
        {ITEMS.map((it, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="ls:rounded-2xl ls:border ls:border-border ls:bg-card ls:px-5 ls:sm:px-6 ls:shadow-sm"
          >
            <AccordionTrigger className="ls:text-right ls:text-base ls:sm:text-lg ls:font-bold ls:hover:no-underline">
              {it.q}
            </AccordionTrigger>
            <AccordionContent className="ls:text-foreground/75 ls:leading-relaxed ls:text-sm ls:sm:text-base">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <WhatsAppCTA
        message={WHATSAPP_MESSAGES.faq}
        caption="לא מצאתם תשובה?"
        label="שאלו אותנו בוואטסאפ"
      />
    </>
  );
}
