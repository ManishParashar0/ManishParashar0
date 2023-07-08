let cards = document.querySelectorAll("#cards>div");

let changeColor = () => {
    cards.forEach((element) => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        element.addEventListener("mouseover", function () {
            element.style.backgroundColor = "#" + randomColor;
        });
        element.addEventListener("mouseout", function () {
            element.style.backgroundColor = "white";
        });
    });
};


// changeColor();