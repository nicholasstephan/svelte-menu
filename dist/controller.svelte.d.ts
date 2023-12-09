export function menu(element: any, options: any): {
    update(newOptions: any): void;
    destroy(): void;
};
export function closeAll(): void;
export function close(id: any): void;
export function closeAtDepth(depth: any): void;
export function open(options: any): any;
/** @typedef {typeof __propDef.props}  ControllerProps */
/** @typedef {typeof __propDef.events}  ControllerEvents */
/** @typedef {typeof __propDef.slots}  ControllerSlots */
export default class Controller extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ControllerProps = typeof __propDef.props;
export type ControllerEvents = typeof __propDef.events;
export type ControllerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
