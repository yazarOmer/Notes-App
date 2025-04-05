import { AuthCard } from "@/components/auth-card";
import { Card } from "@/components/ui/card";

const LoginPage = () => {
    return (
        <Card title="Welcome to Note" description="Please log in to continue">
            <AuthCard mode="login">
                helo
                {/* <LoginForm /> */}
            </AuthCard>
        </Card>
    );
};

export default LoginPage;
