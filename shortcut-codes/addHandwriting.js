function addHandwriting() {
    let handwritingLink = document.createElement('link');
    let handwritingStyle = document.createElement('style');
    handwritingLink.setAttribute('rel', 'stylesheet');
    handwritingLink.setAttribute('href', 'https://hangeul.pstatic.net/hangeul_static/css/NanumJarHaGoIssEo.css');
    handwritingStyle.innerHTML = ':not(math, math *) {font-family: \'NanumJarHaGoIssEo\'}';
    document.head.append(handwritingLink, handwritingStyle);
}
addHandwriting();
