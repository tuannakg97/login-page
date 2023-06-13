import { Divider, Bubble } from "@/components/";
import LoginForm from "./form";
import "./styles.scss";
import {bubbles} from '@/constants/bubbles';
import SocialLoginButtons from "./socialLogin";

const Register = ({ className }: { className?: string }) => {
  return (
    <p id="register" className={className}>
      Not a member?{" "}
      <a href="#" id="link">
        Register now
      </a>
    </p>
  );
};

const LoginPage = () => {
  return (
    <div id="container">
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          style={{
            ...bubble.style,
            width: bubble.diameter,
            height: bubble.diameter,
          }}
        />
      ))}

      <div id="content">
        <div id="big-image" />
        <div id="login-form">
          <Register className="register" />

          <div id="main-form">
            <h2 id="title">Hello Again!</h2>
            <p id="subtitle">Welcome back you've been missed!</p>

            <LoginForm />

            <div id="smallRegister" style={{}}>
              <Register />
            </div>
            <div id="divider-container">
              <Divider label="Or continue with" />
            </div>

            <SocialLoginButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
