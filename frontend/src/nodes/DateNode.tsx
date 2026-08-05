import { useState } from "react";
import NodeHandles from "./NodeHandles";

type DateNodeProps = {
  id: string;
  data: {
    date?: string;
  };
};

export default function DateNode({
  id,
  data,
}: DateNodeProps) {
  const [date, setDate] = useState(
    data?.date ?? new Date().toISOString().split("T")[0]
  );

  return (
    <>
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <NodeHandles
        id={id}
        inputs={[]}
        outputs={["date"]}
      />
    </>
  );
}