# instahyre-auto-apply-clicker
This script continuously checks for a specific button on a webpage via XPath and clicks it whenever it becomes visible.

### Features
- Automatically clicks the target button when it appears and is visible.
- Logs each successful click.
- If the button is not visible for 10 consecutive seconds, the script stops itself and logs a message.

### Usage
1. Open your browser console (F12).
2. Paste the contents of `index.js` into the console.
3. To manually stop it, run:
```js
clearInterval(interval);
