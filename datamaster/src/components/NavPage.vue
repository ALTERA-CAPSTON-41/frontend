<template>
  <v-list dense>
    <v-list-item v-for="item in items" :key="item.title">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Beranda", icon: "mdi-view-dashboard" },
        { title: "Poliklinik", icon: "mdi-hospital" },
        { title: "Dokter", icon: "mdi-doctor" },
        { title: "Perawat", icon: "mdi-account" },
        { title: "Administrator", icon: "mdi-shield-account" },
      ],
    };
  },
};
</script>
