// toolbar.tsx

import { DraggableNode } from "./draggableNode";
import { nodeConfigs } from "./lib/config";
import { NodeType } from "./lib/types";

export const PipelineToolbar = () => {
  return (
    <header className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 p-2 shadow-xs bg-white/60">
        {Object.entries(nodeConfigs).map(([type, config]) => (
          <DraggableNode
            key={type}
            type={type as NodeType}
            label={config.label}
          />
        ))}
      </div>
    </header>
  );
};