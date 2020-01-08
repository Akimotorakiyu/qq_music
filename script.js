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
      player: new QMplayer({ target: "auto" }),
      currentTime: 0,
      duration: 0
    };
  },
  methods: {
    play() {
      this.player.play(
        "http://114.80.27.30/amobile.music.tc.qq.com/C400000KNSyr1PmijP.m4a?guid=6257909323&vkey=0A7AF90D5DCE4B3CF558CC702C212370383A6A5264E7475EBF14F00362A16165827626D669D2E1C1A6401A4C81262377ADFD72988E92BF9F&uin=5338&fromtag=66"
      );
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
  computed: {
    total() {
      const s = this.duration % 60;
      const m = (this.duration - s) / 60;
      return `${m}:${s.toFixed(0)}`;
    },
    now() {
      const s = this.currentTime % 60;
      const m = (this.currentTime - s) / 60;
      return `${m}:${s.toFixed(0)}`;
    }
  },
  mounted() {
    this.player.on("timeupdate", e => {
      this.currentTime = e.currentTime;
    });

    this.player.on("play", e => {
      console.log(e);
      this.duration = e.duration;
    });
  }
});
