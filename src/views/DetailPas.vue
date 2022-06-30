<template>
  <v-app>
    <SidebarPage />
    <v-main>
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            DETAIL PASIEN
          </v-toolbar-title>
        </div>
        <v-container>
          <v-card justify="space-around">
            <v-card-title> Biodata </v-card-title>
            <br />

            <v-list-item-title class="mx-5">Nama</v-list-item-title>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-account</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey"
                  >Lorem ipsum dolor</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">Nomor Telepon</v-list-item-title>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-cellphone</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey">08123456789</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">Tanggal Lahir</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-calendar-text</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey">24 Juni 2022</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">Alamat</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey"
                  >Lorem ipsum dolor</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">Jenis Kelamin</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-gender-male-female</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey">Laki-laki</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">Golongan Darah</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-water-outline</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey">O</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn href="/"> Kembali </v-btn>
          </v-card-actions>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarPage from "../components/SidebarPage.vue";
export default {
  name: "App",
  components: {
    SidebarPage,
  },
};
</script>
