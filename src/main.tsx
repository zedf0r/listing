import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Listing } from "./components/Listing";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Listing />
  </StrictMode>
);
