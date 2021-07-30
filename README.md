# react-native-key-scanner

Barcode scanner by key event

## Installation

```sh
npm install @nois/react-native-key-scanner
```

## Usage
React-native code
```js
import KeyScanner from 'react-native-key-scanner'
...
componentDidMount() {
    KeyScanner.onBarcodeScanner((result) => {
        // do something with result
    });
    KeyScanner.onKeyMultipleListener((result) => {
        // do something with result
    });
}
componentWillUnmount() {
    KeyScanner.removeBarcodeScanner();
    KeyScanner.removeKeyMultipleListener();
}
```
Implement onKeyDown and onKeyUp in MainActivity.java
```java
import com.reactnativekeyscanner.KeyScannerModule;
import android.view.KeyEvent;
...
	@Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
		KeyboardModule.getInstance().onKeyDownEvent(keyCode, event);
		super.onKeyDown(keyCode, event);
        return true;
	}
	@Override
	public boolean onKeyUp(int keyCode, KeyEvent event) {
		KeyboardModule.getInstance().onKeyUpEvent(keyCode, event);
		super.onKeyUp(keyCode, event);
        return true;
	}
  @Override
  public boolean onKeyMultiple(int keyCode, int repeatCount, KeyEvent event) {
      KeyScannerModule.getInstance().onKeyMultipleEvent(keyCode, repeatCount, event);
      return super.onKeyMultiple(keyCode, repeatCount, event);
  }
...

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
