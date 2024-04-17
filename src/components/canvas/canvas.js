import { Stage, Layer, Rect } from "react-konva";
import Menu from "../main-menu/main-menu";
import { useState } from "react";
import {
    useGetId,
    useIncrementId,
    useRoomDispatcher,
    useSendPlan,
} from "../../state/api";

export default function Canvas() {
    const [squares, setSquares] = useState([]);

    const id = useGetId();
    const incrementId = useIncrementId();

    const sendPlan = useSendPlan();

    const setRoom = useRoomDispatcher();

    console.log(squares);

    const createSquare = () => {
        incrementId();
        console.log("id = " + id);
        setSquares([...squares, id]);
    };

    const clear = () => {
        setSquares([]);
    };

    const send = () => {
        setRoom({ type: "square", level: 0, wallsLength: [2, 2, 4, 4] });
        sendPlan();
    };

    return (
        <>
            <Menu createSquare={createSquare} clear={clear} send={send}></Menu>
            <label>messages: none</label>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {squares.map((squareId) => (
                        <Rect
                            draggable
                            width={50}
                            height={50}
                            id={squareId.toString()}
                            stroke="black"
                        />
                    ))}
                </Layer>
            </Stage>
        </>
    );
}
