import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/start-page";
import LoginPage from "./pages/login-page";
import buildProvider from "./state/builder";
import Header from "./components/layout/header";

const Provider = buildProvider();

export default function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
