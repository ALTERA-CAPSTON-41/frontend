<template>
  <v-app>
    <Sidebar />
    <v-main style="padding: 0px">
      <v-container fluid style="margin-left padding: 0px">
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            EDIT POLIKLINIK
          </v-toolbar-title>
        </div>
        <v-card>
          <br />
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="../assets/img/lego.png" max-width="200" />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="nama"
                label="Nama Poliklinik"
                filled
              ></v-text-field>
              <v-btn class="mr-4" @click="batal">Batal</v-btn>
              <v-btn @click="simpan">Simpan</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "../components/SideBar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
  data() {
    return {
      nama: "Lorem ipsum dolor",
    };
  },
};
</script>
