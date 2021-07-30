package com.example.reactnativekeyscanner;

import com.facebook.react.ReactActivity;
import android.view.KeyEvent;
import com.reactnativekeyscanner.KeyScannerModule;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "KeyScannerExample";
  }

  @Override // <--- Add this method if you want to react to keyDown
  public boolean onKeyDown(int keyCode, KeyEvent event) {
    // A. Prevent multiple events on long button press
    //    In the default behavior multiple events are fired if a button
    //    is pressed for a while. You can prevent this behavior if you
    //    forward only the first event:
    if (event.getRepeatCount() == 0) {
      KeyScannerModule.getInstance().onKeyDownEvent(keyCode, event);
    }
    //
    // B. If multiple Events shall be fired when the button is pressed
    //    for a while use this code:
    //        KeyboardModule.getInstance().onKeyDownEvent(keyCode, event);

    // There are 2 ways this can be done:
    //  1.  Override the default keyboard event behavior
    //    super.onKeyDown(keyCode, event);
    //    return true;

    //  2.  Keep default keyboard event behavior
    //    return super.onKeyDown(keyCode, event);

    // Using method #1 without blocking multiple
    super.onKeyDown(keyCode, event);
    return true;
  }

  @Override // <--- Add this method if you want to react to keyUp
  public boolean onKeyUp(int keyCode, KeyEvent event) {
    if (event.getRepeatCount() == 0) {
      KeyScannerModule.getInstance().onKeyUpEvent(keyCode, event);
    }
    // There are 2 ways this can be done:
    //  1.  Override the default keyboard event behavior
    super.onKeyUp(keyCode, event);
    return true;
    //  2.  Keep default keyboard event behavior
    //    return super.onKeyUp(keyCode, event);

  }

  @Override
  public boolean onKeyMultiple(int keyCode, int repeatCount, KeyEvent event) {
    KeyScannerModule
      .getInstance()
      .onKeyMultipleEvent(keyCode, repeatCount, event);
    return super.onKeyMultiple(keyCode, repeatCount, event);
  }
}
