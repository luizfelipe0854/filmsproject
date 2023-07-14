import UseRoutes from "./routes";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <UseRoutes />
    </>
    
  );
}

export default App;
