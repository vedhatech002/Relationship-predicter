//geting html elements to manipulate
// const inputBoxEls = document.querySelectorAll("input");
// console.log(inputBoxEls);
const maleInputEl = document.getElementById("male-name");
const femaleInputEl = document.getElementById("female-name");
const predictBtn = document.getElementById("predict-btn");
const loaderEl = document.getElementById("loader");
const resultPageEl = document.getElementById("result-page");
const resultEl = document.getElementById("result");
const resultImgEl = document.getElementById("result-img");
const predictMoreBtn = resultPageEl.querySelector("div > button");


import freindsImg from "/public/img/freinds.jpg?url";
import loveImg from "/public/img/love.jpg?url";
import affectionImg from "/public/img/affection.jpg?url";
import marriageImg from "/public/img/marriage.jpg?url";
import enimiesImg from "/public/img/enimies.jpg?url";
import brotherSisterImg from "/public/img/brotherandsister.jpg?url";
const flamesObject = {
  0: {
    result: "you guys are friends ✌️",
    resultImg: freindsImg,
  },
  1: {
    result: "you guys are in love ❤️",
    resultImg: loveImg,
  },
  2: {
    result: "you guys have affection 😇 ",
    resultImg: affectionImg,
  },
  3: {
    result: "you guys get Married soon 🎉 ",
    resultImg: marriageImg,
  },
  4: {
    result: "you guys are Enemies 👿 ",
    resultImg: enimiesImg,
  },
  5: {
    result: "You guys are Brother and Sister 😅 ",
    resultImg: brotherSisterImg,
  },
};

function predictRelationship() {



  //validatte function return validate value
  let getInputNames = validation();
  let [maleName, femaleName] = getInputNames;

  // predict error from undifiend variable using if
  if (maleName !== undefined && femaleName !== undefined) {
    //replace all spaces from names and transforms string to array
    let maleArray = maleName.toLowerCase().replaceAll(" ", "").split("");
    let femaleArray = femaleName.toLowerCase().replaceAll(" ", "").split("");

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
    // console.log(relationship);
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
}

//core function to strike out same value in two names
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
  // console.log(combinedArray);
  let resultArray = [];
  combinedArray.forEach((e) => {
    if (e !== 0) {
      resultArray.push(e);
    }
  });
  // console.log(resultArray);

  let uniqueValue = resultArray.length;
  let finalVal = uniqueValue % 6; // [f,l,a,m,e,s] => length = 6;

  return finalVal;
}

function validation() {
  // merging two input box el to validate
  let inputFieldArray = [maleInputEl, femaleInputEl];
  let inputNames = [];
  inputFieldArray.forEach((el) => {
    if (el.value !== "") {
      inputNames.push(el.value);
    } else {
      el.nextElementSibling.innerText = "required";
    }
    el.addEventListener("keydown", (e) => {
      el.nextElementSibling.innerText = "";
    });
  });

  return inputNames;
}

predictBtn.addEventListener("click", predictRelationship);
