document.addEventListener('DOMContentLoaded', function () {

    const botaoAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade')
    const aumentaFonte = document.getElementById('aumentar-fonte')
    const diminuiFonte = document.getElementById('diminuir-fonte')
    const alternaContraste = document.getElementById('alterna-contraste')
    const resetAcessibilidade = document.getElementById('reset-acessibilidade')
    let tamanhoAtualFonte = 1
    let contrasteAtivo = false

    botaoAcessibilidade.addEventListener('click', function () {
        opcoesAcessibilidade.classList.toggle('ativo')
        this.classList.toggle('rotacionado')
    })

aumentaFonte.addEventListener('click', function () {
    if (tamanhoAtualFonte < 1.2) {
        tamanhoAtualFonte += 0.1;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}rem`;
    }
});

    diminuiFonte.addEventListener('click', function () {
       if (tamanhoAtualFonte > 0.8) {
        tamanhoAtualFonte -= 0.1;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });


    alternaContraste.addEventListener('click', function () {
        contrasteAtivo = !contrasteAtivo
        document.body.classList.toggle('alto-contraste', contrasteAtivo)
    })

    resetAcessibilidade.addEventListener('click', function () {
        tamanhoAtualFonte = 1
        document.documentElement.style.fontSize = ''
        contrasteAtivo = false
        document.body.classList.remove('alto-contraste')
        opcoesAcessibilidade.classList.remove('ativo')
        botaoAcessibilidade.classList.remove('rotacionado')
    })

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.menu-acessibilidade') &&
            opcoesAcessibilidade.classList.contains('ativo')) {
            opcoesAcessibilidade.classList.remove('ativo')
            botaoAcessibilidade.classList.remove('rotacionado')
        }
    })

})
