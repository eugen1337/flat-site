import "./style.scss";

export default function RoomTool(props) {
    return (
        <span className="tool">
            <label className="control-input">
                длина(в см)
                <input
                    value={props.length}
                    onChange={(event) => {
                        props.setLength(event.target.value);
                    }}
                    type="number"
                    min={100}
                    max={30000}
                    required
                />
            </label>
            <label className="control-input">
                ширина(в см)
                <input
                    value={props.width}
                    onChange={(event) => props.setWidth(event.target.value)}
                    type="number"
                    min={100}
                    max={30000}
                    required
                />
            </label>
            <button className="control-button" onClick={props.createSquare}>
                создать комнату
            </button>
            <button className="control-button" onClick={props.onClose}>
                отмена
            </button>
        </span>
    );
}
