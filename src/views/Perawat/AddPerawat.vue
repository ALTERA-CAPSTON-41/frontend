<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>TAMBAH PERAWAT</b>
      </v-toolbar-title>
    </div>
    <v-card class="rounded-xl" height="935px" color="#F9FFFB">
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
          <v-row>
            <v-col cols="12" sm="6">
              <p>NIP</p>
              <v-text-field
                class="form"
                v-model="nip"
                label="Masukkan NIP"
                solo
              ></v-text-field
              ><br />
            </v-col>

            <v-col cols="12" sm="6">
              <p>SIP</p>
              <v-text-field
                class="form"
                v-model="sip"
                label="Masukkan SIP"
                solo
              ></v-text-field
              ><br />
            </v-col>
          </v-row>
          <p>Alamat</p>
          <v-text-field
            class="form"
            v-model="alamat"
            label="Masukkan Alamat"
            solo
          ></v-text-field
          ><br />

          <p>Jenis Kelamin</p>
          <v-radio-group v-model="row" row>
            <v-radio label="Perempuan" value="FEMALE"></v-radio>
            <v-radio label="Laki-Laki" value="MALE"></v-radio>
          </v-radio-group>

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
          <p>Poliklinik</p>
          <v-text-field
            class="form"
            v-model="poliklinik"
            label="Masukkan Poliklinik"
            solo
          ></v-text-field
          ><br />
          <p>Email</p>
          <v-text-field
            class="form"
            v-model="email"
            label="Masukkan Email"
            solo
          ></v-text-field
          ><br />
          <v-row>
            <v-col cols="12" sm="6">
              <!-- Form Password -->
              <p>Password</p>
              <v-text-field
                v-model="pas"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                name="input-10-2"
                label="Masukkan Password"
                class="form input-group--focused"
                @click:append="show3 = !show3"
                solo
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <p>Confirm Password</p>
              <v-text-field
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                name="input-10-2"
                label="Masukkan Password Kembali"
                class="form input-group--focused"
                @click:append="show3 = !show3"
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <br />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              large
              class="btn white--text"
              color="#DB5248"
              href="/Perawat"
            >
              batal
            </v-btn>
            <v-btn
              large
              right
              class="btn mr-4 white--text"
              @click="addNurses"
              color="#0D987A"
            >
              Tambah
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
    nip: "",
    sip: "",
    alamat: "",
    poliklinik: null,
    email: "",
    pas: "",
    confirmpas: "",
    row: null,
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      emailMatch: () => `The email and password you entered don't match`,
    },
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
  methods: {
    addNurses() {
      const payload = {
        name: this.nama,
        nip: this.nip,
        sip: this.sip,
        polyclinics_id: this.poliklinik,
        address: this.alamat,
        dob: this.date,
        gender: this.kelamin,
        email: this.email,
        password: this.pas,
      };
      this.$store.dispatch("addNurses", payload);
      this.$router.push("/Perawat");
    },
  },
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
  border-color: #0b715b;
  border-width: 1.5px;
  border-radius: 10px;
  height: 51px;
}
</style>
