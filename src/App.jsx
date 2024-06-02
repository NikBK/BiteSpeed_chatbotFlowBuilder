import { Flow, HomeLayout } from "./components/index.js";

import "reactflow/dist/style.css";
import "./App.css";

export default function App() {

  return (
    <>
      <HomeLayout>
        <Flow />
      </HomeLayout>
    </>
  );
};
