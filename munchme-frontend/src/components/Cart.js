import _ from 'lodash';
import { createContext } from 'react';

export function addToCart(cake, quantity) {
    if (cake === undefined || quantity === undefined) return 0
    let cart = sessionStorage.getItem('cart');
    let cartId = sessionStorage.getItem('cartId');
    if (cart == null || cartId == null) {
        cake['quantity'] = quantity
        sessionStorage.setItem('cart', JSON.stringify({ 'items': [cake] }))
        sessionStorage.setItem('cartId', JSON.stringify({ 'items': [cake['id']] }))
    } else {
        cart = JSON.parse(cart)
        cartId = JSON.parse(cartId)
        if (!cartId['items'].includes(cake['id'])) {
            cake['quantity'] = quantity
            cart['items'].push(cake)
            cartId['items'].push(cake['id'])
            sessionStorage.setItem('cart', JSON.stringify({ 'items': cart['items'] }));
            sessionStorage.setItem('cartId', JSON.stringify({ 'items': cartId['items'] }));
        } else {
            let c = _.find(cart['items'], (c) => c.id === cake.id)
            let index = cart['items'].findIndex((c) => c.id === cake.id)
            c['quantity'] += quantity
            cart['items'].splice(index, 1, c)
            sessionStorage.setItem('cart', JSON.stringify({ 'items': cart['items'] }))
        }
    }
    return getTotalItemsInCart()
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
    return getTotalItemsInCart()
}

export function getTotalItemsInCart() {
    let cart = JSON.parse(sessionStorage.getItem('cart'))
    if (!cart) return 0
    let totalQuantity = 0
    for (let i = 0; i < cart['items'].length; i++) {
        const element = cart['items'][i];
        totalQuantity += element['quantity']

    }
    return totalQuantity
}


export const CartContext = createContext(0)