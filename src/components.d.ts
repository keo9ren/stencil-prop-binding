/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
    }
    interface SecondComp {
        "t9n": Record<string, string>;
        "userName": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSecondCompElement extends Components.SecondComp, HTMLStencilElement {
    }
    var HTMLSecondCompElement: {
        prototype: HTMLSecondCompElement;
        new (): HTMLSecondCompElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "second-comp": HTMLSecondCompElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
    }
    interface SecondComp {
        "t9n"?: Record<string, string>;
        "userName"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "second-comp": SecondComp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "second-comp": LocalJSX.SecondComp & JSXBase.HTMLAttributes<HTMLSecondCompElement>;
        }
    }
}