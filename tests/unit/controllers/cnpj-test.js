import { module, test } from 'qunit';
import { setupTest } from 'myapp/tests/helpers';

module('Unit | Controller | cnpj', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:cnpj');
    assert.ok(controller);
  });
});
