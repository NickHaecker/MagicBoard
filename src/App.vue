<template>
  <v-app id="inspire">
    <v-app-bar
      class="appbar"
      app
      clipped-right
      height="120"
      style="background: #131b42; margin-left: 20%"
      width="60%"
    >
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="60%">
          <template v-slot:activator="{ on }">
            <v-icon
              style="color: white; font-size: 45px;"
              class="iconin"
              v-on="on"
              >mdi-login-variant</v-icon
            >
          </template>
          <v-img src="./assets/Starthintergrund.png" height="520">
            <div class="anmeldekarte">
              <section class="anmeldetitel">
                <h1 class="anmelden">Anmelden</h1>
              </section>
              <section class="anmeldepart">
                <v-container>
                  <article>
                    <v-text-field
                      name="Username"
                      label="Username"
                      id="email"
                      v-model="user.username"
                      type="Username"
                      required
                      class="eingabefeld"
                      style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px"
                    ></v-text-field>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="user.passwort"
                      required
                      class="eingabefeld"
                      style="width: 30% ;background: #FFFFFF; opacity: 0.6;margin-left: 35%;border-radius: 20px; margin-top: 3%"
                    ></v-text-field>
                    <v-container class="pwgotten">
                      <article class="link">
                        <p
                          style="font-family: 'Hind Vadodara'"
                          @click="
                            $router.push({ name: 'Passwortvergessen' }),
                              (dialog = false)
                          "
                          class="routerpw"
                        >
                          Passwort vergessen?
                        </p>
                      </article>
                    </v-container>
                    <v-icon
                      @click="
                        (dialog = false), $router.push({ name: 'Startscreen' })
                      "
                      type="submit"
                      class="anmeldbutton"
                      style="font-size: 70px; color: white; margin-left: 45%; margin-top: -2%;background-image: url(./assets/Hintergrund.jpg)"
                      >mdi-login-variant</v-icon
                    >
                  </article>
                </v-container>
              </section>
              <section class="bindestrich">
                <article class="neubei">
                  <span
                    style="font-family: 'Hind Vadodara';color: #FFFFFF; margin-left: 42%"
                    >Neu beim Magic Board?</span
                  >
                </article>
              </section>

              <section class="neuanmeldteil">
                <v-container>
                  <article>
                    <v-btn
                      @click="(dialog = false), $router.push({ name: 'home' })"
                      style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px;font-family: 'Hind Vadodara'"
                      >REGISTRIEREN</v-btn
                    >
                  </article>
                </v-container>
              </section>
              <v-btn text @click="dialog = false" class="zurückbutton"
                ><v-icon
                  style="color: white; font-size: 70px; margin-bottom: 10%"
                  class="zrück"
                  >mdi-arrow-left-drop-circle-outline</v-icon
                ></v-btn
              ><v-icon
                @click="(dialog = false), $router.push({ name: 'Einstellungen' })"
                style="font-size: 70px;float: right; color: white; margin-right: 2%"
                class="setting"
                >mdi-settings</v-icon
              >
            </div>
          </v-img>
        </v-dialog>
      </v-row>

        <v-img class="überschrift" src="./assets/ueberschrift.png" >
        </v-img>

      <v-icon
        style="color: white; font-size: 45px"
        @click="$router.push({ name: 'home' })"
        class="iconout"
        >mdi-logout-variant</v-icon
      >
    </v-app-bar>
      <v-content class="content">
        <router-view class="view" />
      </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",


  components: {},

  data: () => ({
    dialog: false,
    user:{
      username:'',
      passwort:''
    }
  })
};
</script>
<style scoped>
.content {
  width: 60%;
  margin-left: 20%;
  background-image: url(./assets/Unbenannt-1.png);
}
logo {
  height: 80px;
  width: 100px;
  align-content: flex-start;
  align-self: center;
  margin-top: 20%;
}
.appbar {
  justify-content: space-between;
}
.überschrift {

width: 65%;
margin-right: 5%;
  margin-left: 15%;
}
.iconin {
  /*margin-right: -30%;*/
  margin-left: 200%;
}
.iconout {
  float: right;
margin-right: 5%;
  /*text-decoration: none;*/
  /*justify-content: flex-end;*/
  /*align-items: center;*/
  /*align-self: center;*/


}
.anmeldekarte {
  width: 100%;
  height: 520px;
  /*background-image: url(./assets/Starthintergrund.png);*/

}
.anmelden {
  color: white;
  font-size: 40px;
  font-family: "Fredericka the Great";
  text-align: center;
  font-weight: lighter;
}
.anmeldbutton {
  font-size: 30px;
  color: white;
}
.pwgotten {
  margin-left: 36%;
  color: white;
}
.pwgotten:hover {
  cursor: pointer;
}
.iconin:hover {
  background: #4c7fcc;
  border-radius: 20px;
}
.zrück:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
.anmeldbutton:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
.setting:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
.iconout:hover {
  background: #4c7fcc;
  border-radius: 40px;
}.eingabefeld{

 }
</style>
