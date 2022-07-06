<template>
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            DETAIL ADMINISTRATOR
          </v-toolbar-title>
        </div>
        <v-container>
          <v-card justify="space-around" color="#EDFFFA">
            <v-card-title> Biodata </v-card-title>
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
                <v-list-item-title color="grey">08123456789</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">NIP</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-smart-card-outline</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey">12345</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <br />
          </v-card>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn class="white--text" href="/Administrator" color="#741935"> Kembali </v-btn>
          </v-card-actions>
        </v-container>
      </v-container>
</template>

<script>

export default {
  name: "App",
};
</script>
