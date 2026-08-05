import { useState } from "react";
import NodeHandles from "./NodeHandles";

type InputNodeProps = {
  id: string;
  data: {
    inputName?: string;
    inputType?: "Text" | "File";
  };
};

export function InputNode({ id, data }: InputNodeProps) {
  const [inputName, setInputName] = useState(
    data?.inputName ?? id.replace("customInput-", "input_"),
  );

  const [inputType, setInputType] = useState<"Text" | "File">(
    data?.inputType ?? "Text",
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
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Input name"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Type
          </label>

          <select
            value={inputType}
            onChange={(e) =>
              setInputType(e.target.value as "Text" | "File")
            }
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
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