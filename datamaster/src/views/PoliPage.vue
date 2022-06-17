<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item-content class="text-center">
        <v-list-title> Menu </v-list-title>
      </v-list-item-content>

      <v-divider></v-divider>

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
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            DAFTAR POLIKLINIK
          </v-toolbar-title>
        </div>

        <div class="text-right">
          <v-btn width="300px" class="ma-2 py-2">
            <v-icon left>mdi-magnify</v-icon> Pencarian
          </v-btn>

          <v-btn clas="ma-2"> Akun </v-btn>
        </div>

        <v-card height="1000px" class="my-4"> </v-card>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Beranda", icon: "mdi-view-dashboard" },
        { title: "Poliklinik", icon: "healthicons:ambulatory-clinic-outline" },
        { title: "Dokter", icon: "mdi-doctor" },
        { title: "Perawat", icon: "mdi-account" },
        { title: "Administrator", icon: "mdi-shield-account" },
      ],
    };
  },
};
</script>
