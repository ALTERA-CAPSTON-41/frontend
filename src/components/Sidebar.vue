<template>
    <div>
        <v-navigation-drawer
        permanent
        color="#E5F5F2"
        app
        >
        <br>
        <div class="title">
        <v-img
            class="mx-auto"
            max-width="110"
            justify-center
            src="../assets/img/logo1.svg"
        ></v-img>
        <span class="black--text">KLINIK SEHAT</span>
        </div>

        <v-list-item class="px-2 pt-1">
            <v-list-item-content>
                <v-img class="navLogo"
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
                <v-list-item-content class="black--text">
                    <v-list-item-title >
                    {{ item.text }}
                    </v-list-item-title>
                </v-list-item-content>
                </template>
                <v-list-item class="black--text"
                v-for="(child, i) in item.children"
                :key="i"
                route :to="child.route"
                active-class="orange--text"
                >
                <v-list-item-action v-if="child.icon" >
                    <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                    {{ child.text }}
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            <v-list-item class="black--text"
                v-else
                :key="item.text"
                active-class="orange--text"
                route :to="item.route"
                @click="press(item.text)"
            >
                <v-list-item-action>
                <v-icon class="icon rounded-lg" color="#000000">{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                <v-list-item-title>
                    {{ item.text }}
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </template>  
        </v-list>

        </v-navigation-drawer>

        <v-app-bar
        app
        color="#FEFEFE"
        height="70px"
        >
        <div class="d-flex align-center">
            <v-toolbar-title
            class="judulHalaman"
            > {{this.page}} </v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn text
            v-bind="attrs"
            v-on="on">
                <!-- cek role -->
                <!-- <span v-if="cekRole !== 'ADMIN'" class="nameUser mr-2"></span>
                <span v-if="cekRole === 'ADMIN'" class="nameUser mr-2"></span>
                <span v-if="cekRole === 'ADMIN'" class="nameUser mr-2"></span> -->
                <v-icon color="#0B715B" class="mdi-36px">mdi-account-circle</v-icon>
                <v-icon color="#0B715B" class="mdi-36px">mdi-chevron-down</v-icon>
            </v-btn>
            </template>
            
            <v-list class="d-flex justify px-3">
            <v-list-item-content class="buttonLogout justify">
                <div class="d-flex" @click="profil">
                <v-icon color="#56CCF2" class="px-1">mdi-account-box-outline</v-icon>
                <v-list-item-title class="txt-opsi order-2">PROFILE</v-list-item-title>
                </div>
            </v-list-item-content>
            </v-list>

            <v-list class="d-flex justify px-3">
            <v-list-item-content class="buttonLogout justify">
                <div class="d-flex" @click="ubah">
                <v-icon color="#F2C94C" class="px-1">mdi-lock-outline</v-icon>
                <v-list-item-title class="txt-opsi order-2">UBAH PASSWORD</v-list-item-title>
                </div>
            </v-list-item-content>
            </v-list>

            <v-list class="d-flex justify px-3">
            <v-list-item-content class="buttonLogout justify">
                <div class="d-flex" @click="logout">
                <v-icon color="#F10000" class="px-1">mdi-logout</v-icon>
                <v-list-item-title class="txt-opsi order-2">KELUAR</v-list-item-title>
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
    name: "SidebarPage",
    data: () => ({
      group: null,
      page: "Beranda",
      selectedItem: 0,
      items: [
        { icon: 'mdi-view-dashboard', text: 'Beranda' , route:'/'},
        { icon: 'mdi-format-list-checks', text: 'Daftar Antrean' , route:'/DaftarAntrean'},
        { icon: 'mdi-account-multiple', text: ' Pasien', route:'/Patient' },
        { icon: 'mdi-hospital-building', text: 'Poliklinik', route:'/Poliklinik' },
        { icon: 'mdi-doctor', text: 'Dokter', route:'/Dokter' },
        { icon: 'mdi-account', text: 'Perawat', route:'/Perawat' },
        { icon: 'mdi-shield-account', text: 'Administrator', route:'/Administrator' },
      ],
    //   items2: [
    //     { icon: 'mdi-view-dashboard', text: 'Beranda' , route:'/'},
    //     { icon: 'mdi-format-list-checks', text: 'Daftar Antrean' , route:'/DaftarAntrean'},
    //     { icon: 'mdi-account-multiple', text: ' Pasien', route:'/Pasien' },
    //   ],
      mini: false,
      fab: false,
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
    methods :{
        press(title){
            this.page = title;
        },
        logout(){
            localStorage.setItem("authenticated", false);
            this.$router.push({name: "Login" })
            this.$store.commit("setToken", "");
        },
        profil(){
            this.$router.push({name: "ProfilAdmin"})
        },
        ubah(){
            this.$router.push({name: "UbahPassword"})
        }
    },
    // computed: {
    //     cekRole() {
    //         return this.$store.state.role;
    //         },
    //         roleComputed() {
    //             if (this.cekRole === "ADMIN") {
    //                 return this.items2;
    //             } else {
    //                 return this.items1;
    //             }
    //         },
    // },
  }

</script>

<style>
.buttonLogout:hover{
    background-color: #E0F8F2;
    cursor: pointer;
    display: block;
}

.v-application .orange--text {
    color: #285e50 !important;
    caret-color: #000000 !important;
    background-repeat: repeat-x;
}

.navLogo .v-image_image, .v-image_placeholder {
    max-width: 70%;
    left: 10%
}

.title {
    text-align: center !important;
    justify-content: center !important;
}

* {
    font-weight: 600;

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

.antrean-bwh {
    bottom: 6git bra5px;
    position: absolute !important;
}

.icon {
    background-color: #8BCEBC;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.txt-opsi {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500 !important;
    font-size: 14px;
    line-height: 17px;
    color: #212121;
    /* identical to box height */

    letter-spacing: 0.0125em;
}
</style>