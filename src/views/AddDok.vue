<template>
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
            <v-text-field v-model="email" label="Email" filled></v-text-field>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="pw"
                  label="Password"
                  filled
                ></v-text-field>
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
              <v-btn right class="mr-4" @click="submit"> Tambah </v-btn>
              <v-btn @click="clear"> batal </v-btn>
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
    jk: "Lorem ipsum Dolor",
    tgl: "Lorem ipsum Dolor",
    pk: "Lorem ipsum Dolor",
    email: "Lorem ipsum Dolor",
    pw: "Lorem ipsum Dolor",
    cpw: "Lorem ipsum Dolor",
  }),
};
</script>
