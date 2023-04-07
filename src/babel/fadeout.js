"use strict";

// fadeout
// ---------------------------------------- //

const priceList = document.querySelector(".price-list");
const priceListScroll = document.querySelector(".price-list__scroll");

priceList.addEventListener("scroll", () => {
  // scrollLeftプロパティの値を確認して、条件を満たす場合には要素をフェードアウトする
  if (priceList.scrollLeft > 20) {
    priceListScroll.classList.add("is-hide");
  }

  setTimeout(() => {
    priceListScroll.style.display = "none";
  }, "1000");
});


