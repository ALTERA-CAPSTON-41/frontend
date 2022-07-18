<template>
  <v-container fluid style="padding: 30px">
    <div class="my-4">
      <v-toolbar-title class="font-weight-medium">
        <b>DETAIL PASIEN</b>
      </v-toolbar-title>
    </div>
    <v-container>
      <v-card class="rounded-xl" justify="space-around" color="#EDFFFA">
        <v-card-title> <b>Biodata</b> </v-card-title>
        <br />

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
            <v-list-item-title color="grey">08123456789</v-list-item-title>
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
            <v-list-item-title color="grey">Laki-laki</v-list-item-title>
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
      </v-card>

    </v-container>
    <div class="my-8 text-left">
      <v-toolbar-title class="font-weight-medium">
        <b>REKAM MEDIS</b>
      </v-toolbar-title>
    </div>
      <v-card class="rounded-xl" height="680px" color="#F9FFFB">
        <v-card-title>

          <v-spacer></v-spacer>
          <div class="text-right">
            <v-container>
              <v-btn class="white--text" height="50px" color="#0D987A">
                <v-icon> mdi-filter-variant </v-icon>
              </v-btn>
            </v-container>
          </div>
          <div class="text-right">
              <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="Search Here"
              solo
              class="form"
              hide-details
            ></v-text-field>
          </div>
        </v-card-title>

      <!-- code table -->
            <v-sheet :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`">
                <div>
                    <v-sheet :color="`#F9FFFB`" class="px-5 py-0">
                      <v-row>
                        <v-col>
                          <v-data-table
                              :headers="headers"
                              :items="identity"
                              :search="search"
                              hide-default-footer
                              :page.sync="page"
                              @page-count="pageCount = $event"
                              :items-per-page="itemsPerPage"
                              hide-default-header
                          >
                          <template v-slot:header="{ props: { headers } }">
                              <thead class="MyHeader">
                                <tr color="#0D987A">
                                  <th v-for="(h,index) in headers" :class="h.class" :key="index" >
                                    <span class="white--text JudulHeader">{{h.text}}</span>
                                  </th>
                                </tr>
                              </thead>
                          </template>
                          
                        
                            <template v-slot:top>
                              <v-dialog v-model="dialogDelete" max-width="400px">
                                <v-card>
                                  <v-card-title class="text-h5">Yakin ingin menghapus data ini?</v-card-title>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="primary" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </template>
                            <template v-slot:[`item.actions`]="">
                                <v-btn
                                  class="aksi mx-2"
                                  height="33px"
                                  width="27px"
                                  dark
                                  x-small
                                  href="/DetailRekam"
                                  color="#56CCF2"
                                >
                                  <v-icon>mdi-card-account-details-outline</v-icon>
                                </v-btn>
                            </template>
                          </v-data-table>
                        </v-col>
                      </v-row>
                    </v-sheet>
                      <v-row color="#F9FFFB">
                        <v-col>
                          <div class="page d-flex justify-end mt-4">
                          <v-sheet color="#F9FFFB" class="pa-5" :rounded="'lg'">
                            <template>
                              <div class="page">
                                    <v-pagination
                                      class="page"
                                      color="#0D987A"
                                      v-model="page"
                                      previous-aria-label="Prev"
                                      next-aria-label="Next"
                                      wrapper-aria-label
                                      :length="10"
                                      :total-visible="5"
                                    ></v-pagination>
                                </div>
                            </template>
                          </v-sheet>
                          </div>
                        </v-col>
                      </v-row>
                </div>
            </v-sheet>
      <!-- bates code -->

      </v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large class="btn white--text" color="#0D987A" href="/Patient"> Kembali </v-btn>
          </v-card-actions>
  </v-container>
</template>

<script>
export default {
  name: "DataAdmin",
    setup() {
        
    },
    inject: {
      theme: {
        default: { isDark: false },
      },
    },
    data () {
      return {
        search:'',
        dialogDelete: false,
        selectedItemIndex: -1,
        pageCount: 0,
        itemsPerPage : 10,
        page: 1,
        headers: [
        {
          text: 'No.',
          value: 'no'
        },
        {
          text: 'Dokter',
          value: 'name'
        },
        {
          text: 'Poliklinik',
          value: 'poliklinik'
        },
        {
          text: 'ICD-10',
          value: 'icd'
        },
        {
          text: 'Tanggal',
          value: 'tanggal'
        },
        {
          text: 'Aksi',
          value: 'actions'
        }
      ],
      identity: [
        {
          no: 1,
          name: 'Beby Avilla',
          poliklinik: 'Poli Umum',
          icd: 'H578 - Eye Irritation',
          tanggal: '11 Juli 2022',
          action: 'edit'
        },
        {
          no: 2,
          name: 'Beby Avilla',
          poliklinik: 'Poli Umum',
          icd: 'H578 - Eye Irritation',
          tanggal: '11 Juli 2022',
          action: 'edit'
        },
        {
          no: 3,
          name: 'Beby Avilla',
          poliklinik: 'Poli Umum',
          icd: 'H578 - Eye Irritation',
          tanggal: '11 Juli 2022',
          action: 'edit'
        },
        {
          no: 4,
          name: 'Beby Avilla',
          poliklinik: 'Poli Umum',
          icd: 'H578 - Eye Irritation',
          tanggal: '11 Juli 2022',
          action: 'edit'
        },
        {
          no: 5,
          name: 'Beby Avilla',
          poliklinik: 'Poli Umum',
          icd: 'H578 - Eye Irritation',
          tanggal: '11 Juli 2022',
          action: 'edit'
        },
        {
          no: 6,
          name: 'Beby Avilla',
          poliklinik: 'Poli Umum',
          icd: 'H578 - Eye Irritation',
          tanggal: '11 Juli 2022',
          action: 'edit'
        },
        {
          no: 7,
          name: 'Beby Avilla',
          poliklinik: 'Poli Umum',
          icd: 'H578 - Eye Irritation',
          tanggal: '11 Juli 2022',
          action: 'edit'
        },
        {
          no: 8,
          name: 'Beby Avilla',
          poliklinik: 'Poli Umum',
          icd: 'H578 - Eye Irritation',
          tanggal: '11 Juli 2022',
          action: 'edit'
        },
      ]
      }
    },
    methods :{
    add(Registrasi){
       this.$router.push({name: Registrasi})
    },
    closeDelete(){
       this.dialogDelete = false
       this.$nextTick(() => {
         this.selectedItemIndex = -1
       })
     },
    deleteItemConfirm(){
       this.identity.splice(this.selectedItemIndex, 1)
       this.closeDelete()
     },
    deleteItem(item){
       this.selectedItemIndex = this.identity.indexOf(item)
       this.dialogDelete = true
     },
 },
  }
</script>

<style>
.JudulHeader {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0015em;

  /* color 7 */

  color: #FFFFFF;
}
.MyHeader {
  background-color: #0D987A;
}
/* tanya ke mentor */

.aksi {
  border-radius: 10px;
}
.btn {
  height: 80px;
  width: 135px;
  border-radius: 15px;
}
</style>