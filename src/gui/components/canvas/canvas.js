import { Stage, Layer } from "react-konva";
import Menu from "../main-menu/main-menu";
import { Html } from "react-konva-utils";
import { useState, useEffect } from "react";

import RoomTool from "../tool-bar/room-tool/room-tool.js";
import WallTool from "../tool-bar/wall-tool/wall-tool.js";

import {
    useGetId,
    useIncrementId,
    useLoginListener,
    useRoomDispatcher,
    useSendPlan,
} from "../../../state/api";

import { useWs } from "../../../transport/ws";
import Room from "../room/room";
import ToolBar from "../tool-bar/tool-bar";
import MessageBox from "../message-box/message-box";

import "./style.scss";

export default function Canvas() {
    const [squares, setSquares] = useState([]);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [time, setTime] = useState("");
    const [area, setArea] = useState("");

    const [createTool, setCreateTool] = useState(() => {});
    const [usedTool, setUsedTool] = useState("room");

    // baseurl
    const [ready, val, sendWs] = useWs(
        "ws://localhost:8080/" + "flat-app-1.0-SNAPSHOT" + "/ws"
    );

    const id = useGetId();
    const incrementId = useIncrementId();

    const sendPlan = useSendPlan();
    const setRoom = useRoomDispatcher();

    const login = useLoginListener();

    useEffect(() => {
        if (ready) {
            sendWs(login);
        }
    }, [ready, sendWs]);

    useEffect(() => {
        if (ready) {
            console.log(val);
            const result = JSON.parse(val);
            if (result.date) setTime(result.date);
            if (result.area) setArea(result.area);
        }
    }, [val]);

    const createSquare = () => {
        incrementId();
        setSquares([
            ...squares,
            {
                id,
                length,
                width,
            },
        ]);
        setCreateTool(() => {});
    };

    const clear = () => {
        setLength(0);
        setWidth(0);
        setSquares([]);
    };

    const send = () => {
        console.log("send()");
        setRoom({
            type: "square",
            level: 0,
            length,
            width,
        });
        sendPlan();
    };

    const create = async () => {
        if (usedTool === "room") setCreateTool();
    };

    return (
        <>
            <Stage
                width={window.innerWidth - 50}
                height={window.innerHeight - 50}
            >
                <Layer>
                    <Html>
                        <ToolBar
                            usedTool={usedTool}
                            clear={clear}
                            setTool={setUsedTool}
                            create={create}
                        ></ToolBar>
                        <MessageBox time={time}></MessageBox>
                    </Html>
                    {squares.map((square) => (
                        <Room key={square.id} square={square}></Room>
                    ))}
                </Layer>
            </Stage>
            {usedTool === "room" && (
                <RoomTool
                    createSquare={createSquare}
                    length={length}
                    width={width}
                    setLength={setLength}
                    setWidth={setWidth}
                ></RoomTool>
            )}
            <button className="send-button" onClick={send}>
                Save data
            </button>
        </>
    );
}
