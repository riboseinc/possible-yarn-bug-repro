var $iTRw5$reactariautils = require("@react-aria/utils");
var $iTRw5$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useSlotProps", () => $e81916440cf6fd84$export$1e5c9e6e4e15efe3);
$parcel$export(module.exports, "cssModuleToSlots", () => $e81916440cf6fd84$export$365cf34cda9978e2);
$parcel$export(module.exports, "SlotProvider", () => $e81916440cf6fd84$export$8107b24b91795686);
$parcel$export(module.exports, "ClearSlots", () => $e81916440cf6fd84$export$ceb145244332b7a2);
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

let $e81916440cf6fd84$var$SlotContext = /*#__PURE__*/ (0, ($parcel$interopDefault($iTRw5$react))).createContext(null);
function $e81916440cf6fd84$export$1e5c9e6e4e15efe3(props, defaultSlot) {
    let slot = props.slot || defaultSlot;
    // @ts-ignore TODO why is slot an object and not just string or undefined?
    let { [slot]: slotProps = {} } = (0, $iTRw5$react.useContext)($e81916440cf6fd84$var$SlotContext) || {};
    return (0, $iTRw5$reactariautils.mergeProps)(props, (0, $iTRw5$reactariautils.mergeProps)(slotProps, {
        id: props.id
    }));
}
function $e81916440cf6fd84$export$365cf34cda9978e2(cssModule) {
    return Object.keys(cssModule).reduce((acc, slot)=>{
        acc[slot] = {
            UNSAFE_className: cssModule[slot]
        };
        return acc;
    }, {});
}
function $e81916440cf6fd84$export$8107b24b91795686(props) {
    const emptyObj = (0, $iTRw5$react.useMemo)(()=>({}), []);
    let parentSlots = (0, $iTRw5$react.useContext)($e81916440cf6fd84$var$SlotContext) || emptyObj;
    let { slots: slots = emptyObj, children: children } = props;
    // Merge props for each slot from parent context and props
    let value = (0, $iTRw5$react.useMemo)(()=>Object.keys(parentSlots).concat(Object.keys(slots)).reduce((o, p)=>({
                ...o,
                [p]: (0, $iTRw5$reactariautils.mergeProps)(parentSlots[p] || {}, slots[p] || {})
            }), {}), [
        parentSlots,
        slots
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iTRw5$react))).createElement($e81916440cf6fd84$var$SlotContext.Provider, {
        value: value
    }, children);
}
function $e81916440cf6fd84$export$ceb145244332b7a2(props) {
    let { children: children, ...otherProps } = props;
    const emptyObj = (0, $iTRw5$react.useMemo)(()=>({}), []);
    let content = children;
    if ((0, ($parcel$interopDefault($iTRw5$react))).Children.toArray(children).length <= 1) {
        if (typeof children === 'function') content = /*#__PURE__*/ (0, ($parcel$interopDefault($iTRw5$react))).cloneElement((0, ($parcel$interopDefault($iTRw5$react))).Children.only(children), otherProps);
    }
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iTRw5$react))).createElement($e81916440cf6fd84$var$SlotContext.Provider, {
        value: emptyObj
    }, content);
}


//# sourceMappingURL=Slots.main.js.map
