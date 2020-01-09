<template>
  <div>
    <section class="erstesec">
      <header class="aktiva">
        <h2 class="üb" v-if="timer">
          Zeichne:
        </h2>
        <h2 class="üb" v-if="!timer">
          Spielen wir ein Spiel
        </h2>
      </header>
      <v-icon
              style="color: white; font-size: 70px;margin-left: 13%"
              id="start"
              class="spielstart"
              v-if="!timer"
              @click="startTimer">
        mdi-play
      </v-icon>
      <div class="anweisung" v-if="timer">
        <div id="timer" class="zeit">
          <span id="minutes">{{ minutes }}</span>
          <span id="middle">:</span>
          <span id="seconds">{{ seconds }}</span>
        </div>
      </div>
      <div class="wort" v-if="timer">
        <div>
          <h3 class="aufg">{{this.wortchen}}</h3>
        </div>
<!--        <div v-for="wort in worte" v-bind:key="wort">-->
<!--          <h3>{{wort.wort}}</h3>-->
<!--        </div>-->
      </div>
    </section>
    <section class="zeichensec">
      <paintable
        :active="isActive"
        :width="800"
        :height="800"
        :disableNavigation="disableNavigation"
        :hide="hidePaintable"
        :horizontalNavigation="true"
        :navigation="navigation"
        :name="isFirstPaintable ? 'my-screen' : 'my-second-screen'"
        :factor="1"
        :lineWidth="dynamicLineWidth"
        :lineWidthEraser="20"
        :useEraser="useEraser"
        :color="color"
        class="paint"
        ref="paintable"
        @toggle-paintable="toggledPaintable"
        v-if="timer"
      >
      </paintable>
    </section>
  </div>
</template>

<script>


export default {
  name: "Zeichnen",
  data() {
    return {
      isFirstPaintable: true,
      hidePaintable: false,
      disableNavigation: false,
      dynamicLineWidth: 5,
      isActive: false,
      useEraser: false,
      color: "#000",
      timer: null,
      totalTime: (1 * 90),
      resetButton: false,
      worte:[
        {wort: "Haus"},
        {wort: "Baum"},
        {wort: "Haus"},
        {wort: "Sonne"},
        {wort: "Flasche"},
        {wort: "Stift"},
        {wort: "Blume"},
        {wort: "Apfel"},
        {wort: "Fahrrad"},
        {wort: "Brille"},
        {wort: "Hose"},
        {wort: "Shirt"},
        {wort: "Schneeflocke"},
        {wort: "Fluss"},
        {wort: "Waschmaschine"},
        {wort: "Stuhl"},
        {wort: "Hand"},
        {wort: "Maus"},
        {wort: "Hammer"},
        {wort: "Schlüssel"},
        {wort: "Muschel"},
        {wort: "Flugzeug"},
        {wort: "Schlitten"},
        {wort: "Schloss"},
        {wort: "Feuerwehrauto"},
      ],
      wortchen:'',
    };
  },
  computed: {
    navigation() {
      return {
        "draw-save": {
          body: "click here!",
          activeBody: "<strong>save</strong>"
        },
        color: {
          body: "color"
        }
      };
    },
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  },
  methods: {
    toggledPaintable(isActive) {
      this.isActive = isActive;
    },
    startTimer: function() {
      this.shuffleArray()
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (1 * 90);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
      this.shuffleArray()
      this.$router.push({name:'Spielende'})
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      if(this.totalTime >= 1){
        this.totalTime--;
      } else{
        this.totalTime = 0;
        this.resetTimer()
      }
    },
    shuffleArray: function() {
      for (let i = this.worte.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this.worte[i];
        this.worte[i] = this.worte[j];
        this.worte[j] = temp;
      }
      this.erhaltewort()
    },
    erhaltewort: function () {
      let x = this.worte[3].wort
      this.wortchen = x
    }
  }
};
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  position: initial !important;
}
h3 {
  font-weight: normal;
}
.paint {
  border: 5px solid #000;
  border-radius: 5px;
  margin: 40px auto;
  box-sizing: border-box;
  display: block;
  width: 810px !important;
  height: 810px !important;
  position: relative !important;
  overflow: hidden;
  background: white;
  margin-top: 3%;
}

button:hover {
  opacity: 1;
}

  .erstesec h2{font-family: "Fredericka the Great";font-size: 30px;font-weight: lighter;text-align: center;text-transform: uppercase;color: white}
  .erstesec p{font-family: "Hind Vadodara";font-size: 20px;font-weight: lighter;text-align: center;text-transform: uppercase;text-decoration: black underline;color: white}
.üb{text-align: center}
#timer {
  font-size: 50px;
  line-height: 1;
  font-family: "Hind Vadodara";
  font-weight: lighter;
}
.spielstart:hover{background: #4C7FCC;border-radius: 40px}
.wort{text-align: center}
  .zeit{margin-left: 15%;color: white}
  .aufg{font-weight: lighter;font-family: "Hind Vadodara";color: white;font-size: 25px}
</style>
