export function getIntersectedNodes(range: Range) {
    const stack = [range.commonAncestorContainer];
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
    range.surroundContents(_element);
}
