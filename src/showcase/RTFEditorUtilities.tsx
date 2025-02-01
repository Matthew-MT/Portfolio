export function getIntersectedNodes(parent: Node, range: Range) {
    const stack = [...parent.childNodes];
    const intersected = [];

    while (stack.length > 0) {
        const current = stack.pop()!;
        if (range.intersectsNode(current)) intersected.push(current);
        stack.push(...current.childNodes);
    }

    return intersected;
}

export default function surround(range: Range, element: keyof HTMLElementTagNameMap) {
    const _element = document.createElement(element);
    const fragment = range.extractContents();
    _element.appendChild(fragment);
    range.insertNode(_element);
}
