function toggleMode() {
    // documentElement = html
    const html = document.documentElement;
    // função de add e remover classe light e suas propriedades
    html.classList.toggle('light');

    // seleciona a imagem dentro do id profile
    const img = document.querySelector('#profile img');
    if (html.classList.contains('light')) {
        // add imagem light
        img.setAttribute('src', './assets/avatar-light.png');
    } else {
        // add imagem dark
        img.setAttribute('src', './assets/avatar.png');
    }
}