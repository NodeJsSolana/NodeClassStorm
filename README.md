###### tags: `Web企業運算`


# Promise

> https://wcc723.github.io/development/2020/02/16/all-new-promise/

sync、Await 有什麼關係？

Promise 是用來優化非同步的語法，而 Async、Await 可以基於 Promise 讓非同步的語法的結構類似於 “同步語言”，更易讀且好管理。

![](https://i.imgur.com/gc5s6TF.png)


**Promise 預設會帶入 resolve, reject 的參數（可自訂名稱，但大家習慣 resolve 及 reject），resolve 代表成功；reject 代表失敗，而兩者必定只能回傳其中之一，且必定只能回傳一次。**

![](https://i.imgur.com/BudfSEg.png)

![](https://i.imgur.com/V4ylmLk.png)

```
let promise1 = new Promise(r => r('done'));
let promise2 = promise1.then(value => value);

console.log(promise1 === promise2);
```
也就是說，每一次呼叫的 then() 都是屬於上一個 new Promise() 或是 then() 所產生 Promise。

![](https://i.imgur.com/YY41Xwq.png)


![](https://i.imgur.com/zEsOPoI.png)


```
let promise = new Promise(r => r("done"));
promise.then(v => console.log(1, v));
promise.then(v => console.log(2, v));
```

# 實作 Promise 所需的 JS 語法
以下是談談在本篇文章中實作的 Promise 所需要的 JS 語法，每個人實作的 Promise 都不一定相同，按照各自的需求即可。

### ES6 Symbol
在研究 FidelityPromise 時，看到了平常沒使用過的 Symbol，後來查了才發現 Symbol 是 JavaScript ES6 版本後的其中一個原始型別(Primitive Type)。
在這篇文章中，Symbol 主要用來宣告在 class 中的屬性，其中一個**優點在於能夠隱藏在類別中的變數**。因此，在 Promise 類別外就不能夠輕易地取得在類別中的屬性，把 state、handler、queue、value 這些屬性都隱藏起來。
以下簡介 Symbol 的用法：

```
const speak = Symbol("speak");
class Person {
  constructor() {
    this[speak] = "speak";
  }
}
const p = new Person();
console.log(Object.keys(p));
// []
console.log(Object.getOwnPropertyNames(p));
// []
```

雖然 Symbol 讓類別中的屬性看起來很像是私有的 (private)，使用 Object.keys(p)、Object.getOwnPropertyNames(p) 不能夠看到類別中用 Symbol 定義的屬性。但是，其實還是有方法可以看到類別中這些屬性，你可以嘗試使用 Object.getOwnPropertySymbols(p) 或 Reflect.ownKeys(p) 強制讓 Symbol 屬性顯示出來。
