import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// Remove the BrowserRouter import and wrapper
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
