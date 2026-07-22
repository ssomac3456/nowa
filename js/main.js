const faqItems = document.querySelectorAll(".faq_item");

for (let i = 0; i < faqItems.length; i++) {
  const question = faqItems[i].querySelector(".faq_question");

  question.addEventListener("click", function () {
    const isActive = faqItems[i].classList.contains("active");

    for (let j = 0; j < faqItems.length; j++) {
      faqItems[j].classList.remove("active");
    }

    if (!isActive) {
      faqItems[i].classList.add("active");
    }
  });
}

/* for (let i = 0; i < faqItems.length; i++) {
  const question = faqItems[i].querySelector(".faq_question");

  question.addEventListener("click", function () {
    faqItems[i].classList.toggle("active");
  });
} */
