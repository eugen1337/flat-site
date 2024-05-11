import { useState } from "react";
import "./style.scss";

export default function ToolBar(props) {
    const [tools, setTools] = useState(["room", "wall"]);

    return (
        <span className="tool-bar-wrapper">
            <label className="tools-label">Tools</label>
            <select
                value={props.usedTool}
                onChange={(e) => props.setTool(e.target.value)}
                className="tool-bar"
            >
                {tools.map((tool) => (
                    <option key={tool} value={tool}>
                        {tool}
                    </option>
                ))}
            </select>
            <span className="used-tool">{}</span>
            <button className="control-button" onClick={props.clear}>
                clear
            </button>
            <button className="control-button" onClick={props.create}>
                create
            </button>
        </span>
    );
}
