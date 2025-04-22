import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { useRouter } from "next/navigation";
import { useDeleteNoteModal } from "./use-delete-note-modal";

type ResponseType = InferResponseType<
    (typeof client.api.notes)[":id"]["$delete"],
    200
>;

interface UseGetNoteProps {
    id: string;
}

export const useDeleteNote = ({ id }: UseGetNoteProps) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { closeModal } = useDeleteNoteModal();

    const query = useMutation<ResponseType>({
        mutationFn: async () => {
            const response = await client.api.notes[":id"]["$delete"]({
                param: { id },
            });

            if (!response.ok) {
                throw new Error("No data");
            }

            const data = await response.json();
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tags"] });
            queryClient.invalidateQueries({ queryKey: ["notes"] });
            closeModal();
            router.push("/notes");
        },
    });

    return query;
};
