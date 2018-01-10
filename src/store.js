import Vuex from 'vuex';
import usersModule from './modules/UserModule';
// import cardModule from './modules/CardModule';
import dealModule from './modules/DealModule.js';
  
// const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
    modules: {
      deal: dealModule,
      user : usersModule,
      // shop: shopModule,
    },
    // strict : !isProduction
  })
  