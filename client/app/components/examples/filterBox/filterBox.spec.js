import FilterBoxModule from './filterBox'
import FilterBoxController from './filterBox.controller';
import FilterBoxComponent from './filterBox.component';
import FilterBoxTemplate from './filterBox.html';

describe('FilterBox', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FilterBoxModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FilterBoxController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(FilterBoxTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FilterBoxComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FilterBoxTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FilterBoxController);
      });
  });
});
