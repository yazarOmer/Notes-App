import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<
    (typeof client.api.notes)[":id"]["$get"],
    200
>;

interface UseGetNoteProps {
    id: string;
}

export const useNote = ({ id }: UseGetNoteProps) => {
    const query = useQuery<ResponseType>({
        queryKey: ["note", { id }],
        queryFn: async () => {
            const response = await client.api.notes[":id"]["$get"]({
                param: {
                    id,
                },
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
