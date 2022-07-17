<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="justify-center fill-height" fluid style="padding: 0px">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="9">
            <v-card class="elevation-2">
              <v-row>
                <v-col cols="12" md="7">
                  <br />
                  <v-img
                    class="mx-auto"
                    max-width="140"
                    src="../assets/img/logo1.svg"
                  ></v-img>
                  <v-card-text class="mt-1">
                    <h1 class="text">Sign In</h1>
                    <br />
                    <p>Enter Your Username and Password</p>
                    <br />

                    <v-form>
                      <h4>Username</h4>
                      <v-text-field
                        prepend-inner-icon="mdi-account"
                        label="Enter Your Username"
                        v-model="Email"
                        class="form-login input-group--focused" 
                        solo
                      />
                      <h4>Password</h4>
                      <v-text-field
                        prepend-inner-icon="mdi-lock"
                        id="password"
                        label="Enter Your Password"
                        name="password"
                        v-model="password"
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show3 ? 'text' : 'password'"
                        class="form-login input-group--focused"
                        @click:append="show3 = !show3"
                        solo
                      />
                    </v-form>
                    <p class="lupa text-right" @click="pas">Lupa Password?</p>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn @click="login" width="300px" height="45px" rounded color="#0D987A" dark>SIGN IN</v-btn>
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
      Email: '',
      password: '',
      row: null,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        rules: {
          required: value => !!value || 'Required.',
          emailMatch: () => (`The email and password you entered don't match`),
        },
  }),
  methods:{
    async login(){
        const result = await this.$store.dispatch('fetchLogin', {
              email: this.Email,
              password: this.password
            });
            if (result) {
              localStorage.setItem("authenticated", true);
              this.$router.push({ name: "BerandaPage" });
            } else {
              this.errorText = this.$store.state.info;
            }
            },

    pas(){
      this.$router.push({name: "UbahPassword"})
    }
  },
  props: {
    source: String,
  },
};
</script>

<style>
.text {
  font-weight: 600 !important;
  font-size: 35px;
}
#inspire {
  align-content: center !important;
  display: flex !important;
}
.lupa:hover {
  color: #0d987a;
}
.form-login {
  border-style: solid;
  border-color: #0b715b;
  border-width: 2px;
  border-radius: 20px !important;
  height: 52px;
}
</style>
