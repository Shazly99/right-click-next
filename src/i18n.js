import { notFound } from 'next/navigation';

export default async function getRequestConfig({ locale }) {
  const locales = ['en', 'ar'];
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
}
