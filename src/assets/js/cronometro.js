document.addEventListener("DOMContentLoaded", function () {
    let simulando = false;
    const dataEvento = new Date("2025-11-20T00:00:00");

    function atualizarContador() {
        const agora = new Date();
        const diferenca = dataEvento - agora;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / 1000 / 60) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        document.getElementById("days").textContent = dias >= 0 ? dias : 0;
        document.getElementById("hours").textContent = horas >= 0 ? horas : 0;
        document.getElementById("minutes").textContent = minutos >= 0 ? minutos : 0;
        document.getElementById("seconds").textContent = segundos >= 0 ? segundos : 0;
    }

    function zerarContador() {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
    }

    function ativarEstiloFestival() {
        document.getElementById("mensagem").textContent = "O FESTIVAL COMEÇOU!";
        document.getElementById("contador").classList.add("evento-ativo");
        document.getElementById("simular").textContent = "Voltar para Contagem";
        simulando = true;
        zerarContador();
        dispararFogos();
    }

    function desativarEstiloFestival() {
        document.getElementById("mensagem").textContent = "CONTAGEM REGRESSIVA PARA O FESTIVAL";
        document.getElementById("contador").classList.remove("evento-ativo");
        document.getElementById("simular").textContent = "Simular dia do Festival";
        simulando = false;
        pararFogos();
        atualizarContador();
    }

    function dispararFogos() {
        const container = document.querySelector('#contador .fogos-container');
        let fogosBase = container.querySelector('.fogos-base');

        if (!fogosBase) {
            fogosBase = document.createElement('div');
            fogosBase.classList.add('fogos-base');
            container.appendChild(fogosBase);
        }

        fogosBase.innerHTML = '';

        for (let i = 0; i < 5; i++) {
            const fogo = document.createElement('div');
            fogo.classList.add('fogos');
            fogosBase.appendChild(fogo);
        }
    }

    function pararFogos() {
        const container = document.querySelector('#contador .fogos-container');
        const fogosBase = container.querySelector('.fogos-base');
        if (fogosBase) {
            fogosBase.remove();
        }
    }

    document.getElementById("simular").addEventListener("click", () => {
        if (simulando) {
            desativarEstiloFestival();
        } else {
            ativarEstiloFestival();
        }
    });

    setInterval(() => {
        if (!simulando) atualizarContador();
    }, 1000);

    atualizarContador();
});
