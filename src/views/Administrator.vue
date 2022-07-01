<template>
      <v-container fluid>
        <v-card height="800px">
          <v-card-title>
            <div>
              <br />
            </div>
            <v-btn href="/AddAdmin" height="53px" color="grey" left>
              <v-icon>mdi-plus </v-icon>
              <p class="my-5">Tambah Admin</p>
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
          <v-card href="/DetailAdmin">
            <v-data-table
              :headers="headers"
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
        { text: "NIP", value: "nik" },
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

