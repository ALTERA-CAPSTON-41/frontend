<template>
  <v-app>
    <SidebarPage />
    <v-main>
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            DETAIL DOKTER
          </v-toolbar-title>
        </div>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-card justify="space-around">
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
                    <v-list-item-title color="grey"
                      >Lorem ipsum dolor</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <br />
                <v-list-item-title class="mx-5"
                  >Tanggal Lahir</v-list-item-title
                >

                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-calendar-text</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title color="grey"
                      >24 Juni 2022</v-list-item-title
                    >
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
                <v-list-item-title class="mx-5"
                  >Jenis Kelamin</v-list-item-title
                >

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
              <v-card>
                <v-card-title> Data Dokter </v-card-title>
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

                <v-btn href="/"> Kembali </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarPage from "../components/SidebarPage.vue";
export default {
  name: "App",
  components: {
    SidebarPage,
  },
  data: () => ({
    nama: "Lorem ipsum Dolor",
    nip: "Lorem ipsum Dolor",
    sip: "Lorem ipsum Dolor",
    alamat: "Lorem ipsum Dolor",
    jk: "Lorem ipsum Dolor",
    tgl: "Lorem ipsum Dolor",
    pk: "Lorem ipsum Dolor",
  }),
};
</script>
