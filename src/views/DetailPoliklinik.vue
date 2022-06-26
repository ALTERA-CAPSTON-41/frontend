<template>
  <v-app>
    <SideBar />
    <v-main style="padding: 0px 0px 0px 0px">
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            DETAIL POLIKLINIK
          </v-toolbar-title>
        </div>
        <v-card>
          <br />
          <v-form>
            <v-container>
              <v-text-field
                v-model="nama"
                label="Nama Poliklinik"
                filled
              ></v-text-field>
            </v-container>
          </v-form>
        </v-card>

        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            DAFTAR DOKTER
          </v-toolbar-title>
        </div>
        <v-card height="800px">
          <br />
          <v-spacer></v-spacer>
          <div class="text-right">
            <v-btn height="50px">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Pencarian"
                single-line
                hide-details
              ></v-text-field>
            </v-btn>
          </div>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
  data() {
    return {
      nama: "Lorem ipsum dolor",
      dialog: false,
      search: "",
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "no",
        },
        { text: "Nama", value: "nama" },
        { text: "NIP", value: "nip" },
        { text: "SIP", value: "sip" },
        { text: "Poliklinik", value: "poliklinik" },
        { text: "Aksi", value: "aksi" },
      ],
      desserts: [
        {
          no: "1",
          nama: "Lorem Ipsum",
          nip: 274748971,
          sip: 18742917,
          poliklinik: "Lorem Ipsum",
          aksi: [
            { Icon: "mdi-account-details" },
            { icon: "mdi-Pencil" },
            { icon: "mdi-Delete" },
          ],
        },
        {
          no: "2",
          nama: "Lorem Ipsum",
          nip: 274748971,
          sip: 18742917,
          poliklinik: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "3",
          nama: "Lorem Ipsum",
          nip: 274748971,
          sip: 18742917,
          poliklinik: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "4",
          nama: "Lorem Ipsum",
          nip: 274748971,
          sip: 18742917,
          poliklinik: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "5",
          nama: "Lorem Ipsum",
          nip: 274748971,
          sip: 18742917,
          poliklinik: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "6",
          nama: "Lorem Ipsum",
          nip: 274748971,
          sip: 18742917,
          poliklinik: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "7",
          nama: "Lorem Ipsum",
          nip: 274748971,
          sip: 18742917,
          poliklinik: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "8",
          nama: "Lorem Ipsum",
          nip: 274748971,
          sip: 18742917,
          poliklinik: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
      ],
    };
  },
};
</script>