import{j as n,F as k}from"./app-4a17Pub4.js";import{a as L}from"./CheckIcon-BVmRy-LG.js";import{S as z}from"./ScrollArea-BBLLgi1y.js";import{C as u,c as v}from"./Combobox-Bd-ojIJS.js";function x(r){return typeof r=="string"?{value:r,label:r}:"value"in r&&!("label"in r)?{value:r.value,label:r.value,disabled:r.disabled}:typeof r=="number"?{value:r.toString(),label:r.toString()}:"group"in r?{group:r.group,items:r.items.map(e=>x(e))}:r}function J(r){return r?r.map(e=>x(e)):[]}function G(r){return r.reduce((e,o)=>"group"in o?{...e,...G(o.items)}:(e[o.value]=o,e),{})}function p(r){return"group"in r}function y({options:r,search:e,limit:o}){const l=e.trim().toLowerCase(),t=[];for(let a=0;a<r.length;a+=1){const s=r[a];if(t.length===o)return t;p(s)&&t.push({group:s.group,items:y({options:s.items,search:e,limit:o-t.length})}),p(s)||s.label.toLowerCase().includes(l)&&t.push(s)}return t}function N(r){if(r.length===0)return!0;for(const e of r)if(!("group"in e)||e.items.length>0)return!1;return!0}function w(r,e=new Set){if(Array.isArray(r))for(const o of r)if(p(o))w(o.items,e);else{if(typeof o.value>"u")throw new Error("[@mantine/core] Each option must have value property");if(typeof o.value!="string")throw new Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof o.value}`);if(e.has(o.value))throw new Error(`[@mantine/core] Duplicate options are not supported. Option with value "${o.value}" was provided more than once`);e.add(o.value)}}function $(r,e){return Array.isArray(r)?r.includes(e):r===e}function j({data:r,withCheckIcon:e,value:o,checkIconPosition:l,unstyled:t,renderOption:a}){if(!p(r)){const i=$(o,r.value),f=e&&i&&n.jsx(L,{className:v.optionsDropdownCheckIcon}),d=n.jsxs(n.Fragment,{children:[l==="left"&&f,n.jsx("span",{children:r.label}),l==="right"&&f]});return n.jsx(u.Option,{value:r.value,disabled:r.disabled,className:k({[v.optionsDropdownOption]:!t}),"data-reverse":l==="right"||void 0,"data-checked":i||void 0,"aria-selected":i,active:i,children:typeof a=="function"?a({option:r,checked:i}):d})}const s=r.items.map(i=>n.jsx(j,{data:i,value:o,unstyled:t,withCheckIcon:e,checkIconPosition:l,renderOption:a},i.value));return n.jsx(u.Group,{label:r.group,children:s})}function K({data:r,hidden:e,hiddenWhenEmpty:o,filter:l,search:t,limit:a,maxDropdownHeight:s,withScrollArea:i=!0,filterOptions:f=!0,withCheckIcon:d=!1,value:O,checkIconPosition:C,nothingFoundMessage:h,unstyled:D,labelId:E,renderOption:A,scrollAreaProps:S,"aria-label":F}){w(r);const g=typeof t=="string"?(l||y)({options:r,search:f?t:"",limit:a??1/0}):r,b=N(g),m=g.map(c=>n.jsx(j,{data:c,withCheckIcon:d,value:O,checkIconPosition:C,unstyled:D,renderOption:A},p(c)?c.group:c.value));return n.jsx(u.Dropdown,{hidden:e||o&&b,children:n.jsxs(u.Options,{labelledBy:E,"aria-label":F,children:[i?n.jsx(z.Autosize,{mah:s??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...S,children:m}):m,b&&h&&n.jsx(u.Empty,{children:h})]})})}export{K as O,G as a,J as g,p as i};
