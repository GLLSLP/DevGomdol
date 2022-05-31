---
title: "[Vue.js]Typescript에서 DateTimeFormatter 사용하기"
date: 2022-05-25 17:50:00
category: 'Vue.js'
draft: false
---

타입스크립트에서 Date형식을 YYYY-MM-DD형식으로 바꾸고 싶다!



자바스크립트를 쓸땐 common.js를 만든다음 아래 내용을 넣어두면 다른 js파일에서 $datetimeFormatter.로 바로 쓸수 있었는데 타입스크립트에선 그렇게 할 수 없었다. 

```ts
export default {
  install(Vue: { prototype: { $dateFormatter: (date: any) => string; $datetimeFormatter: (date: any) => string; $unixDatetimeFormatter: (unixTimestamp: any) => string; $numberFormatter: (number: any) => string; }; }) {
    Vue.prototype.$dateFormatter = common.dateFormatter;
    Vue.prototype.$datetimeFormatter = common.datetimeFormatter;
    Vue.prototype.$unixDatetimeFormatter = common.unixDatetimeFormatter;
    Vue.prototype.$numberFormatter = common.numberFormatter;
  }
};

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

타입스크립트에서 쓰려면 import를 해준다음  impor한이름.datetimeFormatter()로 써줘야 한다!

```ts
import { common } from "@/util/common"
 const datetime = common.datetimeFormatter(strDatetime);
```


역시 타입스크립트는 자바스크립트 특유의 어물쩡~이 안되는것 같다.
