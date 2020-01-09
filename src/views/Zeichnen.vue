<template>
  <div>
    <section class="erstesec">
      <div id="timer">
        <span id="minutes">{{ minutes }}</span>
        <span id="middle">:</span>
        <span id="seconds">{{ seconds }}</span>
      </div>
      <header>
        <h2>
          Zeichne:
        </h2>
        <p>
          Haus
        </p>
      </header>
    </section>
    <section class="zeichensec">
      <paintable
              @click="startTimer"
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
      >
      </paintable>
    </section>
    <section class="zweitesec">
      <v-icon
              @click="$router.push({name:'Spielende'})"
          style="color: white; font-size: 70px; margin-bottom: 10%"
          class="weiter"
          >mdi-arrow-right-drop-circle-outline</v-icon
        >
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
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (25 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
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
footer {
  text-align: center;
}
footer a {
  color: #777;
  text-transform: uppercase;
  text-decoration: none;
}
button {
  border: 0;
  margin: 0 10px 0 0;
  font-size: 14px;
  padding: 10px 15px;
  opacity: 0.8;
  background-color: rgb(19, 102, 141);
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  opacity: 1;
}
.weiter{float: right;margin-right: 3%}
  .weiter:hover{background: #4C7FCC;border-radius: 40px;}
  .erstesec h2{font-family: "Fredericka the Great";font-size: 30px;font-weight: lighter;text-align: center;text-transform: uppercase;color: white}
  .erstesec p{font-family: "Hind Vadodara";font-size: 20px;font-weight: lighter;text-align: center;text-transform: uppercase;text-decoration: black underline;color: white}
#message {
  color: #DDD;
  font-size: 50px;
  margin-bottom: 20px;
}

#timer {
  font-size: 200px;
  line-height: 1;
  margin-bottom: 40px;
}
</style>
