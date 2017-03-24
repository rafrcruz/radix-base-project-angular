import angular from 'angular';
import RdxHeader from './rdxHeader/rdxHeader';
import User from './user/user';

let commonModule = angular.module('app.common', [
  RdxHeader,
  User
])

.name;

export default commonModule;
