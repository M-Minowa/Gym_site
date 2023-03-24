"use strict";

// tabmenu
// ---------------------------------------- //

/// タブ
const tabLists = document.querySelectorAll(".tab");
// タブコンテンツ
const tabContents = document.querySelectorAll(".tab-member");

//DOMが読み込み終わったら
document.addEventListener("DOMContentLoaded", () => {
  // タブに対してクリックイベントを適用
  tabLists.forEach((tabList, index) => {
    tabList.addEventListener("click", () => {
      tabLists.forEach((tabList) => {
        if (tabList.classList.contains("active")) {
          // activeクラスを削除
          tabList.classList.remove("active");
        }
      });
      tabLists[index].classList.add("active");

      tabContents.forEach((tabContent) => {
        if (tabContent.classList.contains("show")) {
          // showクラスを削除
          tabContent.classList.remove("show");
        }
      });
      // クリックしたタブと同じ配列番号のタブコンテンツにshowクラスを付与
      tabContents[index].classList.add("show");
    });
  });
});
