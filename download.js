/**
 * Détection de l'appareil et mise à jour de la section recommandée (style Node.js)
 * Compatible avec le système i18n
 */
(function () {
  var PLATFORMS = {
    windows: {
      label: "Windows",
      file: "Comptal2-1.1.0-win-x64.exe",
      url: "https://github.com/LeopaulV/Comptal2/releases/download/Accounting/Comptal2-1.1.0-win-x64.exe",
      desc: "Windows 10/11 (64-bit)",
    },
    "macos-intel": {
      label: "macOS Intel",
      file: "Comptal2-1.1.0-darwin-x64.dmg",
      url: "https://github.com/LeopaulV/Comptal2/releases/download/Accounting/Comptal2-1.1.0-darwin-x64.dmg",
      desc: "macOS 10.15+ (x64)",
    },
    "macos-arm": {
      label: "macOS Apple Silicon",
      file: "Comptal2-1.1.0-darwin-arm64.dmg",
      url: "https://github.com/LeopaulV/Comptal2/releases/download/Accounting/Comptal2-1.1.0-darwin-arm64.dmg",
      desc: "M1 / M2 / M3 (arm64)",
    },
    linux: {
      label: "Linux",
      file: "Comptal2-1.1.0-linux-x86_64.AppImage",
      url: "https://github.com/LeopaulV/Comptal2/releases/download/Accounting/Comptal2-1.1.0-linux-x86_64.AppImage",
      desc: "AppImage portable (x86_64)",
    },
  };

  function detectPlatform() {
    var ua = navigator.userAgent.toLowerCase();
    var platform = navigator.platform || "";
    if (platform.includes("Win") || ua.includes("windows")) return "windows";
    if (platform.includes("Mac")) {
      return (ua.includes("aarch64") || ua.includes("arm64")) ? "macos-arm" : "macos-intel";
    }
    if (platform.includes("Linux") || ua.includes("linux")) return "linux";
    return null;
  }

  function t(key) {
    if (window.comptal2i18n) {
      var lang = window.comptal2i18n.getPreferredLang();
      return window.comptal2i18n.t(key, lang);
    }
    return key;
  }

  function init() {
    var detectedPlatform = detectPlatform();
    var detectedText = document.getElementById("detected-text");
    var recommendedPlatform = document.getElementById("recommended-platform");
    var recommendedBtn = document.getElementById("recommended-btn");
    var recommendedLabel = document.getElementById("recommended-label");
    var optionsGrid = document.getElementById("download-options");

    if (detectedPlatform && PLATFORMS[detectedPlatform]) {
      var p = PLATFORMS[detectedPlatform];
      detectedText.textContent = t("dl.recommended") + " " + p.label;
      detectedText.removeAttribute("data-i18n");
      recommendedPlatform.textContent = p.desc;
      recommendedBtn.href = p.url;
      recommendedBtn.download = p.file;
      recommendedLabel.textContent = p.label;
      recommendedLabel.removeAttribute("data-i18n");

      var optionCard = optionsGrid && optionsGrid.querySelector('[data-platform="' + detectedPlatform + '"]');
      if (optionCard) optionCard.classList.add("dl-card--recommended");
    } else {
      detectedText.textContent = t("dl.choose");
      recommendedPlatform.textContent = t("dl.selectSystem");
      recommendedBtn.href = "https://github.com/LeopaulV/Comptal2/releases";
      recommendedBtn.target = "_blank";
      recommendedBtn.removeAttribute("download");
      recommendedLabel.textContent = t("dl.viewReleases");
      recommendedLabel.removeAttribute("data-i18n");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
