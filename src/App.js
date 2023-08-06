import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Myorg } from "./components/MyOrg/Myorg";

function App() {
  const [showHideForm, setShowHideForm] = useState(true);

  const changeShowHide = () => {
    setShowHideForm(!showHideForm);
  };

  return (
    <div>
      <Header />
      {showHideForm && <Form />}
      <Myorg changeShowHide={changeShowHide} />
    </div>
  );
}

export default App;
