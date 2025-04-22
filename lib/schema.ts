import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});

export const RegisterSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

export const CreateNoteSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    tags: z.string().min(1, { message: "Tags is required" }),
    content: z.string().min(1, { message: "Content is required" }),
});

export const UpdateNoteSchema = z.object({
    id: z.string(),
    title: z.string().min(1, { message: "Title is required" }),
    tags: z.string().min(1, { message: "Tags is required" }),
    content: z.string().min(1, { message: "Content is required" }),
    isArchived: z.boolean(),
});
