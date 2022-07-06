<template>
  <v-container fluid>
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        TAMBAH ANTREAN
      </v-toolbar-title>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card justify="space-around" height="800px" color="#EDFFFA">
            <br>
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
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card>
            <v-container fluid>
              <br />
              <br />
              <v-textarea
                height="10px"
                autocomplete="pk"
                label="Poliklinik"
              ></v-textarea>
              <br />
              <v-select
                v-model="select"
                :items="items"
                label="Status Pasien"
              ></v-select>
            </v-container>
          </v-card>
          <br />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="white--text" href="/DaftarAntrean" color="#741935"> Batal </v-btn>
            <v-btn class="white--text" color="#0D987A"> Simpan </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    select: null,
    items: ["Aktif", "Tidak Aktif"],
  }),
};
</script>
