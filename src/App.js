import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/start-page";
import LoginPage from "./pages/login-page";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}
