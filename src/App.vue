<template>
  <v-app id="inspire">
  <v-navigation-drawer v-model="drawer" app right clipped class="navigation">
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-action>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="listitems">{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar class="appbar" app clipped-right height="120" style="background: #131b42">
    <v-spacer/>
    <router-link to="" class="topnavrouter"><v-icon style="color: white; font-size: 45px">mdi-login-variant</v-icon></router-link>
    <router-link to="" class="topnavrouter"><v-icon style="color: white; font-size: 45px">mdi-logout-variant</v-icon></router-link>
    <div
            class="navicon"
            v-bind:class="{change:drawer}"
            @click.stop="drawer = !drawer"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
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
  .navicon {display: inline-block;cursor: pointer;align-self: center;margin-right: 2%;order: 3;}
  .bar1, .bar2, .bar3 {width: 35px;height: 5px;background-color: white;margin: 6px 0;transition: 0.7s;}
  .change .bar1 {-webkit-transform: rotate(-45deg) translate(-9px, 6px);transform: rotate(-45deg) translate(-9px, 6px);}
  .change .bar2 {opacity: 0;}
  .change .bar3 {-webkit-transform: rotate(45deg) translate(-9px, -6px);transform: rotate(45deg) translate(-9px, -6px);}
  .navigation {transition: 0.7s;}
  .topnavrouter {text-decoration: none;justify-content: flex-end;align-items: center;margin-right: 4%;align-self: center;order: 2;}
  .appbar{justify-content: space-between}
  .content{margin-left: 20%; width: 60%; border-left: black solid; border-right: solid black; text-align: center}
  .view{position: fixed}
</style>
