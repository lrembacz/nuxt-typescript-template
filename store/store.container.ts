import 'reflect-metadata';
import { Container } from 'inversify';
import { IStoreModule, IStoreModuleId } from '~/core';
import { authModule, settingsModule } from '~/store/modules';

export let container: Container = null;

export function containerBuilder (): Container {
  container = new Container();

  //   // Bind Store Modules
  container.bind<IStoreModule>(IStoreModuleId).to(authModule.AuthStore).inSingletonScope();
  container.bind<IStoreModule>(IStoreModuleId).to(settingsModule.SettingsStore).inSingletonScope();
  return container;
}
