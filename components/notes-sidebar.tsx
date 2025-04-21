"use client";
import { LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Seperator } from "./ui/seperator";
import { useNotes } from "@/hooks/use-notes";

export const NotesSidebar = () => {
    const { data, isLoading } = useNotes();

    return (
        <div className="w-[290px] h-full border-r border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 pl-8 pt-5 pr-4 pb-5">
            <Button size="sm" className="w-full py-3">
                Create New Note
            </Button>

            {isLoading && (
                <div className="w-full h-10 flex items-center justify-center">
                    <LoaderCircle className="animate-spin" />
                </div>
            )}

            {data && data.length == 0 && (
                <p className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white border border-neutral-200 p-2 rounded-lg text-sm text-neutral-950">
                    You don’t have any notes yet. Start a new note to capture
                    your thoughts and ideas.
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
                        return (
                            <div key={item.id}>
                                <div className="flex flex-col gap-3 p-2 rounded-md w-full hover:bg-neutral-100">
                                    <h2 className="text-neutral-950 font-semibold">
                                        {item.title}
                                    </h2>
                                    <div className="flex items-center gap-1">
                                        {item.tags.map((tag) => (
                                            <div
                                                key={tag.id}
                                                className="px-1.5 py-[2px] text-xs text-neutral-950 rounded-sm bg-neutral-200 "
                                            >
                                                {tag.name}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-neutral-700">
                                        {formattedDate}
                                    </p>
                                </div>
                                {index < arr.length - 1 && (
                                    <Seperator className="mt-1" />
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
