import Route from '@ember/routing/route';

export default class AuthorCreateRoute extends Route {
  // resetController(controller) {
  //   super.resetController(...arguments);

  //   controller.reset();
  // }

  model() {
    return {
      first: '',
      last: '',
    }
  }
}
