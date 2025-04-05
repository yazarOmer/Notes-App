import { AuthCard } from "@/components/auth-card";
import { LoginForm } from "@/components/login-form";
import { Card } from "@/components/ui/card";

const LoginPage = () => {
    return (
        <Card title="Welcome to Note" description="Please log in to continue">
            <AuthCard mode="login">
                <LoginForm />
            </AuthCard>
        </Card>
    );
};

export default LoginPage;
