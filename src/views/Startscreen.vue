<template>
  <div>
    <section class="highfrie">
      <article class="start">
        <v-icon
                style="color: white; font-size: 70px"
                class="icon"
                @click="$router.push({ name: 'Spielstart' })"
        >mdi-play</v-icon
        >
        <p>Spiel starten</p>
      </article>
      <article class="score">
        <v-icon
          style="font-size: 70px;color: #FFFFFF"
          class="icon"
          @click="$router.push({ name: 'Highscore' })"
          >mdi-trophy</v-icon
        >
        <p>Dein Highscore:</p>
        <p>2345</p>
      </article>
      <article class="friends">
        <v-icon
          style="font-size: 70px;color: white"
          class="icon"
          @click="$router.push({ name: 'Spielstart' })"
          >mdi-account-multiple-plus</v-icon
        >
        <p>Freunde finden</p>
      </article>
    </section>
    <section class="settings">
      <v-icon
        style="font-size: 70px;float: right; color: white; margin-right: 2%;margin-top5%"
        class="setting"
        @click="$router.push({ name: 'Einstellungen' })"
        >mdi-settings</v-icon
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Startscreen"
};
</script>

<style scoped>
.start p{
  font-size: 30px;
  font-family: "Hind Vadodara";
  margin-top: 3%;
  margin-left: 1%;
  color: white;
}
.start {
  display: flex;
  margin-top: 15%;
  margin-left: 30%;
  background: #181857;
  width: 31%;
}
.score {
  display: flex;
  margin-top: 5%;
  margin-left: 30%;
  background: #181857;
  width: 31%;
}
.friends {
   display: flex;
   margin-top: 5%;
   margin-left: 30%;
  background: #181857;
  width: 31%;
 }
.score p {
  font-size: 30px;
  font-family: "Hind Vadodara";
  margin-top: 3%;
  margin-left: 1%;
  color: white;
}

.friends p {
  font-family: "Hind Vadodara";
  font-size: 30px;
  margin-top: 3%;
  margin-left: 1%;
  color: white;
}
.icon:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
.setting:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
  .settings{margin-top: 23%}
</style>
