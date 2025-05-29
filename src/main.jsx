import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import App from "./components/App/App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
