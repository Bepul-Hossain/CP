//run: ts-node index.ts

Tutorial list
1. [typescripttutorial.net](https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/)

```
Cannot redeclare block-scoped variable 'user'.ts(2451)
test.js(1, 5): 'user' was also declared here.
solve this issue.
```
1. [cannot-redeclare-block-scoped-variable-the-reason-behind-the-error-and-the-way-to-resolve-it](https://www.aritsltd.com/blog/frontend-development/cannot-redeclare-block-scoped-variable-the-reason-behind-the-error-and-the-way-to-resolve-it/)
```
export {}
interface User {
    name: string,
    id: number
}
const user: User = {
    name: "Bepul",
    id: 10
}
console.log(user)

```