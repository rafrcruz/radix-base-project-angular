class ExamplesSideNavBarController {
  constructor($timeout, $mdSidenav) {
    'ngInject';
    this.toggleLeft =  function () { $mdSidenav('left').toggle(); };
    console.log(this.toggleLeft);
  }
}

export default ExamplesSideNavBarController;
