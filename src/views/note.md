<v-row class="px-5 mt-n6 ml-5">
      <v-col cols="12" sm="3" v-for="list in lists" :key="list">
        <v-card
          align="center"
          class="square border pt-10"
          width="200"
          height="200"
        >
          <v-icon size="60">
            {{ list.icon }}
          </v-icon>
          <v-card-text class="grey--text text-lg-h6">
            {{ list.title }}
          </v-card-text>
          <v-btn absolute class="white--text" fab left top>
            <h2>{{ list.count }}</h2>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

  <!-- CARD POLIKLINIK -->
  <v-col class="searchBar" cols="12" sm="6" md="4">
      <v-text-field
        class="mt-6 ml-2"
        filled
        rounded
        dense
        append-icon="mdi-magnify"
      />
    </v-col>
    <br />
    <br /><br /><br />
    <v-row align-self="align" no-gutters>
      <v-col v-for="n in 3" :key="n">
        <v-card class="cards mb-5 mt-6" max-width="340" outlined tile>
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
      </v-col>
    </v-row>

<!-- noteeee -->
/* eslint-disable */
<template>
  <v-container>
    <v-col class="searchBar" cols="12" sm="6" md="4">
      <v-text-field
        class="mt-6 ml-2"
        filled
        rounded
        dense
        append-icon="mdi-magnify"
      />
    </v-col>
    <br />
    <br /><br /><br />
    <v-card class="cards mb-6 mt-6" max-width="340" outlined tile>
      <v-row align-self="align" no-gutters>
        <v-col v-for="n in 3" :key="n">
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
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.searchBar {
  float: right;
}
</style>
