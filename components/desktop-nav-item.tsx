"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface DesktopNavItemProps {
    item: {
        id: number;
        label: string;
        href: string;
        icon: any;
    };
}

export const DesktopNavItem = ({
    item: { label, href, icon },
}: DesktopNavItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={twMerge(
                "px-3 py-[10px] rounded-lg flex items-center justify-between hover:bg-neutral-100 hover:dark:bg-neutral-800",
                isActive &&
                    "bg-neutral-100 border border-[#E0E4E4] dark:bg-neutral-800"
            )}
        >
            <div
                className={twMerge(
                    "flex items-center gap-2 h-full w-full text-sm text-neutral-700",
                    isActive && "text-neutral-950"
                )}
            >
                <div
                    className={twMerge(
                        "text-neutral-700 dark:text-neutral-200",
                        isActive && "text-blue-500 dark:text-blue-500"
                    )}
                >
                    {icon}
                </div>
                <span className="dark:text-neutral-200 text-neutral-700">
                    {label}
                </span>
            </div>

            {isActive && (
                <FaChevronRight
                    size={12}
                    className="text-neutral-950 dark:text-neutral-200"
                />
            )}
        </Link>
    );
};
