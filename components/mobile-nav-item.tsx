"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface MobileNavItem {
    item: {
        id: number;
        href: string;
        label: string;
        icon: any;
    };
}

export const MobileNavItem = ({
    item: { id, label, href, icon: Icon },
}: MobileNavItem) => {
    const pathname = usePathname();
    return (
        <Link
            href={href}
            className={twMerge(
                "py-1 rounded-sm flex md:flex-col md:max-w-20 w-full h-full md:gap-1 justify-center  items-center text-neutral-600 dark:text-neutral-400",
                pathname == href &&
                    "text-blue-500 dark:text-blue-500 bg-blue-50 dark:bg-neutral-700"
            )}
        >
            {Icon}
            <span
                className={twMerge(
                    "hidden md:block text-xs text-neutral-600 dark:text-neutral-400 text-center",
                    pathname == href && "text-blue-500 dark:text-blue-500"
                )}
            >
                {label}
            </span>
        </Link>
    );
};
