function showChange(type) {
    const android = document.getElementById("androidChanges");
    const pc = document.getElementById("pcChanges");

    if (type === "pc") {
        android.style.display = "none";
        pc.style.display = "block";
        window.open("https://github.com/dvnex0/DVNexPC/releases/tag/BrowserPC", "_blank");
    } else {
        pc.style.display = "none";
        android.style.display = "block";
        window.open("https://github.com/DVTech0/DVNex/releases/tag/Browser", "_blank");
    }
}