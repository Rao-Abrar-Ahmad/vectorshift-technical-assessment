import { useState } from "react";
import NodeHandles from "./NodeHandles";

type DelayNodeProps = {
  id: string;
  data: {
    delay?: number;
  };
};

export default function DelayNode({
  id,
  data,
}: DelayNodeProps) {
  const [delay, setDelay] = useState(data?.delay ?? 1000);

  return (
    <>
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Delay (ms)
          </label>

          <input
            type="number"
            min={0}
            step={100}
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            placeholder="1000"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <p className="text-xs text-slate-500">
          Waits before passing the input to the next node.
        </p>
      </div>

      <NodeHandles
        id={id}
        inputs={["input"]}
        outputs={["output"]}
      />
    </>
  );
}