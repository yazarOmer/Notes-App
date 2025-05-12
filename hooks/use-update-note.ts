import { client } from "@/lib/rpc";
import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.notes.$patch>;
type RequestType = InferRequestType<typeof client.api.notes.$patch>;

export const useUpdateNote = () => {
    const queryClient = useQueryClient();
    const toast = useToastStore();

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json }) => {
            const response = await client.api.notes.$patch({ json });
            return await response.json();
        },
        onSuccess: ({ data: { id } }) => {
            queryClient.invalidateQueries({ queryKey: ["tags"] });
            queryClient.invalidateQueries({ queryKey: ["notes"] });
            queryClient.invalidateQueries({ queryKey: ["note", { id }] });
            toast.success("Note updated");
        },
    });

    return mutation;
};
