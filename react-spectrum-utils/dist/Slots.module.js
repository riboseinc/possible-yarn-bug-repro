import {mergeProps as $doF98$mergeProps} from "@react-aria/utils";
import $doF98$react, {useContext as $doF98$useContext, useMemo as $doF98$useMemo} from "react";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

let $59d09bcc83651bf9$var$SlotContext = /*#__PURE__*/ (0, $doF98$react).createContext(null);
function $59d09bcc83651bf9$export$1e5c9e6e4e15efe3(props, defaultSlot) {
    let slot = props.slot || defaultSlot;
    // @ts-ignore TODO why is slot an object and not just string or undefined?
    let { [slot]: slotProps = {} } = (0, $doF98$useContext)($59d09bcc83651bf9$var$SlotContext) || {};
    return (0, $doF98$mergeProps)(props, (0, $doF98$mergeProps)(slotProps, {
        id: props.id
    }));
}
function $59d09bcc83651bf9$export$365cf34cda9978e2(cssModule) {
    return Object.keys(cssModule).reduce((acc, slot)=>{
        acc[slot] = {
            UNSAFE_className: cssModule[slot]
        };
        return acc;
    }, {});
}
function $59d09bcc83651bf9$export$8107b24b91795686(props) {
    const emptyObj = (0, $doF98$useMemo)(()=>({}), []);
    let parentSlots = (0, $doF98$useContext)($59d09bcc83651bf9$var$SlotContext) || emptyObj;
    let { slots: slots = emptyObj, children: children } = props;
    // Merge props for each slot from parent context and props
    let value = (0, $doF98$useMemo)(()=>Object.keys(parentSlots).concat(Object.keys(slots)).reduce((o, p)=>({
                ...o,
                [p]: (0, $doF98$mergeProps)(parentSlots[p] || {}, slots[p] || {})
            }), {}), [
        parentSlots,
        slots
    ]);
    return /*#__PURE__*/ (0, $doF98$react).createElement($59d09bcc83651bf9$var$SlotContext.Provider, {
        value: value
    }, children);
}
function $59d09bcc83651bf9$export$ceb145244332b7a2(props) {
    let { children: children, ...otherProps } = props;
    const emptyObj = (0, $doF98$useMemo)(()=>({}), []);
    let content = children;
    if ((0, $doF98$react).Children.toArray(children).length <= 1) {
        if (typeof children === 'function') content = /*#__PURE__*/ (0, $doF98$react).cloneElement((0, $doF98$react).Children.only(children), otherProps);
    }
    return /*#__PURE__*/ (0, $doF98$react).createElement($59d09bcc83651bf9$var$SlotContext.Provider, {
        value: emptyObj
    }, content);
}


export {$59d09bcc83651bf9$export$1e5c9e6e4e15efe3 as useSlotProps, $59d09bcc83651bf9$export$365cf34cda9978e2 as cssModuleToSlots, $59d09bcc83651bf9$export$8107b24b91795686 as SlotProvider, $59d09bcc83651bf9$export$ceb145244332b7a2 as ClearSlots};
//# sourceMappingURL=Slots.module.js.map
