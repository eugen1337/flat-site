import { Rect, Text } from "react-konva";
import { useState } from "react";

export default function Room(props) {
    const [coords, setCoords] = useState([400, 100]);

    return (
        <>
            <Rect
                id={props.square.id.toString()}
                draggable
                width={props.square.length / 2}
                height={props.square.width / 2}
                stroke="black"
                x={coords[0]}
                y={coords[1]}
                onDragEnd={(e) => {
                    setCoords([e.target.x(), e.target.y()]);
                }}
            />
            <Text
                text={props.square.length + "см"}
                x={coords[0] + props.square.length / 4 - 10}
                y={coords[1] - 15}
                align="center"
                verticalAlign="middle"
            />
            <Text
                text={props.square.length + "см"}
                x={coords[0] + props.square.length / 4 - 10}
                y={coords[1] + props.square.width / 2 + 10}
                align="center"
                verticalAlign="middle"
            />
            <Text
                text={props.square.width + "см"}
                x={coords[0] - 35}
                y={coords[1] + props.square.width / 4}
                align="center"
                verticalAlign="middle"
            />
            <Text
                text={props.square.width + "см"}
                x={coords[0] + props.square.length / 2 + 5}
                y={coords[1] + props.square.width / 4}
                align="center"
                verticalAlign="middle"
            />
            <Text
                text={"S²:" + props.square.area + "м²"}
                x={coords[0] + 10}
                y={coords[1] + 10}
                fill="#00003d"
                fontStyle={"bold"}
                fontSize={15}
                align="center"
                verticalAlign="middle"
            />
        </>
    );
}
