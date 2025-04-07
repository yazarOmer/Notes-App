import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.tags.$get>;

export const useTags = () => {
    const query = useQuery<ResponseType>({
        queryKey: ["tags"],
        queryFn: async () => {
            const response = await client.api.tags.$get();
            return await response.json();
        },
    });

    return query;
};
