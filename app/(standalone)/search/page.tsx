"use client";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const searchQuery = searchParams.get("q") || "";

    const [searcInput, setSearchInput] = useState(searchQuery);
    const debouncedSearchInput = useDebounce(searcInput, 300);

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
        <div className="flex flex-col gap-4 lg:hidden">
            <h1 className="text-2xl text-neutral-950 font-bold">Search</h1>

            <Input
                placeholder="Search by title, content, or tags..."
                className="h-11"
                value={searcInput}
                onChange={handleSearch}
            />

            {searchQuery && (
                <p className="text-sm text-neutral-700">
                    All notes matching{" "}
                    <span className="text-neutral-950">{`"${searchQuery}"`}</span>{" "}
                    are displayed below.
                </p>
            )}
        </div>
    );
}
