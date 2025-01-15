document.addEventListener('scroll', function () {
    const menu = document.getElementById('cabecalho');
    const itensMenu = document.getElementById('menu-cabecalho');
    const logo = document.getElementById('logo');
    const fecharSimbolo = document.getElementById('fechar-menu-mobile');
    const abrirSimbolo = document.getElementById('simbolo-menu-mobile');


    if (window.scrollY > 50) { 
        menu.classList.add('cabecalho-sticky');
        itensMenu.classList.remove('menu-cabecalho');
        itensMenu.classList.add('menu-cabecalho-sticky');
        logo.classList.remove('logo');
        logo.classList.add('logo-sticky');
    } else {
        menu.classList.remove('cabecalho-sticky');
        itensMenu.classList.add('menu-cabecalho');
        itensMenu.classList.remove('menu-cabecalho-sticky');
        logo.classList.add('logo');
        logo.classList.remove('logo-sticky');
    }

    if (window.matchMedia("(max-width: 992px)").matches) {
        menuMobile.style.display = 'none';
        fecharSimbolo.style.display = 'none';
        abrirSimbolo.style.display = 'block';
    }
});

function entrarContato(){
    let zap = 'https://wa.me/+5579991391714'
    window.open(zap, '_blank')
}

document.addEventListener('DOMContentLoaded', function () {
    function saibaMais() {
        const buttonMonitoramento = document.getElementById('button-monitoramento');
        const buttonInstalacao = document.getElementById('button-instalacao');
        const buttonProjetos = document.getElementById('button-projetos');

        const urlSaibaMais = 'https://wa.me/+5579991391714?text=';

        if (buttonMonitoramento) {
            buttonMonitoramento.addEventListener('click', function () {
                let msg = 'Olá, vim pelo site oficial da Segview e gostaria de saber sobre o serviço de Monitoramento com Inteligência Artificial! =)'; 
                window.open(urlSaibaMais + encodeURIComponent(msg), '_blank');
            });
        }

        if (buttonInstalacao) {
            buttonInstalacao.addEventListener('click', function () {
                let msg = 'Olá, vim pelo site oficial da Segview e gostaria de saber sobre o serviço de Instalação de Câmeras! =)'; 
                window.open(urlSaibaMais + encodeURIComponent(msg), '_blank');
            });
        }

        if (buttonProjetos) {
            buttonProjetos.addEventListener('click', function () {
                let msg = 'Olá, vim pelo site oficial da Segview e gostaria de saber sobre o serviço de Projetos de Segurança! =)'; 
                window.open(urlSaibaMais + encodeURIComponent(msg), '_blank');
            });
        }
    }

    saibaMais();
});


const elementosScroll = document.querySelectorAll('.hidden');
const scrollLerMais = document.querySelectorAll('.hidden-ler');
const scrollInverso = document.querySelectorAll('.hidden-ler-inverso');
const scrollHidden2 = document.querySelectorAll('.hidden-2');

const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
});

elementosScroll.forEach((elemento) => myObserver.observe(elemento));
scrollLerMais.forEach((ler) => myObserver.observe(ler));
scrollInverso.forEach((inverso) => myObserver.observe(inverso));
scrollHidden2.forEach((hidden2) => myObserver.observe(hidden2));

document.addEventListener("DOMContentLoaded", () => {
    const statsSection = document.querySelector(".stats-section");
    const counters = document.querySelectorAll(".stat-item h2");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.unobserve(statsSection);
            }
        });
    }, {
        threshold: 0.4
    });

    observer.observe(statsSection);

    function startCounting() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const increment = target / 200;

            let current = 0;

            const updateCounter = () => {
                current += increment;

                if (current < target) {
                    counter.textContent = `+${Math.ceil(current)}`;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = `+${target}`;
                }
            };

            updateCounter();
        });
    }
});

const celularContainer = document.querySelector('.phone-container');
const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');
const video = document.querySelector('.background-video');

playButton.addEventListener('click', () => {
    video.style.display = 'block';
    video.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
    celularContainer.style.background = 'none';
});

pauseButton.addEventListener('click', () => {
    video.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
});

const menuItems = document.querySelectorAll(".container-ul ul li a");
const cards = document.querySelectorAll(".conteudo-ul");

function toggleCard(index) {
    cards.forEach(card => card.classList.remove("active"));
    cards[index].classList.add("active");
    
    menuItems.forEach(item => item.classList.remove('active'));
    menuItems[index].classList.add('active');
}

menuItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        toggleCard(index);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.5 }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
});

