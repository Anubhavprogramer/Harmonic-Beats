import data from '../database/products.js';
// console.log(data); 

data.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="images">
            <img src="${product.image_url}" alt="${product.name}">
        </div>
        <div class="data">
            <h1 class="hovereffect">${product.name}</h1>
            <p class="type hovereffect">${product.category}</p>
            <p class="disc hovereffect">${product.description}</p>
            <p class="brand hovereffect">${product.brand}</p>
            <div class="datacontainer">
            <p class="stocks">Stocks: ${product.stock_quantity}</p>
                <p class="date hovereffect">${product.created_at}</p>
                <span class="price hovereffect">Price: ${product.price}</span>
                <button class="Buynow"><a href="${product['product-link']}">GO TO PRODUCT</a></button>
            </div>
        </div>
    `;

    productlist.appendChild(card);
    });