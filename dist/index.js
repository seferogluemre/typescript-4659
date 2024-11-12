// FONKSİYONLAR -------------------------
// SORU 1 Çözümü;
const kardesPayi = (name) => {
  name
    ? console.log(`Bir Tane ${name} için, bir de benim için`)
    : console.log(`Bir Tane senin için bir tane benim için`);
};
kardesPayi("Emre");
kardesPayi();
// -----------------------------------
// SORU 2 Çözümü;
function isLeapYear(year) {
  //Eger yıl 4'e tam bölünüyorsa yıl olabilir Ancak 100'de tam bölünüyorsa artık yıl degil
  //Veya yıl 400'e tam bölünüyorsa yıl olabilir
  return (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0;
}
const year1 = isLeapYear(2024); /*TRUE*/
const year2 = isLeapYear(2021); /*FALSE */
const year3 = isLeapYear(2020); /*TRUE */
const year4 = isLeapYear(2019); /*FALSE */
console.log(year1, year2, year3, year4);
const dune = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};
const cats = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};
// --------------------------------
// SORU 2 Çözümü;
function getProfit(movie) {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
const profit1 = getProfit(dune);
const profit2 = getProfit(cats);
console.log(`Profit 1:${profit1},| Profit 2:${profit2}`);
// --------------------------
// ARRAYLER -------------------
// Soru 1 Çözümü;
const ages = [];
// -------
// Soru 2 Çözümü;
const gameBoard = [
  ["Emre", "Yunus", "Seferoğlu"],
  ["Ahmet", "Mehmet", "Enes"],
];
// -------
// Soru 4 Çözümü;
const getTotal = (array) => {
  // Reduce ile belirli bir degere indirgemek için kullandık.
  // İlk parametresi herbir elemanı işler ve bu parametreye atar
  // Allta ise totalPrice üzerine her bir productın fiyatını ekledik ve başlangıç degeri olarak 0 verdik
  return array.reduce((totalPrice, product) => totalPrice + product.price, 0);
};
// Örnek Objes
// Product Türünden oluşan ürün elemanları içeren örnek array oluşturduk ve getTotal fonk parametre olarak gönderdik
const products = [
  { name: "Ürün 1", price: 120 },
  { name: "Ürün 2", price: 200 },
  { name: "Ürün 3", price: 20 },
];
const total = getTotal(products);
console.log("Ürünlerin Toplam Fiyatı:" + total);
export {};
//# sourceMappingURL=index.js.map
