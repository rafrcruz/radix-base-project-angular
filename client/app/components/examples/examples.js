import angular from 'angular';
import uiRouter from 'angular-ui-router';
import examplesComponent from './examples.component';
import FilterBox from './filterBox/filterBox';
import Dialogs from './dialogs/dialogs';

let examplesModule = angular.module('examples', [
  FilterBox,
  Dialogs,
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
  "ngInject";


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('examples', {
        url: '/examples',
        component: 'examples'
      });
  })

  .component('examples', examplesComponent)

  .name;

export default examplesModule;
