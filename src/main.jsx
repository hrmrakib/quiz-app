import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import QuizDataProvider from "./context/QuizContent";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizDataProvider>
      <RouterProvider router={router} />
    </QuizDataProvider>
  </StrictMode>
);
