<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>DETAIL POLIKLINIK</b>
      </v-toolbar-title>
    </div>
    <v-container>
      <v-card class="rounded-xl" justify="space-around" color="#EDFFFA">
        <v-card-title> <b>Polilklinik</b> </v-card-title>
        <v-list-item-title class="mx-5">Poliklinik Umum</v-list-item-title>
        <br />
      </v-card>
    </v-container>
    <br />
    <v-card>
      <v-tabs v-model="tab">
        <v-tab v-for="item in items" :key="item.tab">
          <b> {{ item.tab }} </b>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab" color="#0D987A">
          <DaftarPoli />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import DaftarPoli from "../../components/DaftarPoli.vue";
export default {
  name: 'DetailPoli',
  components: {
    DaftarPoli,
  },
  data() {
    return {
      tab: null,
      items: [{ tab: "Daftar Dokter" }, { tab: "Daftar Perawat" }],
    };
  },
};
</script>
