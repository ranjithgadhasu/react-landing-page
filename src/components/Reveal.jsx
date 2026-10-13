import { cn } from "../utils/cn";

const TagMap = {
  div: "div",
  span: "span",
  li: "li",
};

export default function Reveal({ children, className, delay = 0, variant = "up", as = "div" }) {
  const Tag = TagMap[as] || "div";
  return (
    <Tag
      className={cn(
        "reveal",
        variant === "left" && "reveal-left",
        variant === "right" && "reveal-right",
        variant === "scale" && "reveal-scale",
        className
      )}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
