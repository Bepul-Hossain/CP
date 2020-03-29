const prompt=require('prompt-sync')({sigint:true})
let meal_cost =Number(prompt());
let tip_percent=Number(prompt());
let tax_percent=Number(prompt());
let res;

function solve(meal_cost, tip_percent, tax_percent) {
  const tip=(meal_cost*(tip_percent/100));
  const tax=(meal_cost*(tax_percent/100));
  
  console.log(Math.round(meal_cost+tip+tax))

}
solve(meal_cost,tip_percent,tax_percent);

