let card_box = document.querySelector('.card_box')

function reload(params) {
    let card_item = document.createElement('div')
    let img_box = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let h4 = document.createElement('h4')
    let sale_price = document.createElement('div')
    let span = document.createElement('span')
    let buttons = document.createElement('div')
    let cart_btn = document.createElement('button')
    let cart_img = document.createElement('img')
    let credit_btn = document.createElement('button')

    card_item.classList.add('card_item')
    img_box.classList.add('img_box')
    sale_price.classList.add('sale_price')
    buttons.classList.add('buttons')
    cart_btn.classList.add('cart_btn')
    credit_btn.classList.add('credit_btn')

    cart_img.src = "img/cart.icon.svg"
    img.src = 'img/samsung-galaxy-a33-5g-6128gb-chernyy-45548-0.jpeg.png'
    p.innerHTML = 'Samsung Galaxy A33 5G 6/128GB Черный'
    h4.innerHTML = '3 275 000 сум'
    span.innerHTML = '443 000 сум x 12 мес'
    credit_btn.innerHTML = 'В рассрочку'

    card_box.append(card_item)
    card_item.append(img_box, p, h4, sale_price, buttons)
    img_box.append(img)
    sale_price.append(span)
    buttons.append(cart_btn, credit_btn)
    cart_btn.append(cart_img)
}

for(let i = 0; i < 20; i++) {
    reload()
}




















