import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function StartButton() {
    const navigate = useNavigate();

    return (
        <div className="center">
            <button onClick={() => navigate("/login")}></button>
        </div>
    );
}
