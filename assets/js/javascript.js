function menuTogger() {
  if (document.querySelector('nav').style.display == 'flex') {
    document.querySelector('nav').style.display = 'none';
  } else {
    document.querySelector('nav').style.display = 'flex';
  }
}
const c = el => document.querySelector(el);
let timer;

const sps = [c('#sp1'), c('#sp2'), c('#sp3')];

function mudarSlide(n) {
  clearInterval(timer);
  c('#slidersBanner').style.marginLeft = `${100 - n * 100}vw`;

  const atual = sps[n - 1];

  sps.forEach(sp => {
    if (sp !== atual) {
      sp.classList.remove('active');
    } else if (!atual.classList.contains('active')) {
      atual.classList.add('active');
    }
  });

  timer = setInterval(() => {
    if (sps.length === n) {
      mudarSlide(1);
    } else {
      mudarSlide(n + 1);
    }
  }, 5000);
}

c('#otb1').addEventListener('click', () => {
  c('#otb2').classList.remove('active');
  c('#otb3').classList.remove('active');
  c('#otb1').classList.add('active');

  c('#ots1').setAttribute('src', 'media/mulher1.png');
  c('#ots2').setAttribute('src', 'media/homem1.png');
  c('#ots3').setAttribute('src', 'media/mulher2.png');

  c('#stn1').innerHTML = 'Jane Doe';
  c('#stn2').innerHTML = 'Mike Chiller';
  c('#stn3').innerHTML = 'Anna Jhons';
});

c('#otb2').addEventListener('click', () => {
  c('#otb1').classList.remove('active');
  c('#otb3').classList.remove('active');
  c('#otb2').classList.add('active');

  c('#ots1').setAttribute('src', 'media/homem1.png');
  c('#ots2').setAttribute('src', 'media/homem2.png');
  c('#ots3').setAttribute('src', 'media/mulher1.png');

  c('#stn1').innerHTML = 'Mike Chiller';
  c('#stn2').innerHTML = 'Jhon Doe';
  c('#stn3').innerHTML = 'Jane Doe';
});

c('#otb3').addEventListener('click', () => {
  c('#otb1').classList.remove('active');
  c('#otb2').classList.remove('active');
  c('#otb3').classList.add('active');

  c('#ots1').setAttribute('src', 'media/homem2.png');
  c('#ots2').setAttribute('src', 'media/mulher2.png');
  c('#ots3').setAttribute('src', 'media/homem1.png');

  c('#stn1').innerHTML = 'Jhon Doe';
  c('#stn2').innerHTML = 'Anna Jhons';
  c('#stn3').innerHTML = 'Mike Chiller';
});

const hcs = [c('#hcb1'), c('#hcb2'), c('#hcb3')];
let timer2;

function happySliders(n) {
  clearInterval(timer2);

  c('#slidersBannerClients').style.marginLeft = `${100 - n * 100}vw`;

  const hcAtual = hcs[n - 1];

  hcs.forEach(hc => {
    if (hc !== hcAtual) {
      hc.classList.remove('active');
    } else if (!hcAtual.classList.contains('active')) {
      hcAtual.classList.add('active');
    }
  });

  timer2 = setInterval(() => {
    if (hcs.length === n) {
      happySliders(1);
    } else {
      happySliders(n + 1);
    }
  }, 7000);
}
