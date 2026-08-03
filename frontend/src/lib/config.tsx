// config.ts
import { NodeConfig, NodeType } from "../lib/types";
import { InputNode } from "../nodes/InputNode";
import LLMNode from "../nodes/LLMNode";
import OutputNode from "../nodes/OutputNode";
import TextNode from "../nodes/TextNode";

export const nodeConfigs: Partial<Record<NodeType, NodeConfig>> = {
  text: {
    label: "Text",
    icon: "text",
    component: (props) => <TextNode {...props}/>,
    handles: {
      inputs: [],
      outputs: ["output"],
    },
  },
  customInput: {
    label: "Input",
    icon: "customInput",
    component: (props) => <InputNode {...props}/>,
    handles: {
      inputs: [],
      outputs: ["output"],
    },
  },
  llm: {
    label: "LLM",
    icon: "llm",
    component: (props) => <LLMNode {...props}/>,
    handles: {
      inputs: ["system", "prompt"],
      outputs: ["response"],
    },
  },
  customOutput: {
    label: "Output",
    icon: "customOutput",
    component: (props) => <OutputNode {...props}/>,
    handles: {
      inputs: ["value"],
      outputs: [],
    },
  },
};
