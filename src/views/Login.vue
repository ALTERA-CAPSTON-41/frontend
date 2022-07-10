<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="align-stretch" fluid style="padding: 0px" max-height="100"> 
        <v-row align="center" justify="center">
          <v-col cols="12" md="9">
            <v-card class="elevation-2">
              <v-row>
                <v-col cols="12" md="7">
                  <br>
                <v-img
                  class="mx-auto"
                  max-width="150"
                  src="../assets/img/logo1.svg"
                ></v-img>
                  <v-card-text class="mt-4">
                    <h1 class="text">Sign In</h1><br>
                    <p>Enter Your Name and Password</p><br>

                    <v-form>
                      <h4>Username</h4>
                      <v-text-field
                        prepend-inner-icon="mdi-account"
                        label="Enter Your Username"
                        v-model="email"
                        name="Email"
                        type="text"
                        color="teal accent-3"
                        filled
                        rounded
                        dense
                      />
                      <h4>Password</h4>
                      <v-text-field
                      prepend-inner-icon="mdi-lock"
                        id="password"
                        label="Enter Your Password"
                        name="password"
                        v-model="password"
                        type="password"
                        color="teal accent-3"
                        append-icon="mdi-eye-off"
                        filled
                        rounded
                        dense
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-5">
                    <v-btn v-on:click="login" width="300px" height="45px" rounded color="#0D987A" dark>SIGN IN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="5">
                  <v-img
                  class="mx-auto"
                  height="609"
                  width="1000"
                  src="../assets/img/imglogin.jpg"
                ></v-img>
                </v-col>
             </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: "LoginPage",
  data:() => ({
    return : {
      email: '',
      password: ''
    }
  }),
  methods:{
    async login(){
            this.$store.dispatch('fetchLogin', {
              email: this.email,
              password: this.password
            })
        }
  },
  props: {
    source: String
  }
};
</script>

<style>
.text {
  font-weight: 600 !important;
}
</style>