import{aj as t,j as o}from"./app-4a17Pub4.js";import{T as r}from"./Text-BR9LnClf.js";const d=({type:e="info",title:n,content:i,confirmLabel:s,cancelLabel:a="Cancel",...l})=>{const c={info:"blue",warning:"orange",danger:"red"};t({title:o.jsx(r,{size:"xl",fw:700,children:n}),centered:!0,overlayProps:{backgroundOpacity:.55,blur:3},children:o.jsx(r,{size:"sm",children:i}),labels:{confirm:s,cancel:a},confirmProps:{color:c[e]},...l})};export{d as o};
