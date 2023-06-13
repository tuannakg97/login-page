import googleImage from '@/assets/google.png';
import appleImage from '@/assets/apple.png';
import facebookImage from '@/assets/facebook.png';


const methods = [
  {
    id: "gg-login-method",
    value: "google",
    src: googleImage,
    tooltip: 'Sign in with Google'
  },
  {
    id: "app-login-method",
    value: "apple",
    src: appleImage,
    tooltip: 'Sign in with Apple ID'
  },
  {
    id: "fb-login-method",
    value: "facebook",
    src: facebookImage,
    tooltip: 'Sign in with Facebook'
  },
];

export type Method = {
  id: string;
  value: string;
  src: string;
  tooltip: string;
}

export { methods };