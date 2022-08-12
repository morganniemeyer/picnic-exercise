let numberOfItems = 0;

const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const watermelon = document.getElementById('watermelon');
const items = document.getElementById('items');

soda.addEventListener('click', () => {
    if (!soda.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');

    soda.classList.toggle('picked');
    if (soda.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});
cheese.addEventListener('click', () => {
    if (!cheese.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');

    cheese.classList.toggle('picked');
    if (cheese.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

grapes.addEventListener('click', () => {
    if (!grapes.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');

    grapes.classList.toggle('picked');
    if (grapes.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

bread.addEventListener('click', () => {
    if (!bread.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');

    bread.classList.toggle('picked');
    if (bread.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

watermelon.addEventListener('click', () => {
    if (!watermelon.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');

    watermelon.classList.toggle('picked');
    if (watermelon.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});
