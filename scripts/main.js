
// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla はかっこいいよ、${myName} さん`;
}

myButton.onclick = function() {
  setUserName();
}

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  console.log("画像をクリックしました");
}
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }else{
    myImage.setAttribute(images/F57C43FA-C375-4C39-BE1B-F428367A7F0C_4_5005_c.jpeg);
  }
};
