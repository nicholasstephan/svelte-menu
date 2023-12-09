/** @typedef {typeof __propDef.props}  MenuProps */
/** @typedef {typeof __propDef.events}  MenuEvents */
/** @typedef {typeof __propDef.slots}  MenuSlots */
export default class Menu extends SvelteComponent<{
    id: any;
    x: any;
    y: any;
    depth?: number;
    close?: any;
    direction?: string;
    component?: any;
    props?: {};
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        id: any;
        x: any;
        y: any;
        depth?: number;
        close?: any;
        direction?: string;
        component?: any;
        props?: {};
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
