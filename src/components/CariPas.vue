<template>
  <v-container fluid>
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        CARI PASIEN
      </v-toolbar-title>
    </div>
    <br />
    <v-btn height="50px" width="1000px">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search Paien By NIK"
        hide-details
      ></v-text-field>
    </v-btn>
    <br />
    <br />
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        DAFTAR PASIEN
      </v-toolbar-title>
    </div>
    <v-card href="/DetailPas" height="800px">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
    <!-- If using vue-router -->
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: "App",
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
        { text: "Nama", value: "nama" },
        { text: "NIK", value: "nik" },
        { text: "Jenis Kelamin", value: "jk" },
        { text: "Golongan Darah", value: "golda" },
        { text: "Aksi", value: "aksi" },
      ],
      desserts: [
        {
          no: "1",
          nama: "Lorem Ipsum",
          nik: 274748971,
          jk: "Lorem",
          golda: "Lorem Ipsum",
          aksi: [
            { Icon: "mdi-account-details" },
            { icon: "mdi-Pencil" },
            { icon: "mdi-Delete" },
          ],
        },
        {
          no: "2",
          nama: "Lorem Ipsum",
          nik: 274748971,
          jk: "Lorem",
          golda: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "3",
          nama: "Lorem Ipsum",
          nik: 274748971,
          jk: "Lorem",
          golda: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "4",
          nama: "Lorem Ipsum",
          nik: 274748971,
          jk: "Lorem",
          golda: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "5",
          nama: "Lorem Ipsum",
          nik: 274748971,
          jk: "Lorem",
          golda: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "6",
          nama: "Lorem Ipsum",
          nik: 274748971,
          jk: "Lorem",
          golda: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "7",
          nama: "Lorem Ipsum",
          nik: 274748971,
          jk: "Lorem",
          golda: "Lorem Ipsum",
          aksi: [
            { Icons: "mdi-account-details" },
            { icons: "mdi-Pencil" },
            { icons: "mdi-Delete" },
          ],
        },
        {
          no: "8",
          nama: "Lorem Ipsum",
          nik: 274748971,
          jk: "Lorem",
          golda: "Lorem Ipsum",
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
