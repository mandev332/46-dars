const sideBar_body = document.querySelector(".sideBar");
const message = document.querySelector(".message");
const men = document.querySelector(".heading");
const img = document.querySelector(".heading-avatar-icon img");

(async () => {
    let user = await fetch(
        "http://localhost:5555/users/" + localStorage.getItem("id")
    );
    let res = await user.json();
    men.id = res.data._id;
    img.src = res.data.imageLink;
})();
!(async function () {
    let users = await fetch("http://localhost:5555/users");
    let res = await users.json();
    sideBar_body.setAttribute("class", "row");

    for (let user of res.data) {
        let div = document.createElement("div");
        div.innerHTML = ` <div >
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
            <div class="avatar-icon">
                <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png" />
            </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
            <div class="row">
                <div
                    class="col-sm-8 col-xs-8 sideBar-name">
                    <span class="name-meta"
                        >${user.username}
                    </span>
                </div>
                <div
                    class="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span class="time-meta pull-right"
                        >${Date(user.createdAt)}
                    </span>
                </div>
            </div>
        </div>
    </div>`;
        div.id = user._id;
        div.classList.add("sideBar-body");
        div.classList.add("row");
        div.onclick = async function (e) {
            message.innerHTML = "";
            let res = await fetch(
                `http://localhost:5555/messages?from=${men.id}&to=${div.id}`
            );
            let messages = await res.json();
            for (let msg of messages.data) {
                let div = document.createElement("div");
                if (msg.from._id != men.id) {
                    div.innerHTML = `
            <div >
                <div class="col-sm-12 message-main-receiver">
                    <div class="receiver">
                        <div class="message-text">
                           ${msg.text}
                        </div>
                        <span class="message-time pull-right">
                            Sun
                        </span>
                    </div>
                </div>
            </div>`;
                    div.classList.add("message-body");
                    div.classList.add("row");
                    message.append(div);
                } else {
                    div.innerHTML = `
            <div >
                <div class="col-sm-12 message-main-sender">
                    <div class="sender">
                        <div class="message-text">
                           ${msg.text}
                        </div>
                        <span class="message-time pull-right">
                            Sun
                        </span>
                    </div>
                </div>
            </div>`;
                    div.classList.add("message-body");
                    div.classList.add("row");
                    message.append(div);
                }
            }
        };
        sideBar_body.append(div);
    }
})();
