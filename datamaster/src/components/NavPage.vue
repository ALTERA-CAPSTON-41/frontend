<template>
  <v-app-bar color="deep-black" dense dark fixed height="50%">
    <v-toolbar-title>
      <v-img
        src="https://i.postimg.cc/KjmNqZKJ/1625492037799-1.png"
        max-width="120"
        max-height="120"
      />
    </v-toolbar-title>

    <v-row>
      <div>
        <NuxtLink to="/"><v-btn text> Home </v-btn></NuxtLink>
        <v-btn icon @click="show = !show">
          SHOP
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
        <NuxtLink to="/about"><v-btn text> About </v-btn></NuxtLink>
      </div>
    </v-row>
    <v-expand-transition>
      <div v-show="show">
        <v-btn text> T-SHIRT </v-btn>
        <v-btn text> LocalPride </v-btn>
      </div>
    </v-expand-transition>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <v-btn>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>
