/**
 * Auto Clicker for XPath-targeted Button
 * Automatically clicks the button when visible.
 * Stops if the button isn't visible for 10 seconds.
 */

const xpath = '//*[@id="candidate-suggested-employers"]/div/div[3]/div/div/div[2]/div[3]/div[2]/div[2]/button';

let clickCount = 0;
let notVisibleCount = 0;
const checkIntervalMs = 1000; // 1 second
const maxNotVisibleSeconds = 10;

const interval = setInterval(() => {
    const button = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    if (button) {
        const style = window.getComputedStyle(button);
        const isVisible = style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';

        if (isVisible) {
            button.click();
            clickCount++;
            notVisibleCount = 0; // reset counter when button is visible
            console.log(`✅ Clicked the button ${clickCount} time(s).`);
        } else {
            notVisibleCount++;
            console.log(`ℹ️ Button not visible. Not visible for ${notVisibleCount} second(s).`);
        }
    } else {
        notVisibleCount++;
        console.log(`ℹ️ Button not found. Not visible for ${notVisibleCount} second(s).`);
    }

    if (notVisibleCount >= maxNotVisibleSeconds) {
        clearInterval(interval);
        console.log(`🛑 Stopping: Button not visible for ${maxNotVisibleSeconds} seconds.`);
    }

}, checkIntervalMs);
