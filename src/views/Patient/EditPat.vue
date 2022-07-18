<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>EDIT PASIEN</b>
      </v-toolbar-title>
    </div>
    <v-card class="rounded-xl" height="840px" color="#F9FFFB">
      <v-form>
        <v-container>
          <p>Nama</p>
          <v-text-field
            class="form"
            v-model="nama"
            label="Masukkan Nama"
            solo
          ></v-text-field
          ><br />
          <p>NIK</p>
          <v-text-field
            class="form"
            v-model="nik"
            label="Masukkan NIK"
            solo
          ></v-text-field
          ><br />
          <p>Nomor Telepon</p>
          <v-text-field
            class="form"
            v-model="nt"
            label="Masukkan Nomor Telepon"
            solo
          ></v-text-field
          ><br />
          <p>Alamat</p>
          <v-text-field
            class="form"
            v-model="alamat"
            label="Masukkan Alamat"
            solo
          ></v-text-field
          ><br />
          <!-- Form Date Time -->
          <p>Tanggal Lahir</p>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="form"
                append-icon="mdi-calendar"
                v-model="date"
                label="Masukkan Tanggal Lahir"
                readonly
                solo
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker> </v-dialog
          ><br />

          <p>Jenis Kelamin</p>
          <v-radio-group v-model="kelamin" row>
            <v-radio label="Perempuan" value="FEMALE"></v-radio>
            <v-radio label="Laki-Laki" value="MALE"></v-radio>
          </v-radio-group>

          <p>Golongan Darah</p>
          <v-radio-group v-model="row" row>
            <v-radio label="A+" value="radio-1"></v-radio>
            <v-radio label="A" value="radio-2"></v-radio>
            <v-radio label="AB+" value="radio-3"></v-radio>
            <v-radio label="AB-" value="radio-4"></v-radio>
            <v-radio label="B+" value="radio-5"></v-radio>
            <v-radio label="B-" value="radio-6"></v-radio>
            <v-radio label="O+" value="radio-7"></v-radio>
            <v-radio label="O-" value="radio-8"></v-radio>
          </v-radio-group>
          <br />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              large
              class="btn white--text"
              color="#DB5248"
              href="/Patient"
            >
              batal
            </v-btn>
            <v-btn
              large
              right
              class="btn mr-4 white--text"
              @click="editPatient"
              color="#0D987A"
            >
              Simpan
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    nama: "",
    nik: "",
    nt: "",
    alamat: "",
    tgl: "",
    row: null,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
  methods: {
    editPatient() {
      const payload = {
        name: this.nama,
        nik: this.nik,
        phone: this.nt,
        address: this.alamat,
        dob: this.date,
        gender: this.kelamin,
        blood_type: this.blood,
      };
      this.$store.dispatch("editPatient", payload);
      this.$router.push("/Patient");
    },
  },
};
</script>

<style>
.form {
  border-style: ridge;
  border-color: #0b715b;
  border-width: 1.5px;
  border-radius: 10px;
  height: 51px;
}

.btn {
  height: 80px;
  width: 135px;
  border-radius: 15px;
}
</style>
