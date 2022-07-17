<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>TAMBAH ADMINISTRATOR</b>
      </v-toolbar-title>
    </div>
    <v-card class="rounded-xl" height="530px" color="#F9FFFB">
    <v-form>
      <v-container>
        <p>Nama</p>
        <v-text-field class="form" v-model="nama" label="Masukkan Nama" solo></v-text-field><br>
        <p>NIP</p>
        <v-text-field class="form" v-model="nip" label="Masukkan NIP" solo></v-text-field><br>
        <p>Email</p>
        <v-text-field class="form" v-model="email" label="Masukkan Email" solo></v-text-field><br>
        <v-row>
          <v-col cols="12" sm="6">
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
            v-model="confirmpas"
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
        <br>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn large class="btn white--text" color="#DB5248" href="/Administrator"> batal </v-btn>
          <v-btn @click="addAdmin" large right class="btn mr-4 white--text" color="#0D987A"> Tambah </v-btn>
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
    email: "",
    pas: "",
    confirmpas: "",
    row: null,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          emailMatch: () => (`The email and password you entered don't match`),
        },
  }),
  methods: {
    addAdmin() {
      const payload = {
        name: this.nama,
        nip: this.nip,
        email: this.email,
        password: this.pas,
      };
        this.$store.dispatch("addAdmin", payload);
        this.$router.push("/Administrator");
    },
  }
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