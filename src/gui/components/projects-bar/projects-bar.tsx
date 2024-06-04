import "./style.scss";
import { useFlatListListener, useGetFlat } from "../../../state/api";
import { FC, useState } from "react";

type Props = { setIsVisible: (flag: boolean) => void };

const ProjectsBar: FC<Props> = ({ setIsVisible }) => {
  const flatList = useFlatListListener();
  const getFlat = useGetFlat();
  const [id, setId] = useState<string>(flatList[0]);
  return (
    <div className="bar">
      <label className="tools-label">Load project</label>
      <select onChange={(e) => setId(e.target.value)} className="tool-bar">
        {flatList.map((flatId: string) => (
          <option key={flatId} value={flatId}>
            {flatId}
          </option>
        ))}
      </select>
      <span className="used-tool">{}</span>
      <button
        className="control-button"
        onClick={() => {
          setIsVisible(true);
        }}
      >
        back
      </button>
      <button
        className="control-button"
        onClick={() => {
          getFlat(id);
          setIsVisible(true);
        }}
      >
        load
      </button>
    </div>
  );
};

export { ProjectsBar };
