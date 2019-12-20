<template>
  <div>
    <section class="einst" id="sound">
      <v-icon style="font-size: 60px;color: #FFFFFF"
              class="icon"
        >mdi-volume-off</v-icon
      >
      <h3>Sound</h3>
    </section>
    <section class="einst" id="musik">
      <v-icon style="font-size: 60px;color: #FFFFFF"
              class="icon"
        >mdi-music</v-icon
      >
      <h3>Musik</h3>
    </section>
    <section class="einst" id="benach">
      <v-icon style="font-size: 60px;color: #FFFFFF"
              class="icon"
        >mdi-bell</v-icon
      >
      <h3>Benachrichtigung</h3>
    </section>
    <section class="einst" id="agb">
      <router-link to="AGB" style="text-decoration: none"
        ><v-icon style="font-size: 60px;color: #FFFFFF"
                 class="icon"
          >mdi-book</v-icon
        ></router-link
      >
      <h3>AGB</h3>
    </section>
    <section class="einst" id="logout">
      <v-icon style="font-size: 60px;color: #FFFFFF"
              class="icon"
        >mdi-logout-variant</v-icon
      >
      <h3>Logout</h3>
    </section>
    <section class="back">
      <router-link to="Startscreen" style="text-decoration: none"
        ><v-icon
          style="color: white; font-size: 70px; margin-bottom: 10%"
          class="backs"
          >mdi-arrow-left-drop-circle-outline</v-icon
        ></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Einstellungen"
};
</script>

<style scoped>
.einst {
  display: flex;
  margin-left: 10%;
  margin-top: 7%;
}
.einst h3 {
  align-self: center;
  color: white;
  margin-left: 2%;
  font-size: 30px;
  font-family: "Hind Vadodara";
}
.back {
  margin-top: 10%;
  margin-left: 5%;
}
  .icon:hover{background: #4C7FCC;border-radius: 40px}
  .backs:hover{background: #4C7FCC;border-radius: 40px}
</style>
