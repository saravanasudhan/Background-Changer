document.addEventListener("DOMContentLoaded", function () {
    var colorInput = document.getElementById("value");
    var ans = document.getElementById('ans');
    var showElement = document.getElementById('show');

    colorInput.addEventListener("input", function () {
        var selectedColor = colorInput.value;
        document.body.style.backgroundColor = selectedColor;
        ans.textContent = "Color is " + selectedColor;

        var existingButton = ans.querySelector("button");
        if (existingButton) {
            ans.removeChild(existingButton);
        }

        var copyButton = document.createElement("button");
        copyButton.textContent = "Copy";
        ans.appendChild(copyButton);

        copyButton.addEventListener("click", function () {
            navigator.clipboard.writeText(selectedColor).then(function () {
                showElement.style.visibility = "visible";
                setTimeout(function () {
                    showElement.style.visibility = "hidden";
                }, 3000);
            }).catch(function (err) {
                console.error('Unable to copy color to clipboard', err);
            });
        });
    });
});
