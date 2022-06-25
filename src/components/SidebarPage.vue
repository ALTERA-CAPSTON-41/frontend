<template>
  <div>
    <v-navigation-drawer permanent color="#FEFEFE" app>
      <div class="title">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="158"
          center
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <span>Hai, Admin</span>
      </div>

      <v-list-item class="px-2 pt-1">
        <v-list-item-content>
          <v-img
            class="navLogo"
            alt="Logo Clinic"
            contain
            max-height="127px"
            width="212px"
          />
        </v-list-item-content>
      </v-list-item>
      <v-list class="clickable">
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            @click="press(item.text)"
            active-class="orange--text"
          >
            <template v-slot:activator>
              <v-list-item-content class="grey--text">
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              class="grey--text"
              v-for="(child, i) in item.children"
              :key="i"
              route
              :to="child.route"
              active-class="orange--text"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            class="grey--text"
            v-else
            :key="item.text"
            active-class="orange--text"
            route
            :to="item.route"
            @click="press(item.text)"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <br /><br />
      <v-btn tile color="#1AC09C" class="d-flex" rounded>
        <v-icon left> mdi-plus </v-icon>
        Tambah Antrean
      </v-btn>
    </v-navigation-drawer>

    <v-app-bar app color="#FEFEFE" height="70px">
      <div class="d-flex align-center">
        <v-toolbar-title class="judulHalaman">
          {{ this.page }}
          <v-btn color="grey" left @click="dialog = !dialog">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar-title>
      </div>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-text>
            <v-text-field label="Nama Dokter"></v-text-field>

            <small class="grey--text">* This doesn't actually save.</small>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text color="primary" @click="dialog = false"> Input </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon color="##757475" class="mdi-36px"
              >mdi-account-circle</v-icon
            >
            <v-icon color="##757475">mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list class="d-flex justify px-3">
          <v-list-item-content class="justify">
            <div class="d-flex">
              <v-icon color="#7c797a" class="px-3">mdi-account</v-icon>
              <v-list-item-title class="order-2">ADMIN</v-list-item-title>
            </div>
          </v-list-item-content>
        </v-list>

        <v-list class="d-flex justify px-3">
          <v-list-item-content class="buttonLogout justify">
            <div class="d-flex" @click="logout">
              <v-icon color="#7c797a" class="px-3">mdi-logout</v-icon>
              <v-list-item-title class="order-2">Log Out</v-list-item-title>
            </div>
          </v-list-item-content>
        </v-list>
      </v-menu>
    </v-app-bar>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    group: null,
    page: "Dokter",
    selectedItem: 0,
    items: [
      { icon: "mdi-view-dashboard", text: "Beranda", route: "/" },
      {
        icon: "mdi-format-list-checks",
        text: "Daftar Antrean",
        route: "/DaftarAntrean",
      },
      { icon: "mdi-account-multiple", text: " Pasien", route: "/Pasien" },
      {
        icon: "mdi-hospital-building",
        text: "Poliklinik",
        route: "/Poliklinik",
      },
      { icon: "mdi-doctor", text: "Dokter", route: "/Dokter" },
      { icon: "mdi-account", text: "Perawat", route: "/Perawat" },
      {
        icon: "mdi-shield-account",
        text: "Administrator",
        route: "/Administrator",
      },
    ],
    mini: false,
    fab: false,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    press(title) {
      this.page = title;
    },
    logout() {
      localStorage.setItem("authenticated", false);
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.buttonLogout:hover {
  background-color: #dfbc91;
  cursor: pointer;
}

.iconLogout {
  color: #757475;
}

.v-application .orange--text {
  color: #8a5537 !important;
  caret-color: #b4aea6 !important;
  background-repeat: repeat-x;
}

.navLogo .v-image_image,
.v-image_placeholder {
  max-width: 70%;
  left: 10%;
}

.title {
  justify-content: center !important;
}

* {
  font-weight: 600;
  font-size: 18px;
}

.nameUser {
  color: #636060;
}

.judulHalaman {
  font-size: 30px !important;
}

.icon-2 {
  font-size: 15px;
}
</style>
