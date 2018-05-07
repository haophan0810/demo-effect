// bat su kien sroll
const html = document.querySelector('html');
const nav = document.querySelector('.main-menu__wrap');
const backTop = document.querySelector('.back-to-top');
const btn = document.querySelectorAll('.btn');
const popupContent = document.querySelector('.popup-content');
const popup = document.querySelector('.popup');
const titlePopup = document.querySelector('.insert-text');
const imgPopup = document.getElementsByClassName('change-img');
// scroll
window.addEventListener('scroll', function () {
    let getScrollTop = html.scrollTop;
    if (getScrollTop > 70) {
        // add class
        console.log('add??');

        nav.classList.add('js-nav-fixed');

    }

    if (getScrollTop < 70) {

        nav.classList.remove('js-nav-fixed');

    }
    console.log('getScrollTop :', getScrollTop);


    // add class show back to top
    if (getScrollTop > 100) {
        // add class
        console.log('add??');
        

        backTop.classList.add('js-show-back-to-top');

    }
    if (getScrollTop < 100) {

        backTop.classList.remove('js-show-back-to-top');

    }

})


// click button
// console.log('btn :', btn);
// btn.addEventListener('click',function(){
//     alert("day la button");
// })

// for (let i = 0 ; i < btn.length ; i++){
    
//     btn[i].addEventListener('click',function(e){
//         console.log('e.target :', e.srcElement);
//         console.log('this :', this);
//         // alert("day la btn");
//     })
// }


for (let i = 0 ; i < btn.length ; i++){
    
    btn[i].onclick = function (){
    console.log('this :', this);
    // this.classList.add('js-btn');
    // show popup
    let src = $(`[data-number='${i}']`).attr('src');
    console.log('src :', src);
    let getTextBtn = this.innerText;
    console.log('getTextBtn :', getTextBtn);
    imgPopup[0].setAttribute('src','images/hotboy_erba.jpg');
    titlePopup.innerHTML=getTextBtn;
    popup.classList.add('js-show-popup');
    popupContent.classList.add('js-show-popup');


    }
}

popup.addEventListener('click',function(){
    popup.classList.remove('js-show-popup');
    popupContent.classList.remove('js-show-popup');
})