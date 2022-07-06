<template>
  <v-container fluid>
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        EDIT DOKTER
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
        <v-text-field v-model="tgl" label="Tanggal Lahir" filled></v-text-field>
        <v-container fluid>
          <p>Jenis Kelamin</p>
          <v-radio-group v-model="row" row>
            <v-radio label="Perempuan" value="radio-1"></v-radio>
            <v-radio label="Laki-Laki" value="radio-2"></v-radio>
          </v-radio-group>
        </v-container>

        <v-text-field v-model="pk" label="Poliklinik" filled></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="clear"> batal </v-btn>
          <v-btn right class="mr-4" @click="submit"> Simpan </v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    nama: "Lorem ipsum Dolor",
    nip: "Lorem ipsum Dolor",
    sip: "Lorem ipsum Dolor",
    alamat: "Lorem ipsum Dolor",
    tgl: "24 Juni 2022",
    pk: "Lorem ipsum Dolor",
    row: null,
  }),
};
</script>
