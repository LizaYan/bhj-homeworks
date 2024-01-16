const tabsList = Array.from(document.querySelectorAll(".tab"));
const contentList = Array.from(document.querySelectorAll(".tab__content"))
for (i = 0; i < tabsList.length; i++) {
    tabsList[i].addEventListener("click", tabActivate);
}

function tabActivate(event) {
  const a = tabsList.indexOf(event.target);
  const b = contentList.filter((elem) => contentList.indexOf(elem) !== a)
  event.target.classList.add("tab_active");
  contentList[a].classList.add("tab__content_active");
  for (i = 0; i < b.length; i++) {
    b[i].classList.remove("tab__content_active"); 
  }
}