<template>
  <v-app>
    <SidebarPage />
    <v-main>
      <v-container fluid>
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            DETAIL DOKTER
            <v-btn href="/AddDok" color="grey" left>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-toolbar-title>
        </div>
        <v-form>
          <v-container>
            <v-text-field
              disabled
              v-model="nama"
              label="Nama"
              filled
            ></v-text-field>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  disabled
                  v-model="nip"
                  label="NIP"
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  disabled
                  v-model="sip"
                  label="SIP"
                  filled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              disabled
              v-model="alamat"
              label="Alamat"
              filled
            ></v-text-field>
            <v-text-field
              disabled
              v-model="jk"
              label="Jenis Kelamin"
              filled
            ></v-text-field>
            <v-text-field
              disabled
              v-model="tgl"
              label="Tanggal Lahir"
              filled
            ></v-text-field>
            <v-text-field
              disabled
              v-model="pk"
              label="Poliklinik"
              filled
            ></v-text-field>
          </v-container>
        </v-form>
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
    nama: "Lorem ipsum Dolor sit amet",
    nip: "Lorem ipsum Dolor",
    sip: "Lorem ipsum Dolor",
    alamat: "Lorem ipsum Dolor",
    jk: "Lorem ipsum Dolor",
    tgl: "Lorem ipsum Dolor",
    pk: "Lorem ipsum Dolor",
  }),
};
</script>
