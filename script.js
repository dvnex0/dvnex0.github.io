let currentChangelog = "android";

function showChange(type) {
    currentChangelog = type;

    const android = document.getElementById("androidChanges");
    const pc = document.getElementById("pcChanges");

    if (type === "pc") {
        android.style.display = "none";
        pc.style.display = "block";
    } else {
        pc.style.display = "none";
        android.style.display = "block";
    }
}

function openOfficialChangelog() {
    if (currentChangelog === "pc") {
        window.open(
            "https://github.com/dvnex0/DVNexPC/releases/tag/BrowserPC",
            "_blank"
        );
    } else {
        window.open(
            "https://github.com/DVTech0/DVNex/releases/tag/Browser",
            "_blank"
        );
    }
}