<template>
  <v-container fluid>
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        TAMBAH REKAM MEDIS
      </v-toolbar-title>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card justify="space-around" height="800px">
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
            <v-list-item-title class="mx-5">NIK</v-list-item-title>
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
            <v-list-item-title class="mx-5">Nomor Telepon</v-list-item-title>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-cellphone</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey">08212345678</v-list-item-title>
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
            <br />
            <v-list-item-title class="mx-5">Golongan Darah</v-list-item-title>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-water-outline</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title color="grey">O</v-list-item-title>
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
                  >Lorem Ipsum Dolor</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title> Rekam Medis </v-card-title>
            <br />
            <v-container fluid>
              <v-textarea
                height="10px"
                autocomplete="icd"
                label="ICD-10"
              ></v-textarea>
              <br />
              <v-textarea autocomplete="gejala" label="Gejala"></v-textarea>
              <br />
              <v-textarea
                autocomplete="rekomendasi"
                label="Rekomendasi"
              ></v-textarea>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn href="/AddResep"> Resep </v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
          <br />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn> Batal </v-btn>
            <v-btn> Tambah </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "AddRemdis",
};
</script>
