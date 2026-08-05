import { NodeProps } from "reactflow";
import NodeIcon from "./NodeIcon";
import { NodeConfig } from "../lib/types";

type BaseNodeProps = NodeProps & {
  config: NodeConfig;
  children: React.ReactNode;
};

export default function BaseNode({
  id,
  data,
  config,
}: BaseNodeProps) {
  const { icon, label } = config;
  const Component = config.component;
  return (
    <div className="relative min-w-[280px] rounded-xl border border-slate-200 bg-white shadow-md transition-shadow hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <NodeIcon type={icon} />

        <span className="font-medium text-sm text-slate-800">{label}</span>
      </div>

      {/* Body */}
      <div className="space-y-2 p-2">
        <Component id={id} data={data} />
      </div>
    </div>
  );
}
