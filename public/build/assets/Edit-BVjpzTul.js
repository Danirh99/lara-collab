import{q as s,j as r,G as a}from"./app-4a17Pub4.js";import{A as l}from"./ActionButton-C-w6Z8As.js";import{B as n}from"./BackButton-CQMjaSPB.js";import{u as d}from"./useForm-D-7B7N6w.js";import{C as c}from"./ContainerBox-B9IAjQXZ.js";import{M as u}from"./MainLayout-D5A37fpr.js";import{a as x}from"./route-CLXYwALx.js";import{B as f}from"./Breadcrumbs-DnTwgQ8t.js";import{A as h}from"./Anchor-CA35cCi1.js";import{G as e}from"./Grid-D_CqfVm2.js";import{T as j}from"./Title-BSH3ecI3.js";import{T as b}from"./TextInput-h0GXyFQ7.js";import{C}from"./ColorInput-DudfY8Y-.js";import"./createReactComponent-BwHUzXp6.js";import"./index-B6r_j4C5.js";import"./FlashNotification-PDlnUjhs.js";import"./use-disclosure-CdCiEhD4.js";import"./IconInfoCircle-BfR0qsmf.js";import"./IconCircleX-irk6tkAo.js";import"./useWebSockets-DKQQzHQQ.js";import"./index-C163xbN1.js";import"./useTaskGroupsStore-jTNmh8Xp.js";import"./reorder-DWLP_Jze.js";import"./_baseClone-DIFX3Exu.js";import"./useTasksStore-BPRaRGpQ.js";import"./use-computed-color-scheme-BjX3e8Yz.js";import"./Center-CanggSuC.js";import"./Text-BR9LnClf.js";import"./get-style-object-DUJZA7T_.js";import"./user-IyQLa11_.js";import"./Menu-DQv7jdV4.js";import"./use-resolved-styles-api-nyfOONey.js";import"./Popover-CBbffI_i.js";import"./DirectionProvider-DqDMRz46.js";import"./use-floating-auto-update-BytyxRVS.js";import"./use-uncontrolled-BGuEEBtS.js";import"./Avatar-VVVl2UCZ.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-DOxQUUDz.js";import"./IconUsers-ClcBakf5.js";import"./ScrollArea-BBLLgi1y.js";import"./EmptyWithIcon-C7lyvkIW.js";import"./datetime-DXAmRnuk.js";import"./IconMessage-DJLIo_Xo.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./ActionIcon-ni5mTX2i.js";import"./get-sorted-breakpoints-RaBjtxFS.js";import"./get-base-value-JqT_q0U7.js";import"./InputBase-DVeQGwl5.js";import"./Input-B6kN7ymh.js";import"./create-optional-context-DejgPxvx.js";import"./ColorPicker-C94QZAI7.js";import"./ColorSwatch-HXcgr9nk.js";import"./clamp-DTmYCdls.js";const g=()=>{const{item:o}=s().props,[t,p,m]=d("post",route("settings.labels.update",o.id),{_method:"put",name:o.name,color:o.color||""});return r.jsxs(r.Fragment,{children:[r.jsxs(f,{fz:14,mb:30,children:[r.jsx(h,{href:"#",onClick:()=>x("settings.labels.index"),fz:14,children:"Labels"}),r.jsx("div",{children:"Edit"})]}),r.jsxs(e,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[r.jsx(e.Col,{span:"auto",children:r.jsx(j,{order:1,children:"Edit label"})}),r.jsx(e.Col,{span:"content"})]}),r.jsx(c,{maw:400,children:r.jsxs("form",{onSubmit:p,children:[r.jsx(b,{label:"Name",placeholder:"Label name",required:!0,value:t.data.name,onChange:i=>m("name",i.target.value),error:t.errors.name}),r.jsx(C,{label:"Color",placeholder:"Label color",required:!0,mt:"md",swatches:["#343A40","#E03231","#C2255C","#9C36B5","#6741D9","#3B5BDB","#2771C2","#2A8599","#2B9267","#309E44","#66A810","#F08C00","#E7590D"],swatchesPerRow:7,value:t.data.color,onChange:i=>m("color",i),error:t.errors.color}),r.jsxs(a,{justify:"space-between",mt:"xl",children:[r.jsx(n,{route:"settings.labels.index"}),r.jsx(l,{loading:t.processing,children:"Update"})]})]})})]})};g.layout=o=>r.jsx(u,{title:"Edit user",children:o});export{g as default};
