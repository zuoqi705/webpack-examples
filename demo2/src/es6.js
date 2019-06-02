var name = "Guy Fieri";
var place = "Flavortown";

export let s = `Heloss ${name}, foxxxr ${place}?`;

if (module.hot) {
  console.log("es6 hot!");
  module.hot.accept();
}
