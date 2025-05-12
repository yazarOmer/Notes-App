import { client } from "@/lib/rpc";
import { useToastStore } from "@/store/useToastStore";
import { useQuery } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.notes.$get>;

type PageType = "all" | "archived" | "search";

export const useNotes = (
    mode: PageType,
    searchQuery?: string,
    tag?: string
) => {
    const toast = useToastStore();
    const query = useQuery<ResponseType>({
        queryKey: ["notes", { mode, searchQuery, tag }],
        queryFn: async () => {
            const response = await client.api.notes.$get({
                query: {
                    mode,
                    query: searchQuery,
                    tag,
                },
            });

            if (!response.ok) {
                toast.error("Failed to fetch notes");
            }

            return await response.json();
        },
    });

    return query;
};
