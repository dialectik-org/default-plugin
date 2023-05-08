import { IDialectikPlugin, IPluginProvider } from '@dialectik/plugin-interface';

const defaultPlugin : IDialectikPlugin = {
  withMain: true,
  withComponents: true,
  isRequired: (markdown: string) => { return true },
  requires: []
}

export const PluginProvider : IPluginProvider = {
  getPlugin : (arg ?: any) => { return defaultPlugin }
}