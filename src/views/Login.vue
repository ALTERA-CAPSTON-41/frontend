<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <div class="title">
        <v-img
            class="mx-auto"
            max-height="350"
            max-width="120"
            justify-center
            src="../assets/img/lego.png"
        ></v-img>
        <span>Hai, Admin</span>
        </div>
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h2>Sign In</h2><br>
                    <p>Enter Your Name and Password</p><br><br>

                    <v-form>
                      <h4>Username</h4>
                      <v-text-field
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
                        id="password"
                        label="Enter Your Password"
                        name="password"
                        type="password"
                        color="teal accent-3"
                        filled
                        rounded
                        dense
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-5">
                    <v-btn v-on:click="login" width="300px" height="45px" rounded color="teal accent-3" dark>SIGN IN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="teal accent-3"></v-col>
             </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data:() => ({
    return : {
      email: '',
      password: ''
    }
  }),
  methods:{
    async login()
    {
      let result = await axios.post(
        'https://virtserver.swaggerhub.com/capstone-41/clinic-api/1.0.0/login'
      )
        console.warn(result)
        console.log("test data login")
    }
  },
  props: {
    source: String
  }
};
</script>