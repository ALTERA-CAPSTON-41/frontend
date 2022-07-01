<template>
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            EDIT ADMINISTRATOR
          </v-toolbar-title>
        </div>
        <v-form>
          <v-container>
            <v-text-field v-model="nama" label="Nama" filled></v-text-field>
            <v-text-field v-model="nama" label="NIP" filled></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn right class="mr-4" @click="submit"> Simpan </v-btn>
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
