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
        name: "DevourerofGodsPhase1",
        artist: 'CalamityTeam',
        url: "https://drive.google.com/file/d/11fJgTqG7DcU2LpQoloGCaDr5H7HaPo9x/view?usp=sharing",
        cover: "dist\\artworks-75PtKCIxlzOa6oDi-4CcoVw-t500x500.jpg",
        lrc: '',
      },
      {
        name: "DevourerofGodsPhase1",
        artist: 'CalamityTeam',
        url: "https://drive.google.com/file/d/1nKfT0fpuB-wGilma7UT6sWLaWNfYK0Va/view?usp=sharing",
        cover: "dist\\artworks-75PtKCIxlzOa6oDi-4CcoVw-t500x500.jpg",
        lrc: '',
      }

      
    
    ]
});