let arr = [
  { name: "Arsenal", points: 99, GD: 45 },
  { name: "Chelsea", points: 75, GD: 39 },
  { name: "Manchester United", points: 60, GD: 29 },
  { name: "Liverpool", points: 88, GD: 39 },
  { name: "TOT", points: 88, GD: 39 },
  { name: "MAN City", points: 88, GD: 40 },
];
let arr1 = Array.from(arr)

arr1.sort((a, b) => {
  if (b.points != a.points) return b.points - a.points;
  else if (b.GD != a.GD) return b.GD - a.GD;
  else {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
});

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].name == arr1[i].name) {
      arr[j]["position"] = i + 1;
      break;
    }
  }
}
console.log(arr);
