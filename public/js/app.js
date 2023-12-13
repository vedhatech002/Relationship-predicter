const maleName = "surya";
const femaleName = "jyothika";

const flames = ["freind", "lover", "affection", "marriage", "enimes", "sister"];
let maleArray = maleName.split("");
let femaleArray = femaleName.split("");
console.log(maleArray);
console.log(femaleArray);

let relationshipIndex = 0;
if (maleArray.length > femaleArray.length) {
  relationshipIndex = getRelationship(maleArray, femaleArray);
} else {
  relationshipIndex = getRelationship(femaleArray, maleArray);
}

let relationship = flames[relationshipIndex];
console.log(relationship);

function getRelationship(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    let foundindex = array2.indexOf(array1[index]);
    // console.log(foundindex);
    if (foundindex >= 0) {
      //   console.log(foundindex);
      array2[foundindex] = 0;
      array1[index] = 0;
    }
  }
  console.log(array1);
  console.log(array2);

  let combinedArray = [...array1, ...array2];
  console.log(combinedArray);
  let resultArray = [];
  combinedArray.forEach((e) => {
    if (e !== 0) {
      resultArray.push(e);
    }
  });
  console.log(resultArray);

  let uniqueValue = resultArray.length;
  let finalVal = uniqueValue % 6; // [f,l,a,m,e,s] => length = 6;
  relationshipIndex;
  return finalVal;
}
