import {useLayoutEffect as $iRbeG$useLayoutEffect} from "@react-aria/utils";
import {useState as $iRbeG$useState} from "react";

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

function $54cda195bd4173fb$export$e52e2242b6d0f1d4(query, ref) {
    let [hasChild, setHasChild] = (0, $iRbeG$useState)(true);
    (0, $iRbeG$useLayoutEffect)(()=>{
        setHasChild(!!(ref.current && ref.current.querySelector(query)));
    }, [
        setHasChild,
        query,
        ref
    ]);
    return hasChild;
}


export {$54cda195bd4173fb$export$e52e2242b6d0f1d4 as useHasChild};
//# sourceMappingURL=useHasChild.module.js.map
