document.querySelectorAll('details').forEach(details => {
    details.addEventListener('click', () => {
        // Fecha todos os outros <details>
        document.querySelectorAll('details').forEach(otherDetails => {
            if (otherDetails !== details) {
                otherDetails.removeAttribute('open'); // Fecha outros
            }
        });
    });
});

// Definindo a data de expiração da oferta (exemplo: 2 horas a partir de agora)
const expirationDate = new Date(Date.now() + 2 * 60 * 60 * 1000);

const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const timeRemaining = expirationDate - now;

    // Calculando horas, minutos e segundos restantes
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Atualizando o timer na página
    timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    // Se o tempo acabar
    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = "Oferta Expirada!";
    }
}

// Atualiza o timer a cada segundo
const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Chama a função uma vez para não esperar 1 segundo

