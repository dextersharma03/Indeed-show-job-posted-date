// ==UserScript==
// @name         Show Job Posting Date & Time
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Display full datePosted (date + time) from JSON-LD job posting schema on the page.
// @author       Dex
// @match        https://ca.indeed.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function showDatePosted(datePosted) {
        const dt = new Date(datePosted);
        const formatted = dt.toLocaleString(undefined, {
            dateStyle: 'medium',
            timeStyle: 'short'
        });

        const banner = document.createElement('div');
        banner.textContent = `📅 Job Posted On: ${formatted}`;
        Object.assign(banner.style, {
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            backgroundColor: '#333',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '8px',
            zIndex: 9999,
            fontFamily: 'sans-serif',
            fontSize: '14px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
        });
        document.body.appendChild(banner);
    }

    function extractDatePosted() {
        const jsonScripts = document.querySelectorAll('script[type="application/ld+json"]');
        for (const script of jsonScripts) {
            try {
                const data = JSON.parse(script.textContent.trim());

                if (Array.isArray(data)) {
                    for (const item of data) {
                        if (item['@type'] === 'JobPosting' && item.datePosted) {
                            showDatePosted(item.datePosted);
                            return;
                        }
                    }
                } else if (data['@type'] === 'JobPosting' && data.datePosted) {
                    showDatePosted(data.datePosted);
                    return;
                }
            } catch (err) {
                continue;
            }
        }
    }

    window.addEventListener('load', () => {
        setTimeout(extractDatePosted, 100);
    });
})();
