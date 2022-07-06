<template>
  <v-container fluid>
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        DAFTAR ANTREAN
      </v-toolbar-title>
    </div>
    <v-card height="800px">
      <v-card-title>
        <div>
          <br />
        </div>
        <v-btn href="/AddAntrean" height="53px" color="grey" left>
          <v-icon>mdi-plus </v-icon>
          <p class="my-5">Tambah Antrian</p>
        </v-btn>

        <v-spacer></v-spacer>
        <div class="text-right">
          <v-container>
            <v-btn height="50px" color="grey">
              <v-icon> mdi-filter-variant </v-icon>
            </v-btn>
          </v-container>
        </div>
        <div class="text-right">
          <v-btn height="50px">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pencarian"
              hide-details
            ></v-text-field>
          </v-btn>
        </div>
      </v-card-title>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
        <CariPas />
      </v-card>
    </v-card>

    <!-- If using vue-router -->
    <router-view></router-view>
  </v-container>
</template>

<script>
import CariPas from "../components/CariPas.vue";
export default {
  name: "App",
  components: {
    CariPas,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "no",
        },
        { text: "Tanggal", value: "tgl" },
        { text: "Nama", value: "nama" },
        { text: "Poliklinik", value: "pk" },
        { text: "Nomor Antrean", value: "nomer" },
        { text: "Aksi", value: "aksi" },
      ],
      desserts: [
        {
          no: "1",
          tgl: "1 Juli 2022",
          nama: "Lorem Ipsum",
          pk: "Lorem Ipsum",
          nomer: 10,
          aksi: [
            { Icon: "mdi-account-details" },
            { icon: "mdi-Pencil" },
            { icon: "mdi-Delete" },
          ],
        },
        {
          no: "2",
          tgl: "1 Juli 2022",
          nama: "Lorem Ipsum",
          pk: "Lorem Ipsum",
          nomer: 10,
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "3",
          tgl: "1 Juli 2022",
          nama: "Lorem Ipsum",
          pk: "Lorem Ipsum",
          nomer: 10,
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "4",
          tgl: "1 Juli 2022",
          nama: "Lorem Ipsum",
          pk: "Lorem Ipsum",
          nomer: 10,
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "5",
          tgl: "1 Juli 2022",
          nama: "Lorem Ipsum",
          pk: "Lorem Ipsum",
          nomer: 10,
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "6",
          tgl: "1 Juli 2022",
          nama: "Lorem Ipsum",
          pk: "Lorem Ipsum",
          nomer: 10,
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "7",
          tgl: "1 Juli 2022",
          nama: "Lorem Ipsum",
          pk: "Lorem Ipsum",
          nomer: 10,
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "8",
          tgl: "1 Juli 2022",
          nama: "Lorem Ipsum",
          pk: "Lorem Ipsum",
          nomer: 10,
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
