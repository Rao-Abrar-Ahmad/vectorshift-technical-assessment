import { useState } from "react";
import NodeHandles from "./NodeHandles";

type ConditionNodeProps = {
  id: string;
  data: {
    value?: string;
    operator?: string;
    compare?: string;
  };
};

export default function ConditionNode({
  id,
  data,
}: ConditionNodeProps) {
  const [value, setValue] = useState(data?.value ?? "");
  const [operator, setOperator] = useState(data?.operator ?? "==");
  const [compare, setCompare] = useState(data?.compare ?? "");

  return (
    <>
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Value
          </label>

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="value"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Operator
          </label>

          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="==">Equal </option>
            <option value="!=">Not Equal </option>
            <option value=">">Greater Than</option>
            <option value="<">Less Than</option>
            <option value=">=">Greater Than or Equal</option>
            <option value="<=">Less Than or Equal</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Compare With
          </label>

          <input
            value={compare}
            onChange={(e) => setCompare(e.target.value)}
            placeholder="compare value"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <NodeHandles
        id={id}
        inputs={["value", "compare"]}
        outputs={["true", "false"]}
      />
    </>
  );
}