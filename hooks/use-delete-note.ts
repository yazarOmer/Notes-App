import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<
    (typeof client.api.notes)[":id"]["$delete"],
    200
>;

interface UseGetNoteProps {
    id: string;
}

export const useDeleteNote = ({ id }: UseGetNoteProps) => {
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
    });

    return query;
};
