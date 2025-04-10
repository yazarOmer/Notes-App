import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.notes.$get>;

export const useNotes = () => {
    const query = useQuery<ResponseType>({
        queryKey: ["notes"],
        queryFn: async () => {
            const response = await client.api.notes.$get();
            return await response.json();
        },
    });

    return query;
};
