import MainLayout from "../layouts/MainLayout";
import FormLogin from "../components/login/Login"
import FormRegister from "../components/login/Register"

function LoginPage() {
  return (
    <MainLayout>
      <div>
        <p>Login page</p>
        <FormRegister />
        <FormLogin />
      </div>
    </MainLayout>
  );
}

export default LoginPage;
