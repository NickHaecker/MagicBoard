<template>
  <div>
    <h1 class="üb">Spiel starten</h1>
    <section class="menü">
      <article class="zflplay">
        <v-icon
          style="font-size: 70px;color: #FFFFFF"
          class="icon"
          @click="$router.push({ name: 'Schwierigkeitsgrad' })"
          >mdi-refresh</v-icon
        >
        <p>Zufällige Spieler</p>
      </article>
      <article class="frndsuch">
        <v-icon
          style="font-size: 70px;color: #FFFFFF"
          class="icon"
          @click="$router.push({ name: 'Freundesuchen' })"
          >mdi-account-search</v-icon
        >
        <p>Freunde suchen</p>
      </article>
      <article class="frndlist">
        <v-icon
          style="font-size: 70px;color: #FFFFFF"
          class="icon"
          @click="$router.push({ name: 'Freundeliste' })"
          >mdi-account-badge-horizontal</v-icon
        >
        <p>Freundesliste</p>
      </article>
    </section>
    <section class="zurück">
      <v-icon
        style="color: white; font-size: 70px; margin-bottom: 10%"
        class="back"
        @click="$router.push({ name: 'Startscreen' })"
        >mdi-arrow-left-drop-circle-outline</v-icon
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Spielstart",
  data: () => ({
  })
};
</script>

<style scoped>
.zflplay {
  display: flex;
  margin-top: 20%;
  margin-left: 21%;
  background: #181857;
  width: 31%;
}
.frndsuch {
  display: flex;
  margin-top: 5%;
  margin-left: 21%;
  background: #181857;
  width: 31%;
}
.frndlist {
  display: flex;
  margin-top: 5%;
  margin-left: 21%;
  background: #181857;
  width: 31%;
}
.menü {
  margin-left: 20%;
}
.menü p {
  font-family: "Hind Vadodara";
  color: white;
  margin-top: 3%;
  margin-left: 1%;
  font-size: 30px;
}

.freundeliste h3 {
  font-family: "Fredericka the Great";
  color: white;
}

.zurück {
  margin-top: 18%;
  margin-left: 2%;
}
.icon:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
.back:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
  .üb{font-weight: lighter;
    font-family: "Fredericka the Great";font-size: 50px;color: white}
</style>
