export type NodeType = "text" | "llm" | "customInput" | "customOutput" | "condition" | "boolean" | "delay" | "merge" | "date";
export const NodeTypesArray: readonly NodeType[] = [
  "text",
  "llm",
  "customInput",
  "customOutput",
  "condition",
  "boolean",
  "delay",
  "merge",
  "date"
] as const;

export interface NodeConfig {
  label: string;
  icon: NodeType;
  component: React.ComponentType<any>;
}