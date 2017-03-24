class RdxSidebarController {
  constructor($timeout, $mdSidenav) {
    'ngInject';
    this.$timeout = $timeout;
    this.$mdSidenav = $mdSidenav;
  }

  $onInit() {
    this.toggleLeft = () => { this.$mdSidenav('left').toggle(); };
    this.$timeout(() => {
      if (this.startOpen) this.$mdSidenav('left').toggle();
    });
  }

}

export default RdxSidebarController;
