import Route from '@ember/routing/route';

export default class CnpjRoute extends Route {
  async model(params) {
    let { cnpj } = params;

    let response = await fetch(`./../../${cnpj}.json`);
    let { legalEntity } = await response.json();

    let mainActivity = await legalEntity.economicActivities.filter(
      (act) => act.isMain == true
    );
    let secondaryActivity = await legalEntity.economicActivities.filter(
      (act) => act.isMain == false
    );

    let shareCapital = legalEntity.shareCapital;
    shareCapital = shareCapital.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

    return { cnpj, legalEntity, mainActivity, secondaryActivity, shareCapital };
  }
}
