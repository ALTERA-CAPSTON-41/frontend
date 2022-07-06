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
        <v-text-field v-model="nip" label="NIP" filled></v-text-field>

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
    nama: " Lorem Ipsum Dolor",
    nip: "123345678",
  }),
};
</script>
