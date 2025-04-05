"use client";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const onSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <button onClick={onSignOut} className="bg-red-300">
                sign out
            </button>
        </div>
    );
}
