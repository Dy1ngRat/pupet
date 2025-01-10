const e = document.querySelectorAll("div.head-top, div.wonderbar");
e.forEach(function(t) {
    t.remove();
});

const a = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled"),
    i = document.createElement("iframe");
i.style.position = "fixed";
i.style.top = "0";
i.style.left = "0";
i.style.width = "100%";
i.style.height = "100%";
i.style.border = "none";
i.style.backgroundColor = "white";
document.body.appendChild(i);

const b = document.createElement("button");
b.style.position = "fixed";
b.style.top = "50%";
b.style.left = "50%";
b.style.transform = "translate(-50%, -50%)";
b.style.width = "800px";
b.style.height = "200px";
b.style.borderRadius = "100px";
b.style.backgroundColor = "red";
b.style.color = "white";
b.style.fontSize = "100px";
b.style.fontWeight = "bold";
b.style.cursor = "pointer";
b.textContent = "OFF";

b.addEventListener("click", function() {
    if ("OFF" === this.textContent) {
        this.style.backgroundColor = "blue";
        this.textContent = "ON";

        let expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Set expiration to 1 year from now

        let domain = location.hostname.split(".").slice(-2).join(".");

        for (let l = 0; l < 99; l++) {
            const randomData = String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(500))); // Limit to 500 bytes
            document.cookie = `cd${l}=${encodeURIComponent(btoa(randomData)).substring(0, 2000)};expires=${expirationDate.toUTCString()};domain=${domain};path=/`;
        }

        alert("Securly Successfully Killed.");
    } else {
        let expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Set expiration to 1 year from now

        let domain = location.hostname.split(".").slice(-2).join(".");

        for (let r = 0; r < 99; r++) {
            const randomData = String.fromCharCode.apply(0, crypto.getRandomValues(new Uint8Array(500))); // Limit to 500 bytes
            document.cookie = `cd${r}=${encodeURIComponent(btoa(randomData)).substring(0, 2000)};expires=${expirationDate.toUTCString()};domain=${domain};path=/`;
        }

        alert("For some reason, you gave Securly CPR and it came back to life.");
        this.style.backgroundColor = "red";
        this.textContent = "OFF";
    }
});

i.contentDocument.body.appendChild(b);
