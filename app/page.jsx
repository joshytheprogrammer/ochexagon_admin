import LoginForm from '@components/login/LoginForm';

export default function Login() {
  return (
    <div className="bg-login-bg bg-cover bg-blend-overlay bg-opacity-80 bg-black w-full h-screen flex flex-col items-center justify-center">
      <LoginForm />
    </div>
  )
}
