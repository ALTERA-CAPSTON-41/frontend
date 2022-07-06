<template>
  <v-container fluid>
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        DETAIL PASIEN
      </v-toolbar-title>
    </div>
    <v-container>
      <v-card justify="space-around" color="#EDFFFA">
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
    </v-container>
    <div class="my-8 text-left">
      <h2 class="font-weight-medium">REKAM MEDIS</h2>
    </div>
    <v-card height="800px">
      <v-card-title>
        <div>
          <br />
        </div>
        <v-btn class="white--text" href="/AddPas" height="53px" color="#741935" left>
          <v-icon>mdi-plus </v-icon>
          <p class="my-5">Tambah Rekam Medis</p>
        </v-btn>

        <v-spacer></v-spacer>
        <div class="text-right">
          <v-container>
            <v-btn class="white--text" height="50px" color="#0D987A">
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
      <v-card href="/DetailPas">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-card>
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
