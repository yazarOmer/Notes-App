"use client";
import { ChevronLeft, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { TbTag } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { Seperator } from "./ui/seperator";
import { useState } from "react";
import { useCreateNote } from "@/hooks/use-create-note";

export const CreateNoteForm = () => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [content, setContent] = useState("");

    const { mutate, isPending } = useCreateNote();

    const onSubmit = () => {
        mutate(
            { json: { title, tags, content } },
            {
                onSuccess: () => {
                    setTitle("");
                    setTags("");
                    setContent("");
                },
            }
        );
    };

    return (
        <div className="lg:h-full h-[calc(100%-100px)] md:h-[calc(100%-125px)] lg:border-r border-neutral-200 w-full lg:max-w-[588px] lg:px-6 lg:py-5 flex flex-col gap-3 ">
            <div className="flex lg:hidden items-center justify-between pb-3 md:pb-4 border-b border-neutral-200">
                <Link
                    href="/notes"
                    className="flex items-center gap-1 text-neutral-600 text-sm"
                >
                    <ChevronLeft />
                    Go Back
                </Link>

                <div className="flex items-center gap-4">
                    <Link href="/notes" className="text-neutral-600 text-sm">
                        Cancel
                    </Link>
                    <Button variant="link" onClick={onSubmit}>
                        Save Note
                    </Button>
                </div>
            </div>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title..."
                className="text-neutral-950 text-xl md:text-2xl font-bold placeholder:text-neutral-950 focus-visible:outline-none"
            />

            <div>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-2 w-[115px]">
                        <div className="flex items-center gap-1.5 text-neutral-700 text-sm">
                            <TbTag size={16} />
                            Tags
                        </div>
                        <div className="flex items-center gap-1.5 text-neutral-700 text-sm whitespace-nowrap">
                            <GoClock size={16} />
                            Last edited
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <input
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="text-xs w-full text-neutral-950 placeholder:text-neutral-400 h-6 px-2 focus-visible:outline-2 focus-visible:outline-neutral-500 rounded-sm"
                            placeholder="Add tags seperated by commas (e.g. Work, Planning)"
                        />
                        <input
                            disabled
                            className="text-xs w-full text-neutral-950 placeholder:text-neutral-400 h-6 px-2 focus-visible:outline-2 focus-visible:outline-neutral-500 rounded-sm"
                            placeholder="Not yet saved"
                        />
                    </div>
                </div>
            </div>

            <Seperator />

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start typing your note here..."
                className="text-sm text-neutral-950 placeholder-text-neutral-700 h-full p-1 focus-visible:outline-2 focus-visible:outline-neutral-500 rounded-sm"
            ></textarea>

            <Seperator className="hidden lg:block" />

            <div className="hidden lg:flex items-center gap-4">
                <Button
                    className="w-fit"
                    size="sm"
                    onClick={onSubmit}
                    disabled={isPending}
                >
                    {isPending ? (
                        <LoaderCircle className="animate-spin" />
                    ) : (
                        "Save Note"
                    )}
                </Button>
                <Button
                    className="w-fit"
                    variant="secondary"
                    size="sm"
                    disabled={isPending}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
};
