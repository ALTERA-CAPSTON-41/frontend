<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        DETAIL ANTREAN
      </v-toolbar-title>
    </div>
    <v-container>
      <v-card  justify="space-around">
        <br />
        <v-list-item-title class="mx-5">Nama</v-list-item-title>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title color="grey"
              >Lorem ipsum dolor</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <br />
        <v-list-item-title class="mx-5">Email</v-list-item-title>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title color="grey"
              >Lorem ipsum dolor</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <br />
        <v-list-item-title class="mx-5">Tanggal Antrean</v-list-item-title>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-calendar-text</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title color="grey">24 Juni 2022</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <br />
        <v-list-item-title class="mx-5">Nomor Antrean</v-list-item-title>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-cellphone</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title color="grey">10</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <br />
        <v-list-item-title class="mx-5"
          >Tanggal Selesai Pelayanan</v-list-item-title
        >

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-calendar-text</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title color="grey">24 Juni 2022</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <br />
      </v-card>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn href="/AddAntrean"> Kembali </v-btn>
      </v-card-actions>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "App",
};
</script>
