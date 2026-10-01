
// Lightbox Viewer Logic
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
    }
}

// Order via WhatsApp Generator
function orderWhatsApp(item, price) {
    const qty = prompt("Enter quantity required for " + item + ":", "1");
    if (qty && !isNaN(qty) && qty > 0) {
        const total = price * parseInt(qty);
        const msg = `Hello Muhammad Jahanzaib,\n\nI would like to order:\n- Product: ${item}\n- Quantity: ${qty}\n- Total Price: Rs. ${total}\n\nPlease confirm order delivery details.`;
        window.open(`https://wa.me/923097279372?text=${encodeURIComponent(msg)}`, '_blank');
    }
}

// Contact Form Handler
function sendFormWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById('senderName').value;
    const msg = document.getElementById('senderMsg').value;
    const fullText = `Hello Muhammad Jahanzaib,\n\nMessage from ${name}:\n${msg}`;
    window.open(`https://wa.me/923097279372?text=${encodeURIComponent(fullText)}`, '_blank');
}