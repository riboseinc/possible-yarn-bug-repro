import React, { ReactNode, CSSProperties, HTMLAttributes, JSXElementConstructor, ReactElement } from "react";
import { ColorVersion, DimensionValue, Direction, Responsive, StyleProps, ViewStyleProps, DOMRef, DOMRefValue, FocusableElement, FocusableRef, FocusableRefValue, RefObject } from "@react-types/shared";
interface Breakpoints {
    S?: number;
    M?: number;
    L?: number;
    [custom: string]: number | undefined;
}
interface BreakpointContext {
    matchedBreakpoints: string[];
}
interface BreakpointProviderProps {
    children?: ReactNode;
    matchedBreakpoints: string[];
}
export function BreakpointProvider(props: BreakpointProviderProps): React.JSX.Element;
export function useMatchedBreakpoints(breakpoints: Breakpoints): string[];
export function useBreakpoint(): BreakpointContext | null;
type Breakpoint = 'base' | 'S' | 'M' | 'L' | string;
type StyleName = string | string[] | ((dir: Direction) => string);
type StyleHandler = (value: any, colorVersion?: number) => string | undefined;
export interface StyleHandlers {
    [key: string]: [StyleName, StyleHandler];
}
export const baseStyleProps: StyleHandlers;
export const viewStyleProps: StyleHandlers;
export function dimensionValue(value: DimensionValue): string | undefined;
export function responsiveDimensionValue(value: Responsive<DimensionValue>, matchedBreakpoints: Breakpoint[]): string | undefined;
export function convertStyleProps<C extends ColorVersion>(props: ViewStyleProps<C>, handlers: StyleHandlers, direction: Direction, matchedBreakpoints: Breakpoint[]): CSSProperties;
type StylePropsOptions = {
    matchedBreakpoints?: Breakpoint[];
};
export function useStyleProps<T extends StyleProps>(props: T, handlers?: StyleHandlers, options?: StylePropsOptions): {
    styleProps: HTMLAttributes<HTMLElement>;
};
export function passthroughStyle(value: any): any;
export function getResponsiveProp<T>(prop: Responsive<T>, matchedBreakpoints: Breakpoint[]): T | undefined;
export let shouldKeepSpectrumClassNames: boolean;
export function keepSpectrumClassNames(): void;
export function classNames(cssModule: {
    [key: string]: string;
}, ...values: Array<string | Object | undefined>): string;
export function getWrappedElement(children: string | ReactElement | ReactNode): ReactElement<any, JSXElementConstructor<any>>;
export function useMediaQuery(query: string): boolean;
export function createDOMRef<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>): DOMRefValue<T>;
export function createFocusableRef<T extends HTMLElement = HTMLElement>(domRef: RefObject<T | null>, focusableRef?: RefObject<FocusableElement | null>): FocusableRefValue<T>;
export function useDOMRef<T extends HTMLElement = HTMLElement>(ref: DOMRef<T>): RefObject<T | null>;
export function useFocusableRef<T extends HTMLElement = HTMLElement>(ref: FocusableRef<T>, focusableRef?: RefObject<FocusableElement | null>): RefObject<T | null>;
export function unwrapDOMRef<T extends HTMLElement>(ref: RefObject<DOMRefValue<T> | null>): RefObject<T | null>;
export function useUnwrapDOMRef<T extends HTMLElement>(ref: RefObject<DOMRefValue<T> | null>): RefObject<T | null>;
export function useSlotProps<T>(props: T & {
    id?: string;
}, defaultSlot?: string): T;
export function cssModuleToSlots(cssModule: any): {};
export function SlotProvider(props: any): React.JSX.Element;
export function ClearSlots(props: any): React.JSX.Element;
export function useHasChild(query: string, ref: RefObject<HTMLElement | null>): boolean;
export function useIsMobileDevice(): boolean;
export { useValueEffect } from '@react-aria/utils';
export { useResizeObserver } from '@react-aria/utils';

//# sourceMappingURL=types.d.ts.map
