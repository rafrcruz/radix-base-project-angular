import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Examples from './examples/examples'

let componentModule = angular.module('app.components', [
  Home,
  Examples,
  About
])

.name;

export default componentModule;
