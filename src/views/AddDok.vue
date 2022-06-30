<template>
  <v-app>
    <SidebarPage />
    <v-container fluid>
      <div class="my-4">
        <v-toolbar-title class="font-weight-medium">
          TAMBAH DOKTER
        </v-toolbar-title>
      </div>
      <v-form>
        <v-container>
          <v-text-field v-model="nama" label="Nama" filled></v-text-field>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field v-model="nip" label="NIP" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="sip" label="SIP" filled></v-text-field>
            </v-col>
          </v-row>
          <v-text-field v-model="alamat" label="Alamat" filled></v-text-field>
          <v-container fluid>
            <p>Jenis Kelamin</p>
            <v-radio-group v-model="row" row>
              <v-radio label="Perempuan" value="radio-1"></v-radio>
              <v-radio label="Laki-Laki" value="radio-2"></v-radio>
            </v-radio-group>
          </v-container>
          <v-text-field
            v-model="tgl"
            label="Tanggal Lahir"
            filled
            icon="mdi-calendar-text"
          ></v-text-field>
          <v-text-field v-model="pk" label="Poliklinik" filled></v-text-field>
          <v-text-field v-model="email" label="Email" filled></v-text-field>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field v-model="pw" label="Password" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="cpw"
                label="Confirm Pasword"
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="clear"> batal </v-btn>
            <v-btn right class="mr-4" @click="submit"> Tambah </v-btn>
          </v-card-actions>
        </v-container>
      </v-form>
    </v-container>
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
    nama: "",
    nip: "",
    sip: "",
    alamat: "",
    tgl: "",
    pk: "",
    email: "",
    pw: "",
    cpw: "",
    row: null,
  }),
};
</script>
