<template>
  <v-container fluid style="padding: 30px">
    <v-card-title>
      <v-spacer></v-spacer>

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
                      <th
                        v-for="(h, index) in headers"
                        :class="h.class"
                        :key="index"
                      >
                        <span class="white--text JudulHeader">{{
                          h.text
                        }}</span>
                      </th>
                    </tr>
                  </thead>
                </template>

                <template v-slot:top>
                  <v-dialog v-model="dialogDelete" max-width="400px">
                    <v-card>
                      <v-card-title class="text-h5"
                        >Yakin ingin menghapus data ini?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="closeDelete"
                          >Cancel</v-btn
                        >
                        <v-btn color="primary" text @click="deleteItemConfirm"
                          >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn
                    class="aksi mx-2"
                    height="33px"
                    width="27px"
                    dark
                    x-small
                    href="/DetailDok"
                    color="#56CCF2"
                  >
                    <v-icon>mdi-card-account-details-outline</v-icon>
                  </v-btn>
                  <v-btn
                    class="aksi mx-2"
                    height="33px"
                    width="27px"
                    dark
                    x-small
                    href="/EditDok"
                    color="#F2994A"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    color="#F10000"
                    dark
                    class="aksi mx-2"
                    height="33px"
                    width="27px"
                    x-small
                    @click="deleteItem(item)"
                  >
                    <v-icon>mdi-delete</v-icon>
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
    <!-- If using vue-router -->
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: "DataAdmin",
  setup() {},
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  data() {
    return {
      search: "",
      dialogDelete: false,
      selectedItemIndex: -1,
      pageCount: 0,
      itemsPerPage: 10,
      page: 1,
      headers: [
        {
          text: "No.",
          value: "no",
        },
        {
          text: "Nama",
          value: "name",
        },
        {
          text: "NIP",
          value: "nip",
        },
        {
          text: "SIP",
          value: "sip",
        },
        {
          text: "Poliklinik",
          value: "poliklinik",
        },
        {
          text: "Aksi",
          value: "actions",
        },
      ],
      identity: [
        {
          no: 1,
          name: "Intan Sari",
          nip: "9327192678413",
          sip: "75367545",
          poliklinik: "Poli Umum",
          action: "edit",
        },
        {
          no: 2,
          name: "Intan Sari",
          nip: "9327192678413",
          sip: "75367545",
          poliklinik: "Poli Umum",
          action: "edit",
        },
        {
          no: 3,
          name: "Intan Sari",
          nip: "9327192678413",
          sip: "75367545",
          poliklinik: "Poli Umum",
          action: "edit",
        },
        {
          no: 4,
          name: "Intan Sari",
          nip: "9327192678413",
          sip: "75367545",
          poliklinik: "Poli Umum",
          action: "edit",
        },
        {
          no: 5,
          name: "Intan Sari",
          nip: "9327192678413",
          sip: "75367545",
          poliklinik: "Poli Umum",
          action: "edit",
        },
        {
          no: 6,
          name: "Intan Sari",
          nip: "9327192678413",
          sip: "75367545",
          poliklinik: "Poli Umum",
          action: "edit",
        },
        {
          no: 7,
          name: "Intan Sari",
          nip: "9327192678413",
          sip: "75367545",
          poliklinik: "Poli Umum",
          action: "edit",
        },
        {
          no: 8,
          name: "Intan Sari",
          nip: "9327192678413",
          sip: "75367545",
          poliklinik: "Poli Umum",
          action: "edit",
        },
      ],
    };
  },
  methods: {
    add(Registrasi) {
      this.$router.push({ name: Registrasi });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.selectedItemIndex = -1;
      });
    },
    deleteItemConfirm() {
      this.identity.splice(this.selectedItemIndex, 1);
      this.closeDelete();
    },
    deleteItem(item) {
      this.selectedItemIndex = this.identity.indexOf(item);
      this.dialogDelete = true;
    },
  },
};
</script>

<style>
.JudulHeader {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0015em;

  /* color 7 */

  color: #ffffff;
}
.MyHeader {
  background-color: #0d987a;
}
/* tanya ke mentor */

.aksi {
  border-radius: 10px;
}
</style>
