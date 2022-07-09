<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>TAMBAH PASIEN</b>
      </v-toolbar-title>
    </div>
    <v-card height="850px" color="#F9FFFB">
    <v-form>
      <v-container>
        <p>Nama</p>
        <v-text-field class="form" v-model="nama" label="Masukkan Nama" solo></v-text-field><br>
        <p>NIK</p>
        <v-text-field class="form" v-model="nik" label="Masukkan NIK" solo></v-text-field><br>
        <p>Nomor Telepon</p>
        <v-text-field class="form" v-model="nmrtelepon" label="Masukkan Nomor Telepon" solo></v-text-field><br>
        <p>Alamat</p>
        <v-text-field class="form" v-model="alamat" label="Masukkan Alamat" solo></v-text-field><br>
        <p>Tanggal Lahir</p>
        <v-text-field class="form" v-model="tgllahir" label="Masukkan Tanggal Lahir" solo></v-text-field><br>

          <p>Jenis Kelamin</p>
          <v-radio-group v-model="kelamin" row>
            <v-radio label="Perempuan" value="radio-1"></v-radio>
            <v-radio label="Laki-Laki" value="radio-2"></v-radio>
          </v-radio-group>

          <p>Golongan Darah</p>
          <v-radio-group v-model="row" row>
            <v-radio label="A+" value="radio-1"></v-radio>
            <v-radio label="A" value="radio-2"></v-radio>
            <v-radio label="AB+" value="radio-3"></v-radio>
            <v-radio label="AB-" value="radio-4"></v-radio>
            <v-radio label="B+" value="radio-1"></v-radio>
            <v-radio label="B-" value="radio-2"></v-radio>
            <v-radio label="O+" value="radio-3"></v-radio>
            <v-radio label="O-" value="radio-4"></v-radio>
          </v-radio-group>
        <br><br>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn large class="btn white--text" color="#DB5248" href="/Pasien"> batal </v-btn>
          <v-btn large right class="btn mr-4 white--text" @click="submit" color="#0D987A"> Simpan </v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
    </v-card>
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

<style>
.form {
  border-style: ridge;
  border-color: #0B715B;
  border-width: 1.5px;
  border-radius: 10px;
  height: 51px;
}

.btn {
  height: 80px;
  width: 135px;
  border-radius: 15px;
}
</style>