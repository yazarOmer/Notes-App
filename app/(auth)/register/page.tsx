import { AuthCard } from "@/components/auth-card";
// import { RegisterForm } from "@/components/register.form";
import { Card } from "@/components/ui/card";

const RegisterPage = () => {
    return (
        <Card
            title="Create Your Account"
            description="Sign up to start organizing your notes and boost your productivity."
        >
            <AuthCard mode="register">
                register
                {/* <RegisterForm /> */}
            </AuthCard>
        </Card>
    );
};

export default RegisterPage;
