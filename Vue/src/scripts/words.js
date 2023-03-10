import json_file from "../data/fr_1500.json";

export default {
  makeWordsList() {
    const arr = []
    let min = 0;
    let max = json_file.length;
    for (let i = 0; i <= 100; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      arr.push(json_file[randomNumber]); // mot aléatoire
    }
    return arr;
  },
  makeColors(arr) {
    const newArr = []
    for (let index = 0; index < arr.length; index++) {
      let row = [];
      for (let idx = 0; idx < arr[index].length; idx++) {
        row.push("#646669");
      }
      newArr.push(row);
    }
    return newArr
  },
};
