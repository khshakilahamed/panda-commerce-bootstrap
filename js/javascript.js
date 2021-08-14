// ------------------ h2 tag's color change - lightblue ----------------
const h2tags = document.getElementsByTagName('h2');
for (const h2 of h2tags) {
    h2.style.color = 'lightblue';
}

// ----------------- bags section color change- tomato ------------------
// const backpack = document.getElementById('bags');
// backpack.style.backgroundColor = 'tomato';
// --> shorchut
document.getElementById('bagpack').style.backgroundColor = 'tomato';


// -------------  card - border-radius= 30px ----------------------------
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

// ------------ created extra js button for console log  -------------------------------
const jsBtn = document.getElementById('extra-js-btn');
jsBtn.addEventListener('click', function () {
    console.log('This is Extra JS Button.');
});


// --------------------------- click to delete button -----------------------
/* const buyNowButtons = document.getElementsByClassName('panda-btn-buy-now');
for (const button of buyNowButtons) {
    button.addEventListener('click', function (event) {
        // document.getElementById('card').removeChild(button);
        event.target.parentNode.parentNode.removeChild(event.target);
    })
} */


// ------------------- let's stay in touch ------------- 
// text-field
// email-submit-btn
document.getElementById('text-field').addEventListener('keyup', function (event) {
    const submitBtn = document.getElementById('email-submit-btn');
    if (event.target.value == 'email') {
        submitBtn.removeAttribute('disabled');
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }
});

document.getElementById('text-field').addEventListener('change', function () {
    const textField = document.getElementById('text-field');
    console.log(textField.value);
});



// ------------ double click to change background ---------------- 
/* const doubleClick = document.getElementById('subscribe');
doubleClick.ondblclick = doubleFunc;

function doubleFunc() {
    document.getElementById('subscribe').style.backgroundColor = 'red';
} */

document.getElementById('subscribe').addEventListener('dblclick', function () {
    document.getElementById('subscribe').style.backgroundColor = 'red';
})


// --------------- image change ---------------- 
// document.getElementsByTagName('img').addEventListener('mouseenter', function(event){
//     event.target.
// });
