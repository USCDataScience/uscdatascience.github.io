/* Helpful Tips

* The <script> tag should be placed at the end of your content, right
  before you close your <body> tag. The badge will display wherever you 
  insert the <div id="tripit-badge"></div> tags.

* The id of the div tag is set to 'tripit-badge' by default. If you'd
  like to use a different id, you can do so. Simply specify the div's id
  as a parameter in the javascript src url. For example,
  http://www.tripit.com/account/badge/id/XXXXX/div_id/YYYYY/badge.js

* Once the page is fully loaded, the contents of the specified div will
  be replaced. You can put a placeholder image in the div if you want to
  display something until the badge is loaded.

*/

//Used to allow for multiple blog badges on a single page
if (typeof( window[ 'mapIdToHtml' ] ) == "undefined")
{
  var mapIdToHtml = [];

  //Originally from http://javascript.nwbox.com/ContentLoaded/contentloaded.js
  function ContentLoaded(w, f) { var d = w.document, D = 'DOMContentLoaded', u = w.navigator.userAgent.toLowerCase(), v = parseFloat(u.match(/.+(?:rv|it|ml|ra|ie)[\/: ]([\d.]+)/)[1]); function init(e) { if (!document.loaded) { document.loaded = true; f((e.type && e.type == D) ? e : { type: D, target: d, eventPhase: 0, currentTarget: d, timeStamp: +new Date, eventType: e.type || e }); } } if (/webkit\//.test(u) && v < 525.13) { (function () { if (/complete|loaded/.test(d.readyState)) { init('khtml-poll'); } else { setTimeout(arguments.callee, 10); } })(); } else if (/msie/.test(u) && !w.opera) { d.attachEvent('onreadystatechange', function (e) { if (d.readyState == 'complete') { d.detachEvent('on'+e.type, arguments.callee); init(e); } } ); if (w == top) { (function () { try { d.documentElement.doScroll('left'); } catch (e) { setTimeout(arguments.callee, 10); return; } init('msie-poll'); })(); } } else if (d.addEventListener && (/opera\//.test(u) && v > 9) || (/gecko\//.test(u) && v >= 1.8) || (/khtml\//.test(u) && v >= 4.0) || (/webkit\//.test(u) && v >= 525.13)) { d.addEventListener(D, function (e) { d.removeEventListener(D, arguments.callee, false); init(e); }, false ); } else { var oldonload = w.onload; w.onload = function (e) { init(e || w.event); if (typeof oldonload == 'function') { oldonload(e || w.event); } }; } }

  function StoreBadgeHtml(badgeId, html) { window.mapIdToHtml.push( [badgeId, html] ); }

  function WriteBadgeHtml() {
    for (i in mapIdToHtml) {
      badge = document.getElementById(mapIdToHtml[i][0]);
      if (badge) {
        var innerDiv = document.createElement('div');
        innerDiv.id = mapIdToHtml[i][0] + '-inner-div';
        badge.appendChild(innerDiv);
        innerDiv.innerHTML = mapIdToHtml[i][1];

        //To fix IE6 max-width issue
        test = document.getElementById(mapIdToHtml[i][0] + '-inner-div');
        if(test) {
          var width = parseInt(test.offsetWidth);
          if (width > 250) test.style.width = '250px';
        }
      }
    }
  }

}

StoreBadgeHtml("tripit-badge", "<div style=\"max-width: 250px; text-align: left; font-style: normal; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; text-transform: none; letter-spacing: 0; line-height: 14px; border: 1px solid #005A83; color: #333 !important; background: #FFF url(https://www.tripit.com/images/badge/bg-gradient.jpg) bottom left repeat-x !important;\"><div style=\"margin: 6px;\"><div style=\"font-size: 12px;\"><a style=\"color:#0A85B7; text-decoration:none !important;\" href=\"https://www.tripit.com/people/chris.mattmann?us=blogbadge&amp;um=blogbadge&amp;un=blogbadge\">Chris</a> is in Honolulu, HI</div><div style=\"font-size: 11px;\">and has traveled 514,269 mi to 98 locations</div><hr style=\"border: 0; color: #D6E6F0; background-color: #D6E6F0;\"/><div style=\"font-size: 10px; color: #666; margin-top: 6px;\">UPCOMING TRIPS</div><table><tr valign=\"top\"><td class=\"hlfVPad\" style=\"padding:0\"><div style=\"margin-top:3px\"><span class=\"fntBld\" style=\"font-size:12px;font-weight:normal;color:#333;\">Honolulu, HI May 15 - 22, 2019</span><br /><span style=\"font-size:11px;color:#666;\">Yearly Vacation to Hawaii</span></div></td></tr><tr valign=\"top\"><td class=\"hlfVPad\" style=\"padding:0\"><div style=\"margin-top:3px\"><span class=\"fntBld\" style=\"font-size:12px;font-weight:normal;color:#333;\">Denver, CO Jun 11 - 12, 2019</span><br /><span style=\"font-size:11px;color:#666;\">Travel to Denver, CO for the all hands meeting...</span></div></td></tr></table><hr style=\"border: 0; color: #D6E6F0; background-color: #D6E6F0;\"/><div style=\"color: #666; font-weight: bold; font-size: 10px;\"><a style=\"text-decoration: none !important; color: #666; vertical-align: bottom;\" href=\"https://www.tripit.com/?us=blogbadge&amp;um=blogbadge&amp;un=blogbadge\"><img style=\"vertical-align: bottom; border: 0;\" alt=\"TripIt\" border=\"0\" src=\"https://www.tripit.com/images/badge/logo.png\" />Organize your travel</a></div></div></div>");
ContentLoaded(window, WriteBadgeHtml);

/*
     FILE ARCHIVED ON 19:01:31 May 15, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:39:24 Jan 31, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 321.383
  exclusion.robots: 0.18
  esindex: 0.191
  PetaboxLoader3.resolve: 57.236
  exclusion.robots.policy: 0.167
  captures_list: 593.536
  load_resource: 184.702
  LoadShardBlock: 254.68 (3)
  PetaboxLoader3.datanode: 350.036 (4)
  CDXLines.iter: 13.767 (3)
*/