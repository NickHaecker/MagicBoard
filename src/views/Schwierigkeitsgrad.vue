<template>
  <div>
    <section class="head">
      <header>
        <h1>
          Schwierigkeitsgrade
        </h1>
      </header>
    </section>
    <section class="erstereihe">
      <v-card
        class="schwierigkeitskarte"
        id="links"
        @click="$router.push({ name: 'Zeichnen' })"
        width="250"
        height="150"
      >
        <v-card-text class="klassen">
          <p>Leicht</p>
        </v-card-text>
      </v-card>
      <v-card
        class="schwierigkeitskarte"
        id="rechts"
        width="250"
        @click="$router.push({ name: 'Zeichnen' })"
        height="150"
      >
        <v-card-text class="klassen">
          <p>Mittel</p>
        </v-card-text>
      </v-card>
    </section>
    <section class="zweitereihe">
      <v-card
        class="schwierigkeitskarte"
        id="links"
        width="250"
        @click="$router.push({ name: 'Zeichnen' })"
        height="150"
      >
        <v-card-text class="klassen">
          <p>Schwer</p>
        </v-card-text>
      </v-card>
      <v-card
        class="schwierigkeitskarte"
        id="rechts"
        width="250"
        @click="$router.push({ name: 'Zeichnen' })"
        height="150"
      >
        <v-card-text class="klassen">
          <p>You could never</p>
        </v-card-text>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  name: "Schwierigkeitsgrad"
};
</script>

<style scoped>
.erstereihe {
  display: flex;
  margin-top: 15%;
}
.zweitereihe {
  display: flex;
  margin-top: 5%;
}
.klassen {
  text-align: center;
}
.klassen p {
  margin-top: 22%;
  font-family: "Hind Vadodara";
  font-size: 35px;
  color: #ffffff;
}
.schwierigkeitskarte {
  background: #181857;
  justify-content: flex-start;
  align-content: flex-start;
}
#rechts {
  margin-left: 5%;
}
#links {
  margin-left: 25%;
}
.head h1 {
  font-family: "Fredericka the Great";
  font-weight: lighter;
  font-size: 40px;
  text-align: center;
  color: white;
}
</style>
