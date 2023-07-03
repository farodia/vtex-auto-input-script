javascript: (() => {
    const appKey = 'your app key';
    const appToken = 'your app token';
    const accountName = 'account name';
    const environment = 'environment';

    
    const root1 = document.getElementById('the-doc');
    const shadow1 = root1.shadowRoot;
    const shadow2 = shadow1.querySelector('api-request.focused-mode').shadowRoot;
    const authBlock = shadow2.getElementById('auth');
    const serverBlock = shadow2.getElementById('servers');
    const serverShadow = serverBlock.querySelector('base-url#copy-baseURL').shadowRoot;
    const serverUrl = serverBlock.querySelector('base-url#copy-baseURL');
    const serverShadow = serverUrl.shadowRoot;
    const codeBlock = shadow2.querySelectorAll('span.token.string');
    var urlInCode = codeBlock[0].textContent;
    const urlNodes = serverShadow.querySelectorAll('span.variable');
    authBlock.addEventListener('click', function () {

    authBlock.addEventListener('click', function() {
        authBlock.getElementsByClassName('apiKey appKey api-key-input right-box-input')[0].value = appKey;
        authBlock.getElementsByClassName('apiKey appToken api-key-input right-box-input')[0].value = appToken;

        urlNodes[0].textContent = accountName;
        urlNodes[1].textContent = environment;
        urlInCode = urlInCode.replace("{accountname}", accountName);
        urlInCode = urlInCode.replace("{environment}", environment);
        codeBlock[0].textContent = urlInCode;
        
        codeBlock.forEach((node)=>{
            const text = node.textContent;
            if (text.includes("Key")) {
                node.textContent = text.split(" ").join(" "+ appKey);
            }
            if (text.includes("Token")) {
                node.textContent = text.split(" ").join(" " + appToken);
            }
        })
    })
})();


