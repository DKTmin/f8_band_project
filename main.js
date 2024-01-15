const buyBtns = document.querySelectorAll('.js-buy-ticket')

const model = document.querySelector('.js-model')

const modelClose = document.querySelector('.js-model-close')

const modelContainer = document.querySelector('.js-model-container')

// Hàm hiển thị BT
function showBuyTickets() {
    model.classList.add('open')
}
// Hàm ẩn BT
function hideBuyTickets() {
    model.classList.remove('open')
}
// Lặp qua từng thủ button và nghe hành vi click
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
// Nghe hành bi click vào button close
modelClose.addEventListener('click', hideBuyTickets)

model.addEventListener('click', hideBuyTickets)

modelContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})