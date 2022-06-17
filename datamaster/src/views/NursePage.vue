<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item-content class="text-center">
        <v-list-title> Menu </v-list-title>
      </v-list-item-content>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            DAFTAR PERAWAT
          </v-toolbar-title>
        </div>

        <v-card height="1000px">
          <v-card-title>
            <v-spacer></v-spacer>
            <div class="text-right">
              <v-btn
                v-model="search"
                label="pencarian"
                hide-details
                width="300px"
                class="ma-2 py-2"
              >
                <v-icon left>mdi-magnify</v-icon> Pencarian
              </v-btn>

              <v-btn clas="ma-2"> Cari </v-btn>
            </div>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>

        <v-card height="1000px" class="my-4"> </v-card>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
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
      items: [
        { title: "Beranda", icon: "mdi-view-dashboard" },
        { title: "Poliklinik", icon: "mdi-hospital" },
        { title: "Dokter", icon: "mdi-doctor" },
        { title: "Perawat", icon: "mdi-account" },
        { title: "Administrator", icon: "mdi-shield-account" },
      ],
    };
  },
};
</script>
