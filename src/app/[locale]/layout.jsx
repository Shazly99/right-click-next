import { ConfigProvider } from "antd";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo, Poppins } from "next/font/google";
import Script from "next/script";
import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";
import GTMTracker from './../lib/gtm';

import 'primeflex/primeflex.css';
import "@/style/App.css";
import "@/style/index.css";

// تحديد الخطوط العربية والإنجليزية
const fontAr = Cairo({
  subsets: ['arabic', 'latin', 'latin-ext'],
  weight: ["400", "200", "300"],
});

const fontEn = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Right Click - Digital Marketing Agency in Saudi Arabia",
  description: "Right Click is a leading digital marketing agency in Riyadh, Saudi Arabia. We offer top-notch services in SEO, social media marketing, web development, event organization, visual production, visual identity, account management, and mobile applications.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages();

  // تحديد الثيم بناءً على اللغة
  const theme = {
    token: {
      colorPrimary: "#0A1220",
      colorActiveText: "red",
      fontFamily: locale === "en" ? fontEn.style.fontFamily : fontAr.style.fontFamily,
    },
    components: {
      Typography: {
        fontFamily: locale === "en" ? fontEn.style.fontFamily : fontAr.style.fontFamily,
      },
      Dropdown: {
        fontFamily: locale === "en" ? fontEn.style.fontFamily : fontAr.style.fontFamily,
      },
      Button: {
        fontFamily: locale === "en" ? fontEn.style.fontFamily : fontAr.style.fontFamily,
      },
      Spin: {
        customColor: "#FA6409", // لون مخصص للـ Spinner
      },
    },
  };

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-M5G766BF'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M5G766BF');
            `,
          }}
        />

        {/* Google Analytics (GA4) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4JW77T8794"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4JW77T8794');
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: locale === "en" ? fontEn.style.fontFamily : fontAr.style.fontFamily }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5G766BF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* تشغيل GTM لمتابعة التغييرات */}
        <GTMTracker />

        <ConfigProvider theme={theme}>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
