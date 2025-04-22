"use client";

import { useNote } from "@/hooks/use-note";
import { ChevronLeft, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { TbTag } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { Seperator } from "./ui/seperator";
import { LuTrash2 } from "react-icons/lu";
import { MdOutlineRestore } from "react-icons/md";
import { MdOutlineArchive } from "react-icons/md";
import { useUpdateNote } from "@/hooks/use-update-note";
import { useRouter } from "next/navigation";

interface ViewNoteProps {
    id: string;
}

export const ViewNote = ({ id }: ViewNoteProps) => {
    const { data: note, isLoading } = useNote({ id });
    const router = useRouter();

    const [title, setTitle] = useState((note && note.title) || "");
    const [tags, setTags] = useState(
        (note && note.tags.map((el) => el.name).join(", ")) || ""
    );
    const [content, setContent] = useState((note && note.content) || "");
    const [isArchived, setIsArchived] = useState(
        (note && note.isArchived) || false
    );
    const [isDisable, setIsDisable] = useState(false);
    const { mutate, isPending } = useUpdateNote();

    useEffect(() => {
        if (note) {
            if (
                title === note.title &&
                tags === (note && note.tags.map((el) => el.name).join(", ")) &&
                content === note.content &&
                isArchived === note.isArchived
            ) {
                setIsDisable(true);
            } else {
                setIsDisable(false);
            }
        }
    }, [note, title, tags, content, isArchived]);

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setTags(note.tags.map((el) => el.name).join(", "));
            setContent(note.content);
            setIsArchived(note.isArchived);
        }
    }, [note]);

    const onSubmit = () => {
        mutate(
            { json: { title, tags, content, id, isArchived } },
            {
                onSuccess: ({ data }) => {
                    setTitle(data.title);
                    setTags(data.tags.map((el) => el.name).join(", "));
                    setContent(data.content);
                },
            }
        );
    };

    if (isLoading) {
        return (
            <div className="w-full lg:max-w-[588px] flex justify-center items-center h-full">
                <LoaderCircle className="animate-spin dark:text-white" />
            </div>
        );
    }

    if (!note) {
        return null;
    }

    const date = new Date(note.updatedAt);
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="lg:flex w-full">
            <div className="lg:h-full h-[calc(100%-100px)] md:h-[calc(100%-125px)] lg:border-r border-neutral-200 dark:border-neutral-800 w-full lg:max-w-[588px] lg:px-6 lg:py-5 flex flex-col gap-3 ">
                <div className="flex lg:hidden items-center justify-between pb-3 md:pb-4 border-b border-neutral-200">
                    <Link
                        href="/notes"
                        className="flex items-center gap-1 text-neutral-600 text-sm"
                    >
                        <ChevronLeft />
                        Go Back
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/notes"
                            className="text-neutral-600 text-sm"
                        >
                            Cancel
                        </Link>
                        <Button variant="link">Save Note</Button>
                    </div>
                </div>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-neutral-950 dark:text-white text-xl md:text-2xl font-bold placeholder:text-neutral-950 focus-visible:outline-none"
                />

                <div>
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2 w-[115px]">
                            <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 text-sm">
                                <TbTag size={16} />
                                Tags
                            </div>
                            <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 text-sm whitespace-nowrap">
                                <GoClock size={16} />
                                Last edited
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <input
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                className="text-sm w-full text-neutral-950 dark:text-white placeholder:text-neutral-400 h-6 px-2 focus-visible:outline-2 focus-visible:outline-neutral-500 rounded-sm"
                                placeholder={tags}
                            />
                            <input
                                disabled
                                className="text-xs w-full text-neutral-950 dark:text-neutral-300 placeholder:text-neutral-400 h-6 px-2 focus-visible:outline-2 focus-visible:outline-neutral-500 rounded-sm"
                                placeholder={formattedDate}
                            />
                        </div>
                    </div>
                </div>

                <Seperator />

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start typing your note here..."
                    className="text-sm text-neutral-950 dark:text-neutral-100 placeholder-text-neutral-700 lg:h-[calc(100%-300px)] sm:h-[calc(100%-100px)] p-1 focus-visible:outline-2 focus-visible:outline-neutral-500 rounded-sm"
                ></textarea>

                <Seperator className="hidden lg:block" />

                <div className="hidden lg:flex items-center gap-4">
                    <Button
                        disabled={isDisable || isPending}
                        className="w-fit"
                        size="sm"
                        onClick={onSubmit}
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
                        onClick={() => router.push("/notes")}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
            <div className="w-[258px] hidden lg:flex lg:flex-col gap-3 pl-4 py-5">
                <Button
                    variant="border"
                    className="justify-start gap-2"
                    onClick={() => setIsArchived((prev) => !prev)}
                >
                    {isArchived ? (
                        <MdOutlineRestore size={20} />
                    ) : (
                        <MdOutlineArchive size={20} />
                    )}

                    {isArchived ? "Restore Note" : "Archive Note"}
                </Button>
                <Button variant="border" className="justify-start gap-2">
                    <LuTrash2 size={20} />
                    Delete Note
                </Button>
            </div>
        </div>
    );
};
