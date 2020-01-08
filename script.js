/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Mekanın Sahibi",
          artist: "Norm Ender",
          cover: "1.jpg",
          source:
            "https://www.17sucai.com/preview/701365/2017-10-31/%E9%9F%B3%E9%A2%91%E6%8F%92%E4%BB%B6/fukua.mp3",
          url: "https://www.17sucai.com",
          favorited: false
        },
        {
          name: "Everybody Knows",
          artist: "Leonard Cohen",
          cover: "2.jpg",
          source:
            "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
          url: "https://www.17sucai.com",
          favorited: true
        },
        {
          name: "Extreme Ways",
          artist: "Moby",
          cover: "3.jpg",
          source:
            "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
          url: "https://www.17sucai.com",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      console.log("play");
    },
    prev() {
      console.log("上一曲");
    },
    next() {
      console.log("下一曲");
    },
    fav() {
      console.log("fav");
    },
    share() {
      console.log("share");
    }
  },
  mounted() {
    console.log("挂在");
  }
});
