<template>
  <v-app>
    <Sidebar />
    <v-main style="padding: 0px;">
      <v-container fluid style="padding: 0px">
        <v-card height="auto">
          <v-card-title>
            <v-spacer></v-spacer>
            <div class="text-right">
              <v-btn height="50px">
                <v-text-field
                  v-model="search"
                  class="mt-6 ml-2"
                  append-icon="mdi-magnify"
                  label="Pencarian"
                  rounded
                ></v-text-field>
              </v-btn>
            </div>
          </v-card-title>
          <v-row>
            <v-col cols="4">
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-dots-vertical"
                }}</v-icon>
              </v-btn>
              <v-img src="../assets/img/lego.png" max-width="344" />
              <v-card-actions>
                <v-btn color="Black" text> Poliklinik Penyakit Dalam </v-btn>

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-col>

            <v-col cols="4">
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-dots-vertical"
                }}</v-icon>
              </v-btn>
              <v-img src="../assets/img/lego.png" max-width="344" />
              <v-card-actions>
                <v-btn color="Black" text> Poliklinik Penyakit Dalam </v-btn>

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-col>

            <v-col cols="4">
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-dots-vertical"
                }}</v-icon>
              </v-btn>
              <v-img src="../assets/img/lego.png" max-width="344" />
              <v-card-actions>
                <v-btn color="Black" text> Poliklinik Penyakit Dalam </v-btn>

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-col>

            <v-col cols="4">
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-dots-vertical"
                }}</v-icon>
              </v-btn>
              <v-img src="../assets/img/lego.png" max-width="344" />
              <v-card-actions>
                <v-btn color="Black" text> Poliklinik Penyakit Dalam </v-btn>

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-col>

            <v-col cols="4">
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-dots-vertical"
                }}</v-icon>
              </v-btn>
              <v-img src="../assets/img/lego.png" max-width="344" />
              <v-card-actions>
                <v-btn color="Black" text> Poliklinik Penyakit Dalam </v-btn>

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-col>

            <v-col cols="4">
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-dots-vertical"
                }}</v-icon>
              </v-btn>
              <v-img src="../assets/img/lego.png" max-width="344" />
              <v-card-actions>
                <v-btn color="Black" text> Poliklinik Penyakit Dalam </v-btn>

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app> </v-footer>
  </v-app>
</template>

//
<script>
// import Sidebar from "../components/SideBar.vue";
// export default {
//   name: "App",
//   components: {
//     Sidebar,
//   },
//   data() {
//     return {
//       dialog: false,
//       search: "",
//     };
//   },
// };
//
</script>
