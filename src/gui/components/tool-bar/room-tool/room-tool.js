import "./style.scss";

export default function RoomTool(props) {
    return (
        <>
            <span className="room-tool">
                <label className="control-input">
                    длина
                    <input
                        value={props.length}
                        onChange={(event) => {
                            console.log(event.target.value);
                            props.setLength(event.target.value);
                        }}
                    />
                </label>
                <label className="control-input">
                    ширина
                    <input
                        value={props.width}
                        onChange={(event) => props.setWidth(event.target.value)}
                    />
                </label>
                <button className="control-button" onClick={props.createSquare}>
                    создать комнату
                </button>
            </span>
        </>
    );
}
