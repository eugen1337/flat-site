import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./gui/pages/start-page/start-page";
import LoginPage from "./gui/pages/login-page/login-page";
import MainPage from "./gui/pages/main-page/main-page";
import buildProvider from "./state/builder";

const Provider = buildProvider();

export default function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/main-page" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
