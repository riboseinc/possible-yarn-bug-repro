import {useBreakpoint as $1051245f87c5981d$export$199d6754bdf4e1e3} from "./BreakpointProvider.module.js";
import {useLocale as $9Di9g$useLocale} from "@react-aria/i18n";

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

const $380ed8f3903c3931$export$fe9c6e915565b4e8 = {
    margin: [
        'margin',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    marginStart: [
        $380ed8f3903c3931$var$rtl('marginLeft', 'marginRight'),
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    marginEnd: [
        $380ed8f3903c3931$var$rtl('marginRight', 'marginLeft'),
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    // marginLeft: ['marginLeft', dimensionValue],
    // marginRight: ['marginRight', dimensionValue],
    marginTop: [
        'marginTop',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    marginBottom: [
        'marginBottom',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    marginX: [
        [
            'marginLeft',
            'marginRight'
        ],
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    marginY: [
        [
            'marginTop',
            'marginBottom'
        ],
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    width: [
        'width',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    height: [
        'height',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    minWidth: [
        'minWidth',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    minHeight: [
        'minHeight',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    maxWidth: [
        'maxWidth',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    maxHeight: [
        'maxHeight',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    isHidden: [
        'display',
        $380ed8f3903c3931$var$hiddenValue
    ],
    alignSelf: [
        'alignSelf',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    justifySelf: [
        'justifySelf',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    position: [
        'position',
        $380ed8f3903c3931$var$anyValue
    ],
    zIndex: [
        'zIndex',
        $380ed8f3903c3931$var$anyValue
    ],
    top: [
        'top',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    bottom: [
        'bottom',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    start: [
        $380ed8f3903c3931$var$rtl('left', 'right'),
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    end: [
        $380ed8f3903c3931$var$rtl('right', 'left'),
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    left: [
        'left',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    right: [
        'right',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    order: [
        'order',
        $380ed8f3903c3931$var$anyValue
    ],
    flex: [
        'flex',
        $380ed8f3903c3931$var$flexValue
    ],
    flexGrow: [
        'flexGrow',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    flexShrink: [
        'flexShrink',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    flexBasis: [
        'flexBasis',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    gridArea: [
        'gridArea',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    gridColumn: [
        'gridColumn',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    gridColumnEnd: [
        'gridColumnEnd',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    gridColumnStart: [
        'gridColumnStart',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    gridRow: [
        'gridRow',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    gridRowEnd: [
        'gridRowEnd',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ],
    gridRowStart: [
        'gridRowStart',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ]
};
const $380ed8f3903c3931$export$e0705d1a55f297c = {
    ...$380ed8f3903c3931$export$fe9c6e915565b4e8,
    backgroundColor: [
        'backgroundColor',
        $380ed8f3903c3931$var$backgroundColorValue
    ],
    borderWidth: [
        'borderWidth',
        $380ed8f3903c3931$var$borderSizeValue
    ],
    borderStartWidth: [
        $380ed8f3903c3931$var$rtl('borderLeftWidth', 'borderRightWidth'),
        $380ed8f3903c3931$var$borderSizeValue
    ],
    borderEndWidth: [
        $380ed8f3903c3931$var$rtl('borderRightWidth', 'borderLeftWidth'),
        $380ed8f3903c3931$var$borderSizeValue
    ],
    borderLeftWidth: [
        'borderLeftWidth',
        $380ed8f3903c3931$var$borderSizeValue
    ],
    borderRightWidth: [
        'borderRightWidth',
        $380ed8f3903c3931$var$borderSizeValue
    ],
    borderTopWidth: [
        'borderTopWidth',
        $380ed8f3903c3931$var$borderSizeValue
    ],
    borderBottomWidth: [
        'borderBottomWidth',
        $380ed8f3903c3931$var$borderSizeValue
    ],
    borderXWidth: [
        [
            'borderLeftWidth',
            'borderRightWidth'
        ],
        $380ed8f3903c3931$var$borderSizeValue
    ],
    borderYWidth: [
        [
            'borderTopWidth',
            'borderBottomWidth'
        ],
        $380ed8f3903c3931$var$borderSizeValue
    ],
    borderColor: [
        'borderColor',
        $380ed8f3903c3931$var$borderColorValue
    ],
    borderStartColor: [
        $380ed8f3903c3931$var$rtl('borderLeftColor', 'borderRightColor'),
        $380ed8f3903c3931$var$borderColorValue
    ],
    borderEndColor: [
        $380ed8f3903c3931$var$rtl('borderRightColor', 'borderLeftColor'),
        $380ed8f3903c3931$var$borderColorValue
    ],
    borderLeftColor: [
        'borderLeftColor',
        $380ed8f3903c3931$var$borderColorValue
    ],
    borderRightColor: [
        'borderRightColor',
        $380ed8f3903c3931$var$borderColorValue
    ],
    borderTopColor: [
        'borderTopColor',
        $380ed8f3903c3931$var$borderColorValue
    ],
    borderBottomColor: [
        'borderBottomColor',
        $380ed8f3903c3931$var$borderColorValue
    ],
    borderXColor: [
        [
            'borderLeftColor',
            'borderRightColor'
        ],
        $380ed8f3903c3931$var$borderColorValue
    ],
    borderYColor: [
        [
            'borderTopColor',
            'borderBottomColor'
        ],
        $380ed8f3903c3931$var$borderColorValue
    ],
    borderRadius: [
        'borderRadius',
        $380ed8f3903c3931$var$borderRadiusValue
    ],
    borderTopStartRadius: [
        $380ed8f3903c3931$var$rtl('borderTopLeftRadius', 'borderTopRightRadius'),
        $380ed8f3903c3931$var$borderRadiusValue
    ],
    borderTopEndRadius: [
        $380ed8f3903c3931$var$rtl('borderTopRightRadius', 'borderTopLeftRadius'),
        $380ed8f3903c3931$var$borderRadiusValue
    ],
    borderBottomStartRadius: [
        $380ed8f3903c3931$var$rtl('borderBottomLeftRadius', 'borderBottomRightRadius'),
        $380ed8f3903c3931$var$borderRadiusValue
    ],
    borderBottomEndRadius: [
        $380ed8f3903c3931$var$rtl('borderBottomRightRadius', 'borderBottomLeftRadius'),
        $380ed8f3903c3931$var$borderRadiusValue
    ],
    borderTopLeftRadius: [
        'borderTopLeftRadius',
        $380ed8f3903c3931$var$borderRadiusValue
    ],
    borderTopRightRadius: [
        'borderTopRightRadius',
        $380ed8f3903c3931$var$borderRadiusValue
    ],
    borderBottomLeftRadius: [
        'borderBottomLeftRadius',
        $380ed8f3903c3931$var$borderRadiusValue
    ],
    borderBottomRightRadius: [
        'borderBottomRightRadius',
        $380ed8f3903c3931$var$borderRadiusValue
    ],
    padding: [
        'padding',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    paddingStart: [
        $380ed8f3903c3931$var$rtl('paddingLeft', 'paddingRight'),
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    paddingEnd: [
        $380ed8f3903c3931$var$rtl('paddingRight', 'paddingLeft'),
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    paddingLeft: [
        'paddingLeft',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    paddingRight: [
        'paddingRight',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    paddingTop: [
        'paddingTop',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    paddingBottom: [
        'paddingBottom',
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    paddingX: [
        [
            'paddingLeft',
            'paddingRight'
        ],
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    paddingY: [
        [
            'paddingTop',
            'paddingBottom'
        ],
        $380ed8f3903c3931$export$abc24f5b99744ea6
    ],
    overflow: [
        'overflow',
        $380ed8f3903c3931$export$46b6c81d11d2c30a
    ]
};
const $380ed8f3903c3931$var$borderStyleProps = {
    borderWidth: 'borderStyle',
    borderLeftWidth: 'borderLeftStyle',
    borderRightWidth: 'borderRightStyle',
    borderTopWidth: 'borderTopStyle',
    borderBottomWidth: 'borderBottomStyle'
};
function $380ed8f3903c3931$var$rtl(ltr, rtl) {
    return (direction)=>direction === 'rtl' ? rtl : ltr;
}
const $380ed8f3903c3931$var$UNIT_RE = /(%|px|em|rem|vw|vh|auto|cm|mm|in|pt|pc|ex|ch|rem|vmin|vmax|fr)$/;
const $380ed8f3903c3931$var$FUNC_RE = /^\s*\w+\(/;
const $380ed8f3903c3931$var$SPECTRUM_VARIABLE_RE = /(static-)?size-\d+|single-line-(height|width)/g;
function $380ed8f3903c3931$export$abc24f5b99744ea6(value) {
    if (typeof value === 'number') return value + 'px';
    if (!value) return undefined;
    if ($380ed8f3903c3931$var$UNIT_RE.test(value)) return value;
    if ($380ed8f3903c3931$var$FUNC_RE.test(value)) return value.replace($380ed8f3903c3931$var$SPECTRUM_VARIABLE_RE, 'var(--spectrum-global-dimension-$&, var(--spectrum-alias-$&))');
    return `var(--spectrum-global-dimension-${value}, var(--spectrum-alias-${value}))`;
}
function $380ed8f3903c3931$export$f348bec194f2e6b5(value, matchedBreakpoints) {
    let responsiveValue = $380ed8f3903c3931$export$52dbfdbe1b2c3541(value, matchedBreakpoints);
    if (responsiveValue != null) return $380ed8f3903c3931$export$abc24f5b99744ea6(responsiveValue);
}
function $380ed8f3903c3931$var$colorValue(value, type = 'default', version = 5) {
    if (version > 5) return `var(--spectrum-${value}, var(--spectrum-semantic-${value}-color-${type}))`;
    return `var(--spectrum-legacy-color-${value}, var(--spectrum-global-color-${value}, var(--spectrum-semantic-${value}-color-${type})))`;
}
function $380ed8f3903c3931$var$backgroundColorValue(value, version = 5) {
    if (!value) return undefined;
    return `var(--spectrum-alias-background-color-${value}, ${$380ed8f3903c3931$var$colorValue(value, 'background', version)})`;
}
function $380ed8f3903c3931$var$borderColorValue(value, version = 5) {
    if (!value) return undefined;
    if (value === 'default') return 'var(--spectrum-alias-border-color)';
    return `var(--spectrum-alias-border-color-${value}, ${$380ed8f3903c3931$var$colorValue(value, 'border', version)})`;
}
function $380ed8f3903c3931$var$borderSizeValue(value) {
    return value && value !== 'none' ? `var(--spectrum-alias-border-size-${value})` : '0';
}
function $380ed8f3903c3931$var$borderRadiusValue(value) {
    if (!value) return undefined;
    return `var(--spectrum-alias-border-radius-${value})`;
}
function $380ed8f3903c3931$var$hiddenValue(value) {
    return value ? 'none' : undefined;
}
function $380ed8f3903c3931$var$anyValue(value) {
    return value;
}
function $380ed8f3903c3931$var$flexValue(value) {
    if (typeof value === 'boolean') return value ? '1' : undefined;
    return '' + value;
}
function $380ed8f3903c3931$export$f3c39bb9534218d0(props, handlers, direction, matchedBreakpoints) {
    let style = {};
    for(let key in props){
        let styleProp = handlers[key];
        if (!styleProp || props[key] == null) continue;
        let [name, convert] = styleProp;
        if (typeof name === 'function') name = name(direction);
        let prop = $380ed8f3903c3931$export$52dbfdbe1b2c3541(props[key], matchedBreakpoints);
        let value = convert(prop, props.colorVersion);
        if (Array.isArray(name)) for (let k of name)style[k] = value;
        else style[name] = value;
    }
    for(let prop in $380ed8f3903c3931$var$borderStyleProps)if (style[prop]) {
        style[$380ed8f3903c3931$var$borderStyleProps[prop]] = 'solid';
        style.boxSizing = 'border-box';
    }
    return style;
}
function $380ed8f3903c3931$export$b8e6fb9d2dff3f41(props, handlers = $380ed8f3903c3931$export$fe9c6e915565b4e8, options = {}) {
    let { UNSAFE_className: UNSAFE_className, UNSAFE_style: UNSAFE_style, ...otherProps } = props;
    let breakpointProvider = (0, $1051245f87c5981d$export$199d6754bdf4e1e3)();
    let { direction: direction } = (0, $9Di9g$useLocale)();
    let { matchedBreakpoints: matchedBreakpoints = (breakpointProvider === null || breakpointProvider === void 0 ? void 0 : breakpointProvider.matchedBreakpoints) || [
        'base'
    ] } = options;
    let styles = $380ed8f3903c3931$export$f3c39bb9534218d0(props, handlers, direction, matchedBreakpoints);
    let style = {
        ...UNSAFE_style,
        ...styles
    };
    // @ts-ignore
    if (otherProps.className) console.warn("The className prop is unsafe and is unsupported in React Spectrum v3. Please use style props with Spectrum variables, or UNSAFE_className if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.");
    // @ts-ignore
    if (otherProps.style) console.warn("The style prop is unsafe and is unsupported in React Spectrum v3. Please use style props with Spectrum variables, or UNSAFE_style if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.");
    let styleProps = {
        style: style,
        className: UNSAFE_className
    };
    if ($380ed8f3903c3931$export$52dbfdbe1b2c3541(props.isHidden, matchedBreakpoints)) styleProps.hidden = true;
    return {
        styleProps: styleProps
    };
}
function $380ed8f3903c3931$export$46b6c81d11d2c30a(value) {
    return value;
}
function $380ed8f3903c3931$export$52dbfdbe1b2c3541(prop, matchedBreakpoints) {
    if (prop && typeof prop === 'object' && !Array.isArray(prop)) {
        for(let i = 0; i < matchedBreakpoints.length; i++){
            let breakpoint = matchedBreakpoints[i];
            if (prop[breakpoint] != null) return prop[breakpoint];
        }
        return prop.base;
    }
    return prop;
}


export {$380ed8f3903c3931$export$fe9c6e915565b4e8 as baseStyleProps, $380ed8f3903c3931$export$abc24f5b99744ea6 as dimensionValue, $380ed8f3903c3931$export$46b6c81d11d2c30a as passthroughStyle, $380ed8f3903c3931$export$e0705d1a55f297c as viewStyleProps, $380ed8f3903c3931$export$f348bec194f2e6b5 as responsiveDimensionValue, $380ed8f3903c3931$export$52dbfdbe1b2c3541 as getResponsiveProp, $380ed8f3903c3931$export$f3c39bb9534218d0 as convertStyleProps, $380ed8f3903c3931$export$b8e6fb9d2dff3f41 as useStyleProps};
//# sourceMappingURL=styleProps.module.js.map
