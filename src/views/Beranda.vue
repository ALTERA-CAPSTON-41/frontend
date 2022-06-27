<template>
<v-row>
    <v-col cols="12" md="11" class="mx-auto">
    <br><br>
      <div class="pa-5 grey lighten-2 text-no-wrap rounded-xl mx-auto">
        <h1>Selamat Datang, Lorem ipsum dolor !</h1><br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus orci diam  congue<br>ultrices at gravida.</p>
      <v-btn
      justify-center
      color="#999999"
      class="btn-antrean black--text"
      rounded-lg
      >
      Daftar Antrean
      </v-btn>
      </div>
      <br>
      <section>
        <br>
        <h1>Informasi</h1>
        <br>
          <v-row justify="left d-flex">
            <v-col cols="12" md="4">
              <div class="mb-2 pa-4 text-left rounded-xl grey lighten-2">
                Jumlah Dokter <br>
                10
              </div>
              
              <div class="pa-4 text-left rounded-xl grey lighten-2">
                Jumlah Poliklinik <br>
                10
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="mb-2 pa-4 text-left rounded-xl grey lighten-2">
                Jumlah Perawat <br>
                10
              </div>
              <div class="pa-4 text-left rounded-xl grey lighten-2">
                Jumlah Pasien <br>
                10
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="antrean ms-3 pa-4 text-center rounded-xl grey lighten-2">
                Jumlah Antrean <br>
                10
              </div>
            </v-col>
          </v-row>
      </section> 
        
      <section>
        <br><br>
        <h1>Daftar Pasien</h1>
        <br>
          <v-row>
            <v-col cols="12" md="6">
              <div class="kotak pa-4 text-center grey lighten-2 text-no-wrap rounded-xl">
                Pasien Lama
                <br><br>
                <v-btn
                justify-center
                color="#999999"
                class="btn-antrean black--text"
                rounded-lg
                >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Tambah Antrean
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <div class="kotak pa-4 text-center grey lighten-2 text-no-wrap rounded-xl">
                Pasien Baru
                <br><br>
                <v-btn
                justify-center
                color="#999999"
                class="btn-antrean black--text"
                rounded-lg
                >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Tambah Pasien
                </v-btn>
              </div>
            </v-col>
          </v-row>
      </section>
    </v-col>
  </v-row>
</template>

<style>
p {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0015em;
}

h1 {
  font-weight: 400;
font-size: 34px;
line-height: 41px;
/* identical to box height */

letter-spacing: 0.0025em;
}

.antrean {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.btn-antrean {
  width: 300px;
  height: 43px !important;
}
</style>