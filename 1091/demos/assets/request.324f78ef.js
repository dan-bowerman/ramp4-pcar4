import{A as p,s as f}from"./main.748a25d3.js";let u;function w(n,t){let e=t.responseType;e?e!=="array-buffer"&&e!=="blob"&&e!=="json"&&e!=="native"&&e!=="native-request-init"&&e!=="text"&&(e="text"):e="json",t.responseType=e;const c=p(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:n,options:t},{signal:c}).then(async s=>{let i,a,b,l,r;if(s.data)if(s.data instanceof ArrayBuffer){if(!(e!=="json"&&e!=="text"&&e!=="blob"||(i=new Blob([s.data]),e!=="json"&&e!=="text"||(u||(u=new FileReaderSync),l=u.readAsText(i),e!=="json")))){try{a=JSON.parse(l||null)}catch(o){const d={...o,url:n,requestOptions:t};throw new f("request:server",o.message,d)}if(a.error){const o={...a.error,url:n,requestOptions:t};throw new f("request:server",a.error.message,o)}}}else e==="native"&&(s.data.signal=c,b=await fetch(s.data.url,s.data));switch(e){case"blob":r=i;break;case"json":r=a;break;case"native":r=b;break;case"text":r=l;break;default:r=s.data}return{data:r,requestOptions:t,ssl:s.ssl,url:n}})}export{w as execute};
