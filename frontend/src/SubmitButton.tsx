// submit.tsx

import NodeIcon from "./nodes/NodeIcon";

const SubmitButton = () => {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <button
        type="submit"
        className="
          group
          flex
          items-center
          gap-2
          rounded-md
          bg-gray-200
          px-4
          py-2
          text-sm
          font-semibold
          text-black
          shadow
          shadow-gray-500/20
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:bg-gray-300
          hover:shadow-sm
          active:translate-y-0
          active:scale-95
        "
      >
        <NodeIcon type="customOutput" />
        <span>Submit Pipeline</span>
      </button>
    </div>
  );
};

export default SubmitButton;