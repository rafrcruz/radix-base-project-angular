import angular from 'angular';
import uiRouter from 'angular-ui-router';
import examplesComponent from './examples.component';

let examplesModule = angular.module('examples', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('examples', {
      url: '/examples',
      component: 'examples'
    });
})

.component('examples', examplesComponent)

.name;

export default examplesModule;
