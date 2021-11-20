function menuTogger(){
    if (document.querySelector('nav').style.display == 'flex'){
        document.querySelector('nav').style.display = 'none';
    } else {
        document.querySelector('nav').style.display = 'flex';
    }
}
let slidersBanner = document.querySelector('#slidersBanner');
let sp1 = document.querySelector('#sp1');
let sp2 = document.querySelector('#sp2');
let sp3 = document.querySelector('#sp3');
let timer;

function primeiroSlide(){
    clearInterval(timer)
    slidersBanner.style.marginLeft = "0";
    sp2.classList.remove('active');
    sp3.classList.remove('active');
    sp1.classList.add('active');
    timer = setInterval(segundoSlide , 5000);


}
function segundoSlide(){
    clearInterval(timer)
    slidersBanner.style.marginLeft = "-100vw";
    sp1.classList.remove('active');
    sp3.classList.remove('active');
    sp2.classList.add('active');
    timer = setInterval(terceiroSlide , 5000);
}
function terceiroSlide(){
    clearInterval(timer)
    slidersBanner.style.marginLeft = "-200vw";
    sp1.classList.remove('active');
    sp2.classList.remove('active');
    sp3.classList.add('active');
    timer = setInterval(primeiroSlide , 5000);
}

let otb1 = document.querySelector('#otb1');
let otb2 = document.querySelector('#otb2');
let otb3 = document.querySelector('#otb3');
let ots1 = document.querySelector('#ots1');
let ots2 = document.querySelector('#ots2');
let ots3 = document.querySelector('#ots3');
let stn1 = document.querySelector('#stn1');
let stn2 = document.querySelector('#stn2');
let stn3 = document.querySelector('#stn3');

function ourTeamBt1() {
    otb2.classList.remove('active');
    otb3.classList.remove('active');
    otb1.classList.add('active');
    ots1.setAttribute('src', 'media/mulher1.png');
    ots2.setAttribute('src', 'media/homem1.png');
    ots3.setAttribute('src', 'media/mulher2.png');
    stn1.innerHTML = 'Jane Doe';
    stn2.innerHTML = 'Mike Chiller';
    stn3.innerHTML = 'Anna Jhons';
}
function ourTeamBt2() {
    otb1.classList.remove('active');
    otb3.classList.remove('active');
    otb2.classList.add('active');
    ots1.setAttribute('src', 'media/homem1.png');
    ots2.setAttribute('src', 'media/homem2.png');
    ots3.setAttribute('src', 'media/mulher1.png');
    stn1.innerHTML = 'Mike Chiller';
    stn2.innerHTML = 'Jhon Doe';
    stn3.innerHTML = 'Jane Doe';
}
function ourTeamBt3() {
    otb1.classList.remove('active');
    otb2.classList.remove('active');
    otb3.classList.add('active');
    ots1.setAttribute('src', 'media/homem2.png');
    ots2.setAttribute('src', 'media/mulher2.png');
    ots3.setAttribute('src', 'media/homem1.png');
    stn1.innerHTML = 'Jhon Doe';
    stn2.innerHTML = 'Anna Jhons';
    stn3.innerHTML = 'Mike Chiller';
}

let sbc = document.querySelector('#slidersBannerClients');
let hcb1 = document.querySelector('#hcb1');
let hcb2 = document.querySelector('#hcb2');
let hcb3 = document.querySelector('#hcb3');
let timer2;

function happyClients1(){
    clearInterval(timer2)
    sbc.style.marginLeft = "0";
    hcb2.classList.remove('active');
    hcb3.classList.remove('active');
    hcb1.classList.add('active');
    timer2 = setInterval(happyClients2 , 7000);


}
function happyClients2(){
    clearInterval(timer2)
    sbc.style.marginLeft = "-100vw";
    hcb1.classList.remove('active');
    hcb3.classList.remove('active');
    hcb2.classList.add('active');
    timer2 = setInterval(happyClients3 , 7000);
}
function happyClients3(){
    clearInterval(timer2)
    sbc.style.marginLeft = "-200vw";
    hcb1.classList.remove('active');
    hcb2.classList.remove('active');
    hcb3.classList.add('active');
    timer2 = setInterval(happyClients1 , 7000);
}