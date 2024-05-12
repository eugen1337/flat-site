import { Rect, Text } from "react-konva";

export default function Room({ square, setCoords, coords }) {
    return (
        <>
            <Rect
                id={square.id.toString()}
                draggable
                width={square.length / 2}
                height={square.width / 2}
                stroke="black"
                x={coords[0]}
                y={coords[1]}
                onDragEnd={(e) => {
                    setCoords([e.target.x(), e.target.y()], square.id);
                }}
            />
            <Text
                text={square.length + "см"}
                x={coords[0] + square.length / 4 - 10}
                y={coords[1] - 15}
                align="center"
                verticalAlign="middle"
            />
            <Text
                text={square.length + "см"}
                x={coords[0] + square.length / 4 - 10}
                y={coords[1] + square.width / 2 + 10}
                align="center"
                verticalAlign="middle"
            />
            <Text
                text={square.width + "см"}
                x={coords[0] - 35}
                y={coords[1] + square.width / 4}
                align="center"
                verticalAlign="middle"
            />
            <Text
                text={square.width + "см"}
                x={coords[0] + square.length / 2 + 5}
                y={coords[1] + square.width / 4}
                align="center"
                verticalAlign="middle"
            />
            <Text
                text={"S²:" + square.area + "м²"}
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
