import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { injectable } from 'inversify';
import { RootState } from '~/store';
import { StoreModule } from '~/core';

export const types = {
  AUTH_SET_USER: 'AUTH_SET_USER',
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGOUT: 'AUTH_LOGOUT'
};

export interface State {
  username: string;
  email: string;
  client: string;
  isLogged?: boolean;
  password: string;
}

@injectable()
export class AuthStore extends StoreModule<State> {
  public static id = 'auth';

  public state = (): State => ({
    username: '',
    email: '',
    client: '',
    isLogged: false,
    password: ''
  })

  public getters: GetterTree<State, RootState> = {
    isLogged: (state: State) => {
      return state.isLogged;
    }
  };
  public actions: ActionTree<State, RootState> = {
    doLogin: ({ commit }) => {
      commit(types.AUTH_SET_USER, { username: '', email: '', isLogged: false });
    },
    doLogout: ({ commit }) => {
      commit(types.AUTH_SET_USER, { username: '', email: '', isLogged: false });
    }
  };
  public mutations: MutationTree<State> = {
    [types.AUTH_SET_USER]: (state: State, payload: State) => {
      state.username = payload.username;
      state.email = payload.email;
      state.isLogged = payload.isLogged;
    }
  };
}
