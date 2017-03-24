import RdxSidebarModule from './rdxSidebar'
import RdxSidebarController from './rdxSidebar.controller';
import RdxSidebarComponent from './rdxSidebar.component';
import RdxSidebarTemplate from './rdxSidebar.html';

describe('RdxSidebar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RdxSidebarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RdxSidebarController();
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
      expect(RdxSidebarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RdxSidebarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RdxSidebarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RdxSidebarController);
      });
  });
});
