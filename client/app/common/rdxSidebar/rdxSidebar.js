import angular from 'angular';
import uiRouter from 'angular-ui-router';
import RdxSidebarComponent from './rdxSidebar.component';

let RdxSidebarModule = angular.module('rdxSidebar', [
])

.component('rdxSidebar', RdxSidebarComponent)

.name;

export default RdxSidebarModule;
