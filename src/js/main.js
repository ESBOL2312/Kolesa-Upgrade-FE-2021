import '../css/main.scss';

import productlist from './products.json';

const STATE = {
    activeCategory: null,
    categories:     [
        {
            id:    1,
            label: 'Все товары',
        },
        {
            id:    2,
            label: 'Одежда',
        },
        {
            id:    3,
            label: 'Аксессуары',
        },
    ],
    products:        productlist,
    preOrderProduct: null,

};
const orderModal = document.querySelector('.modal-1');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function createProduct(item) {
    const product = document.createElement('div');

    product.classList.add('main--clothes__element');

    const productImage = document.createElement('img');

    productImage.alt = item.image.alt;
    productImage.src = item.image.url;
    productImage.width = '330';
    productImage.diplay = 'none';
    productImage.style.display = 'none';

    const imageCover = document.createElement('div');

    imageCover.style.backgroundImage = `url(${item.image.url})`;
    imageCover.classList.add('main--clothes__imageCover');

    const textBlock = document.createElement('div');

    textBlock.classList.add('main--clothes__textBlock');

    const badge = document.createElement('p');

    badge.classList.add('main--clothes__new');
    badge.append('NEW');

    const point = document.createElement('p');

    point.classList.add('main--clothes__pts');
    point.append(`${item.cost} баллов`);

    const label = document.createElement('p');

    label.classList.add('main--clothes__text');
    label.append(item.title);

    const size = document.createElement('p');

    size.classList.add('main--clothes__size');
    size.append(`Размеры ${item.size}`);

    const orderBtn = document.createElement('button');

    orderBtn.classList.add('main--clothes__btn');
    orderBtn.type = 'btn';
    orderBtn.append('Заказать');
    orderBtn.setAttribute('prod-id', 1);
    orderBtn.addEventListener('click', () => {
        // console.log(e.target.attributes['prod-id'].value)
        STATE.preOrderProduct = item;
        document.querySelector('.modal-1 .title-1').firstChild.data = item.title;
        document.querySelector('.modal-1 .modal__left-side__media-block__product-img').src = item.image.url;
        document.querySelector('.modal-1 .action-block__cost').firstChild.data = `${item.cost} баллов`;

        document.querySelector('.modal-1 .detail').firstChild.data = item.description;

        const radioSizeContainer = document.querySelector('.modal-1 .size-list');

        removeAllChildNodes(radioSizeContainer);

        const sizes = item.size.split('/');

        sizes.map((itemS, index) => {
            const radioInput = document.createElement('input');

            radioInput.classList.add('custom-radio');
            radioInput.type = 'radio';
            radioInput.id = `sizeChoice-${index}`;
            radioInput.value = itemS;
            radioInput.name = 'size_choice';

            const choiseBtn = document.createElement('label');

            choiseBtn.classList.add('radio-choice-btn');
            choiseBtn.htmlFor = `sizeChoice-${index}`;
            const choiseBtnText = document.createElement('span');

            choiseBtnText.classList.add('radio-choice-btn__text', 'mr-8', 'ml-8');
            choiseBtnText.append(itemS);
            choiseBtn.append(choiseBtnText);
            radioSizeContainer.append(radioInput);
            radioSizeContainer.append(choiseBtn);

            return radioInput;
        });

        orderModal.classList.remove('hidden');
    });

    if (item.new) {
        textBlock.append(badge);
    }

    textBlock.append(point);
    textBlock.append(label);
    textBlock.append(size);
    textBlock.append(orderBtn);

    product.append(productImage);
    product.append(imageCover);
    product.append(textBlock);

    return product;
}
function drawProductsByCategory() {
    let productList = [];

    if (STATE.activeCategory === '1') {
        productList = [...STATE.products.clothes, ...STATE.products.accessories];
        productList.sort((a, b) => {
            if (a.new === true && b.new === false) {
                return -1;
            }

            if (a.new === false && b.new === true) {
                return 1;
            }

            return 0;
        });
    } else if (STATE.activeCategory === '2') {
        productList = [...STATE.products.clothes];
    } else if (STATE.activeCategory === '3') {
        productList = [...STATE.products.accessories];
    }

    const PRODUCTCONTAINER = document.querySelector('.main--clothes');

    removeAllChildNodes(PRODUCTCONTAINER);
    productList.map((itemP) => {
        const product = createProduct(itemP);

        PRODUCTCONTAINER.append(product);

        return product;
    });
}
function displayRadioValue(e) {
    if (e) {
        STATE.activeCategory = e.target.control.value;
    } else {
        const FILTERBUTTON = document.getElementsByName('radio');

        for (let i = 0; i < FILTERBUTTON.length; i += 1) {
            if (FILTERBUTTON[i].checked) {
                STATE.activeCategory = FILTERBUTTON[i].value;
            }
        }
    }

    drawProductsByCategory();
}
const FILTERBUTTONS = document.querySelectorAll('.main__radio label');

for (let i = 0; i < FILTERBUTTONS.length; i += 1) {
    FILTERBUTTONS[i].addEventListener('click', displayRadioValue);
}

document.getElementById('myBtn');

displayRadioValue();
document.querySelector('#app');
