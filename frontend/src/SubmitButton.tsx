// submit.tsx

import { useState } from "react";
import NodeIcon from "./nodes/NodeIcon";
import { useStore } from "./store";

const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit pipeline.");
      }

      const result = await response.json();

      alert(
        `Pipeline Analysis

        Nodes: ${result.num_nodes}
        Edges: ${result.num_edges}
        Valid DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}`,
      );
    } catch (error) {
      console.error(error);

      alert("Unable to submit the pipeline.");
    } finally {
      setLoading(false);
    }
  };

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
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? (
          <NodeIcon type="loading" />
        ) : (
          <NodeIcon type="customOutput" />
        )}
        <span>{loading ? "Submitting..." : "Submit Pipeline"}</span>
      </button>
    </div>
  );
};

export default SubmitButton;
