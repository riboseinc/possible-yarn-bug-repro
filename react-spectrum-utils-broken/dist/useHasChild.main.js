var $egdoP$reactariautils = require("@react-aria/utils");
var $egdoP$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useHasChild", () => $67043c48a01bef79$export$e52e2242b6d0f1d4);
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

function $67043c48a01bef79$export$e52e2242b6d0f1d4(query, ref) {
    let [hasChild, setHasChild] = (0, $egdoP$react.useState)(true);
    (0, $egdoP$reactariautils.useLayoutEffect)(()=>{
        setHasChild(!!(ref.current && ref.current.querySelector(query)));
    }, [
        setHasChild,
        query,
        ref
    ]);
    return hasChild;
}


//# sourceMappingURL=useHasChild.main.js.map
