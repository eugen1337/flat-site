import "./style.scss";

export default function RoomTool({
    createSquare,
    length,
    setLength,
    width,
    setWidth,
    onClose,
}) {
    return (
        <span
            className="tool"
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    createSquare();
                }
            }}
        >
            <label className="control-input">
                длина(в см)
                <input
                    value={length}
                    onChange={(event) => {
                        setLength(event.target.value);
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
                    value={width}
                    onChange={(event) => setWidth(event.target.value)}
                    type="number"
                    min={100}
                    max={30000}
                    required
                />
            </label>
            <button className="control-button" onClick={createSquare}>
                создать комнату
            </button>
            <button className="control-button" onClick={onClose}>
                отмена
            </button>
        </span>
    );
}
