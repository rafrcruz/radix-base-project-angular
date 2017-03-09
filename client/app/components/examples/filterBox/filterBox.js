import angular from 'angular';
import uiRouter from 'angular-ui-router';
import filterBoxComponent from './filterBox.component';

let filterBoxModule = angular.module('filterBox', [
  uiRouter
])

  .component('filterBox', filterBoxComponent)

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('examples.filterBox', {
        url: '/filterBox',
        component: 'filterBox'
      });
  })


  .name;

export default filterBoxModule;
