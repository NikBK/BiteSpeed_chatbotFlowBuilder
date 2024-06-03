import { Flow, HomeLayout } from "./components/index.js";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'; // Importing styles for notifications
import "reactflow/dist/style.css"; // Importing styles for Flow component
import "./App.css"; // Importing custom styles for the App

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
