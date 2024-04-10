import { useResetUserInfo, useLoginListener } from "../../state/broker";
import { useNavigate } from "react-router-dom";

import "./style.css"

export default function LogoutButton() {
    const navigate = useNavigate();

    const login = useLoginListener();
    const resetUserInfo = useResetUserInfo();

    const logout = () => {
        resetUserInfo();
        navigate("/");
    };

    return (
        <div className="logout-box">
            <span>User: {login}</span>
            <button onClick={() => logout()}>logout</button>
        </div>
    );
}
