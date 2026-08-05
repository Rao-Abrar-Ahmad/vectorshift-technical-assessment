import { useRef, useLayoutEffect, useState, useMemo } from "react";
import { extractVariables } from "../lib/parseVariables";
import NodeHandles from "./NodeHandles";

type Props = {
  id: string;
  data: any;
};

export default function TextNode({ id, data }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState(data?.text || "");
  const measureRef = useRef<HTMLSpanElement>(null);

  const variables = useMemo(() => extractVariables(text), [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight}px`;

    // Auto width
    if (measureRef.current) {
      textarea.style.width = `${Math.max(
        320,
        measureRef.current.offsetWidth + 24,
      )}px`;
    }
  }, [text]);
  return (
    <>
      <span ref={measureRef} className="invisible absolute whitespace-pre">
        {text}
      </span>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        className="resize-none !mt-0 overflow-hidden rounded-md border border-slate-300 p-2 outline-none max-w-[320px] w-full"
        rows={1}
      />
      {/* Dynamic variable preview */}
      {/* {variables.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1 border-t border-slate-200 pt-2">
          {variables.map((variable) => (
            <span
              key={variable}
              className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600"
            >
              {variable}
            </span>
          ))}
        </div>
      )} */}

      <NodeHandles id={id} inputs={variables} outputs={["output"]} />
    </>
  );
}
