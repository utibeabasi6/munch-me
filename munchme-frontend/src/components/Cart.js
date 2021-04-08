export function addToCart(cake) {
    var cart = sessionStorage.getItem('cart');
    var cartId = sessionStorage.getItem('cartId');
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
    var cart = sessionStorage.getItem('cart');
    var cartId = sessionStorage.getItem('cartId');
    if (cart != null) {
        cart = JSON.parse(cart)
        cartId = JSON.parse(cartId)
        var index = cart['items'].find(c => c == cake)
        var idIndex = cartId['items'].find(c => c.id == cake['id'])
        console.log(index, idIndex)
        sessionStorage.setItem('cart', JSON.stringify({ 'items': cart['items'] }));
        sessionStorage.setItem('cartId', JSON.stringify({ 'items': cartId['items'] }));
    }
}
