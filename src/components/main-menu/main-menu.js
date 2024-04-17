export default function Menu(props) {
    return (
        <>
            <button onClick={props.createSquare} >квадрат</button>
            <button onClick={props.clear} >очистить</button>
            <button onClick={props.send} >отправить данные</button>
        </>
    );
}
