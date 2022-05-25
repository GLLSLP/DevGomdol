---
title: "[Vue.js]typescript에서 datetimeFormatter 사용하기"
date: 2022-05-25 17:50:00
category: 'Vue.js'
draft: false
---

js를 쓸땐 $datetimeFormatter. 라고 쓰면 바로 쓸수 있었는데 ts에선 전혀 안됐다



```ts
export default {
  install(Vue: { prototype: { $dateFormatter: (date: any) => string; $datetimeFormatter: (date: any) => string; $unixDatetimeFormatter: (unixTimestamp: any) => string; $numberFormatter: (number: any) => string; }; }) {
    Vue.prototype.$dateFormatter = common.dateFormatter;
    Vue.prototype.$datetimeFormatter = common.datetimeFormatter;
    Vue.prototype.$unixDatetimeFormatter = common.unixDatetimeFormatter;
    Vue.prototype.$numberFormatter = common.numberFormatter;
  }
};

// export const DataTransferItem =  (date: string | number | Date) => {
//   return "";
// }

export const common = {
  dateFormatter: (date: string | number | Date) => {
    const anyDate = new Date(date);
    if (anyDate) {
      const yyyy = anyDate.getFullYear();
      const mm = String(anyDate.getMonth() + 1).padStart(2, "0");
      const dd = String(anyDate.getDate()).padStart(2, "0");
      return yyyy + "-" + mm + "-" + dd;
    } else {
      return "";
    }
  },
  datetimeFormatter: (date: string | number | Date) => {
    const anyDate = new Date(date);
    if (anyDate) {
      const yyyy = anyDate.getFullYear();
      const MM = String(anyDate.getMonth() + 1).padStart(2, "0");
      const dd = String(anyDate.getDate()).padStart(2, "0");
      const HH = String(anyDate.getHours()).padStart(2, "0");
      const mm = String(anyDate.getMinutes()).padStart(2, "0");
      const ss = String(anyDate.getSeconds()).padStart(2, "0");
      return yyyy + "-" + MM + "-" + dd + " " + HH + ":" + mm + ":" + ss;
    } else {
      return "";
    }
  },
```

```ts
 
 const datetime = common.datetimeFormatter(strDatetime);
 
```
