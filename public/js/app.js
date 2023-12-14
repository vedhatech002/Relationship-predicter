//geting html elements to manipulate
const maleInputEl = document.getElementById("male-name");
const femaleInputEl = document.getElementById("female-name");
const predictBtn = document.getElementById("predict-btn");
const loaderEl = document.getElementById("loader");
const resultPageEl = document.getElementById("result-page");
const resultEl = document.getElementById("result");
const resultImgEl = document.getElementById("result-img");
const predictMoreBtn = resultPageEl.querySelector("div > button");

// console.log(maleInputEl);
// console.log(femaleInputEl);
// console.log(predictBtn);
// console.log(loaderEl);
// console.log(predictMoreBtn);

const flamesObject = {
  0: {
    result: "you guys are freinds ✌️",
    resultImg: "public/img/freinds.jpg",
  },
  1: {
    result: "you guys are in love ❤️",
    resultImg: "public/img/love.jpg",
  },
  2: {
    result: "you guys have affection 😇 ",
    resultImg: "public/img/affection.jpg",
  },
  3: {
    result: "you guys get Married soon 🎉 ",
    resultImg: "public/img/marriage.jpg",
  },
  4: {
    result: "you guys are Enemies 👿 ",
    resultImg: "public/img/enimies.jpg",
  },
  5: {
    result: "You guys are Brother and Sister 😅 ",
    resultImg: "public/img/brotherandsister.jpg",
  },
};

function predictRelationship() {
  //get input names from input box and transform to lower case
  let maleName = maleInputEl.value.toLowerCase();
  let femaleName = femaleInputEl.value.toLowerCase();

  // console.log(maleName);
  // console.log(femaleName);

  //replace all spaces from names and transforms string to array
  let maleArray = maleName.replaceAll(" ", "").split("");
  let femaleArray = femaleName.replaceAll(" ", "").split("");

  // console.log(maleArray);
  // console.log(femaleArray);

  let relationshipIndex = 0;
  //passing arrays to getrelationship function based on the length of the arrays
  if (maleArray.length > femaleArray.length) {
    relationshipIndex = getRelationship(maleArray, femaleArray);
  } else {
    relationshipIndex = getRelationship(femaleArray, maleArray);
  }

  //setting flames object result and result img to result page
  let relationship = flamesObject[relationshipIndex];
  console.log(relationship);
  resultEl.innerText = relationship.result;
  resultImgEl.src = relationship.resultImg;

  //to show loader remove hidden from classlist
  loaderEl.classList.remove("hidden");

  //time out function to hide loader after 4.2 seconds
  setTimeout(() => {
    loaderEl.classList.add("hidden");
  }, 4200);

  // remove hidden to show result page
  resultPageEl.classList.remove("hidden");

  //emptying input box after get result
  maleInputEl.value = "";
  femaleInputEl.value = "";

  //add event listner to close result page
  predictMoreBtn.addEventListener("click", () => {
    resultPageEl.classList.add("hidden");
  });
}

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

  return finalVal;
}

predictBtn.addEventListener("click", predictRelationship);
