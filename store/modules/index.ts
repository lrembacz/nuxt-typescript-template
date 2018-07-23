import * as rootModule from './root';
import * as settingsModule from './settings';
import * as authModule from './auth';

export {
  rootModule,
  settingsModule,
  authModule
};

export interface ModulesStates {
  settings: settingsModule.State;
  auth: authModule.State;
}

export type RootState = rootModule.State & ModulesStates;
