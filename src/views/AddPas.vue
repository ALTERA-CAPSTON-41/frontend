<template>
  <v-container fluid>
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        TAMBAH PASIEN
      </v-toolbar-title>
    </div>
    <v-form>
      <v-container>
        <v-text-field v-model="nama" label="Nama" filled></v-text-field>
        <v-text-field v-model="nik" label="NIK" filled></v-text-field>
        <v-text-field v-model="nt" label="Nomor Telepon" filled></v-text-field>
        <v-text-field v-model="alamat" label="Alamat" filled></v-text-field>
        <v-text-field v-model="tgl" label="Tanggal Lahir" filled></v-text-field>
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

          <v-btn class="white--text" color="#DB5248" href="/Pasien"> batal </v-btn>
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
    nik: "",
    nt: "",
    alamat: "",
    tgl: "",
    row: null,
  }),
};
</script>
