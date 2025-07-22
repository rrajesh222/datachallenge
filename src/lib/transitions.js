// src/lib/transitions.js
export function typewriter(node, { speed = 1 }) {
  const valid =
    node.childNodes.length == 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE;
  const text = node.textContent;
  const duration = text.length / (speed * 0.1);

  return {
    duration,
    tick: (t) => {
      const i = Math.trunc(text.length * t);
      node.textContent = text.slice(0, i);
    },
  };
}
