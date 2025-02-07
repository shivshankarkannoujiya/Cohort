const teaFlavors = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavors[0];

const cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

const teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

const citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited[citiesVisited.length] = "Berlin"
citiesVisited.push("Berlin");


const teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop()


//TODO: RECAP
const popularTeas = ["green tea", "oolong tea", "chai"];
const softCopyTeas = popularTeas;
popularTeas.pop();
softCopyTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);


// TODO: Hard Copy
const topCities = ["Berlin", "Singapore", "New York"];
const hardCopyCities = [...topCities];
// const hardCopyCities = topCities.slice();
topCities.pop();
// console.log(hardCopyCities);


// TODO: MERGE 2 ARRAYS
const europeanCities = ["Paris", "Rome"];
const asianCities = ["Tokyo", "Bangkok"];
const worldCities = [...europeanCities, ...asianCities];
const worldCities2 = europeanCities.concat(asianCities);
// console.log(worldCities)
// console.log(worldCities2)


const teaMenu = ["masala tea", "oolong tea", "green tea", "earl grey"];
const menuLength = teaMenu.length


const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
const isLondonInList = cityBucketList.includes("London");
// console.log(isLondonInList);





