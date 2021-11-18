function menuTogger(){
    if (document.querySelector('nav').style.display == 'flex'){
        document.querySelector('nav').style.display = 'none';
    } else {
        document.querySelector('nav').style.display = 'flex';
    }
}
let slidersBanner = document.querySelector('#slidersBanner')
let sp1 = document.querySelector('#sp1')
let sp2 = document.querySelector('#sp2')
let sp3 = document.querySelector('#sp3')

function primeiroSlide(){
    slidersBanner.style.marginLeft = "0";
    sp2.classList.remove('active')
    sp3.classList.remove('active')
    sp1.classList.add('active')

}
function segundoSlide(){
    slidersBanner.style.marginLeft = "-100vw";
    sp1.classList.remove('active')
    sp3.classList.remove('active')
    sp2.classList.add('active')
}
function terceiroSlide(){
    slidersBanner.style.marginLeft = "-200vw";
    sp1.classList.remove('active')
    sp2.classList.remove('active')
    sp3.classList.add('active')
}