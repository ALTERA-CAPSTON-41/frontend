<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="10">
            <v-card class="elevation-5">
              <v-row>
                <v-col cols="12" md="7">
                  <br>
                <v-img
                  class="mx-auto"
                  height="150"
                  width="150"
                  src="../assets/img/loginnn.png"
                ></v-img>
                  <v-card-text class="mt-4">
                    <h1>Sign In</h1><br>
                    <p>Enter Your Name and Password</p><br>

                    <v-form>
                      <h4>Username</h4>
                      <v-text-field
                        prepend-inner-icon="mdi-account"
                        label="Enter Your Username"
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
                    <v-btn v-on:click="login" width="300px" height="45px" rounded color="#819c76" dark>SIGN IN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="5" class="green lighten-3"></v-col>
             </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

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
      const result = await axios.post(
        'https://api.capstone.thisham.my.id/login'
      )
       .then(() => 
       {
          this.$router.push({ path: "/" });
        })
      console.log("login berhasil", result)
      console.warn(result)
    }
  },
  props: {
    source: String
  }
};
</script>