<template>
  <div>
    <section class="head">
      <header>
        <h1>
          Du hast gewonnen!
        </h1>
        <v-icon color="white" style="font-size: 60px">mdi-trophy</v-icon>
      </header>
    </section>
    <section class="scoretable">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :sort-by="['score', 'rating']"
        :sort-desc="[false, true]"
        multi-sort
        hide-default-footer
        class="elevation-1"
      ></v-data-table>
    </section>
    <section class="buttons">
        <v-btn
                class="nr"
                @click="$router.push({name:'Schwierigkeitsgrad'})"
          text
          style="background: #4C7FCC;color: white;font-size: 25px;border-radius:20px "
        >
          Neue Runde?
        </v-btn>

        <v-btn
          text
          class="hm"
          @click="$router.push({name:'Startscreen'})"
          style="background: #4C7FCC;color: white;font-size: 25px;border-radius:20px "
        >
          Hauptmenü
        </v-btn>
    </section>
  </div>
</template>

<script>
export default {
  name: "Spielende",
  data() {
    return {
      headers: [
        {
          text: "Username",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Score", value: "score" },
        { text: "Rating", value: "rating" }
      ],
      desserts: [
        {
          name: "Amanda",
          score: 400,
          rating: 1
        },
        {
          name: "Ann-Kathrin",
          score: 200,
          rating: 2
        },
        {
          name: "Helena",
          score: 1,
          rating: 3
        }
      ]
    };
  }
};
</script>

<style scoped>
.head h2 {
  text-transform: uppercase;
  color: #ffffff;
  font-size: 40px;
  text-align: center;
  font-family: "Hind Vadodara";
  margin-top: 5%;
}
header {
  display: flex;
  justify-content: center;
  align-self: center;
  align-content: center;
}
.scoretable {
  margin-top: 10%;
  width: 60%;
  margin-left: 5%;
}
.buttons {
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-top: 10%;
}
.nr{margin-right: 5%}
.hm{margin-left: 5%}
.head h1{font-family: "Fredericka the Great";font-weight: lighter;font-size: 40px;text-align: center;color: white}
</style>