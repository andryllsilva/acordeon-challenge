const itemResposta = document.querySelectorAll('.item');



itemResposta.forEach(function (item) {
    item.addEventListener('click', function () {
        const ativoAtual = document.querySelector('.ativo')
        if(ativoAtual){
            ativoAtual.classList.remove('ativo');
        }
        

        item.classList.add('ativo');
    })
})