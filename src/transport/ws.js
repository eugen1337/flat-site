import { useState, useRef, useEffect } from "react";

export const useWs = (url) => {
    const [isReady, setIsReady] = useState(false);
    const [val, setVal] = useState("");

    const ws = useRef(null);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => setIsReady(true);
        socket.onclose = () => setIsReady(false);
        socket.onmessage = (event) => setVal(event.data);

        ws.current = socket;

        return () => {
            socket.close();
        };
    }, []);

    // bind is needed to make sure `send` references correct `this`
    return [isReady, val, ws.current?.send.bind(ws.current)];
};
