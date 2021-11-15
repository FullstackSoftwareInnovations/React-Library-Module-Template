import {InterfaceA, nullA} from "./InterfaceA";

export interface InterfaceB {
    B: InterfaceA[]
}
export function nullB(): InterfaceB{
    return {
        B: [nullA()]
    }
}
