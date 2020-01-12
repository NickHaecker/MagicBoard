<template>
  <div class="home">
    <section class="first">
      <article class="fistart">
        <header>
          <h1>
            Registrieren
          </h1>
        </header>
      </article>
    </section>
    <section>
      <v-text-field
        name="E-MAil"
        label="E-MAil"
        id="E-MAil"
        v-model="user.email"
        type="E-MAil"
        required
        class="eingabefeld"
        style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px;margin-top: 5%"
      ></v-text-field>
      <v-text-field
        name="Username"
        label="Username"
        id="Username"
        v-model="user.username"
        required
        class="eingabefeld"
        style="width: 30% ;background: #FFFFFF; opacity: 0.6;margin-left: 35%;border-radius: 20px; margin-top: 5%"
      ></v-text-field>
      <v-text-field
        name="Passwort"
        label="Passwort"
        id="Passwort"
        v-model="user.passwort"
        type="Passwort"
        required
        class="eingabefeld"
        style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px;margin-top: 5%"
      ></v-text-field>
      <v-text-field
        name="Passwort bestätitgen"
        label="Passwort bestätitgen"
        id="Passwort bestätitgen"
        v-model="user.finalpasswort"
        required
        class="eingabefeld"
        style="width: 30% ;background: #FFFFFF; opacity: 0.6;margin-left: 35%;border-radius: 20px; margin-top: 5%"
      ></v-text-field>
      <article class="art">
        <v-btn
                style="background:   #181857;color: white"
          type="submit"
          class="btn"
          @click="$router.push({ name: 'Startscreen' })"
          >Registrieren</v-btn
        >
      </article>
    </section>
    <section class="settings">
      <v-icon
        style="font-size: 70px;float: right; color: white; margin-right: 5%;margin-top: 5%;opacity: 0.6"
        class="setting"
        @click="$router.push({ name: 'Einstellungen' })"
        >mdi-settings</v-icon
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return {
      user:{
        email:'',
        username:'',
        passwort:'',
        finalpasswort:'',
      }
    }
  },
  components: {}
};
</script>
<style scoped>
.home {
  font-family: "Hind Vadodara";

}
.fistart h1 {
  color: white;
  font-size: 40px;
  font-family: "Fredericka the Great";
  text-align: center;
  font-weight: lighter;
}
.setting:hover {
  background: #4c7fcc;
  border-radius: 40px;
}
.btn {
  font-family: "Hind Vadodara";
  align-content: center;
  justify-content: center;
  margin-top: 2%;
  margin-left: 42.5%;
  font-family: "Hind Vadodara";
}
.art {
  margin-top: 5%;
}
</style>
