const userList = document.querySelectorAll(".name-List li");

console.log(userList);

for (user of userList) {
  user.addEventListener("Click", function () {
    console.log(this);
  });
}
