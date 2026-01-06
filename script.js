function toggleMode() {
    // documentElement = html
    const html = document.documentElement;
    // função de add e remover classe light e suas propriedades
    html.classList.toggle('light');

    const img = document.querySelector('#profile img');
    if (html.classList.contains('light')) {
        // add imagem light
        img.setAttribute('src', './assets/avatar-light.png');
        
        // muda texto alt da imagem
        img.setAttribute('alt', 'Foto de Lucas Valgoi sorrindo com óculos de sol e camisa cinza na praia');
    } else {
        // add imagem dark
        img.setAttribute('src', './assets/avatar.png');

        // muda texto alt da imagem
        img.setAttribute('alt', 'Foto de Lucas Valgoi sorrindo com camisa preta e fundo branco escuro');
    }
}