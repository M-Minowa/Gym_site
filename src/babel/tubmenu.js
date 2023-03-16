"use strict";

// tabmenu
// ---------------------------------------- //

/// タブ
const tabList = document.querySelectorAll(".tab");
// タブコンテンツ
const tabContent = document.querySelectorAll(".tab-member");

//DOMが読み込み終わったら
document.addEventListener("DOMContentLoaded", () => {
  // タブに対してクリックイベントを適用
  tabList.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // activeクラスを削除
      document.querySelectorAll(".active")[0].classList.remove("active");
      // クリックしたタブにactiveクラスを付与
      tab.classList.add("active");
      // showクラスを削除
      document.querySelectorAll(".show")[0].classList.remove("show");
      // クリックしたタブと同じ配列番号のタブコンテンツにshowクラスを付与
      tabContent[index].classList.add("show");
    });
  });
});
