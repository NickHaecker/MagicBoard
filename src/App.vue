<template>
  <v-app>
    <v-app-bar app height="100">

    </v-app-bar>

    <v-content class="content">
      <router-view class="view"/>
    </v-content>

  </v-app>
</template>

<script>


export default {
  name: "App",

  components: {

  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
  .content{width: 60%; margin-left: 20%; border: black solid; margin-bottom: 10%; margin-top: 10%}
  .view{justify-content: center; align-content: center; text-align: center; margin-top: -8%}

</style>
