"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();
    console.log(pathname);

    const title = pathname.startsWith("/notes")
        ? "All Notes"
        : pathname.startsWith("/archived")
        ? "Archived Notes"
        : pathname.startsWith("/settings")
        ? "Settings"
        : "";

    return (
        <div className="flex items-center lg:top-0 bg-white dark:bg-neutral-950 justify-between w-full lg:w-[calc(100%-272px)] lg:h-20 lg:px-8 lg:border-b border-neutral-200 dark:border-neutral-800">
            <h1 className="text-neutral-950 dark:text-white text-2xl font-bold">
                {title}
            </h1>
            <div className="hidden lg:flex items-center gap-4">
                <Input
                    placeholder="Search by title, content, or tags..."
                    className="w-[300px] h-11"
                />
                <Link href="/settings">
                    <IoSettingsOutline
                        size={24}
                        className="text-neutral-500 dark:text-neutral-400 rounded-full p-1.5 size-9 hover:bg-neutral-100 hover:dark:bg-neutral-600 cursor-pointer transition"
                    />
                </Link>
            </div>
        </div>
    );
};
