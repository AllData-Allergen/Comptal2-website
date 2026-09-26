/**
 * Détection de l'appareil et mise à jour de la section recommandée
 * Compatible avec le système i18n
 * Comptal2.1 v2.1.3 — Windows + Linux ; macOS legacy 1.1.0
 */
(function () {
  var RELEASE_BASE = "https://github.com/AllData-Allergen/Comptal2/releases/download/v2.1.3";
  var LEGACY_MAC_BASE = "https://github.com/LeopaulV/Comptal2/releases/download/Accounting";

  var PLATFORMS = {
    windows: {
      label: "Windows",
      file: "Comptal2.1_2.1.3_x64-setup.exe",
      url: RELEASE_BASE + "/Comptal2.1_2.1.3_x64-setup.exe",
      desc: "Windows 10/11 (64-bit) — Comptal2 v2.1.3",
    },
    "macos-intel": {
      label: "macOS Intel",
      file: "Comptal2-1.1.0-mac-x64.dmg",
      url: LEGACY_MAC_BASE + "/Comptal2-1.1.0-mac-x64.dmg",
      desc: "macOS 10.15+ (x64) — Comptal2 1.1.0 legacy",
    },
    "macos-arm": {
      label: "macOS Apple Silicon",
      file: "Comptal2-1.1.0-mac-arm64.dmg",
      url: LEGACY_MAC_BASE + "/Comptal2-1.1.0-mac-arm64.dmg",
      desc: "M1 / M2 / M3 (arm64) — Comptal2 1.1.0 legacy",
    },
    linux: {
      label: "Linux",
      file: "Comptal2.1_2.1.3_amd64.deb",
      url: RELEASE_BASE + "/Comptal2.1_2.1.3_amd64.deb",
      desc: "Debian / Ubuntu / Mint (amd64) — Comptal2 v2.1.3",
    },
    "linux-rpm": {
      label: "Linux RPM",
      file: "Comptal2.1-2.1.3-1.x86_64.rpm",
      url: RELEASE_BASE + "/Comptal2.1-2.1.3-1.x86_64.rpm",
      desc: "Fedora / RHEL / openSUSE (x86_64) — Comptal2 v2.1.3",
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
      recommendedBtn.href = "https://github.com/AllData-Allergen/Comptal2/releases";
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
