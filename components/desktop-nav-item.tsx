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
                "px-3 py-[10px] rounded-lg flex items-center justify-between hover:bg-neutral-100",
                isActive && "bg-neutral-100 border border-[#E0E4E4]"
            )}
        >
            <div
                className={twMerge(
                    "flex items-center gap-2 h-full w-full text-sm font-inter text-neutral-700",
                    isActive && "text-neutral-950"
                )}
            >
                <div
                    className={twMerge(
                        "text-neutral-700",
                        isActive && "text-blue-500"
                    )}
                >
                    {icon}
                </div>
                {label}
            </div>

            {isActive && (
                <FaChevronRight size={12} className="text-neutral-950" />
            )}
        </Link>
    );
};
