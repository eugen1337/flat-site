import LoginForm from "../../components/login/login-form";
import Layout from "../../components/layout/layout";
import "./style.scss";

export default function LoginPage() {
    return (
        <Layout>
            <div className="back">
                <LoginForm></LoginForm>
            </div>
        </Layout>
    );
}
