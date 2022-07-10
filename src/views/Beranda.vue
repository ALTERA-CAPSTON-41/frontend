<template>
<v-row>
    <v-col cols="12" md="11" class="mx-auto">
    <br><br>
      <div class="hero pa-5 text-no-wrap rounded-xl mx-auto">
        <h1>Selamat Datang, Admin Klinik Sehat !</h1><br>
        <p>Berikan layanan terbaik dan tetap prioritaskan kesehatan pasien.</p>
      <v-btn
      justify-center
      color="#0D987A"
      class="btn-antrean white--text"
      rounded-pill
      href="/DaftarAntrean"
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
            <v-col cols="12" md="4" color="#EDFFFA">
              <div class="card mb-2 pa-4 text-left rounded-xl">
                Jumlah Dokter <br>
                10
              </div>
              
              <div class="card pa-4 text-left rounded-xl">
                Jumlah Poliklinik <br>
                10
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="card mb-2 pa-4 text-left rounded-xl">
                Jumlah Perawat <br>
                10
              </div>
              <div class="card pa-4 text-left rounded-xl">
                Jumlah Pasien <br>
                10
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="antrean ms-3 pa-4 text-center rounded-xl">
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
            <v-col cols="12" md="6" >
              <div class="kotak pa-4 text-center  text-no-wrap rounded-xl">
                <h2>Pasien Lama</h2>
                <br>
                <v-btn
                justify-center
                color="#0D987A"
                class="btn-antrean white--text"
                rounded-lg
                href="/AddAntrean"
                >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Tambah Antrean
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <div class="kotak pa-4 text-center text-no-wrap rounded-xl">
                <h2>Pasien Baru</h2>
                <br>
                <v-btn
                justify-center
                color="#0D987A"
                class="btn-antrean white--text"
                rounded-lg
                href="/AddPas"
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

<script>

export default ({
  name: 'BerandaPage'
})
</script>


<style>
p {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0015em;
}

.kotak {
  border-style: solid;
  border-color: #A6EBD9;
  border-radius: 20px;
}

h1 {
font-family: 'Lato';
font-style: normal;
font-weight: 400 !important;
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
    background-color: #EDFFFA;
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.btn-antrean {
  width: 200px;
  height: 43px !important;
}

.card {
  background-color: #EDFFFA !important;
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.hero {
  background-color: #E0F8F2;
}
</style>