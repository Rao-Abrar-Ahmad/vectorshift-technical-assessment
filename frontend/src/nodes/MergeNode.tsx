import NodeHandles from "./NodeHandles";

type MergeNodeProps = {
  id: string;
};

export default function MergeNode({ id }: MergeNodeProps) {
  return (
    <>
      <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-3 text-center">
        <p className="text-sm font-medium text-slate-700">
          Merge Inputs
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Combines two inputs into a single output.
        </p>
      </div>

      <NodeHandles
        id={id}
        inputs={["inputA", "inputB"]}
        outputs={["output"]}
      />
    </>
  );
}