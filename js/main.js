const faqItems = document.querySelectorAll(".faq_item");

for (let i = 0; i < faqItems.length; i++) {
  const question = faqItems[i].querySelector(".faq_question");

  question.addEventListener("click", function () {
    const isActive = faqItems[i].classList.contains("active");
    const icon = faqItems[i].querySelector(".faq_icon img"); 

    for (let j = 0; j < faqItems.length; j++) {
      faqItems[j].classList.remove("active");
      icon.src = "img/faq/+_btn.png";
    }

    if (!isActive) {
      faqItems[i].classList.add("active");
      icon.src = "img/faq/+_btn_2.png";
    }
  });
}

/* for (let i = 0; i < faqItems.length; i++) {
  const question = faqItems[i].querySelector(".faq_question");

  question.addEventListener("click", function () {
    faqItems[i].classList.toggle("active");
  });
} */
