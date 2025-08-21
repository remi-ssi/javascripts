let singleRose = 8;
let singleLily = 10;
let singleTulip = 2;
let roses = 70;
let lilies = 50;
let tulips = 120;
let totalRose = singleRose * roses;
let totalLily = singleLily * lilies;
let totalTulips = singleTulip * tulips;

console.log(`Rose - unit price: ${singleRose}, quantity: ${roses}. value: ${totalRose}`);
console.log(`Lily - unit price: ${singleLily}, quantity: ${lilies}, value: ${totalLily}`);
console.log(`Tulip - unit price: ${singleTulip}, quantity: ${tulips}, value: ${totalTulips}`)
console.log(`Total:  ${totalRose + totalLily + totalTulips}`);