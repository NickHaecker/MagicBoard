<template>
  <v-app id="inspire">

  <v-app-bar class="appbar" app clipped-right height="120" style="background: #131b42; margin-left: 20%" width="60%">
    <v-toolbar-title>
      <header class="überschrift">
        Magic Board
      </header>
    </v-toolbar-title>
    <router-link to="" class="topnavrouter"><v-icon style="color: white; font-size: 45px" class="icons">mdi-logout-variant</v-icon></router-link>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="60%">
        <template v-slot:activator="{on}">
          <v-icon style="color: white; font-size: 45px" v-on="on">mdi-login-variant</v-icon>
        </template>
        <div class="anmeldekarte">
          <section class="anmeldetitel">
            <h1 class="anmelden">Anmelden</h1>
            <v-btn text @click="dialog = false" class="zurückbutton"><v-icon>mdi-close</v-icon></v-btn>
          </section>
          <section class="anmeldepart">
            <v-container>
              <article>
                <v-text-field name="Username" label="Username" id="email" v-model="Username" type="Username" required class="eingabefeld" style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px"></v-text-field>
                <v-text-field name="password" label="Password" id="password" v-model="password" required class="eingabefeld"  style="width: 30% ;background: #FFFFFF; opacity: 0.6;margin-left: 35%;border-radius: 20px; margin-top: 3%"></v-text-field>
                <v-container class="pwgotten">
                  <article class="link">
                    <router-link to="" class="routerpw" style=" text-decoration: none; color: white"><p>Passwort vergessen?</p></router-link>
                  </article>
                </v-container>
                <v-icon type="submit" class="anmeldbutton" style="font-size: 70px; color: white; background: url(./assets/Hintergrund.jpg); border: transparent; margin-left: 45%; margin-top: -2%">mdi-login-variant</v-icon>
              </article>
            </v-container>

          </section>
          <section class="bindestrich">
            <article class="neubei">
              <span>Neu beim Magic Board?</span>
            </article>
          </section>

          <section class="neuanmeldteil">
            <v-container>
              <article>
                <v-btn style="color: white; background: #7e8a9a; font-weight: lighter; width: 900px; margin-top: 3%">ACCOUNT ERSTELLEN</v-btn>
              </article>
            </v-container>
          </section>

        </div>
      </v-dialog>
    </v-row>

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
    dialog: false,
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
  .topnavrouter {text-decoration: none;justify-content: flex-end;align-items: center;align-self: center;}
  .appbar{justify-content: space-between}
  .überschrift{text-align: center;font-family: "Fredericka the Great"; font-size: 50px; font-weight: lighter; color: white }
  .icons{float: right; margin-left: 200px}
  .anmeldekarte{background-image: url(./assets/Hintergrund.jpg)}
  .anmelden{color: white; font-size: 40px; font-family: "Fredericka the Great"; text-align: center; font-weight: lighter}
  .anmeldbutton{font-size: 30px; color: white}
  .pwgotten{margin-left: 36%; margin-top: -1%}
</style>
