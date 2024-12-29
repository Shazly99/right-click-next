import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ar"]; // No need for 'as const' in JavaScript
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix });
