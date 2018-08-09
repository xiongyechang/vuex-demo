import Vue from 'vue';
import Vuex from 'vuex';

import ResourcesModule from './modules/resources';
import AppsModule from './modules/apps';

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        Resources: ResourcesModule,
        Apps: AppsModule
    }
});

export default store