var jQuery = require('jquery');
import lax from 'lax.js';
require('../../lib/selector-cache');
require('../../lib/foundation.min.js');

const $ = jQuery;

$(document).foundation();
console.log( lax )
$(".lauant-mobile-close").on("click", function(){
    $('#lauant-mobile-menu').foundation('close');
});
