const { defineConfig } = require("cypress");

 

module.exports = defineConfig({

 projectId: 'gqw9fz',

 e2e: {
    setupNodeEvents(on, config){
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,


 },

});