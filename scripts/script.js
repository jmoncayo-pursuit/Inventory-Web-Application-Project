// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.submit-box');
    const listContainer = document.getElementById('list-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const imageURL = document.getElementById('image-URL').value;
        const price = document.getElementById('price').value;
        const stock = document.getElementById('stock').value;

        const newBookItem = document.createElement('li');
        newBookItem.classList.add('books__item');

        newBookItem.innerHTML = `
            <img alt=" :) book pic here" src="${imageURL}">
            <div class="books__description">
                <h3 class="books__item__title">${title}</h3>
                <h4 class="books__item__author">${author}</h4>
                <h6 class="books__item__stock">${stock}</h6>
                <p class="books__item__price">${price}</p>
                <i class="fa-solid fa-trash-can"></i>
            </div>
        `;

        if (stock === 'In Stock') {
            newBookItem.querySelector('.books__item__stock').classList.add('in-stock');
        } else {
            newBookItem.querySelector('.books__item__stock').classList.add('out-of-stock');
        }

        listContainer.appendChild(newBookItem);

        form.reset();

        const successText = document.querySelector('.success-text');
        successText.style.visibility = 'visible';

        setTimeout(() => {
            successText.style.visibility = 'hidden';
        }, 3000);

        const trashIcon = newBookItem.querySelector('.fa-trash-can');
        trashIcon.addEventListener('click', () => {
            newBookItem.remove();
        });
    });

    listContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('fa-trash-can')) {
            const parentListItem = event.target.closest('.books__item');
            parentListItem.remove();
        }
    });
});
