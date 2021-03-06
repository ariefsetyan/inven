let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;
let home = require('./components/Home.vue').default;
let logout = require('./components/auth/logout.vue').default;

let storeemployee = require('./components/employee/Create.vue').default;
let tabelemployee = require('./components/employee/Index.vue').default;
let edit = require('./components/employee/Edit.vue').default;
export const routes = [
    { path: '/', component: login, name:'/'},
    { path: '/register', component: register,name: 'register' },
    { path: '/forget', component: forget,name: 'forget' },
    { path: '/logout', component: logout,name: 'logout' },
    { path: '/home', component: home,name: 'home' },

    // Employee Routes
    { path: '/store-employee', component: storeemployee, name:'store-employee' },
    { path: '/employee', component: tabelemployee, name:'employee' },
    { path: '/edit-employee', component: edit, name:'edit-employee' }
]
