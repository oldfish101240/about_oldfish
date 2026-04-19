(function () {
  "use strict";

  var STORAGE_KEY = "about_oldfish_lang";

  var STRINGS = {
    "zh-TW": {
      site_mark: "老魚oldfish",
      name_zh: "老魚",
      name_en: "oldfish",
      tagline: '"Professional Bug Creator"',
      info_heading: "個人資訊",
      info_label_email: "電子郵件",
      info_value_email: "oldfish101240@gmail.com",
      info_label_location: "地點",
      info_value_location: "台灣",
      info_label_timezone: "時區",
      info_value_timezone: "GMT+8",
      info_label_languages: "語言",
      info_value_languages: "中文、英文(很爛)",
      label_github: "GitHub",
      label_discord: "Discord",
      label_ig: "Instagram",
      contact_buttons_aria: "社群與外部連結",
      footer_note: "\u00A9 2025 老魚oldfish",
    },
    en: {
      site_mark: "老魚oldfish",
      name_zh: "老魚",
      name_en: "oldfish",
      tagline: '"Professional Bug Creator"',
      info_heading: "Personal info",
      info_label_email: "Email",
      info_value_email: "oldfish101240@gmail.com",
      info_label_location: "Location",
      info_value_location: "Taiwan (ROC)",
      info_label_timezone: "Timezone",
      info_value_timezone: "GMT+8",
      info_label_languages: "Languages",
      info_value_languages: "Traditional Chinese, English (poor)",
      label_github: "GitHub",
      label_discord: "Discord",
      label_ig: "Instagram",
      contact_buttons_aria: "Social links",
      footer_note: "\u00A9 2025 老魚oldfish",
    },
  };

  function detectLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh-TW" || saved === "en") return saved;
    var nav = navigator.language || "";
    if (nav.toLowerCase().startsWith("zh")) return "zh-TW";
    return "en";
  }

  function setLang(lang) {
    var bundle = STRINGS[lang];
    if (!bundle) return;

    document.documentElement.lang = lang === "zh-TW" ? "zh-Hant" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && bundle[key] !== undefined) {
        el.textContent = bundle[key];
      }
    });

    document.getElementById("lang-zh").classList.toggle("is-active", lang === "zh-TW");
    document.getElementById("lang-en").classList.toggle("is-active", lang === "en");
    document.getElementById("lang-zh").setAttribute("aria-pressed", lang === "zh-TW" ? "true" : "false");
    document.getElementById("lang-en").setAttribute("aria-pressed", lang === "en" ? "true" : "false");

    var contactBtnGroup = document.getElementById("contact-buttons");
    if (contactBtnGroup && bundle.contact_buttons_aria) {
      contactBtnGroup.setAttribute("aria-label", bundle.contact_buttons_aria);
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.getElementById("lang-zh").addEventListener("click", function () {
    setLang("zh-TW");
  });
  document.getElementById("lang-en").addEventListener("click", function () {
    setLang("en");
  });

  setLang(detectLang());
})();
