import { Stage, Layer } from "react-konva";
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
  useGetArea,
  useSetPlan,
  useGetFlatList,
  usePlanListener,
} from "../../../state/api";

import { useWs } from "../../../transport/ws";
import Room from "../room/room";
import { ToolBar } from "../tool-bar/tool-bar";
import MessageBox from "../message-box/message-box";

import "./style.scss";
import { ProjectsBar } from "../projects-bar/projects-bar";

export default function Canvas() {
  const [squares, setSquares] = useState([]);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [time, setTime] = useState("");

  // tool bar
  const [isVisible, setIsVisible] = useState(true);

  const [totalArea, setTotalArea] = useState(0);
  const [totalPerimeter, setTotalPerimeter] = useState(0);
  const [coords, setCoords] = useState({});

  const [isToolActive, setIsToolActive] = useState(false);
  const [usedTool, setUsedTool] = useState("room");

  // baseurl
  const [ready, val, sendWs] = useWs(
    "ws://localhost:8080/flat-app-1.0-SNAPSHOT/ws"
  );

  const id = useGetId();
  const incrementId = useIncrementId();

  const sendPlan = useSendPlan();
  const setRoom = useRoomDispatcher();
  const setPlan = useSetPlan();
  const getArea = useGetArea();
  const getFlatList = useGetFlatList();

  // loaded plan
  const plan = usePlanListener();
  const login = useLoginListener();

  const defaultCoords = [400, 100];

  useEffect(() => {
    if (ready) {
      sendWs(login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, sendWs]);

  useEffect(() => {
    getFlatList();
  });

  useEffect(() => {
    if (ready) {
      console.log(val);
      const result = JSON.parse(val);
      setTime(result.date ?? "");

      if (result.area && result.perimeter) {
        createSquare(result.area, result.perimeter);
        setTotalArea(totalArea + +result.area.replace(",", "."));
        setTotalPerimeter(totalPerimeter + +result.perimeter.replace(",", "."));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val]);

  const createSquare = (area, perimeter) => {
    const type = length === width ? "square" : "rectangle";
    incrementId();
    setSquares([
      ...squares,
      {
        id,
        length,
        width,
        area,
        perimeter,
        type,
      },
    ]);
    setRoom(id, length, width, area, perimeter, type);
    setCoords({ ...coords, [id]: defaultCoords });

    setLength(0);
    setWidth(0);
    setIsToolActive(false);
  };

  const createWall = () => {
    setIsToolActive(false);
  };

  const clear = () => {
    setLength(0);
    setWidth(0);
    setSquares([]);
    setIsToolActive(false);
    setTotalArea(0);
    setTotalPerimeter(0);
  };

  const send = () => {
    console.log("send()");
    const rooms = [...squares];
    const data = {
      rooms: rooms.map((room) => {
        return { ...room, coords: coords[room.id] };
      }),
      totalArea: totalArea.toString().replace(".", ","),
      totalPerimeter: totalPerimeter.toString().replace(".", ","),
    };
    console.log(data);
    setPlan(data);
    sendPlan();
    getFlatList();
  };

  const load = () => {
    console.log(plan);
    setTotalArea(plan.totalArea);
    setTotalPerimeter(plan.totalPerimeter);
    incrementId();
    setSquares(
      plan.rooms.map((room) => {
        const roomId = room.coords[0] + room.coords[1] + id;
        setCoords({ ...coords, [roomId]: [+room.coords[0], +room.coords[1]] });
        return { ...room, id: roomId };
      })
    );
  };

  const create = async () => {
    setIsToolActive(true);
  };

  const changeCoords = ([x, y], id) => {
    setCoords({ ...coords, [id]: [x, y] });
  };

  return (
    <>
      {isVisible && (
        <Stage width={window.innerWidth - 50} height={window.innerHeight - 50}>
          <Layer>
            <Html>
              <ToolBar
                usedTool={usedTool}
                clear={clear}
                setTool={setUsedTool}
                create={create}
                load={() => {
                  setIsVisible(false);
                }}
              ></ToolBar>

              <MessageBox
                totalArea={totalArea}
                totalPerimeter={totalPerimeter}
                time={time}
              ></MessageBox>
            </Html>
            {squares.map((square) => (
              <Room
                key={square.id}
                square={square}
                coords={coords[square.id]}
                setCoords={changeCoords}
              ></Room>
            ))}
          </Layer>
        </Stage>
      )}
      {usedTool === "room" && isToolActive && (
        <RoomTool
          createSquare={() => getArea(length, width)}
          length={length}
          width={width}
          setLength={setLength}
          setWidth={setWidth}
          onClose={() => {
            setLength(0);
            setWidth(0);
            setIsToolActive(false);
          }}
        ></RoomTool>
      )}
      {usedTool === "wall" && isToolActive && (
        <WallTool
          createWall={createWall}
          length={length}
          setLength={setLength}
          onClose={() => {
            setLength(0);
            setWidth(0);
            setIsToolActive(false);
          }}
        ></WallTool>
      )}
      {!isVisible && (
        <ProjectsBar setIsVisible={setIsVisible} load={load}></ProjectsBar>
      )}
      {squares.length > 0 && (
        <button className="send-button" onClick={send}>
          Save data
        </button>
      )}
    </>
  );
}
