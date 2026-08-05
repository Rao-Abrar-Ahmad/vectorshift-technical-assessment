// config.ts
import { NodeConfig, NodeType } from "../lib/types";
import BooleanNode from "../nodes/BooleanNode";
import ConditionNode from "../nodes/ConditionalNode";
import DateNode from "../nodes/DateNode";
import DelayNode from "../nodes/DelayNode";
import { InputNode } from "../nodes/InputNode";
import LLMNode from "../nodes/LLMNode";
import MergeNode from "../nodes/MergeNode";
import OutputNode from "../nodes/OutputNode";
import TextNode from "../nodes/TextNode";

export const nodeConfigs: Partial<Record<NodeType, NodeConfig>> = {
  text: {
    label: "Text",
    icon: "text",
    component: (props) => <TextNode {...props} />,
  },
  customInput: {
    label: "Input",
    icon: "customInput",
    component: (props) => <InputNode {...props} />,
  },
  condition: {
    label: "Condition",
    icon: "condition",
    component: (props) => <ConditionNode {...props} />,
  },
  boolean: {
    label: "Boolean",
    icon: "boolean",
    component: BooleanNode,
  },
  delay: {
    label: "Delay",
    icon: "delay",
    component: DelayNode,
  },
  merge: {
  label: "Merge",
  icon: "merge",
  component: MergeNode,
},
date: {
  label: "Date",
  icon: "date",
  component: DateNode,
},
  llm: {
    label: "LLM",
    icon: "llm",
    component: (props) => <LLMNode {...props} />,
  },
  customOutput: {
    label: "Output",
    icon: "customOutput",
    component: (props) => <OutputNode {...props} />,
  },
};
