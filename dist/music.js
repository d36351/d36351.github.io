const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "DevourerofGodsPhase2",
        artist: 'CalamityTeam',
        url: 'https://www.youtube.com/watch?v=OspSOSPjOuI',
        cover: 'C:\\Users\\user\\Pictures\\artworks-75PtKCIxlzOa6oDi-4CcoVw-t500x500.jpg',
        lrc: '',
      }
    
    ]
});