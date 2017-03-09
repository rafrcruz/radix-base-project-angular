import ExamplesSideNavBarModule from './examplesSideNavBar'
import ExamplesSideNavBarController from './examplesSideNavBar.controller';
import ExamplesSideNavBarComponent from './examplesSideNavBar.component';
import ExamplesSideNavBarTemplate from './examplesSideNavBar.html';

describe('ExamplesSideNavBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ExamplesSideNavBarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ExamplesSideNavBarController();
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
      expect(ExamplesSideNavBarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ExamplesSideNavBarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ExamplesSideNavBarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ExamplesSideNavBarController);
      });
  });
});
