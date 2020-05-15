function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descrBtn = document.querySelectorAll('.description-btn');

    descrBtn.forEach((item) => {
        item.addEventListener('click', () => {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
}

module.exports = modal;