import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Layout from "./Layout.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                </Route>
            </Routes>
        </StrictMode>
    </BrowserRouter>
);
