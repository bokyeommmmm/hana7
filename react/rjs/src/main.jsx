import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// render - 그려줘
//getelementbyid -> index.html의 id=root에서 뭐 가져와라 ?
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* App -> 웹 컴포넌트 */}
  </StrictMode>
);
