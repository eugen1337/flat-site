import "./style.css";

export default function WallTool(props) {
    return (
        <>
            <label className="control-input">
                длина
                <input
                    value={props.length}
                    onChange={(event) => props.setLength(event.target.value)}
                />
            </label>
            <button className="control-button" onClick={props.createSquare}>
                создать стену
            </button>
        </>
    );
}
