import Route from '@ember/routing/route';

export default class CnpjRoute extends Route {
  async model(params) {
    let { cnpj } = params;
    let response;

    if (cnpj == '06990590000123' || cnpj == '18792479000101') {
      response = await fetch(`./../../${cnpj}.json`);
    } else {
      response = await fetch(
        `https://api.nfse.io/LegalEntities/Basicinfo/taxNumber/${cnpj}`
      );
    }

    let { legalEntity } = await response.json();

    //format the date
    let openedOn = new Date(legalEntity.openedOn);
    openedOn = openedOn.toLocaleDateString('pt-br');

    //format the activities
    let mainActivity = await legalEntity.economicActivities.filter(
      (act) => act.isMain == true
    );
    let secondaryActivity = await legalEntity.economicActivities.filter(
      (act) => act.isMain == false
    );

    //formate currency on share capital
    let shareCapital = legalEntity.shareCapital;
    shareCapital = shareCapital.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

    return {
      cnpj,
      legalEntity,
      mainActivity,
      secondaryActivity,
      shareCapital,
      openedOn,
    };
  }
}
