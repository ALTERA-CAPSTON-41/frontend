<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>CARI PASIEN</b>
      </v-toolbar-title>
    </div>
    <v-card class="rounded-xl" height="115px" color="#F9FFFB">
    <v-form>
        <v-container style="padding: 30px">
            <div class="text-left">
              <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="Search Pasien by NIK"
              solo
              class="form"
              hide-details
            ></v-text-field>
            </div>
        <br>
        </v-container>
    </v-form>

    <!-- table pasien -->
    <TablePasien />
    </v-card>
    </v-container>


</template>

<script>
import TablePasien from "../../components/TablePasien.vue";
export default {
  name: "App",
    components: {
    TablePasien,
  },
  data: () => ({
    nama: "",
    nip: "",
    sip: "",
    alamat: "",
    tgl: "",
    pk: "",
    email: "",
    pw: "",
    cpw: "",
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