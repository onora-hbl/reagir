export interface VNode {
  type: any;
  props: any;
  children: any[];
}

export function createVNode(type: any, props: any, children: any): VNode {
  return {
    type,
    props,
    children: Array.isArray(children) ? children : children != null ? [children] : []
  };
}