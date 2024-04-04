import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [flashMessage, setFlashMessage] = useState("");

  const handleFlashMessage = () => {
    if (localStorage.getItem("flashMessage")) {
      setFlashMessage(localStorage.getItem("flashMessage"));
      localStorage.removeItem("flashMessage");
    }
  };

  useEffect(handleFlashMessage, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        {flashMessage ? (
          <div onClick={() => setFlashMessage(null)} className="alert alert-primary" role="alert">
            {flashMessage}
          </div>
        ) : null}
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
