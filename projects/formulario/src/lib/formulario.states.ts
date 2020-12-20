import { FormularioComponent } from './formulario.component';

import { Ng2StateDeclaration } from '@uirouter/angular';

export const formularioStateFuture : Ng2StateDeclaration = {
  name: 'formulario.**',
  url: '/formulario',
  loadChildren: () => import('./formulario.module')
  .then(result => result.FormularioModule)
};

const main: Ng2StateDeclaration = {
  parent: 'root',
  name: 'formulario',
  url: '/formulario',
  views: {
    'main@': { component: FormularioComponent }
  },
  resolve: []
};

export const STATES = [main];