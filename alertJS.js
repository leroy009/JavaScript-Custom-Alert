    if (document.getElementById) {
        window.alert = function (ALERT_TITLE, txt, ALERT_BUTTON_TEXT) {
            createCustomAlert(ALERT_TITLE, txt, ALERT_BUTTON_TEXT);
        }
    }
    //Create a custom Allert
    function createCustomAlert(ALERT_TITLE, txt, ALERT_BUTTON_TEXT) {
        d = document;

        if (d.getElementById("modalContainer")) return;

        mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
        mObj.id = "modalContainer";
        mObj.style.height = d.documentElement.scrollHeight + "px";

        alertObj = mObj.appendChild(d.createElement("div"));
        alertObj.id = "alertBox";
        if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
        alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
        alertObj.style.visiblity = "visible";

        h1 = alertObj.appendChild(d.createElement("h1"));
        h1.appendChild(d.createTextNode(ALERT_TITLE));

        msg = alertObj.appendChild(d.createElement("p"));
        //msg.appendChild(d.createTextNode(txt));
        msg.innerHTML = txt;

        if (ALERT_BUTTON_TEXT != null) {
            btn = alertObj.appendChild(d.createElement("a"));
            btn.id = "closeBtn";
            btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
            btn.href = "#";
            btn.focus();
            btn.onclick = function () { removeCustomAlert(); return false; }
        }


        alertObj.style.display = "block";

    }
    //Close the alert
    function removeCustomAlert() {
        document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
    }
    //Close the alert after 3 seconds
    function closeAlertinXSeconds() {
        setTimeout(function () { removeCustomAlert() }, 1000);
    }