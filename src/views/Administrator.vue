<template>
      <v-container fluid style="padding: 30px">
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            <b>DAFTAR ADMIN</b>
          </v-toolbar-title>
        </div>
        <v-card class="rounded-xl" height="700px" color="#F9FFFB">
          <v-card-title>
            <div>
              <br />
            </div>
            <v-btn class="white--text" href="/AddAdmin" height="53px" color="#0D987A" left>
              <v-icon>mdi-plus </v-icon>
              <p class="my-5 "> Tambah Administrator</p>
            </v-btn>

            <v-spacer></v-spacer>
            <div class="text-right">
              <v-container>
                <v-btn class="white--text" height="50px" color="#0D987A">
                  <v-icon> mdi-filter-variant </v-icon>
                </v-btn>
              </v-container>
            </div>
            <div class="text-left">
              <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="Search Here"
              solo
              class="form"
              hide-details
            ></v-text-field>
            </div>
          </v-card-title>
          <v-card href="/DetailAdmin">
            <v-data-table
              :headers="headers" class="header"
              :items="desserts"
              :search="search"
            ></v-data-table>
          </v-card>
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

<style>
.header {
  background-color: aqua;
}
</style>