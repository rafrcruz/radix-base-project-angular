import angular from 'angular';
import uiRouter from 'angular-ui-router';
import examplesSideNavBarComponent from './examplesSideNavBar.component';

let examplesSideNavBarModule = angular.module('examplesSideNavBar', [
])

.component('examplesSideNavBar', examplesSideNavBarComponent)

.name;

export default examplesSideNavBarModule;
