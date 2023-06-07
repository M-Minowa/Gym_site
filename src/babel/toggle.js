"use strict";

// toggle
// ---------------------------------------- //

///メニューが開いたら矢印ボタンを上にする
// メニューの開閉

const accordions = document.querySelectorAll(".accordion__item");

console.log(accordions);

accordions.forEach((accordion) => {
  const answer = accordion.querySelector(".faq__answer");

  accordion.addEventListener("click", () => {
    if (accordion.classList.contains("active")) {
      //閉じてる時
      accordion.classList.remove("active");
      answer.style.height = 0;
    } else {
      //開いてる時
      accordion.classList.add("active");
      answer.style.height = "auto";
      // answerの高さを取得する
      let height = answer.offsetHeight;
      // answerの高さをpxで表示する
      answer.style.height = height + "px";
      answer.animate([
        { height: 0},
        { height: height + "px" }
      ], 300)
    }
  });
})
