import { useEffect, useRef } from "react";

export function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) return false;
    return true;
}

export function useEnterFrameAnimation(delay?: number, className?: string) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) {
                if (delay) setTimeout(() => entry.target.classList.add("animate-enter-frame-animator"), delay);
                else entry.target.classList.add("animate-enter-frame-animator");
            }
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [delay]);

    return {
        ref,
        className: className ? className + " " : "" + "animate-enter-frame",
    };
}
