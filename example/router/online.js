async function run() {
    const html = `
        <div class="container">
            <i class="bi bi-activity"></i>
            <h1>Loli-Defender Anti Virus</h1>
            <h5>Free, Fast, Reliable</h5>
        </div>

        <div class="container-2">
            <h2>Why, Loli-Defender Anti Virus?</h2>
            <div class="row-wifi">
                <div class="you-dont-have-internet">
                    <i class="bi bi-wifi"></i>
                    <h5>You need 5G wifi internet connectivity <a style="font-size:12px;" href="#"
                            data-page="online.html">(check)</a></h5>
                </div>
                <div class="you-dont-have-internet">
                    <i class="bi bi-pc-display"></i>
                    <h5>You need Windows XP Professional 64 bit</h5>
                </div>
                <div class="you-dont-have-internet">
                    <i class="bi bi-gpu-card"></i>
                    <h5>You lose your RTX 3060 TI</h5>
                </div>
                <div class="you-dont-have-internet">
                    <i class="bi bi-battery"></i>
                    <h5>You will lose your battery 3060 TI</h5>
                </div>
            </div>
        </div>
    `

    document.getElementsByTagName('inner-body')[0].innerHTML += html;
}

run();