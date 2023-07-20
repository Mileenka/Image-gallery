import { dom } from '../data.js';

export const handlerSearch = () => {
    const searchText = dom.searchInput.value.toLowerCase();

    const imageBoxes = document.querySelectorAll('.image-box');

    imageBoxes.forEach((imageBox) => {
        const title = imageBox.querySelector('h6').textContent.toLowerCase();

        if (title.includes(searchText)) {
            imageBox.style.display = 'block';
        } else {
            imageBox.style.display = 'none';
        }
    })
};
