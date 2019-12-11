<template>
  <v-app id="inspire">

  <v-app-bar class="appbar" app clipped-right height="120" style="background: #131b42">
    <v-spacer/>
    <router-link to="" class="topnavrouter"><v-icon style="color: white; font-size: 45px">mdi-login-variant</v-icon></router-link>
    <router-link to="" class="topnavrouter"><v-icon style="color: white; font-size: 45px">mdi-logout-variant</v-icon></router-link>

  </v-app-bar>
    <v-img src="./assets/Hintergrund.jpg" style="width: 60%; margin-left: 20%">
      <v-content class="content">
        <router-view  class="view"/>
      </v-content>
    </v-img>

</v-app>
</template>

<script>


export default {
  name: "App",

  components: {

  },
  methods: {
    change: function (event) {
      // eslint-disable-next-line
      console.log(event);
      event.target.toggleClass('change');
    },
  },

  data: () => ({
    drawer: false,
    items: [
      { title: "Profile", to: "Profile", icon: "mdi-account" },
      { title: "Kategorien", to: "Categorys", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" }
    ]
  })
};
</script>
<style scoped>
  logo {height: 80px;width: 100px;align-content: flex-start;align-self: center; margin-top: 20%}
  .topnavrouter {text-decoration: none;justify-content: flex-end;align-items: center;margin-right: 4%;align-self: center;order: 2;}
  .appbar{justify-content: space-between}
</style>
