const stars = document.querySelectorAll('.rating--star');

stars.forEach((star, clickedId) => {
    star.addEventListener('click', () => {
        stars.forEach((star, otherId) => {
            star.classList.remove('rating--active');
            if (otherId <= clickedId) {
                star.classList.add('rating--active');
            }
        });
    });
});