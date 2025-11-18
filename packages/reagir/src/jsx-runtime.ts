import { createVNode } from "./vnode";

export function jsx(type: any, props: any) {
  const { children, ...rest } = props || {};
  return createVNode(type, rest, children);
}

export const jsxs = jsx;