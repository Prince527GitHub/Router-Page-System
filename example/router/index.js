async function run() {
    const html = `
        <div class="container">
            <i class="bi bi-router-fill"></i>
            <h1>Do I Have Internet?</h1>
            <h5>Fast, Free, Instant</h5>
        </div>

        <div class="container-2">
            <h2>Why do I need internet?</h2>
            <div class="row-wifi">
                <div class="you-dont-have-internet">
                    <i class="bi bi-person-fill"></i>
                    <h5>You don't have an offline life</h5>
                </div>
                <div class="you-dont-have-internet">
                    <i class="bi bi-truck-flatbed"></i>
                    <h5>You wont get hit by a truck</h5>
                </div>
                <div class="you-dont-have-internet">
                    <i class="bi bi-gpu-card"></i>
                    <h5>You can finaly get a gpu</h5>
                </div>
                <div class="you-dont-have-internet">
                    <i class="bi bi-emoji-laughing-fill"></i>
                    <h5>You can rickroll your friends</h5>
                </div>
            </div>
        </div>
    `

    document.getElementsByTagName('inner-body')[0].innerHTML += html;
}

run();