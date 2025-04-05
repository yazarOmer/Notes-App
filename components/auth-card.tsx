import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { Seperator } from "./ui/seperator";
import { Button } from "./ui/button";

interface AuthCardProps {
    children: React.ReactNode;
    mode: "login" | "register";
}

export const AuthCard = ({ children, mode }: AuthCardProps) => {
    return (
        <div className="flex flex-col gap-4 w-full">
            {children}
            <Seperator />

            <span className="text-center text-neutral-600 font-inter text-sm tracking-3 mb-4">
                Or log in with:
            </span>

            <Button variant="border" size="lg">
                <FaGoogle className="size-6 mr-4" />
                Google
            </Button>

            <Seperator />

            <span className="text-center text-neutral-600 font-inter text-sm tracking-3">
                {mode == "login"
                    ? "No account yet?"
                    : "Already have an account?"}{" "}
                <Link
                    href={mode == "login" ? "register" : "login"}
                    className="text-neutral-950 hover:text-blue-500"
                >
                    {mode == "login" ? "Register" : "Login"}
                </Link>
            </span>
        </div>
    );
};
