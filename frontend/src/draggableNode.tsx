// draggableNode.tsx

import { NodeType } from "./lib/types";
import NodeIcon from "./nodes/NodeIcon";

type DraggableNodeProps = {
  type: NodeType;
  label: string;
};
export const DraggableNode = ({ type, label }: DraggableNodeProps) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={
        type +
        `  group
        flex
        h-9
        cursor-grab
        select-none
        items-center
        gap-2
        rounded-md
        border
      
        bg-white
        px-4
        text-sm
        font-medium
        text-slate-700
        transition-all
        duration-200
        border-black-100
        hover:border-blue-200
        hover:bg-blue-50
        hover:text-blue-600
        active:scale-95
        active:cursor-grabbing`
      }
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.currentTarget.style.cursor = "grab")}
      draggable
    >
      <span className="text-slate-500 transition-colors group-hover:text-blue-600">
        <NodeIcon type={type} />
      </span>
      <span>{label}</span>
    </div>
  );
};
