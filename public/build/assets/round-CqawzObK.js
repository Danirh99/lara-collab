import{w as c}from"./app-4a17Pub4.js";import{n as I,p as _}from"./_baseClone-DIFX3Exu.js";import{i as $,t as b}from"./route-CLXYwALx.js";var N=/\s/;function x(r){for(var t=r.length;t--&&N.test(r.charAt(t)););return t}var u=x,y=u,F=/^\s+/;function v(r){return r&&r.slice(0,y(r)+1).replace(F,"")}var E=v,T=E,o=I,p=$,a=NaN,O=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,g=/^0o[0-7]+$/i,h=parseInt;function M(r){if(typeof r=="number")return r;if(p(r))return a;if(o(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=o(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=T(r);var n=S.test(r);return n||g.test(r)?h(r.slice(2),n?2:8):O.test(r)?a:+r}var m=M,R=m,f=1/0,j=17976931348623157e292;function A(r){if(!r)return r===0?r:0;if(r=R(r),r===f||r===-f){var t=r<0?-1:1;return t*j}return r===r?r:0}var B=A,w=B;function C(r){var t=w(r),n=t%1;return t===t?n?t-n:t:0}var D=C,G=_,H=D,P=m,s=b,W=G.isFinite,X=Math.min;function Y(r){var t=Math[r];return function(n,e){if(n=P(n),e=e==null?0:X(H(e),292),e&&W(n)){var i=(s(n)+"e").split("e"),d=t(i[0]+"e"+(+i[1]+e));return i=(s(d)+"e").split("e"),+(i[0]+"e"+(+i[1]-e))}return t(n)}}var k=Y,q=k,z=q("round"),J=z;const U=c(J);export{U as r};
