import { NodeConfig } from "../lib/types";
import NodeIcon from "./NodeIcon";
import { useStore } from "../store";

type BaseNodeHeaderProps = {
  id: string;
  config: NodeConfig;
};

const BaseNodeHeader = ({
  id,
  config,
}: BaseNodeHeaderProps) => {
  const deleteNode = useStore((state) => state.deleteNode);

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    deleteNode(id);
  };

  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
      <div className="flex items-center gap-2">
        <NodeIcon type={config.icon} />

        <span className="text-sm font-medium text-slate-800 leading-none">
          {config.label}
        </span>
      </div>

      <button
        type="button"
        onClick={handleDelete}
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-md
          text-slate-400
          transition-colors
          hover:bg-red-50
          hover:text-red-500
        "
        title="Delete node"
        aria-label={`Delete ${config.label} node`}
      >
        <NodeIcon type={'trash'} />
      </button>
    </div>
  );
};

export default BaseNodeHeader;