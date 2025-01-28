import { Theme } from "@mui/material/styles/createTheme";
import useTheme from "@mui/material/styles/useTheme";
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

    useEffect(() => {
        if (!_ref.current) return;

        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) {
                if (delay) setTimeout(() => entry.target.classList.add("animate-enter-frame-animator"), delay);
                else entry.target.classList.add("animate-enter-frame-animator");
            }
        }, { threshold: [1, 0.5, 0] });

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

export function useIsMobile(theme?: Theme) {
    const _theme = useTheme();
    const [width, setWidth] = useState<number>(document.documentElement.clientWidth);

    useEffect(() => {
        function handleResize() { setWidth(document.documentElement.clientWidth); }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width < (theme || _theme).breakpoints.values.md;
}
