<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>DETAIL REKAM MEDIS</b>
      </v-toolbar-title>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="rounded-xl" justify="space-around" color="#EDFFFA">
            <v-card-title> <b>Biodata Pasien</b> </v-card-title>
            <br />

            <v-list-item-title class="mx-5">Nama</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >Beby</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-list-item-title class="mx-5">NIK</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >320173672537</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-list-item-title class="mx-5">Nomor Telepon</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >087237233</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-list-item-title class="mx-5">Tanggal Lahir</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >11 Juli 2022</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-list-item-title class="mx-5">Umur</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >21 Tahun</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-list-item-title class="mx-5">Jenis Kelamin</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >Perempuan</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-list-item-title class="mx-5">Golongan Darah</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >A</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-list-item-title class="mx-5">Alamat</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >Jalan maju mundur RT 01 RW 02</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-card><br>
          <v-card class="rounded-xl" justify="space-around" color="#EDFFFA">
            <v-card-title> <b>Poliklinik</b> </v-card-title>
            <br />

            <v-list-item-title class="mx-5">Poli</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >Poli Umum</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
          </v-card>

        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="rounded-xl" color="#EDFFFA">
            <v-card-title> <b>Biodata Dokter</b> </v-card-title>
            <br />
            <v-list-item-title class="mx-5">Nama</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >Dr. Harum, SpKK</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">Jenis Kelamin</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >Perempuan</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">NIP</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >635746574235</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
            <v-list-item-title class="mx-5">SIP</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >00035232</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br />
          </v-card><br>
          <v-card class="rounded-xl" justify="space-around" color="#EDFFFA">
            <v-card-title> <b>Rekam Medis</b> </v-card-title>
            <br />

            <v-list-item-title v-model="code" class="mx-5">ICD-10</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >H578 - Eye Irritation</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-list-item-title class="mx-5">Gejala</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >Mata merah dan gatal</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-list-item-title class="mx-5">Rekomendasi</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="detail mx-1" color="grey"
                  >Istirahat yang cukup</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <br>
          </v-card>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn large class="btn white--text" href="/DetailPas" color="#0D987A"> Kembali </v-btn>
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
.detail {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.0015em;
}
</style>