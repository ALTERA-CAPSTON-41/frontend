<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>DETAIL PERAWAT</b>
      </v-toolbar-title>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="rounded-xl" justify="space-around" color="#EDFFFA">
            <v-card-title> <b>Biodata</b> </v-card-title>
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
            <v-list-item-title class="mx-5">Tanggal Lahir</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-calendar-text</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey">24 Juni 2022</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">Alamat</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey"
                  >Lorem ipsum dolor</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">Jenis Kelamin</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-gender-male-female</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey"
                  >Lorem ipsum dolor</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="rounded-xl" color="#EDFFFA">
            <v-card-title> <b>Data Perawat</b> </v-card-title>
            <br />

            <v-list-item-title class="mx-5">NIP</v-list-item-title>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-smart-card-outline</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey"
                  >Lorem ipsum dolor</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">SIP</v-list-item-title>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-card-account-details-outline</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey"
                  >Lorem ipsum dolor</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">Poliklinik</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-hospital-building</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey"
                  >Poliklinik penyakit dalam</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
          </v-card>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn large class="btn white--text" href="/Perawat" color="#0D987A"> Kembali </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.btn {
  height: 80px;
  width: 135px;
  border-radius: 15px;
}
</style>