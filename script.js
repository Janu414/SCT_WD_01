function playSong(name) {
  const audio = document.getElementById('audioPlayer');
  const nowPlaying = document.getElementById('nowPlaying');
  const movieTitle = document.getElementById('movieTitle');
  const rating = document.getElementById('rating');
  const playerContainer = document.getElementById('playerContainer');

  // Set audio source
  audio.src = `sounds/${name}.mp3`;
  audio.play().then(() => {
    nowPlaying.textContent = name;

    // Set movie and rating info
    if (name === 'Amaran') {
      movieTitle.textContent = 'Amaran (2023)';
      rating.textContent = '4.5/5';
    } else if (name === 'Nanna') {
      movieTitle.textContent = 'Nanna Nenu Naa Boyfriends';
      rating.textContent = '4.7/5';
    } else if (name === 'Nijame') {
      movieTitle.textContent = 'Nijamga';
      rating.textContent = '4.2/5';
    }

    playerContainer.classList.remove('hidden');
  }).catch((error) => {
    alert("Sound couldn't be played. Please click again.");
    console.error(error);
  });
}
