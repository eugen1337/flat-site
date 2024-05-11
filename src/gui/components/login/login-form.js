import { useNavigate } from "react-router-dom";
import "./style.scss";

import {
    useGetToken,
    useLoginDispatcher,
    useLoginListener,
    usePasswordDispatcher,
    usePasswordListener,
    useTokenListener,
    useTokenStatusListener,
} from "../../../state/api.js";
import { useEffect } from "react";

export default function LoginForm(props) {
    const navigate = useNavigate();

    const login = useLoginListener();
    const loginDispatch = useLoginDispatcher();

    const password = usePasswordListener();
    const passwordDispatch = usePasswordDispatcher();

    const getToken = useGetToken();
    const token = useTokenListener();
    const status = useTokenStatusListener();

    useEffect(() => {
        if (status === "OK") navigate("/main-page");
        else if (status === "BAD") {
            console.log("bad status");
            alert(token);
        }
    }, [token, status, navigate]);

    const checkCorrect = () => {
        return login === "" || password === "" ? false : true;
    };

    const queryLogin = () => {
        if (checkCorrect()) getToken("login");
    };

    const queryRegister = () => {
        if (checkCorrect()) getToken("register");
    };

    return (
        <>
            <div
                className="wrapper"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        queryLogin();
                    }
                }}
            >
                <h2>Authentification</h2>
                <form action="#">
                    <div className="input-box">
                        <input
                            id="login"
                            type="text"
                            placeholder="login"
                            value={login}
                            onChange={(event) => {
                                loginDispatch(event.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            id="password"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(event) => {
                                passwordDispatch(event.target.value);
                            }}
                            required
                        />
                    </div>
                    <span className="button-container">
                        <div className="but-box">
                            <input
                                id="login-btn"
                                type="button"
                                value="login"
                                onClick={queryLogin}
                            />
                        </div>
                        <div className="but-box">
                            <input
                                id="register-btn"
                                type="button"
                                value="register"
                                onClick={queryRegister}
                            />
                        </div>
                    </span>
                </form>
            </div>
        </>
    );
}
