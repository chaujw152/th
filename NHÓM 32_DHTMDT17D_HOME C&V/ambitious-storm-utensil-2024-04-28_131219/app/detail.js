import products from '/products.js';
import cart from './cart.js';

let listProduct = document.getElementById('listProduct');
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// load layout file
const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}
loadTemplate();
const initApp = () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    if(!thisProduct){
        window.location.href = "/";
    }
let detail = document.querySelector('.detail');
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;

    // Định dạng giá thành VNĐ
    let priceInVND = thisProduct.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    detail.querySelector('.price').innerText = priceInVND;

    detail.querySelector('.description').innerText = thisProduct.description;
    detail.querySelector('.addCart').dataset.id = thisProduct.id;

    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = ''; // Xóa nội dung cũ trước khi thêm sản phẩm mới

    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        
        // Định dạng giá thành VNĐ cho danh sách sản phẩm
        let priceInVNDList = product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

        newProduct.innerHTML = 
        `<a href="/detail.html?id=${product.id}">
            <img src="${product.image}">
        </a>
         <h2>${product.name}</h2>
        <div class="price">${priceInVND}</div>
        <button 
            class="addCart" 
            data-id='${product.id}'>
               Thêm vào giỏ hàng
        </button>`;
        listProductHTML.appendChild(newProduct);
    });
}