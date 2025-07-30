document.addEventListener('DOMContentLoaded', () => {
    const artistsDATA = [
        {name: 'Henrique & Juliano', Image: 'imagens/henrique-juliano.jpg'},
        {name: 'Jorge & Mateus', Image: 'imagens/jorge-mateus.jpg'},
        {name: 'Zé Neto & Cristiano', Image: 'imagens/ze-neto.jpg'},
        {name: 'Gusttavo Lima', Image: 'imagens/gustavo-limma.jpg'},
        {name: 'Luan Santana', Image: 'imagens/luan-santana.jpg'},
        {name: 'Matheus & Kauan', Image: 'imagens/mateus-kauan.jpg'}
    ];

    const albumsDATA = [
        {name: 'White Noise', artist: 'ex1', Image: 'imagens/album-white-noise.jpg'},
        {name: 'O céu explica tudo', artist: 'ex2', Image: 'imagens/album-ceu-explica.jpg'},
        {name: 'Nada como um dia após o outro', artist: 'ex3', Image: 'imagens/album-vida-loka.jpg'},
        {name: 'HIT ME HARD AND SOFT', artist: 'ex4', Image: 'imagens/album-hit-me.jpg'},
        {name: 'CAJU', artist: 'ex5', Image: 'imagens/album-caju.jpg'},
        {name: 'Escândalo íntimo', artist: 'ex6', Image: 'imagens/album-escandalo.jpg'}
    ];

    const artistGRID = document.querySelector('.artists-grid')
    const albumsGRID = document.querySelector('.albums-grid')


    artistsDATA.forEach( artist => {
        const artistCARD = document.createElement('div')
        artistCARD.classList.add('artist-card')

        artistCARD.innerHTML = `
            <img src="${artist.Image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        
        `

        artistGRID.appendChild(artistCARD)

    })

    albumsDATA.forEach( album => {
        const albumCARD = document.createElement('div')
        albumCARD.classList.add('album-card')

        albumCARD.innerHTML = `
            <img src="${album.Image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        
        `

        albumGRID.appendChild(artistCARD)

    })
})


