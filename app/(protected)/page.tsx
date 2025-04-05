"use client";
import { signOut, useSession } from "@/lib/auth-client";
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
        <div className="">
            <button onClick={onSignOut} className="bg-red-300">
                sign out
            </button>
        </div>
    );
}
