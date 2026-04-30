import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";

import Hero from "@/components/Hero";
import CounterBand from "@/components/CounterBand";
import Manifesto from "@/components/Manifesto";
import Petitions from "@/components/Petitions";
import HowItWorks from "@/components/HowItWorks";
import Quotes from "@/components/Quotes";
import Press from "@/components/Press";
import CtaBand from "@/components/CtaBand";
import SignupSection from "@/components/SignupSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const m = getMessages(locale);

  return (
    <main>
      <Hero m={m} />
      <CounterBand m={m} />
      <Manifesto m={m} />
      <Petitions m={m} locale={locale} />
      <HowItWorks m={m} />
      <Quotes m={m} />
      <Press m={m} />
      <CtaBand m={m} />
      <SignupSection m={m} />
    </main>
  );
}
