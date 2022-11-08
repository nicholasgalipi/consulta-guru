import Route from '@ember/routing/route';

export default class CnpjRoute extends Route {
  async model(params) {
    let { cnpj } = params;

    let response = await fetch(`https://consulta-5b1ff.firebaseapp.com/${cnpj}.json`);
    let { legalEntity } = await response.json();

    console.log(legalEntity);

    return { cnpj, legalEntity };
  }
}
