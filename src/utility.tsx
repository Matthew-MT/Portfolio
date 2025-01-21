import { MutableRefObject, useEffect, /*useRef,*/ useState } from "react";

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

export function useEnterFrameAnimation($ref?: (_ref: HTMLElement | null) => void, delay?: number, className?: string) {
    const [_ref, setRef] = useState<MutableRefObject<HTMLElement | null>>({ current: null });
    // const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!_ref.current) return;

        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) {
                if (delay) setTimeout(() => entry.target.classList.add("animate-enter-frame-animator"), delay);
                else entry.target.classList.add("animate-enter-frame-animator");
            }
        });

        observer.observe(_ref.current);

        return () => {
            observer.disconnect();
        };
    }, [_ref, delay]);

    return {
        ref: (instance: HTMLElement | null) => {
            if (_ref.current || !instance) return;
            setRef({ current: instance });
            if ($ref) $ref(instance);
        },
        className: className ? className + " " : "" + "animate-enter-frame",
    };
}
