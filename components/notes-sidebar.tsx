"use client";
import { LoaderCircle, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useNotes } from "@/hooks/use-notes";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { NoteCard } from "./note-card";
import { useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export const NotesSidebar = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const query = searchParams.get("q") || "";

    // const debouncedQuery = useDebounce(query, 300);

    const mode = pathname.startsWith("/notes")
        ? "all"
        : pathname.startsWith("/archived")
        ? "archived"
        : pathname.startsWith("/search")
        ? "search"
        : "all";

    const { data, isLoading } = useNotes(mode, query);

    const message =
        mode === "all"
            ? "You don’t have any notes yet. Start a new note to capture your thoughts and ideas."
            : mode === "search"
            ? "No notes match your search. Try a different keyword or create a new note."
            : "No notes have been archived yet. Move notes here for safekeeping, or create a new note.";

    return (
        <div className="lg:max-w-[290px] w-full h-full lg:border-r md:border-b  border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 lg:pl-8 lg:pr-4 lg:py-5 p-0 lg:mt-0 overflow-auto">
            <Link href="/notes/create">
                <Button size="sm" className="w-full py-3 hidden lg:flex">
                    Create New Note
                </Button>
            </Link>

            <Link href="/notes/create">
                <Button
                    size="icon"
                    className="lg:hidden absolute md:bottom-40 bottom-28 right-0 drop-shadow-button"
                >
                    <Plus className="size-8" />
                </Button>
            </Link>

            {isLoading && (
                <div className="w-full h-10 flex items-center justify-center">
                    <LoaderCircle className="animate-spin" />
                </div>
            )}

            {mode === "archived" && (
                <p className="text-sm text-neutral-700">
                    All your archived notes are stored here. You can restore or
                    delete them anytime.
                </p>
            )}
            {data && data.length == 0 && (
                <p className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white border border-neutral-200 p-2 rounded-lg text-sm text-neutral-950">
                    {message}
                </p>
            )}

            <div className="flex flex-col gap-1">
                {data &&
                    data.length > 0 &&
                    data.map((item, index, arr) => {
                        const date = new Date(item.updatedAt);
                        const formattedDate = date.toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        });
                        const isActive = pathname === `/notes/${item.id}`;
                        const isLast = index === arr.length - 1;
                        return (
                            <NoteCard
                                key={item.id}
                                note={item}
                                date={formattedDate}
                                isActive={isActive}
                                isLast={isLast}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
