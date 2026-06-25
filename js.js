// Seleção dos elementos do DOM
const card = document.getElementById('profile-card');
const avatar = document.getElementById('avatar');
const playerName = document.getElementById('player-name');
const playerLevel = document.getElementById('player-level');
const playerClass = document.getElementById('player-class');

// Simulação do Level Up instantâneo após o carregamento da página
window.addEventListener('DOMContentLoaded', () => {
    // 1. Alterar a imagem do avatar
    avatar.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150"; 
    
    // 2. Modificar os textos de informações
    playerName.textContent = "Artur, o Mestre do Fogo";
    playerLevel.textContent = "Nível: 50";
    playerClass.textContent = "Classe: Mago Supremo";
    
    // 3. Atualizar a estilização para o modo lendário/místico
    card.style.backgroundColor = "#2d142c";
    card.style.border = "4px solid #801336";
    card.style.boxShadow = "0 0 20px #ee4540";
    
    // Ajustar cores internas do texto para contraste no novo fundo escuro
    playerName.style.color = "#ee4540";
    playerLevel.style.color = "#f52549";
    playerClass.style.color = "#ffa372";
    avatar.style.border = "3px solid #ee4540";
});