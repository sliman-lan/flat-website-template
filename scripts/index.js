// const a = alert("im working good!")
const fQuestions = document.querySelector(".faq-questions");
fQuestions.querySelectorAll("div p > i").forEach((icon) => {
    // console.log(question);
    icon.addEventListener("click", function (e) {
        const target = e.target;
        if (target.classList.contains("fa-plus")) {
            fQuestions.querySelectorAll("div p > i").forEach((i) => {
                i.classList.remove("fa-minus");
                i.classList.add("fa-plus");
                i.parentElement.nextElementSibling.classList.add("hidden");
            });
            target.classList.add("fa-minus");
            target.classList.remove("fa-plus");
            target.parentElement.nextElementSibling.classList.remove("hidden");
        } else {
            target.classList.remove("fa-minus");
            target.classList.add("fa-plus");
            target.parentElement.nextElementSibling.classList.add("hidden");
        }
    });
});
