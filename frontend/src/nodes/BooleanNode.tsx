import { useState } from "react";
import NodeHandles from "./NodeHandles";

type BooleanNodeProps = {
  id: string;
  data: {
    value?: boolean;
  };
};

export default function BooleanNode({
  id,
  data,
}: BooleanNodeProps) {
  const [value, setValue] = useState(data?.value ?? true);

  return (
    <>
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Is it?
          </label>

          <select
            value={String(value)}
            onChange={(e) => setValue(e.target.value === "true")}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>

      <NodeHandles
        id={id}
        inputs={[]}
        outputs={["value"]}
      />
    </>
  );
}