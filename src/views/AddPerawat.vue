<template>
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-bold">
            TAMBAH PERAWAT
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
            <v-text-field
              v-model="jk"
              label="Jenis Kelamin"
              filled
            ></v-text-field>
            <v-text-field
              v-model="tgl"
              label="Tanggal Lahir"
              filled
            ></v-text-field>
            <v-text-field v-model="pk" label="Poliklinik" filled></v-text-field>
            <v-btn color="#827e7e" class="mr-4 white--text" @click="submit"> submit </v-btn>
            <v-btn color="#827e7e" class="white--text" @click="clear"> clear </v-btn>
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
    jk: "",
    tgl: "",
    pk: "",
  }),
};
</script>