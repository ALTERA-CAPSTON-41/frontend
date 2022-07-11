<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>TAMBAH ANTREAN</b>
      </v-toolbar-title>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card justify="space-around" height="600px" color="#EDFFFA">
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
          <v-card color="#EDFFFA">
            <v-container fluid>
              <p>Poliklinik</p>
              <v-text-field class="form" v-model="poliklinik" label="Masukkan Poliklinik" solo></v-text-field><br>
              <br />
              <p>Status Pasien</p>
              <v-select
                class="form"
                v-model="select"
                :items="items"
                solo
                label="Masukkan Status Pasien"
              ></v-select>
              <br>
            </v-container>
          </v-card>
          <br />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="btn white--text" href="/DaftarAntrean" color="#DB5248"> Batal </v-btn>
            <v-btn class="btn white--text" color="#0D987A"> Tambah </v-btn>
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
    items: ["Rawat Jalan", "Rawat Inap"],
  }),
};
</script>

<style>
.btn {
  height: 80px;
  width: 135px;
  border-radius: 15px;
}
.form {
  border-style: ridge;
  border-color: #0B715B;
  border-width: 1.5px;
  border-radius: 10px;
  height: 51px;
}
</style>