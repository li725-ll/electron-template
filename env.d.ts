/// <reference types="vite/client" />
export interface IElectronAPI {
  loadPreferences: () => Promise<void>,
}

// 添加全局的声明，用于预加载文件的window属性声明扩充
declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
