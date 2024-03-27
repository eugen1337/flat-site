import { useNavigate } from "react-router-dom";
import "./start-button.css";
export default function StartButton() {
    const navigate = useNavigate();

    return (
        <div className="center">
            <button onClick={() => navigate("/login")}>Get Started</button>
        </div>
    );
}
