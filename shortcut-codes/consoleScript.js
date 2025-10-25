let result = [];
const logConsole = console.log;
const errorConsole = console.error;
console.log = function (...data) {
    result.push({
        logLevel: 'log',
        data
    });
};
console.error = function (...data) {
    result.push({
        logLevel: 'error',
        data
    });
};
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (callback) {
        script.onload = () => callback();
        script.onerror = () => console.error(`Failed to load script: ${src}`);
    }
    document.head.appendChild(script);
}
const erudaScriptUrl = 'https://cdn.jsdelivr.net/npm/eruda';
loadScript(erudaScriptUrl, () => {
    if (window.eruda) {
        window.eruda.init();
        const erudaButtonScriptUrl = 'https://cdn.jsdelivr.net/npm/eruda-entry';
        loadScript(erudaButtonScriptUrl, () => {
             if (window.erudaEntry) {
                 window.erudaEntry.init();
             }
        });
        console.log('Eruda has been loaded and initialized! The entry button should appear.');
    } else {
        console.error('Eruda library loaded but `window.eruda` is not available.');
    }
});
console.log = logConsole;
console.error = errorConsole;
completion(result);
