import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dialogsComponent from './dialogs.component';

let dialogsModule = angular.module('dialogs', [
  uiRouter
])

.component('dialogs', dialogsComponent)

.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('examples.dialogs', {
        url: '/dialogs',
        component: 'dialogs'
      });
  })

.name;

export default dialogsModule;
