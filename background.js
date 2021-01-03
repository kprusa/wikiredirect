'use strict';

function redirectURL(requestDetails) {
    var params = String(requestDetails.url).split('/')
    return {
        redirectUrl: "https://en.m.wikipedia.org/wiki/"+params[params.length-1]
    };
}

chrome.webRequest.onBeforeRequest.addListener(
    redirectURL,
    {urls: ["*://en.wikipedia.org/*"]},
    ["blocking"],
);
