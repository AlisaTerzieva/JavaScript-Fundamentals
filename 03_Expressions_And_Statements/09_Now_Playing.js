function nowPlaying(input) {
    let songName = input[0];
    let artist = input[1];
    let songDuration = input[2];
    console.log("Now Playing: "+ artist+ " - " + songName + " [" + songDuration + "]");
}

nowPlaying(['Number One', 'Nelly', '4:09']);