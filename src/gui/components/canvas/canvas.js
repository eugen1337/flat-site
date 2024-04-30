import { Stage, Layer } from "react-konva";
import Menu from "../main-menu/main-menu";
import { Html } from "react-konva-utils";
import { useState, useEffect } from "react";

import {
    useGetId,
    useIncrementId,
    useLoginListener,
    useRoomDispatcher,
    useSendPlan,
} from "../../../state/api";

import {useWs} from "../../../transport/ws"
import Room from "../room/room";
import ToolBar from "../tool-bar/tool-bar";
import MessageBox from "../message-box/message-box";

export default function Canvas() {
    const [squares, setSquares] = useState([]);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);

    const [usedTool, setUsedTool] = useState("room");

    const login = useLoginListener();

    // baseurl
    const [ready, val, sendWs] = useWs(
        "ws://localhost:8080/" + "flat-app-1.0-SNAPSHOT" + "/ws"
    );

    useEffect(() => {
        if (ready) {
            sendWs(login);
        }
    }, [ready, sendWs]);

    const id = useGetId();
    const incrementId = useIncrementId();

    const sendPlan = useSendPlan();
    const setRoom = useRoomDispatcher();

    const createSquare = () => {
        incrementId();
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
            length,
            width,
        });
        sendPlan();
    };

    return (
        <>
            <Menu
                createSquare={createSquare}
                length={length}
                width={width}
                setLength={setLength}
                setWidth={setWidth}
            ></Menu>

            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Html>
                        <ToolBar
                            usedTool={usedTool}
                            clear={clear}
                            send={send}
                            setTool={setUsedTool}
                        ></ToolBar>
                        <MessageBox message={val}></MessageBox>
                    </Html>
                    {squares.map((square) => (
                        <Room key={square.id} square={square}></Room>
                    ))}
                </Layer>
            </Stage>
        </>
    );
}
