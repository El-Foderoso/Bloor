document.getElementById('register-btn').addEventListener('click', () => {
    const combo = [];
    for (let i = 0; i < 5; i++) {
        const pares = Array.from({ length: 50 }, () => [
            Math.floor(Math.random() * 100) + 1,
            Math.floor(Math.random() * 100) + 1
        ]);
        const chosenPair = pares[Math.floor(Math.random() * 50)];
        combo.push(chosenPair);
    }

    // Gerar um ID único
    const userId = new Date().getTime(); // Usando timestamp como ID
    const data = { userId, combination: combo };

    // Armazenar no Local Storage
    localStorage.setItem(userId, JSON.stringify(data));

    document.getElementById('result').innerText = `ID: ${userId}, Combinação: ${JSON.stringify(combo)}`;
});

// Registro do Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch(error => {
            console.error('Falha ao registrar o Service Worker:', error);
        });
}
