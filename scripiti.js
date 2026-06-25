// Seleção dos elementos do DOM
const originalPrice = document.getElementById('original-price');
const promoPrice = document.getElementById('promo-price');
const promoBadge = document.getElementById('promo-badge');

// Aplica o desconto automaticamente quando a estrutura do documento estiver pronta
window.addEventListener('DOMContentLoaded', () => {
    // 1. Modificar o preço original para o estado "riscado" e alterar a cor
    originalPrice.style.textDecoration = "line-through";
    originalPrice.style.color = "#95a5a6";
    
    // 2. Inserir o novo preço promocional no campo correspondente
    promoPrice.textContent = "Por apenas: R$ 149,90!";
    
    // 3. Aplicar estilização destacada no novo preço
    promoPrice.style.fontSize = "24px";
    promoPrice.style.color = "#27ae60"; // Verde comercial de sucesso
    
    // 4. Configurar texto e estilo da tag/etiqueta de aviso de escassez
    promoBadge.textContent = "PROMOÇÃO EXPIRA EM BREVE!";
    promoBadge.style.backgroundColor = "#f1c40f"; // Fundo Amarelo
    promoBadge.style.color = "#000000"; // Texto Preto
});