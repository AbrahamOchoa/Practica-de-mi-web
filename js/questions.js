(function() {
    const titleQuestion = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestion)

    titleQuestion.forEach(questions => {
        questions.addEventListener('click', () => {
            let height = 0;
            let answer = questions.nextElementSibling;
            let addPadding = questions.nextElementSibling;
            addPadding.classList.toggle('questions__padding--add');
            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }
            answer.style.height = `${height}px`;
        });
    });

})();