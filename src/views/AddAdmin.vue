<template>
  <v-container fluid>
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        TAMBAH ADMINISTRATOR
      </v-toolbar-title>
    </div>
    <v-form>
      <v-container>
        <v-text-field v-model="nama" label="Nama" filled></v-text-field>
        <v-text-field v-model="nip" label="NIP" filled></v-text-field>
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

          <v-btn class="white--text" color="#DB5248" href="/Administrator"> batal </v-btn>
          <v-btn right class="mr-4 white--text" @click="submit" color="#0D987A"> Simpan </v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "App",
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
