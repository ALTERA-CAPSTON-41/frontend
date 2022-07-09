<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>TAMBAH DOKTER</b>
      </v-toolbar-title>
    </div>
    <v-card height="850px" color="#F9FFFB">
    <v-form>
      <v-container>
        <p>Nama</p>
        <v-text-field class="form" v-model="nama" label="Masukkan Nama" solo></v-text-field><br>
        <v-row>
          <v-col cols="12" sm="6">
            <p>NIP</p>
            <v-text-field class="form" v-model="nip" label="Masukkan NIP" solo></v-text-field><br>
          </v-col>

          <v-col cols="12" sm="6">
            <p>SIP</p>
            <v-text-field class="form" v-model="sip" label="Masukkan SIP" solo></v-text-field><br>
          </v-col>
        </v-row>
            <p>Alamat</p>
            <v-text-field class="form" v-model="alamat" label="Masukkan Alamat" solo></v-text-field><br>
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

          <v-btn class="white--text" color="#DB5248" href="/Dokter"> batal </v-btn>
          <v-btn right class="mr-4 white--text" @click="submit" color="#0D987A"> Simpan </v-btn>
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
