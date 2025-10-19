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
   //{% aplayer "devourer_of_god" "calamsty_team" "https://drive.google.com/file/d/1nKfT0fpuB-wGilma7UT6sWLaWNfYK0Va/view?usp=drive_link" "https://drive.google.com/file/d/1M_Yp-ZsNeR6nMis0Q-0DOkni2wiFHOJ0/view?usp=sharing" %},
      {
        name: 'devourer_of_god',
        artist: 'calamsty_team',
        url: 'https://drive.google.com/file/d/1nKfT0fpuB-wGilma7UT6sWLaWNfYK0Va/view?usp=drive_link',
        cover: 'https://drive.google.com/file/d/1M_Yp-ZsNeR6nMis0Q-0DOkni2wiFHOJ0/view?usp=sharing',
        lrc: ''
      }
    ]
});