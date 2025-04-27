"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export const Header = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const searchQuery = searchParams.get("q") || "";

    const [searcInput, setSearchInput] = useState(searchQuery);
    const debouncedSearchInput = useDebounce(searcInput, 300);

    const title = searchQuery
        ? searchQuery
        : pathname.startsWith("/notes")
        ? "All Notes"
        : pathname.startsWith("/archived")
        ? "Archived Notes"
        : pathname.startsWith("/settings")
        ? "Settings"
        : pathname.startsWith("/search")
        ? "Search"
        : "";

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (debouncedSearchInput) {
            params.set("q", debouncedSearchInput);
        } else {
            params.delete("q");
        }

        router.replace(`${pathname}?${params.toString()}`);
    }, [debouncedSearchInput]);

    return (
        <div className="flex items-center bg-white dark:bg-neutral-950 justify-between w-full lg:w-[calc(100%-272px)] lg:min-h-20 lg:px-8 lg:border-b border-neutral-200 dark:border-neutral-800">
            <h1 className="text-neutral-950 dark:text-white text-2xl font-bold">
                {searchQuery && (
                    <span className="text-neutral-600">
                        Showing results for:{" "}
                    </span>
                )}
                {title}
            </h1>
            <div className="hidden lg:flex items-center gap-4">
                <Input
                    placeholder="Search by title, content, or tags..."
                    className="w-[300px] h-11"
                    value={searcInput}
                    onChange={handleSearch}
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
