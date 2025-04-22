"use client";
import { useDeleteNoteModal } from "@/hooks/use-delete-note-modal";
import {
    Modal,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalIcon,
    ModalTitle,
} from "./ui/dialog";
import { LuTrash2 } from "react-icons/lu";
import { Button } from "./ui/button";
import { useParams } from "next/navigation";
import { useDeleteNote } from "@/hooks/use-delete-note";
import { LoaderCircle } from "lucide-react";

export const DeleteModal = () => {
    const { isOpen, closeModal } = useDeleteNoteModal();

    const params = useParams<{ id: string }>();

    const { mutate, isPending } = useDeleteNote({ id: params.id });

    const onDelete = () => {
        mutate();
    };

    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>
                <ModalIcon>
                    <LuTrash2 size={20} />
                </ModalIcon>
                <div className="flex flex-col gap-1.5">
                    <ModalTitle>Delete Note</ModalTitle>
                    <ModalDescription>
                        Are you sure you want to permanently delete this note?
                        This action cannot be undone.
                    </ModalDescription>
                </div>
            </ModalHeader>
            <ModalFooter>
                <Button
                    variant="secondary"
                    onClick={closeModal}
                    className="w-fit ml-auto mr-4"
                >
                    Cancel
                </Button>
                <Button
                    className="w-fit"
                    disabled={isPending}
                    variant="danger"
                    onClick={onDelete}
                >
                    {isPending ? (
                        <LoaderCircle className="animate-spin" />
                    ) : (
                        "Delete Note"
                    )}
                </Button>
            </ModalFooter>
        </Modal>
    );
};
