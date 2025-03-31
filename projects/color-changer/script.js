let box = document.querySelectorAll(".container div");

box.forEach((boxes) => {
  boxes.addEventListener("click", function (e) {
    let color = getComputedStyle(e.target).backgroundColor;
    document.body.style.backgroundColor = color;
  });
});
