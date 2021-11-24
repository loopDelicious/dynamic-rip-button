'use strict'

function createEnv() {
    var secretString = document.getElementById('secret-string').value,
        runButtonIndex = 0,
        envData = {
            passphrase: secretString
        };
    _pm('env.create', 'Passphrase', envData, runButtonIndex);
    return false;
}

(function (p, o, s, t, m, a, n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s + t) && o.getElementsByTagName("head")[0].appendChild((
        (n = o.createElement("script")),
        (n.id = s + t), (n.async = 1), (n.src = m), n
    ));
}(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
