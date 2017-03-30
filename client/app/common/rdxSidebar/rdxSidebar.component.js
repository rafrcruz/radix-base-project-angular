import template from './rdxSidebar.html';
import controller from './rdxSidebar.controller';
import './RdxSidebar.scss';

let RdxSidebarComponent = {
  restrict: 'E',
  transclude: true,
  bindings: { title: '@', startOpen: '<'},
  template,
  controller
};

export default RdxSidebarComponent;
