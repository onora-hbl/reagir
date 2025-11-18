import type { VNode } from "./vnode";

export function render(vnode: VNode, container: HTMLElement) {
  container.innerHTML = "";
  const dom = createDom(vnode);
  container.appendChild(dom);
}

function createDom(vnode: any): Node {
  if (vnode === null || vnode === undefined || vnode === false) {
    return document.createTextNode("");
  }

  if (typeof vnode === "string" || typeof vnode === "number") {
    return document.createTextNode(String(vnode));
  }

  if (typeof vnode.type === "function") {
    const child = vnode.type({ ...vnode.props, children: vnode.children });
    return createDom(child);
  }

  const dom = document.createElement(vnode.type);

  if (vnode.props) {
    for (const [k, v] of Object.entries(vnode.props)) {
      dom.setAttribute(k, v);
    }
  }

  vnode.children.forEach((c: any) => {
    dom.appendChild(createDom(c));
  });

  return dom;
}