<template>
  <v-app>
    <Sidebar />
    <v-main style="padding: 0px">
      <v-container fluid style="margin-left padding: 0px">
        <div class="my-4">
          <v-toolbar-title class="font-weight-medium">
            TAMBAH POLIKLINIK
          </v-toolbar-title>
        </div>
        <v-card>
          <br />
          <v-col>
            <v-form>
              <v-container>
                <v-img src="../assets/img/lego.png" max-width="344" />
                <v-text-field
                  v-model="nama"
                  label="Nama Poliklinik"
                  filled
                ></v-text-field>
              </v-container>
              <v-btn class="mr-4" @click="batal">Batal</v-btn>
              <v-btn @click="simpan">Simpan</v-btn>
            </v-form>
          </v-col>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
