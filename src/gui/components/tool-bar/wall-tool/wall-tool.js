import "./style.css";

export default function WallTool(props) {
    return (
        <span className="tool">
            <label className="control-input">
                длина(в см)
                <input
                    value={props.length}
                    onChange={(event) => props.setLength(event.target.value)}
                />
            </label>
            <button className="control-button" onClick={props.createWall}>
                создать стену
            </button>
        </span>
    );
}
