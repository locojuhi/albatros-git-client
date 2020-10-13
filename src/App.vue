<template>
  <v-app>
    <v-navigation-drawer app>
      <v-row>
        <v-container>
          <v-row>
            <v-col>
              <span class="side-bar-options-title">
                Workspace
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>
                File status
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>
                History
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>
                Search
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
      <v-row>
        <v-divider></v-divider>
      </v-row>

      <v-row>
        <v-container>
          <v-row>
            <v-col>
              <span class="side-bar-options-title">
                <v-treeview
                  activatable
                  :items=""
                >
                  Branches
                </v-treeview>
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
};
</script>
<style scoped>
  .side-bar-options-title {
    font-size: 1.5em;
  }
</style>
