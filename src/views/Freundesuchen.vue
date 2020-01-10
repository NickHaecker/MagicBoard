<template>
  <div>
    <section class="üschrift">
      <h2>
        Freunde suchen
      </h2>
    </section>
    <section class="anweisung">
      <h3>
        Freunde über Username suchen
      </h3>
    </section>
    <section class="suchfeld">
      <v-text-field
        name="Username"
        label="Username"
        id="Username"
        v-model="username"
        type="Username"
        required
        class="eingabefeld"
        style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px;margin-top: 5%"
      ></v-text-field>
    </section>
    <section class="back">
      <v-icon
        @click="$router.push({ name: 'Spielstart' })"
        style="color: white; font-size: 70px; margin-bottom: 10%"
        class="backs"
        >mdi-arrow-left-drop-circle-outline</v-icon
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Freundesuchen",
  data(){
    return{
      username:''
    }
  }
};
</script>

<style scoped>
.üschrift h2 {
  color: white;
  font-size: 40px;
  font-family: "Fredericka the Great";
  text-align: center;
  font-weight: lighter;
}
.anweisung h3 {
  font-family: "Hind Vadodara";
  color: white;
  margin-top: 5%;
  text-align: center;
}
.back {
  margin-top: 35%;
}
.backs:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
</style>
