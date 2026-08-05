import NodeHandles from "./NodeHandles";

type LLMNodeProps = {
  id: string;
  data: {
    model?: string;
  };
};

export default function LLMNode({ id, data }: LLMNodeProps) {
  return (
    <>
      <div className="space-y-3 p-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Model
          </p>

          <div className="mt-1 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
            {data?.model ?? "GPT-4"}
          </div>
        </div>

        <p className="text-xs leading-relaxed text-slate-500">
          Receives a system prompt and user prompt, then produces a response.
        </p>
      </div>

      <NodeHandles
        id={id}
        inputs={["system", "prompt"]}
        outputs={["response"]}
      />
    </>
  );
}