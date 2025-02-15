// CountDown Clock
// Version   : 1.0.2
// Developer : Ekrem KAYA
// Website   : https://e-piksel.com
// GitHub    : https://github.com/epiksel/countdown

!function(e){e.fn.countdown=function(t,n){var o=e.extend({date:null,offset:null,day:"Day",days:"Days",hour:"Hour",hours:"Hours",minute:"Minute",minutes:"Minutes",second:"Second",seconds:"Seconds",hideOnComplete:!1},t);o.date||e.error("Date is not defined."),Date.parse(o.date)||e.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");var r=this,i=function(){var e=new Date,t=e.getTime()+6e4*e.getTimezoneOffset();return new Date(t+36e5*o.offset)};var d=setInterval(function(){var t=new Date(o.date)-i();if(t<0)return clearInterval(d),o.hideOnComplete&&e(r).hide(),void(n&&"function"==typeof n&&n(r));var s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),f=Math.floor(t%36e5/6e4),u=Math.floor(t%6e4/1e3),h=1===s?o.day:o.days,l=1===a?o.hour:o.hours,c=1===f?o.minute:o.minutes,x=1===u?o.second:o.seconds;s=String(s).length>=2?s:"0"+s,a=String(a).length>=2?a:"0"+a,f=String(f).length>=2?f:"0"+f,u=String(u).length>=2?u:"0"+u,r.find(".days").text(s),r.find(".hours").text(a),r.find(".minutes").text(f),r.find(".seconds").text(u),r.find(".days_text").text(h),r.find(".hours_text").text(l),r.find(".minutes_text").text(c),r.find(".seconds_text").text(x)},1e3)}}(jQuery);
;