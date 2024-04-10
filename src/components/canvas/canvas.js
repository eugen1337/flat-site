import { Stage, Layer, Rect, Circle } from "react-konva";

export default function Canvas() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Rect draggable width={50} height={50} fill="red" />
                <Circle draggable x={200} y={200} stroke="black" radius={50} />
            </Layer>
        </Stage>
    );
}
