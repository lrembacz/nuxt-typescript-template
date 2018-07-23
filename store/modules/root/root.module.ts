import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '~/store';

export const types = {};
export interface State {}

export class RootStore<State> {
  public state = (): State => ({} as State);

  public getters: GetterTree<State, State> = {};

  public actions: ActionTree<State, State> = {
    nuxtServerInit: ({ commit }): void => {
          // Fired when app starts
    }
  };

  public mutations: MutationTree<State> = {};
}
