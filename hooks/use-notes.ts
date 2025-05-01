import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.notes.$get>;

type PageType = "all" | "archived" | "search";

export const useNotes = (
    mode: PageType,
    searchQuery?: string,
    tag?: string
) => {
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
            return await response.json();
        },
    });

    return query;
};
