import { FC } from "react";
import "./style.scss";

type Props = {
  load: () => void;
  usedTool: string;
  setTool: (value: string) => void;
  clear: () => void;
  create: () => void;
};

const ToolBar: FC<Props> = ({ load, usedTool, setTool, clear, create }) => {
  return (
    <div className="tool-bar-wrapper">
      <label className="tools-label">Tools</label>
      <select
        value={usedTool}
        onChange={(e) => setTool(e.target.value)}
        className="tool-bar"
      >
        {["room", "wall"].map((tool: string) => (
          <option key={tool} value={tool}>
            {tool}
          </option>
        ))}
      </select>
      <span className="used-tool">{}</span>
      <button className="control-button" onClick={clear}>
        clear
      </button>
      <button className="control-button" onClick={create}>
        create
      </button>
      <button className="control-button" onClick={load}>
        load
      </button>
    </div>
  );
};

export { ToolBar };
