import TesteModule from './teste'
import TesteController from './teste.controller';
import TesteComponent from './teste.component';
import TesteTemplate from './teste.html';

describe('Teste', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TesteModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TesteController();
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
      expect(TesteTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TesteComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TesteTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TesteController);
      });
  });
});
