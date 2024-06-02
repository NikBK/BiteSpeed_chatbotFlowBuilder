import { Flow, HomeLayout } from "./components/index.js";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "reactflow/dist/style.css";
import "./App.css";

export default function App() {

  return (
    <>
      <HomeLayout>
        <Flow />
        <ToastContainer />
      </HomeLayout>
    </>
  );
};
