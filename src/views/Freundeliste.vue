<template>
  <div>
    <h1 class="üb">Freundesliste</h1>
    <section class="Freundeliste">
      <article class="suchfeld">
        <v-text-field
                name="Username"
                label="Username"
                id="Username"
                v-model="username"
                type="Username"
                required
                class="eingabefeld"
                ></v-text-field>
        <v-btn class="hinzu" style="background: #181857;color: white">Freund Hinzufügen</v-btn>
      </article>
      <article class="freundeliste">
        <v-list v-for="freund in freunde" :key="freund.text" class="listze">
          <p v-text="freund.text" class="p" style="color: white"></p>
          <v-btn text class="button" v-text="freund.tex" v-model="addplayer"></v-btn>
        </v-list>
      </article>
    </section>
    <section class="back">
      <v-icon
        @click="$router.push({ name: 'Spielstart' })"
        style="color: white; font-size: 70px; margin-bottom: 10%"
        class="icon"
        >mdi-arrow-left-drop-circle-outline</v-icon
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Freundeliste",
  data: () => ({
    freunde: [
      { text: "Nick", tex:"hinzufügen"},
      { text: "Helena" ,tex:"hinzufügen"},
      { text: "Amanda",tex:"hinzufügen" },
      { text: "Svenja" ,tex:"hinzufügen"},
      { text: "Ann-Kathrin" ,tex:"hinzufügen"},
      { text: "Sally2903" ,tex:"hinzufügen"},
      { text: "Madb1" ,tex:"hinzufügen"},
      { text: "Lolila2008" ,tex:"hinzufügen"}
    ]
  }),
  methods:{
    addplayer: function(){

    }
  }
};
</script>

<style scoped>
.back{margin-top: 15%;margin-left: 3%}
  .button{margin-left: 18%;position: absolute;background:  #181857;color: white;opacity: 1}
.listze{display: flex;background: #4C4ECF; opacity: 0.9;padding-left: 10%}
.freundeliste{
  font-family: "Hind Vadodara";
  color: white;
  width: 30%;
  margin-left: 35%;
  margin-top: 5%;
  border-left: white solid 2px;
}
.eingabefeld{width: 150%; background: #FFFFFF; margin-left: 60%; border-radius: 20px;margin-top: 110%;opacity: 0.6}
.Freundeliste{display: flex}
.icon:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
  .üb{font-weight: lighter;
    font-family: "Fredericka the Great";font-size: 50px;color: white}
  .hinzu{margin-top: 15%;margin-left: 58%}
</style>
