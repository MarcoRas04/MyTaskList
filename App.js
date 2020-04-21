const userList = document.querySelector(".name-List li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function () {
  //Create an Li
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  //Add the input into the Li
  newLi.appendChild(liContent);
  //Attach to user list already existing
  userList.appendChild(newLi);
});
