import "./style.css";

export default function Menu(props) {
    

    return (
        <>
            
            <label className="control-input">
                длина комнаты 
                <input
                    value={props.length}
                    onChange={(event) => props.setLength(event.target.value)}
                />
            </label>
            <label className="control-input">
                ширина комнаты
                <input
                    value={props.width}
                    onChange={(event) => props.setWidth(event.target.value)}
                />
            </label>
            <button className="control-button" onClick={props.createSquare}>
                создать прямоугольник
            </button>
            <br/>

        </>
    );
}
