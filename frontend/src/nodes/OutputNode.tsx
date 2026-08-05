import { useState } from "react";
import NodeHandles from "./NodeHandles";

type OutputType = "Text" | "Image";

type OutputNodeProps = {
  id: string;
  data: {
    outputName?: string;
    outputType?: OutputType;
  };
};

export default function OutputNode({ id, data }: OutputNodeProps) {
  const [outputName, setOutputName] = useState(
    data?.outputName ?? id.replace("customOutput-", "output_"),
  );

  const [outputType, setOutputType] = useState<OutputType>(
    data?.outputType ?? "Text",
  );

  return (
    <>
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Name
          </label>

          <input
            type="text"
            value={outputName}
            onChange={(e) => setOutputName(e.target.value)}
            placeholder="Output name"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Type
          </label>

          <select
            value={outputType}
            onChange={(e) =>
              setOutputType(e.target.value as OutputType)
            }
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
      </div>

      <NodeHandles
        id={id}
        inputs={["value"]}
        outputs={[]}
      />
    </>
  );
}