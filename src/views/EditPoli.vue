<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>EDIT POLI</b>
      </v-toolbar-title>
    </div>
    <v-card class="rounded-xl" height="230px" color="#F9FFFB">
    <v-form>
      <v-container>
        <p>Nama Poli</p>
        <v-text-field class="form" v-model="nama" label="Masukkan Nama Poli" solo></v-text-field><br>
        <br>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn large class="btn white--text" color="#DB5248" href="/Administrator"> batal </v-btn>
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
  data: () => ({}),
};
</script>

<style>
.btn {
  height: 80px;
  width: 135px;
  border-radius: 15px;
}
.form {
  border-style: ridge;
  border-color: #0B715B;
  border-width: 1.5px;
  border-radius: 10px;
  height: 51px;
}
</style>