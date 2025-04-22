import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Seperator } from "./ui/seperator";

interface NoteCardProps {
    note: {
        tags: {
            name: string;
            id: string;
        }[];
        id: string;
        createdAt: string;
        updatedAt: string;
        title: string;
        content: string;
        isArchived: boolean;
    };
    date: string;
    isActive: boolean;
    isLast: boolean;
}

export const NoteCard = ({ note, date, isActive, isLast }: NoteCardProps) => {
    const pathname = usePathname();
    return (
        <Link
            href={`/${pathname.startsWith("/notes") ? "notes" : "archived"}/${
                note.id
            }`}
            key={note.id}
        >
            <div
                className={twMerge(
                    "flex flex-col gap-3 p-2 rounded-md w-full hover:bg-neutral-100 hover:dark:bg-neutral-800",
                    isActive &&
                        "bg-neutral-100 dark:bg-neutral-800 border border-[#C0D5FF]"
                )}
            >
                <h2 className="text-neutral-950 dark:text-white font-semibold">
                    {note.title}
                </h2>
                <div className="flex items-center gap-1">
                    {note.tags.map((tag) => (
                        <div
                            key={tag.id}
                            className="px-1.5 py-[2px] text-xs text-neutral-950 rounded-sm bg-neutral-200 dark:bg-neutral-600 dark:text-white"
                        >
                            {tag.name.charAt(0).toUpperCase() +
                                tag.name.slice(1)}
                        </div>
                    ))}
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300">
                    {date}
                </p>
            </div>
            {!isLast && !isActive && <Seperator className="mt-1" />}
        </Link>
    );
};
