<template>
    <v-main style="padding: 0px">
      <v-container fluid style="padding: 0px">
        <v-card height="auto" style="padding: 30px">
          <v-card-title>
            <v-btn color="grey" left @click="dialog = !dialog">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-text>
                  <v-text-field label="Nama Dokter"></v-text-field>

                  <small class="grey--text"
                    >* This doesn't actually save.</small
                  >
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text color="primary" @click="dialog = false">
                    Input
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-spacer></v-spacer>
            <div class="text-right">
              <v-btn height="50px">
                <v-text-field
                  v-model="search"
                  class="mt-6 ml-2"
                  append-icon="mdi-magnify"
                  label="Search"
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
              <v-img src="../assets/img/poli.jpg" max-width="250" />
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
              <v-img src="../assets/img/poli.jpg" max-width="250" />
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
              <v-img src="../assets/img/poli.jpg" max-width="250" />
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
              <v-img src="../assets/img/poli.jpg" max-width="250" />
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
              <v-img src="../assets/img/poli.jpg" max-width="250" />
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
              <v-img src="../assets/img/poli.jpg" max-width="250" />
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
</template>

//
<script>
export default {
  name: "PoliPage",
  data() {
    return {
      dialog: false,
      search: "",
    };
  },
};

</script>