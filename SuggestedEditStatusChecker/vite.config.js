import buildViteConfig from '../vite-config-builder';
import {buildMatchPatterns} from '../banner-build-util';

const banner = `// ==UserScript==
// @name         Suggested Edit Queue Status Checker
// @description  Adds button to post menu which sends an anonymous edit request to determine if suggested edits are current available or not.
// @homepage     https://github.com/HenryEcker/SO-Mod-UserScripts
// @author       Henry Ecker (https://github.com/HenryEcker)
// @version      0.0.1
// @downloadURL  https://github.com/HenryEcker/SO-Mod-UserScripts/raw/master/SuggestedEditStatusChecker/dist/SuggestedEditQueueStatusChecker.user.js
// @updateURL    https://github.com/HenryEcker/SO-Mod-UserScripts/raw/master/SuggestedEditStatusChecker/dist/SuggestedEditQueueStatusChecker.user.js
//
${buildMatchPatterns('// @match        ', '/questions/*')}
//
// ==/UserScript==
/* globals $, StackExchange */`;

export default () => {
    return buildViteConfig('SuggestedEditQueueStatusChecker', banner);
};