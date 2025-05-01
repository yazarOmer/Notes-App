"use client";
import { useTags } from "@/hooks/use-tags";
import Link from "next/link";
import { TbTag } from "react-icons/tb";
import { Seperator } from "./ui/seperator";

export const TagsSidebar = () => {
    const { data: tags, isLoading } = useTags();

    return (
        <div className="flex flex-col gap-1 w-full">
            {tags &&
                tags.length > 0 &&
                tags.map((item, index, arr) => {
                    const isLast = index === arr.length - 1;
                    return (
                        <div key={item.id} className="w-full">
                            <Link
                                href={`/notes?t=${item.name}`}
                                key={item.id}
                                className="w-full py-2.5 rounded-lg flex items-center gap-2 hover:bg-[#F9F9F9] hover:dark:bg-neutral-800"
                            >
                                <TbTag className="text-neutral-700 dark:text-neutral-200 size-5" />
                                <span className="text-neutral-700 dark:text-neutral-200 text-sm">
                                    {item.name.charAt(0).toUpperCase() +
                                        item.name.slice(1)}
                                </span>
                            </Link>
                            {!isLast && <Seperator />}
                        </div>
                    );
                })}
        </div>
    );
};
