<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <!-- <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Sign in to Diprella</h1> -->
                        <h2>Sign In</h2><br>
                        <p>Enter Your Name and Password</p><br><br>
                        <!-- <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div> -->
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
                        <v-btn width="300px" height="45px" rounded color="teal accent-3" dark>SIGN IN</v-btn>
                      </div>
                    </v-col>


                    <v-col cols="12" md="4" class="teal accent-3">

                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({

  }),
  props: {
    source: String
  }
};
</script>