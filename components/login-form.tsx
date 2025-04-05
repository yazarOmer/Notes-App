"use client";
import { LoginSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormError } from "./form-error";

export const LoginForm = () => {
    const [error, setError] = useState("");
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setError("");
        const { email, password } = values;

        await signIn.email(
            { email, password },
            {
                onSuccess: () => {
                    router.push("/");
                },
                onError: (ctx) => {
                    setError(ctx.error.message);
                },
            }
        );
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Form {...form}>
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
                                type="password"
                                {...field}
                                isError={fieldState.error}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {error && <FormError message={error} />}

                <Button>Login</Button>
            </Form>
        </form>
    );
};
