import _ from 'lodash';

export function addToCart(cake) {
    let cart = sessionStorage.getItem('cart');
    let cartId = sessionStorage.getItem('cartId');
    if (cart == null || cartId == null) {
        sessionStorage.setItem('cart', JSON.stringify({ 'items': [cake] }))
        sessionStorage.setItem('cartId', JSON.stringify({ 'items': [cake['id']] }))
    } else {
        cart = JSON.parse(cart)
        cartId = JSON.parse(cartId)
        if (!cartId['items'].includes(cake['id'])) {
            cart['items'].push(cake)
            cartId['items'].push(cake['id'])
            sessionStorage.setItem('cart', JSON.stringify({ 'items': cart['items'] }));
            sessionStorage.setItem('cartId', JSON.stringify({ 'items': cartId['items'] }));
        }
    }
}

export function getCart() {
    return JSON.parse(sessionStorage.getItem('cart')) || { 'items': [] };
}

export function removeFromCart(cake) {
    let cart = sessionStorage.getItem('cart');
    let cartId = sessionStorage.getItem('cartId');
    if (cart != null) {
        cart = JSON.parse(cart)
        cartId = JSON.parse(cartId)
        _.remove(cart['items'], cake)
        _.remove(cartId['items'], (n) => n === cake['id'])
        sessionStorage.setItem('cart', JSON.stringify({ 'items': cart['items'] }));
        sessionStorage.setItem('cartId', JSON.stringify({ 'items': cartId['items'] }));
    }
}
