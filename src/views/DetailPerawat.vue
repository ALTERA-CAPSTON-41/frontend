<template>
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-bold">
            DETAIL PERAWAT
          </v-toolbar-title>
        </div>
        <v-form>
          <v-container>
            <v-text-field disabled v-model="nama" label="Nama" filled></v-text-field>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field disabled v-model="nip" label="NIP" filled></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field disabled v-model="sip" label="SIP" filled></v-text-field>
              </v-col>
            </v-row>
            <v-text-field disabled v-model="alamat" label="Alamat" filled></v-text-field>
            <v-text-field
              v-model="jk"
              disabled
              label="Jenis Kelamin"
              filled
            ></v-text-field>
            <v-text-field
              v-model="tgl"
              disabled
              label="Tanggal Lahir"
              filled
            ></v-text-field>
            <v-text-field disabled v-model="pk" label="Poliklinik" filled></v-text-field>
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
  }),
};
</script>