import { client } from "@/lib/rpc";
import { useToastStore } from "@/store/useToastStore";
import { useQuery } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.tags.$get>;

export const useTags = () => {
    const toast = useToastStore();

    const query = useQuery<ResponseType>({
        queryKey: ["tags"],
        queryFn: async () => {
            const response = await client.api.tags.$get();

            if (!response.ok) {
                toast.error("Failed to fetch notes");
            }

            return await response.json();
        },
    });

    return query;
};
