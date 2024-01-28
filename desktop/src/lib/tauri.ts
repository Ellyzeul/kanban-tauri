import { invoke as invokeTauri } from "@tauri-apps/api";
import { InvokeArgs as TauriInvokeArgs } from "@tauri-apps/api/tauri";

export const invoke: InvokeSignature = async(cmd: string, args?: InvokeArgs) => {
  return await invokeTauri(cmd, args)
}

interface InvokeSignature {
  (cmd: 'hello', args?: InvokeArgs): Promise<string>;
}

type InvokeArgs = TauriInvokeArgs | undefined
