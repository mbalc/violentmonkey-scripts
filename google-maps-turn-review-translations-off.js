// ==UserScript==
// @name        Google Maps Review Turn Translations Off
// @namespace   Violentmonkey Scripts
// @match       https://www.google.com/maps/*
// @grant       none
// @version     1.0
// @author      mbalc
// @inject-into auto
// @contributionURL https://github.com/mbalc/violentmonkey-scripts
// @compatible firefox
// @license     MIT
// @run-at      document-end
// @updateURL   https://github.com/mbalc/violentmonkey-scripts/raw/main/google-maps-turn-review-translations-off.js
// @downloadURL https://github.com/mbalc/violentmonkey-scripts/raw/main/google-maps-turn-review-translations-off.js
//
// @description Auto-disables translations in Google Maps reviews
//
// ... so you don't have to click all those "See original" buttons yourself :v
//
// Tested on 2025-03-05 in Firefox(floorp) on OpenSUSE Tumbleweed
//
// Tags: googlemaps, reviews, translation, disable-translation, auto-click, userscript, violentmonkey, original-language, see-original, maps-reviews
// ==/UserScript==


(function () {
  "use strict";

  // Watch for DOM changes since Google Maps loads content dynamically
  const observer = new MutationObserver(() => {
    // Try to find and click the review toggle button
    try {
      const elements = document.querySelectorAll(
        'button[role="switch"]' +
          '[aria-checked="true"]' +
          "[aria-controls]" +
          "[data-review-id]" +
          "[jsaction]" +
          "[jslog]"
      );
      console.log(elements);
      elements.forEach((e) => e.click());
    } catch (e) {
      // Silently fail if element is not found
    }
  });

  // Start observing the entire document for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
