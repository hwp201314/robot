var sendText = document.getElementById("send-text");
sendText.onkeyup = function (e) {
    // console.log(e.keyCode)
    if (e.keyCode === 13) {
        renderDom("mine", this.value);
        ajax({
            url: 'https://developer.duyiedu.com/edu/turing/chat',
            // url: 'http://localhost:3000/chat',
            method: 'get',
            data:{
                text: this.value
            },
            isAsync: true,
            success: function (res) {
                console.log(res)
                renderDom('robot', res.text)
            }
        });
        this.value = "";
    }
}

function renderDom(who, text) {
    var avatorImg = "";
    var divClass = who;
    if (who === 'mine') {
        avatorImg = "./img/3.png";
    } else {
        avatorImg = "./img/dog1.jpg";
    }
    var oDiv = document.createElement("div");
    oDiv.className = divClass;
    oDiv.innerHTML = `<img class="avator" src="${avatorImg}" alt="">
    <div class="text">${text}</div>`;
    var content = document.getElementsByClassName("content")[0];
    content.appendChild(oDiv);
    content.scrollTop = content.scrollHeight;
}