const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
    var newActive = event.target.closest('.carousel__item');
  
    if (!newActive || newActive.classList.contains('carousel__item_active')) {
      return;
    }
  
    update(newActive);
  });  

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

const observerMenu = new IntersectionObserver((entriesMenu) => {
    entriesMenu.forEach((entryMenu) => {
        if (entryMenu.isIntersecting){
            entryMenu.target.classList.add('show-mobile')
        } else {
            entryMenu.target.classList.remove('show-mobile')
        }
    })
});

const menuElementos = document.querySelectorAll('.hidden-menu');
menuElementos.forEach((elementoMenu) => observerMenu.observe(elementoMenu));

const menuPc = document.getElementById('menu-cabecalho');
const simboloAbrirMenu = document.getElementById('simbolo-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');
const simboloFechar = document.getElementById('fechar-menu-mobile');

const mapaBrasil = document.getElementById('mapa-brasil');
const containerLocais = document.getElementById('container-11');

function toggleMenu() {
    if (window.matchMedia("(max-width: 992px)").matches) {
        menuPc.style.display = "none"; 
        simboloAbrirMenu.style.display = 'block';

        mapaBrasil.style.display = 'block';
        containerLocais.style.backgroundImage = "url(assets/aracaju.jpg)"

    } else {
        menuPc.style.display = "flex";
        simboloAbrirMenu.style.display = 'none';
        menuMobile.style.display = 'none';
        simboloFechar.style.display = 'none';

        mapaBrasil.style.display = 'none';
        containerLocais.style.backgroundImage = 'url(assets/aracaju-desktop.png)'

    }
}

const simboloMenuMobile = document.getElementById('simbolo-menu-mobile');
const simboloFecharMenu = document.getElementById('fechar-menu-mobile');
const itensMenu = document.querySelectorAll('.item-mobile a');

function abrirMenu() {
    menuMobile.style.display = 'block';
    simboloMenuMobile.style.display = 'none';
    simboloFecharMenu.style.display = 'block';
}

function fecharMenu() {
    menuMobile.style.display = 'none'
    simboloFecharMenu.style.display = 'none';
    simboloMenuMobile.style.display = 'block';
}

toggleMenu();
window.addEventListener("resize", toggleMenu);

const mediaQuery = window.matchMedia("(max-width: 992px)");
mediaQuery.addEventListener("change", handleScreenChange);
handleScreenChange(mediaQuery);

function redirecionamento(){
    menuMobile.style.display = 'none';
    simboloMenuMobile.style.display = 'block';
    simboloFecharMenu.style.display = 'none';
}

const videoInicial = document.querySelector('video');
videoInicial.play().catch(error => {
    console.error('Reprodução automática bloqueada:', error);
});

function irParaVideo(){
    window.location.href = '#container-6';
    document.getElementById('video-completo-segv').innerHTML = "<video src='assets/video-segv.mp4' controls muted autoplay id='video-completo-segv'></video>"
}

function enviarMensagem() {
    const nome = document.getElementById('nome').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const texto = `Olá, meu nome é ${nome}.\nAssunto: ${assunto}.\nMensagem: ${mensagem}`;
    const numero = '+5579991391714'; 

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

const brasilBounds = [
    [-33.7422, -73.9828],
    [5.2718, -32.3928]
];
  
const map = L.map('map', {
    center: [-14.235004, -51.92528],
    zoom: 4,
    maxBounds: brasilBounds,
    maxBoundsViscosity: 1.0
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 4,
    maxZoom: 7 
}).addTo(map);
  
const locais = [
    { lat: -23.55052, lng: -46.633308, descricao: "São Paulo - SP: Escritório Principal" },
    { lat: -22.906847, lng: -43.172897, descricao: "Rio de Janeiro - RJ: Parceiros Locais" },
    { lat: -15.826691, lng: -47.921822, descricao: "Brasília - DF: Escritório Administrativo" },
    { lat: -12.971399, lng: -38.501221, descricao: "Salvador - BA: Projetos em Andamento" },
    { lat: -8.047562, lng: -34.877, descricao: "Recife - PE: Suporte Técnico" }
];
  
locais.forEach(local => {
    L.marker([local.lat, local.lng])
    .addTo(map)
    .bindPopup(`<strong>${local.descricao}</strong>`);
});



const container = document.querySelector('.c');
const cardss = document.querySelectorAll('.ci');

container.addEventListener('scroll', () => {
  clearTimeout(container.dataset.timeout);

  container.dataset.timeout = setTimeout(() => {
    const scrollPosition = container.scrollLeft;
    const cardWidth = cardss[0].offsetWidth + 16;

    const index = Math.round(scrollPosition / cardWidth);

    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  }, 150);
});
