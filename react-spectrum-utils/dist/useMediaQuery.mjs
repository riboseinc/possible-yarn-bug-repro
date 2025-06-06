import {useState as $8zXGn$useState, useEffect as $8zXGn$useEffect} from "react";
import {useIsSSR as $8zXGn$useIsSSR} from "@react-aria/ssr";

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

function $3df547e395c4522f$export$32d5543ab307c01(query) {
    let supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    let [matches, setMatches] = (0, $8zXGn$useState)(()=>supportsMatchMedia ? window.matchMedia(query).matches : false);
    (0, $8zXGn$useEffect)(()=>{
        if (!supportsMatchMedia) return;
        let mq = window.matchMedia(query);
        let onChange = (evt)=>{
            setMatches(evt.matches);
        };
        mq.addListener(onChange);
        return ()=>{
            mq.removeListener(onChange);
        };
    }, [
        supportsMatchMedia,
        query
    ]);
    // If in SSR, the media query should never match. Once the page hydrates,
    // this will update and the real value will be returned.
    let isSSR = (0, $8zXGn$useIsSSR)();
    return isSSR ? false : matches;
}


export {$3df547e395c4522f$export$32d5543ab307c01 as useMediaQuery};
//# sourceMappingURL=useMediaQuery.module.js.map
