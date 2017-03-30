import angular from 'angular';
import uiRouter from 'angular-ui-router';
import RdxHeaderComponent from './rdxHeader.component';

let RdxHeaderModule = angular.module('rdxHeader', [
  uiRouter
])

.component('rdxHeader', RdxHeaderComponent)

.name;

export default RdxHeaderModule;
