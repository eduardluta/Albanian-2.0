import { Fragment, type ReactNode } from "react";

type Tag = "em" | "accent" | "red" | "strike";
type Node = string | { tag: Tag; children: Node[] };

const TAGS = new Set<Tag>(["em", "accent", "red", "strike"]);
const isTag = (s: string): s is Tag => TAGS.has(s as Tag);

function parse(text: string): Node[] {
  const out: Node[] = [];
  let i = 0;
  while (i < text.length) {
    const start = text.indexOf("{", i);
    if (start === -1) {
      out.push(text.slice(i));
      break;
    }
    if (start > i) out.push(text.slice(i, start));
    const colon = text.indexOf(":", start);
    const space = text.indexOf(" ", start);
    const close = text.indexOf("}", start);
    // Bail if no colon, or colon comes after a space/close.
    if (colon === -1 || (space !== -1 && space < colon) || (close !== -1 && close < colon)) {
      out.push("{");
      i = start + 1;
      continue;
    }
    const tag = text.slice(start + 1, colon);
    if (!isTag(tag)) {
      out.push("{");
      i = start + 1;
      continue;
    }
    // Find matching close brace, accounting for nesting.
    let depth = 1;
    let j = colon + 1;
    for (; j < text.length; j++) {
      if (text[j] === "{") depth++;
      else if (text[j] === "}") {
        depth--;
        if (depth === 0) break;
      }
    }
    if (depth !== 0) {
      out.push(text.slice(start));
      break;
    }
    const inner = text.slice(colon + 1, j);
    out.push({ tag, children: parse(inner) });
    i = j + 1;
  }
  return out;
}

function render(nodes: Node[], keyPrefix = ""): ReactNode {
  return nodes.map((n, i) => {
    const k = `${keyPrefix}${i}`;
    if (typeof n === "string") return <Fragment key={k}>{n}</Fragment>;
    const inner = render(n.children, `${k}-`);
    if (n.tag === "em") return <em key={k}>{inner}</em>;
    if (n.tag === "strike") return <span key={k} className="strike">{inner}</span>;
    return <span key={k} className="text-red">{inner}</span>;
  });
}

export function rich(text: string): ReactNode {
  const lines = text.split("\n");
  return lines.map((line, lineIdx) => (
    <Fragment key={lineIdx}>
      {render(parse(line))}
      {lineIdx < lines.length - 1 && <br />}
    </Fragment>
  ));
}
