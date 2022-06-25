<template>
      <v-container fluid>
        <v-card height="800px">
          <v-card-title>
            <div>
              <br />
              <v-container id="dropdown-example-3">
                <v-overflow-btn
                  :items="dropdown_edit"
                  label="FILTER"
                  item-value="text"
                  outlined
                ></v-overflow-btn>
              </v-container>
            </div>
            <v-btn href="/AddPerawat" height="53px" color="grey" left>
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
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-btn>
            </div>
          </v-card-title>
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
            { icon: "mdi-account-details" },
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
            { icon: "mdi-account-details" },
            { icon: "mdi-pencil" },
            { icon: "mdi-Delete" },
          ],
        },
      ],
    };
  },
};
</script>