import { Stage, Layer } from "react-konva";
import Menu from "../main-menu/main-menu";
import { useState, useEffect } from "react";
import {
    useGetId,
    useIncrementId,
    useRoomDispatcher,
    useSendPlan,
} from "../../state/api";

import { useWs } from "../../ws";
import Room from "../room/room";

export default function Canvas() {
    const [squares, setSquares] = useState([]);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);

    // baseurl
    const [ready, val, sendWs] = useWs(
        "ws://localhost:8080/" + "flat-app-1.0-SNAPSHOT/v1" + "/counter"
    );

    useEffect(() => {
        if (ready) {
            sendWs("test message");
        }
    }, [ready, sendWs]);

    const id = useGetId();
    const incrementId = useIncrementId();

    const sendPlan = useSendPlan();

    const setRoom = useRoomDispatcher();

    const createSquare = () => {
        incrementId();
        console.log("id = " + id);
        setSquares([
            ...squares,
            {
                id: id,
                length: length,
                width: width,
            },
        ]);
    };

    const clear = () => {
        setLength(0);
        setWidth(0);
        setSquares([]);
    };

    const send = () => {
        setRoom({
            type: "square",
            level: 0,
            wallsLength: [length, length, width, width],
        });
        sendPlan();
    };

    return (
        <>
            <Menu
                createSquare={createSquare}
                clear={clear}
                send={send}
                length={length}
                width={width}
                setLength={setLength}
                setWidth={setWidth}
            ></Menu>
            <label>messages: {val}</label>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {squares.map((square) => (
                        <Room key={square.id} square={square}></Room>
                    ))}
                </Layer>
            </Stage>
        </>
    );
}
