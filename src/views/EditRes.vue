<template>
  <v-container fluid>
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        EDIT RESEP OBAT
      </v-toolbar-title>
    </div>
    <v-form>
      <v-container>
        <v-text-field v-model="nama" label="Nama Obat" filled></v-text-field>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="jml" label="Jumlah" filled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="dosis" label="Dosis" filled></v-text-field>
          </v-col>
        </v-row>
        <v-text-field
          v-model="prepar"
          label="Preparatory"
          filled
        ></v-text-field>
        <br />
        <v-btn> Add More </v-btn>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="clear"> batal </v-btn>
          <v-btn right class="mr-4" @click="submit"> Tambah </v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    nama: "Lorem Ipsum dolor",
    jml: "XV",
    dosis: "2x1",
    prepar: "Lorem Ipsum Dolor",
  }),
};
</script>
