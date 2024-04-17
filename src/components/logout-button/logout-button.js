import { useResetUserInfo, useLoginListener } from "../../state/api";
import { useNavigate } from "react-router-dom";

import "./style.css";

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
            User: <span>{login}</span>
            <button onClick={() => logout()}>logout</button>
        </div>
    );
}
