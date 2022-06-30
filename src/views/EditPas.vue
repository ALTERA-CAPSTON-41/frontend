<template>
  <v-app>
    <SidebarPage />
    <v-main>
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            EDIT PASIEN
          </v-toolbar-title>
        </div>
        <v-form>
          <v-container>
            <v-text-field v-model="nama" label="Nama" filled></v-text-field>
            <v-text-field
              v-model="nt"
              label="Nomor Telepon"
              filled
            ></v-text-field>
            <v-text-field v-model="alamat" label="Alamat" filled></v-text-field>
            <v-text-field
              v-model="tgl"
              label="Tanggal Lahir"
              filled
            ></v-text-field>
            <v-container fluid>
              <p>Jenis Kelamin</p>
              <v-radio-group v-model="row" row>
                <v-radio label="Perempuan" value="radio-1"></v-radio>
                <v-radio label="Laki-Laki" value="radio-2"></v-radio>
              </v-radio-group>
            </v-container>
            <v-container fluid>
              <p>Golongan Darah</p>
              <v-radio-group v-model="row" row>
                <v-radio label="A" value="radio-1"></v-radio>
                <v-radio label="AB" value="radio-2"></v-radio>
                <v-radio label="B" value="radio-3"></v-radio>
                <v-radio label="O" value="radio-4"></v-radio>
              </v-radio-group>
            </v-container>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn @click="clear"> batal </v-btn>
              <v-btn right class="mr-4" @click="submit"> Simpan </v-btn>
            </v-card-actions>
          </v-container>
        </v-form>
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
  data: () => ({
    nama: "Lorem ipsum Dolor",
    nt: "082123456789",
    alamat: "Lorem ipsum Dolor",
    tgl: "24 Juni 2022",
    row: null,
  }),
};
</script>
