import { Handle, Position } from "reactflow";

type NodeHandlesProps = {
  id: string;
  inputs?: string[];
  outputs?: string[];
};

export default function NodeHandles({
  id,
  inputs = [],
  outputs = [],
}: NodeHandlesProps) {
  return (
    <>
      {/* Input Handles */}
      {inputs.map((handleId, index) => (
        <Handle
          key={handleId}
          type="target"
          position={Position.Left}
          id={`${id}-${handleId}`}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((handleId, index) => (
        <Handle
          key={handleId}
          type="source"
          position={Position.Right}
          id={`${id}-${handleId}`}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </>
  );
}