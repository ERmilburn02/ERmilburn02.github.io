(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(8971)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,l=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,u=(a=t(7294))&&a.__esModule?a:{default:a},l=t(6273),i=t(387),c=t(7190);var f={};function s(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=i.useRouter(),a=u.default.useMemo((function(){var r=o(l.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,y=e.children,h=e.replace,v=e.shallow,m=e.scroll,b=e.locale;"string"===typeof y&&(y=u.default.createElement("a",null,y));var g=(r=u.default.Children.only(y))&&"object"===typeof r&&r.ref,j=o(c.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],O=u.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);u.default.useEffect((function(){var e=w&&t&&l.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,w,b,t,n]);var E={ref:O,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,u,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:i,scroll:u}))}(e,n,d,p,h,v,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var _="undefined"!==typeof b?b:n&&n.locale,S=n&&n.isLocaleDomain&&l.getDomainLocale(p,_,n&&n.locales,n&&n.domainLocales);E.href=S||l.addBasePath(l.addLocale(p,_,n&&n.defaultLocale))}return u.default.cloneElement(r,E)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,l=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],y=o(a.useState(r?r.current:null),2),h=y[0],v=y[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=i.get(n):(r=i.get(t),c.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,u=n.elements;return u.set(e,r),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var r=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:t}))}),[n,h,t,d]);return a.useEffect((function(){if(!l&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&v(r.current)}),[r]),[m,d]};var a=t(7294),u=t(9311),l="undefined"!==typeof IntersectionObserver;var i=new Map,c=[]},8971:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(5893),o=(t(906),t(1664));function a(e){var r=e.children;return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsx)("header",{className:"bg-fuchsia-100 mb-8 py-4",children:(0,n.jsxs)("div",{className:"container mx-auto flex justify-evenly",children:[(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})}),(0,n.jsx)(o.default,{href:"/blog",children:(0,n.jsx)("a",{children:"Blog"})}),(0,n.jsx)(o.default,{href:"/projects",children:(0,n.jsx)("a",{children:"Projects"})})]})}),(0,n.jsx)("main",{className:"container mx-auto flex-1",children:r}),(0,n.jsx)("footer",{className:"bg-fuchsia-100 mt-8 py-4",children:(0,n.jsx)("div",{className:"container mx-auto flex justify-center",children:"\xa9 2022 ERmilburn02"})})]})}var u=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){l(e,r,t[r])}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=function(e){var r=e.Component,t=e.pageProps,o=c(e,["Component","pageProps"]).router.pathname.includes("/embed")?u.Fragment:a;return(0,n.jsx)(o,{children:(0,n.jsx)(r,i({},t))})}},906:function(){},1664:function(e,r,t){e.exports=t(8418)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(6363),r(387)}));var t=e.O();_N_E=t}]);