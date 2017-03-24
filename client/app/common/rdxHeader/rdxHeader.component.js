import template from './rdxHeader.html';
import controller from './rdxHeader.controller';
import './rdxHeader.scss';

let RdxHeaderComponent = {
  restrict: 'E',
  transclude: true,
  bindings: { title: '@', logo: '@' },
  template,
  controller
};

export default RdxHeaderComponent;
