import ExamplesModule from './examples'
import ExamplesController from './examples.controller';
import ExamplesComponent from './examples.component';
import ExamplesTemplate from './examples.html';

describe('Examples', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ExamplesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ExamplesController();
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
      expect(ExamplesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ExamplesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ExamplesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ExamplesController);
      });
  });
});
