import { Ng2StateDeclaration } from '@uirouter/angular';
import { formularioStateFuture } from 'formulario';

const rootState: Ng2StateDeclaration = {
    name: 'root',
    abstract: true
};

export const STATES = [rootState, formularioStateFuture];