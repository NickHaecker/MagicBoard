<template>
  <div>
    <section class="head">
      <header>
        <h1>
          Highscore
        </h1>
      </header>
    </section>
    <section class="tabelle" >
      <article class="frnds">
        <h2>
          Deine Freunde:
        </h2>
        <v-data-table
          :headers="headers"
          :items="player"
          :sort-desc="[false, true]"
          class="scoretable"
          style="background: #131b42;color: white"
        ></v-data-table>
      </article>
    </section>
    <section class="allplayers">
      <article class="elle">
        <h2>
          Alle Nutzer:
        </h2>
      <v-data-table
        :headers="headers"
        :items="playerz"
        :sort-desc="[false, true]"
        class="scrta"
        style="background: #131b42;color: white"
      ></v-data-table>
      </article>
    </section>
    <section class="back">
      <v-icon
        @click="$router.push({ name: 'Startscreen' })"
        style="color: white; font-size: 70px; margin-bottom: 5%;margin-left: 5%"
        class="icon"
        >mdi-arrow-left-drop-circle-outline</v-icon
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Highscore",
  data() {
    return {
      headers: [
        {
          text: "Player",
          align: "left",
          sortable: false,
          value: "name",
        },
        { text: "Score", value: "score" }
      ],
      player: [
        {
          name: "Ann-Kathrin",
          score: 5097
        },
        {
          name: "Amanda",
          score: 4768
        },
        {
          name: "Helena",
          score: 3879
        },
        {
          name: "Nick",
          score: 2981
        },
        {
          name: "Svenja",
          score: 1893
        }
      ],
      playerz: [
        {
          name: "Ann-Kathrin",
          score: 5097
        },
        {
          name: "Amanda",
          score: 4768
        },
        {
          name: "Helena",
          score: 3879
        },
        {
          name: "Nick",
          score: 2981
        },
        {
          name: "Svenja",
          score: 1893
        },
        {
          name: "Lorem",
          score: 12
        },
        {
          name: "Lorem",
          score: 12
        },
        {
          name: "Lorem",
          score: 12
        },
        {
          name: "Lorem",
          score: 12
        },
        {
          name: "Lorem",
          score: 12
        }
      ]
    };
  }
};
</script>

<style scoped>
.scoretable {
  width: 40%;
  margin-top: 5%;
  margin-left: 30%;
  background: #2d47ae;
  color: white;
  font-family: "Hind Vadodara";
}
.scrta{
  color: white;
  font-family: "Hind Vadodara";
  background: #2d47ae;
  width: 40%;
margin-left: 34.5%;
  margin-top: 5%;
}
.head {
  font-family: "Fredericka the Great";
  text-align: center;
  font-size: 40px;
  color: white;
}
.head h1 {
  font-weight: lighter;
}
.frnds {

  color: white;
  margin-left: 15%;
  font-family: "Fredericka the Great";
  margin-bottom: -2%;
  display: flex;
}
.frnds h2 {
  font-weight: lighter;
  font-family: "Hind Vadodara";
}
.allplayers {
  margin-top: 5%;

}
.elle {
  color: white;
  margin-left: 15%;
  font-family: "Fredericka the Great";
  margin-bottom: -2%;
  display: flex;
}
.elle h2 {
  font-weight: lighter;
  font-family: "Hind Vadodara";
  margin-top: 2%;
}
.back {
  margin-top: 5%;
}
.icon:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
  .tabelle{margin-top: 5%}
</style>
