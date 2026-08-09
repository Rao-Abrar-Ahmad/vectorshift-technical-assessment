import { NodeProps } from "reactflow";
import NodeIcon from "./NodeIcon";
import { NodeConfig } from "../lib/types";
import BaseNodeHeader from "./BaseNodeHeader";

type BaseNodeProps = NodeProps & {
  config: NodeConfig;
  children: React.ReactNode;
};

export default function BaseNode({
  id,
  data,
  config,
}: BaseNodeProps) {
  const Component = config.component;
  return (
    <div className="relative min-w-[280px] rounded-xl border border-slate-200 bg-white shadow-md transition-shadow hover:shadow-lg">
      {/* Header */}
      <BaseNodeHeader id={id} config={config}/>

      {/* Body */}
      <div className="space-y-2 p-2">
        <Component id={id} data={data} />
      </div>
    </div>
  );
}
