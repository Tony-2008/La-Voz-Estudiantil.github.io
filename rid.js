const votes = {
    'Tu Voz, Tu Futuro': 0,
    'Somos la Respuesta': 0,
    'Proyecto Rubí': 0
};

function vote(team) {
    votes[team]++;
    alert(`Has votado por: ${team}`);
}

function showResults() {
    const password = document.getElementById('adminPassword').value;
    if (password === 'admin123') {
        document.getElementById('results').innerHTML = `
            <b>Tu Voz, Tu Futuro:</b> ${votes['Tu Voz, Tu Futuro']} votos<br>
            <b>Somos la Respuesta:</b> ${votes['Somos la Respuesta']} votos<br>
            <b>Proyecto Rubí:</b> ${votes['Proyecto Rubí']} votos
        `;
        document.getElementById('adminSection').style.display = 'block';
    } else {
        alert('Contraseña incorrecta');
    }
}
