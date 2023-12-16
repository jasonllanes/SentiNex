import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <NavBar />
      {show && <Alert text="Alerrtttt" onClose={() => setShow(false)} />}
      <Button
        text="Button"
        color="btn btn-dark"
        onClick={() => {
          setShow(true);
        }}
      />
    </div>
  );
}

export default App;
