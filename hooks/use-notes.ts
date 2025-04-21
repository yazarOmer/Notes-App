import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.notes.$get>;

export const useNotes = (mode: "all" | "archived") => {
    const query = useQuery<ResponseType>({
        queryKey: ["notes", { mode }],
        queryFn: async () => {
            const response = await client.api.notes.$get({
                query: {
                    mode,
                },
            });
            return await response.json();
        },
    });

    return query;
};
