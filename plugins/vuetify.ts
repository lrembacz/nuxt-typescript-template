import Vue from 'vue';
import Vuetify from 'vuetify';

import VApp from 'vuetify/es5/components/VApp';
import VCard from 'vuetify/es5/components/VCard';
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer';
import VFooter from 'vuetify/es5/components/VFooter';
import VList from 'vuetify/es5/components/VList';
import VBtn from 'vuetify/es5/components/VBtn';
import VIcon from 'vuetify/es5/components/VIcon';
import VGrid from 'vuetify/es5/components/VGrid';
import VToolbar from 'vuetify/es5/components/VToolbar';
import VMenu from 'vuetify/es5/components/VMenu';
import VSelect from 'vuetify/es5/components/VSelect';
import VDataIterator from 'vuetify/es5/components/VDataIterator';
import VDivider from 'vuetify/es5/components/VDivider';
import VTextField from 'vuetify/es5/components/VTextField';


Vue.use(Vuetify, {
  theme: {
    // primary: '#8BC34A',
    // secondary: '#b0bec5',
    // accent: '#8c9eff',
    // error: '#b71c1c'
  },
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    VMenu,
    VSelect,
    VDataIterator,
    VDivider
  }
});
