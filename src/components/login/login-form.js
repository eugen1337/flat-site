import { useNavigate } from "react-router-dom";
import "./login-form.css";

import {
    useGetToken,
    useLoginDispatcher,
    useLoginListener,
    usePasswordDispatcher,
    usePasswordListener,
    useTokenListener,
    useTokenStatusListener,
} from "../../state/broker.js";
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
        console.log("useEffect");
        if (status === "OK") navigate("/main-page");
        else if (status === "BAD") {
            console.log("bad status");
            alert(token);
        }
    }, [token, status]);

    const queryLogin = () => {
        getToken("login");
    };

    const queryRegister = () => {
        getToken("register");
    };

    return (
        <>
            <div className="wrapper">
                <h2>Autentification</h2>
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
                </form>
            </div>
        </>
    );
}
