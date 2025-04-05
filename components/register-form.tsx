"use client";
import { RegisterSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { FormError } from "./form-error";
import { LoaderCircle } from "lucide-react";

export const RegisterForm = () => {
    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setIsPending(true);

        const { email, password, name } = values;
        await signUp.email(
            { email, password, name },
            {
                onSuccess: (ctx) => {
                    router.push("/");
                },
                onError: (ctx) => {
                    setError(ctx.error.message);
                    setIsPending(false);
                },
            }
        );
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <Input
                                placeholder="John Doe"
                                {...field}
                                isError={fieldState.error}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Input
                                placeholder="email@example.com"
                                {...field}
                                isError={fieldState.error}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <Input
                                {...field}
                                type="password"
                                isError={fieldState.error}
                            />
                            <FormMessage />
                            <FormDescription>
                                At least 8 characters
                            </FormDescription>
                        </FormItem>
                    )}
                />

                {error && <FormError message={error} />}

                <Button disabled={isPending}>
                    {isPending ? (
                        <LoaderCircle className="animate-spin" />
                    ) : (
                        "Sign up"
                    )}
                </Button>
            </Form>
        </form>
    );
};
