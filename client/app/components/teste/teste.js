import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testeComponent from './teste.component';

let testeModule = angular.module('teste', [
  uiRouter
])

.component('teste', testeComponent)

.name;

export default testeModule;
