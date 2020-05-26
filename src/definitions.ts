declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorIntents: CapacitorIntentsPlugin;
  }
}

export type CallbackGeneric = (data: {[key: string]: any}) => void;

export interface CapacitorIntentsPlugin {
  registerBroadcastReceiver(options: {filters: string[]}, callback: CallbackGeneric): Promise<string> | Promise<void>; 

  unregisterBroadcastReceiver(options: {id: string}): Promise<void>;
}