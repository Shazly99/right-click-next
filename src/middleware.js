import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar'], // اللغات المدعومة
  defaultLocale: 'en',   // اللغة الافتراضية
});

export const config = {
  matcher: ['/', '/(en|ar)/:path*'], // مسارات الترجمة
};
