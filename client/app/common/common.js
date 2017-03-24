import angular from 'angular';
import RdxHeader from './rdxHeader/rdxHeader';
import RdxSidebar from'./rdxSidebar/rdxSidebar';
import User from './user/user';



let commonModule = angular.module('app.common', [
  RdxHeader,
  RdxSidebar,
  User
])

.name;

export default commonModule;
