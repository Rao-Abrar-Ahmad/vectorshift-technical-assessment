export type NodeType = "text" | "llm" | "customInput" | "customOutput";
export const NodeTypesArray: readonly NodeType[] = [
  "text",
  "llm",
  "customInput",
  "customOutput",
] as const;

export interface NodeConfig {
  label: string;
  icon: NodeType;
  component: React.ComponentType<any>;
  handles: {
    inputs: string[];
    outputs: string[];
  };
}