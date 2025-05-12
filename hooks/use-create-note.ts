import { client } from "@/lib/rpc";
import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.notes.$post>;
type RequestType = InferRequestType<typeof client.api.notes.$post>;

export const useCreateNote = () => {
    const queryClient = useQueryClient();
    const toast = useToastStore();

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json }) => {
            const response = await client.api.notes.$post({ json });
            return await response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tags"] });
            queryClient.invalidateQueries({ queryKey: ["notes"] });
            toast.success("Note created");
        },
    });

    return mutation;
};
