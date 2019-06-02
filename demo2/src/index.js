import { helloworld } from "./helloworld";
import { s } from "./es6";

let root1 = document.getElementById("root1");
root1.innerHTML = helloworld();
let root2 = document.getElementById("root2");
root2.innerHTML = s;
// document.write(helloworld());
// document.write(s);

if (module.hot) {
  console.log("index hot!");
  module.hot.accept();
}
