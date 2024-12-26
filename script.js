let video = document.querySelector('video');

window.addEventListener('scroll' , function(){
    let value = 1 + this.window.scrollY/-700;
    video.style.opacity = value;
});

let text = document.getElementById('conteudo-container-1');

window.addEventListener('scroll' , function(){
    let value = 1 + this.window.scrollY/-700;
    text.style.opacity = value;
});


document.addEventListener('scroll', function () {
    const menu = document.getElementById('cabecalho');
    const itensMenu = document.getElementById('menu-cabecalho');
    const logo = document.getElementById('logo');


    if (window.scrollY > 50) { 
        menu.classList.add('cabecalho-sticky');
        itensMenu.classList.remove('menu-cabecalho');
        itensMenu.classList.add('menu-cabecalho-sticky');
        logo.classList.remove('logo');
        logo.classList.add('logo-sticky');
        menuMobile.style.display = 'none';
    } else {
        menu.classList.remove('cabecalho-sticky');
        itensMenu.classList.add('menu-cabecalho');
        itensMenu.classList.remove('menu-cabecalho-sticky');
        logo.classList.add('logo');
        logo.classList.remove('logo-sticky');
    }
});

const elementosScroll = document.querySelectorAll('.hidden');
const scrollLerMais = document.querySelectorAll('.hidden-ler');

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



const menuItems = document.querySelectorAll(".container-ul ul li a");
const cards = document.querySelectorAll(".conteudo-ul");

function toggleCard(index) {
    cards.forEach(card => card.classList.remove("active"));

    cards[index].classList.add("active");
}

menuItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        toggleCard(index);
    });
});


const menuuItems = document.querySelectorAll('.container-ul ul li a');

menuuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        menuuItems.forEach(item => item.classList.remove('active'));

        this.classList.add('active');
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

let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function(){
    nextImage();
}, 5000);

function nextImage(){
    count++;
    if (count > 9){
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;

}

const mediaQuery = window.matchMedia("(max-width: 576px)");
function handleScreenChange(e) {

    if (e.matches) {
        setInterval(function(){
            nextImage();
        }, 4000);
    } else {
        setInterval(function(){
            nextImage();
        }, 5000);
    }

}

mediaQuery.addEventListener("change", handleScreenChange);
handleScreenChange(mediaQuery);

const menuPc = document.getElementById('menu-cabecalho');
const simboloAbrirMenu = document.getElementById('simbolo-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');
const simboloFechar = document.getElementById('fechar-menu-mobile');

function toggleMenu() {
    if (window.matchMedia("(max-width: 576px)").matches) {
        menuPc.style.display = "none"; 
        simboloAbrirMenu.display = 'block';
    } else {
        menuPc.style.display = "flex";
        simboloAbrirMenu.display = 'none';
        menuMobile.style.display = 'none';
        simboloFechar.style.display = 'none';
    }
}

toggleMenu();
window.addEventListener("resize", toggleMenu);

const simboloMenuMobile = document.getElementById('simbolo-menu-mobile');
const simboloFecharMenu = document.getElementById('fechar-menu-mobile');
const itensMenu = document.querySelectorAll('.item-mobile a');
const conteudoPrincipal = document.querySelectorAll('.conteudo-principal')

function toggleVisibilidadeConteudo(ocultar) {
    conteudoPrincipal.forEach(elemento => {
        elemento.classList.toggle('ocultar', ocultar);
    });
}

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

const elementosScrollMobile = document.querySelectorAll('.hidden-mobile');
const myObserverMobile = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});

elementosScrollMobile.forEach((elementosMobile) => myObserverMobile.observe(elementosMobile));