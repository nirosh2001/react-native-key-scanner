import { NativeModules, DeviceEventEmitter, EmitterSubscription } from 'react-native';
type KeyeventResultType = {
  keyLabel: string;
  action: number;
  keyCode: number;
  repeatcount: number;
  characters: string;
  data: string;
}
type CallbackFn = {
  (result: KeyeventResultType): void;
}
type KeyScannerType = {
  listenerKeyDown: EmitterSubscription;
  listenerKeyUp: EmitterSubscription;
  listenerKeyMultiple: EmitterSubscription;
  listenerBarcodeScan: EmitterSubscription;

  onKeyDownListener(cb: CallbackFn): void;

  removeKeyDownListener(): void;

  onKeyUpListener(cb: CallbackFn): void;

  removeKeyUpListener(): void;

  onKeyMultipleListener(cb: CallbackFn): void;

  removeKeyMultipleListener(): void;

  onBarcodeScanner(cb: CallbackFn): void;

  removeBarcodeScanner(): void;

  setSubmitKeycode(keycode: number): void;

  hideKeyboard(): void;
};

const { KeyScanner } = NativeModules;
KeyScanner.listenerKeyDown = null;
KeyScanner.listenerKeyUp = null;
KeyScanner.listenerKeyMultiple = null;
KeyScanner.listenerBarcodeScan = null;
KeyScanner.onKeyDownListener = (cb: CallbackFn) => {
  KeyScanner.removeKeyDownListener();
  KeyScanner.listenerKeyDown = DeviceEventEmitter.addListener('onKeyDown', cb);
}

KeyScanner.removeKeyDownListener = () => {
  if (KeyScanner.listenerKeyDown) {
    KeyScanner.listenerKeyDown.remove();
    KeyScanner.listenerKeyDown = null;
  }
}

KeyScanner.onKeyUpListener = (cb: CallbackFn) => {
  KeyScanner.removeKeyUpListener();
  KeyScanner.listenerKeyUp = DeviceEventEmitter.addListener('onKeyUp', cb);
}

KeyScanner.removeKeyUpListener = () => {
  if (KeyScanner.listenerKeyUp) {
    KeyScanner.listenerKeyUp.remove();
    KeyScanner.listenerKeyUp = null;
  }
}

KeyScanner.onKeyMultipleListener = (cb: CallbackFn) => {
  KeyScanner.removeKeyMultipleListener();
  KeyScanner.listenerKeyMultiple = DeviceEventEmitter.addListener('onKeyMultiple', cb);
}

KeyScanner.removeKeyMultipleListener = () => {
  if (KeyScanner.listenerKeyMultiple) {
    KeyScanner.listenerKeyMultiple.remove();
    KeyScanner.listenerKeyMultiple = null;
  }
}

KeyScanner.onBarcodeScanner = (cb: CallbackFn) => {
  KeyScanner.removeBarcodeScanner();
  KeyScanner.listenerBarcodeScan = DeviceEventEmitter.addListener('barcode_scan', cb);
}

KeyScanner.removeBarcodeScanner = () => {
  if (KeyScanner.listenerBarcodeScan) {
    KeyScanner.listenerBarcodeScan.remove();
    KeyScanner.listenerBarcodeScan = null;
  }
}

export default KeyScanner as KeyScannerType;
