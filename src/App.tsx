import LoginPage from './pages/login'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
   <>
   <ToastContainer />
   <LoginPage />
   </>
  );
}

export default App;
