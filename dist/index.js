// FONKSİYONLAR ----------------------
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
const year1 = isLeapYear(2024);
const year2 = isLeapYear(2021);
const year3 = isLeapYear(2020);
const year4 = isLeapYear(2019);
console.log(year1, year2, year3, year4);
export {};
// -----------------------------------
//# sourceMappingURL=index.js.map
