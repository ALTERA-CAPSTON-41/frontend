<template>
  <v-container>
    <v-col cols="12" sm="6" md="4">
      <v-text-field
        class="mt-6 ml-2"
        filled
        rounded
        dense
        append-icon="mdi-magnify"
      />
    </v-col>
    <v-row>
      <v-card class="mx-auto mt-6" max-width="344">
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-dots-vertical" }}</v-icon>
        </v-btn>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <v-card-actions>
          <v-btn color="Black" text> Poliklinik Penyakit Dalam </v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
