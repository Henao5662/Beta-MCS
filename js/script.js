const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".side-menu");

if(toggle){
    toggle.onclick = () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    }
}

// MODAL INFO
document.querySelectorAll(".info-card").forEach(card=>{
    card.onclick=()=>{
        const modal=document.createElement("div");
        modal.className="modal";
        modal.innerHTML=`
        <div class="modal-content">
            <h3>${card.dataset.title}</h3>
            <p>${card.dataset.text}</p>
        </div>`;
        modal.onclick=()=>modal.remove();
        document.body.appendChild(modal);
    }
});

// LIGHTBOX
document.querySelectorAll(".gallery-img").forEach(img=>{
    img.onclick=()=>{
        const modal=document.createElement("div");
        modal.className="modal";
        modal.innerHTML=`<img src="${img.src}" style="max-width:90%;border-radius:20px">`;
        modal.onclick=()=>modal.remove();
        document.body.appendChild(modal);
    }
});
/* =====================
   PLANES INTERACTIVOS
===================== */

// TASA DE CAMBIO (AJUSTABLE)
const COP_TO_USD = 4000;

// Conversión automática
document.querySelectorAll(".plan-card").forEach(card => {
    const cop = Number(card.dataset.cop);
    const usd = (cop / COP_TO_USD).toFixed(2);
    card.querySelector(".usd").textContent = `≈ $${usd} USD`;
});

// Efecto agrandar al seleccionar
document.querySelectorAll(".selectable").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".selectable").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});
/* =====================
   SERVICIOS INTERACTIVOS
===================== */

document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".service-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        // Modal informativo
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-content">
                <h3>${card.dataset.title}</h3>
                <p>${card.dataset.text}</p>
            </div>
        `;
        modal.onclick = () => modal.remove();
        document.body.appendChild(modal);
    });
});

/* =====================
   LIGHTBOX PORTAFOLIO
===================== */

document.querySelectorAll(".portfolio-item img").forEach(img => {
    img.addEventListener("click", () => {

        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = `
            <div class="modal-content portfolio-modal">
                <img src="${img.src}">
            </div>
        `;

        modal.onclick = () => modal.remove();
        document.body.appendChild(modal);
    });
});
/* =====================
   SCROLL REVEAL
===================== */

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 120;

        if (elementTop < windowHeight - visiblePoint) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
/* =====================
   LIGHTBOX IMÁGENES Y VIDEOS
===================== */

document.querySelectorAll(".portfolio-item img").forEach(img => {
    img.addEventListener("click", () => {
        openModal(`<img src="${img.src}">`);
    });
});

document.querySelectorAll(".video-item").forEach(video => {
    video.addEventListener("click", () => {
        const src = video.dataset.video;
        openModal(`
            <video src="${src}" controls autoplay></video>
        `);
    });
});

function openModal(content) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content portfolio-modal">
            ${content}
        </div>
    `;
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
}
/* =====================
   LIGHTBOX VIDEO (FIX)
===================== */

document.querySelectorAll(".video-item").forEach(item => {
    item.addEventListener("click", () => {
        const src = item.dataset.video;

        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = `
            <div class="modal-content portfolio-modal">
                <video controls autoplay muted playsinline>
                    <source src="${src}" type="video/mp4">
                    Tu navegador no soporta video.
                </video>
            </div>
        `;

        modal.addEventListener("click", () => modal.remove());
        document.body.appendChild(modal);
    });
});
