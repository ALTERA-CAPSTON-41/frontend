<template>
<v-row>
    <v-col cols="12" md="11" class="mx-auto">
    <br><br>

    <div class="hero pa-5 text-no-wrap rounded-xl mx-auto">
      <div class="txt row">
        <div class="col-md-6">
          <div class="d-flex">
            <div class="bav justify-content-center align-self-center">
              <h1>Selamat Datang, Admin Klinik Sehat !</h1><br>
              <p>Berikan layanan terbaik dan tetap prioritaskan kesehatan pasien.</p><br>
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
          </div>
        </div>
        <div class="text-right col-md-6">
          <img src="../assets/img/img-hero.svg" width="270" />
        </div>
      </div>
    </div>

      <br>

      <section>
        <br>
        <h1>Informasi</h1>
        <br>
          <v-row justify="left d-flex">
            <v-col cols="12" md="4" color="#EDFFFA">
              <div class="card mb-2 pa-4 text-left rounded-xl">
              <!-- text row -->
              <div class="txt row">
                <div class="col-md-4">
                  <div class="d-flex">
                    <div class="bav justify-content-center align-self-center">
                      <img src="../assets/img/icon-doc.svg" width="50" />
                    </div>
                  </div>
                </div>
                <div class="text-left col-md-5">
                  <span class="txt-jumlah">Jumlah Dokter</span> <br>
                  <span class="number">{{getTotalDokter}}</span>
                </div>
              </div>
              <!-- text row -->
              </div>
              <br>
              <div class="card pa-4 text-left rounded-xl">
              <!-- text row -->
              <div class="txt row">
                <div class="col-md-4">
                  <div class="d-flex">
                    <div class="bav justify-content-center align-self-center">
                      <img src="../assets/img/icon-poli.svg" width="50" />
                    </div>
                  </div>
                </div>
                <div class="text-left col-md-5">
                  <span class="txt-jumlah">Jumlah Poli</span><br>
                  <span class="number">{{getTotalPoli}}</span>
                </div>
              </div>
              <!-- text row -->
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="card mb-2 pa-4 text-left rounded-xl">
              <!-- text row -->
              <div class="txt row">
                <div class="col-md-4">
                  <div class="d-flex">
                    <div class="bav justify-content-center align-self-center">
                      <img src="../assets/img/icon-perawat.svg" width="50" />
                    </div>
                  </div>
                </div>
                <div class="text-left col-md-5">
                  <span class="txt-jumlah">JumlahPerawat</span> <br>
                  <span class="number">{{getTotalNurse}}</span>
                </div>
              </div>
              <!-- text row -->
              </div>
              <br>
              <div class="card pa-4 text-left rounded-xl">
              <!-- text row -->
              <div class="txt row">
                <div class="col-md-4">
                  <div class="d-flex">
                    <div class="bav justify-content-center align-self-center">
                      <img src="../assets/img/icon-pasien.svg" width="50" />
                    </div>
                  </div>
                </div>
                <div class="text-left col-md-5">
                  <span class="txt-jumlah">Jumlah Pasien</span> <br>
                  <span class="number">{{getTotalPasien}}</span>
                </div>
              </div>
              <!-- text row -->
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="antrean ms-3 pa-4 text-center rounded-xl">
                <img src="../assets/img/icon-antrean.svg" width="90" /><br>
                <div>
                <span class="txt-jumlah">Jumlah Antrean</span> <br><br>
                <span class="number-big">{{getTotalAntrean}}</span>
                </div>
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
                class="btn-tambah white--text"
                rounded-lg
                href="/DaftarAntrean"
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
                class="btn-tambah white--text"
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
  name: 'BerandaPage',
  data:() => ({
    return : {
      dashboards: '',
    }
  }),
  created() {
    this.test = this.$store.state.token
      this.$store.dispatch("fetchFeature", {
        token : this.test,
      });
      this.$store.dispatch("fetchFeaturePasien", {
        token : this.test,
      });
      this.$store.dispatch("fetchFeaturePoli", {
        token : this.test,
      });
      this.$store.dispatch("fetchFeatureNurse", {
        token : this.test,
      });
      this.$store.dispatch("fetchFeatureAntrean", {
        token : this.test,
      });
  },
  methods:{
    // methods integrasi get data table
    
      // console.log("total dari method: ", dashboards)
      // this.dashboards = dashboards
    },

  mounted() {
    this.fetchFeature();
  },
  computed: {
    getTotalDokter() {
      return this.$store.state.total
    },
    getTotalAntrean() {
      return this.$store.state.totalAntrean
    },
    getTotalPasien() {
      return this.$store.state.totalPasien
    },
    getTotalPoli() {
      return this.$store.state.totalPoli
    },
    getTotalNurse() {
      return this.$store.state.totalNurse
    },
  },
  props: {
    source: String
  }
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
  border-style: groove;
  border-color: #0D987A;
  border-width: 2px;
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
  width: 230px;
  height: 50px !important;
  border-radius: 10px;
}

.btn-tambah {
  width: 330px;
  height: 45px !important;
  border-radius: 10px;
}

.card {
  background-color: #EDFFFA !important;
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.hero {
  background-color: #E0F8F2;
  height: 230px;
}
.txt-jumlah {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0015em;
}
.number {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 29px;

  /* identical to box height */

  letter-spacing: 0.0015em;

  /* color 7 */

  color: #212121;
}
.number-big {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 29px;

  /* identical to box height */

  letter-spacing: 0.0015em;

  /* color 7 */

  color: #212121;
}
.bawah {
  position: absolute;
}
</style>