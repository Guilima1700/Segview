(function () {
    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = { x: width / 2, y: height / 2 };

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height + 'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        points = [];
        for (var x = 0; x < width; x = x + width / 20) {
            for (var y = 0; y < height; y = y + height / 20) {
                var px = x + Math.random() * width / 20;
                var py = y + Math.random() * height / 20;
                var p = { x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        for (var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for (var j = 0; j < points.length; j++) {
                var p2 = points[j];
                if (!(p1 == p2)) {
                    var placed = false;
                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        for (var i in points) {
            var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    function addListeners() {
        if (!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;

        for (var i in points) {
            let p = points[i];
            let dx = p.x - target.x;
            let dy = p.y - target.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 200) {
                p.x += dx * 0.05;
                p.y += dy * 0.05;
            }
        }
    }

    function scrollCheck() {
        if (document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height + 'px';
        canvas.width = width;
        canvas.height = height;
    }

    function initAnimation() {
        animate();
        for (var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in points) {
                var dist = Math.sqrt(getDistance(target, points[i]));
                if (dist < 200) {
                    points[i].active = 0.5;
                    points[i].circle.active = 0.7;
                } else if (dist < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.5;
                } else if (dist < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1 + 1 * Math.random(), {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
            onComplete: function () {
                shiftPoint(p);
            }
        });
    }

    function drawLines(p) {
        if (!p.active) return;
        for (var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
            ctx.stroke();
        }
    }

    function Circle(pos, rad, color) {
        var _this = this;

        (function () {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function () {
            if (!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
            ctx.fill();
        };
    }

    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

})();



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


document.addEventListener('scroll', function() {
    const section = document.querySelector('.container-3');
    const img = section.querySelector('img');

    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.4;

    if (sectionPosition < screenPosition) {
        img.classList.add('visible');
    }
});
