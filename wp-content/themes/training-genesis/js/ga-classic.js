var source,medium,term,content,campaign,session_count,pageview_count,domains=[],hostname="localhost"===document.location.hostname?"local.hst":document.location.hostname,_gaq=_gaq||[];hostname=(hostname=hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1]).toLowerCase(),_gaq.push(["sfga._setAccount","UA-XXXYYYZZZ-1"]),_gaq.push(["sfga._setDomainName",hostname]),_gaq.push(["sfga._setAllowLinker",!0]),_gaq.push(["sfga._trackPageview"]),_gaq.push(function(){get_campaign_info()}),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();var arr=document.getElementsByTagName("a");for(i=0;i<arr.length;i++){var doname="",tmp=arr[i].getAttribute("onclick");try{doname=(doname=arr[i].hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1]).toLowerCase()}catch(t){doname=arr[i].href}if(!(null!=tmp&&-1<(tmp=String(tmp)).indexOf("_gasf.push")))for(var j=0;j<domains.length;j++)doname!=hostname&&-1!=doname.indexOf(domains[j])&&-1===doname.indexOf("mailto:")&&arr[i].setAttribute("onclick",(null!=tmp?tmp+"; ":"")+"_gaq.push(['sfga._link', '"+arr[i].href+"']); return false;")}function get_campaign_info(){var t=get_utm_value(document.cookie,"__utma=",";"),e=get_utm_value(document.cookie,"__utmb=",";"),a=get_utm_value(document.cookie,"__utmc=",";"),n=get_utm_value(document.cookie,"__utmz=",";");source=get_utm_value(n,"utmcsr=","|"),medium=get_utm_value(n,"utmcmd=","|"),term=get_utm_value(n,"utmctr=","|"),content=get_utm_value(n,"utmcct=","|"),campaign=get_utm_value(n,"utmccn=","|"),gclid=get_utm_value(n,"utmgclid=","|"),session_count=get_session_count(t),pageview_count=get_pageview_count(e,a),"-"!=gclid&&(source="google",medium="cpc")}function get_utm_value(t,e,a){if(!t||""===t||!e||""===e||!a||""===a)return"-";var n,o,u,m="-";return n=t.indexOf(e),u=e.indexOf("=")+1,-1<n&&((o=t.indexOf(a,n))<0&&(o=t.length),m=t.substring(n+u,o)),m}function get_session_count(t){var e,a="-";return"-"!=t&&(e=t.lastIndexOf("."),e++,a=t.substring(e)),a}function get_pageview_count(t,e){var a,n,o="-";return"-"!=t&&"-"!=e&&(a=(e+=".").length,n=t.indexOf(".",a),o=t.substring(a,n)),o}