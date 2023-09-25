// dark/light mode
const themeToggleBtn = document.querySelector('.header__light_dark_mode_toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});


// permet de faire apparaitre mes items (images) choisis
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
