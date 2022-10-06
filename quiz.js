const text = "nama saya adalah budi, saya bekerja sebagai frontend engineer"

const array = [1000, 20, 15, 18, 1, 9, 35]

const isObject = {
    nama_mobil: "ferrari",
    kecepatan: "6000 cc",
    harga: 20000000000,
    tipe: "tidak diketahui"
}
const arrayOf = [{
    nama_mobil: "lamborgini",
    kecepatan: "8000 cc",
    harga: 70000000000,
    tipe: "aventador"
}]

//1 . gunakan metode replaceAll() pada input variable text diatas: 
//output: "nama saya adalah budi saya bekerja sebagai javascript engineer"

// const value = text.replaceAll(",", "");
const value = function (string, before, after) {
    const text = string.replaceAll(before, after);
    return `"${text}"`;
  };
//   console.log(value(text, ",", ""));
//2. gunakan metode substring() pada input variable text diatas:
// output : "saya bekerja sebagai frontend engineer" 

// const updated_text = text.substring(23,text.length);
const substring = function (string, number) {
    const text = string.substring(number, string.length);
    return `"${text}"`;
  };
//   console.log(substring(text, 23));

//3. gunakan metode toUpperCase() pada input variable text diatas:
// output : "NAMA SAYA ADALAH BUDI, SAYA BEKERJA SEBAGAI FRONTEND ENGINEER"

// const valueBesar = text.toUpperCase();
const toUpperCase = function (string) {
    const text = string.toUpperCase();
    return `"${text}"`;
  };
  
//   console.log(text.toLocaleUpperCase());

  

//4. gunakan metode sorting berdasarkan descending dan ascending pada input variable array diatas:
// output : ascending :[1, 9, 15, 18, 20, 35, 1000]
// output : descending: [1000, 35, 20, 18, 15, 9, 1]

// const valueAB = array.sort((a, b) => a - b);

// const valueBA = array.sort((a, b) => b - a);
const ascending = function (array) {
    const valueAB = array.sort((a, b) => a - b);
    return `[${valueAB}]`;
  };
  const descending = function (array) {
    const valueBA = array.sort((a, b) => b - a);
    return `[${valueBA}]`;
  };
 
//   console.log(ascending(array));
//   console.log(descending(array));
//5. gunakan metode indexOf() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" = (number of character)
// const indexString = text.indexOf('frontend engineer');

const indexOfText = function (string) {
    const indexing = text.indexOf(string);
    return `${indexing}`
  };

//   console.log(indexOfText("frontend engineer"));

//7. gunakan metode includes() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" : (boolean value)
// const indexValue = text.includes('frontend engineer');
const indexValue = function (string) {
    const including = text.includes(string);
    return `${including}`
};
// console.log(indexValue('frontend engineer'));
//5. gunakan metode indexOf() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 18 = [nilainya]
// const indexArray = array.indexOf(18);
const indexArray = function (arr){
    const arraying = array.indexOf(arr);
    return `${arraying}`
};
// console.log(indexArray(18));
//7. gunakan metode includes() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 2000 = false
// const indexFalse = array.includes(2000);
const indexFalse = function (arr, number) {
    const arrayfalsing = array.includes(number);
    return `${arrayfalsing}`
};
// console.log(indexFalse(2000));
//8. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : hapus nilai selain 1000 = [35, 20, 18, 15, 9, 1]
// const valueFilter = array.filter((value => value !== 1000));
const valueFilter = function (num, arr) {
    const valueFiltering = arr.filter((value => value !== num))
    return `${valueFiltering}`
};
// console.log(valueFilter(1000, array));
//9. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai sama dengan 1000 = [1000]
// const valueFilter2 = array.filter((value => value === 1000));
const valueFilter2 = function (num, arr) {
    const valueFiltering2 = arr.filter((value => value === num))
return `${valueFiltering2}`
};
// console.log(valueFilter2(1000, array));

//10. gabungkan variable isObject kedalam variable arrayOf dengan menggunakan method push atau spread operator
/**
    output:
     const arrayOf = [{
        nama_mobil: "lamborgini",
        kecepatan: "8000 cc",
        harga: 70000000000,
        tipe: "aventador"
    },{
        nama_mobil: "ferrari",
        kecepatan: "6000 cc",
        harga: 20000000000,
        tipe: "tidak diketahui"
    }]
 * */ 
//  arrayOf.push({...isObject});
// console.log(arrayOf);
const combine = function (arr, obj) {
   arr.push(obj);
    return arr;
};
console.log(combine(arrayOf, isObject));
//11. Buat metode Function() dari sebuah  semua methode algorithma yg telah di kerjakan lalu return setiap kondisinya dan berikan nama function yg sesuai denga kebutuhan 
/**
    output : 
        function(){
            // isilah metode tersebut kedalam function()///
            // berikan return valuenya
        } 
* */