// selector.js
function FormSelector(){}FormSelector.prototype={init:function(e,t){this.baseElement=$(e);this.setupOptions(t);this.setupSelector();return this},setupOptions:function(e){this.options={onItemSelect:$.noop,onItemOver:$.noop,onItemOut:$.noop,className:null,offsetX:0,offsetY:0};$.extend(this.options,e);if(this.options.className==null){this.options.className=this.baseElement.attr("class")}},setupSelector:function(){this.container=$('<div class="'+this.options.className+'" id="'+this.options.className+"-"+this.baseElement.attr("name")+'"></div>');var e=0;this.list=$('<div class="list"></div>');this.list.hide();this.listItems=this.baseElement.children("option").map($.proxy(function(t,n){var r=$(n).attr("disabled");if(typeof r!=="undefined"&&r!==false&&r!="off"){var i=$("<div>"+$(n).html()+"</div>");i.addClass("empty")}else{var i=$('<a class="item" rel="'+$(n).attr("value")+'" href="javascript:void(0)">'+$(n).html()+"</a>");$(i).addClass($(n).attr("class")).hover($.proxy(this.itemOver,this),$.proxy(this.itemOut,this));$(i).attr("style",$(n).attr("style"))}if($(n).is(":selected")){e=t}this.list.append(i);return i},this));this.container.append(this.list);$(document).mousedown($.proxy(this.close,this));this.indicator=$('<a href="javascript:void(0)" class="indicator"><span></span></a>');if(this.listItems.length>0){var t=this.listItems[e];$("span",this.indicator).html(t.html()).attr("class",t.attr("class")).removeClass("item");this.indicator.click($.proxy(this.dropDown,this));this.container.append(this.indicator)}this.baseElement.hide();this.baseElement.after(this.container)},dropDown:function(){var e=this.container.position();this.list.css({position:"absolute",left:this.options.offsetX+e.left,top:this.options.offsetY+e.top});this.list.show()},close:function(e){var t=$(e.target);var n="."+this.options.className;if(t.is(n+" a.item")||t.parent().is(n+" a.item")){var r=t.closest(n);if(r[0]==this.container[0]){e.currentTarget=t.is("a.item")?t:t.parent();this.selectItem(e)}}if(!t.is(n+" .list")){this.list.hide()}},selectItem:function(e){var t=$(e.currentTarget);this.baseElement.val(t.attr("rel"));$("span",this.indicator).html("").attr("class",t.attr("class")).removeClass("item");$.proxy(this.options.onItemSelect,this)(e)},itemOver:function(e){$.proxy(this.options.onItemOver,this)(e)},itemOut:function(e){$.proxy(this.options.onItemOut,this)(e)}}

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // NOTE Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

var flashvars = {wizard : 0, 'domain' : domainParam, 'useFlashLogger' : useFlashLogger, 'codecName' : codecName, 'hurl' : typeof hurl == 'undefined' ? '' : hurl};

var timerObject = new timer();
var attributes = {
    id : "c2fCallerObject",
    name : "c2fCallerObject",
    allowfullscreen : "true",
    allowscriptaccess : "always",
    quality : "high",
    bgcolor : "#04B6DA",
    wmode : "window",
    "class" : "incoming"
};

if (typeof phoneSettings != 'undefined') {
	attributes['bgcolor'] = phoneSettings['bgColor'];
}

var invalid_phone_number_message = messages['invalid_phone_number_message'];

function isPaidCall() {
    return paidCall;
}

$(document).ready(function(arg) {
	default_message = !isPaidCall() ? messages['enter_phone_free_call'] : messages['enter_phone_paid_call'];
	$(".infoMessage").html(default_message);
});


var countryCodePrefixData = [
    [ "",  "",  ""],
    [ "USA",  "1",  "us"],
    [ "Afghanistan",  "93",  "af"],
    [ "Albania",  "355",  "al"],
    [ "Algeria",  "213",  "dz"],
    [ "American Samoa",  "1684",  "as"],
    [ "Andorra",  "376",  "ad"],
    [ "Angola",  "244",  "ao"],
    [ "Anguilla",  "1264",  "ai"],
    [ "Antarctic Territories",  "672",  "aq"],
    [ "Antigua and Barbuda",  "1268",  "ag"],
    [ "Argentina",  "54",  "ar"],
    [ "Armenia",  "374",  "am"],
    [ "Aruba",  "297",  "aw"],
    [ "Ascension Island",  "247",  "gb"],
    [ "Australia",  "61",  "au"],
    [ "Austria",  "43",  "at"],
    [ "Azerbaijan",  "994",  "az"],
    [ "Azores",  "35129",  "pt"],
    [ "Bahamas",  "1242",  "bs"],
    [ "Bahrain",  "973",  "bh"],
    [ "Bangladesh",  "880",  "bd"],
    [ "Barbados",  "1246",  "bb"],
    [ "Belarus",  "375",  "by"],
    [ "Belgium",  "32",  "be"],
    [ "Belize",  "501",  "bz"],
    [ "Benin",  "229",  "bj"],
    [ "Bermuda",  "1441",  "bm"],
    [ "Bhutan",  "975",  "bt"],
    [ "Bolivia",  "591",  "bo"],
    [ "Bosnia and Herz.",  "387",  "ba"],
    [ "Botswana",  "267",  "bw"],
    [ "Brazil",  "55",  "br"],
    [ "British Virgin Islands",  "1284",  "vg"],
    [ "Brunei",  "673",  "bn"],
    [ "Bulgaria",  "359",  "bg"],
    [ "Burkina Faso",  "226",  "bf"],
    [ "Burundi",  "257",  "bi"],
    [ "Cambodia",  "855",  "kh"],
    [ "Cameroon",  "237",  "cm"],
    [ "Canada",  "(1)",  "ca"],
    [ "Canary Islands",  "34928",  "es"],
    [ "Cape Verde Island",  "238",  "cv"],
    [ "Cayman Islands",  "1345",  "ky"],
    [ "Central African Rep.",  "236",  "cf"],
    [ "Chad",  "235",  "td"],
    [ "Chatham Islands",  "643305",  "nz"],
    [ "Chile",  "56",  "cl"],
    [ "Chile Easter Island/Rural",  "56",  "cl"],
    [ "China",  "86",  "cn"],
    [ "Christmas Island",  "61891",  "cx"],
    [ "Cocos Island",  "61891",  "cc"],
    [ "Colombia",  "57",  "co"],
    [ "Comoros",  "269",  "km"],
    [ "Congo",  "242",  "cg"],
    [ "Cook Islands",  "682",  "ck"],
    [ "Costa Rica",  "506",  "cr"],
    [ "Croatia",  "385",  "hr"],
    [ "Cuba",  "53",  "cu"],
    [ "Cyprus South",  "357",  "cy"],
    [ "Cyprus North",  "90392",  "cy"],
    [ "Czech Republic",  "420",  "cz"],
    [ "DRC",  "243",  "dr"],
    [ "Denmark",  "45",  "dk"],
    [ "Diego Garcia",  "246",  "gb"],
    [ "Djibouti",  "253",  "dj"],
    [ "Dominica",  "1767",  "dm"],
    [ "Dominican Republic",  "1809",  "do"],
    [ "East Timor",  "670",  "tl"],
    [ "Ecuador",  "593",  "ec"],
    [ "Egypt",  "20",  "eg"],
    [ "El Salvador",  "503",  "sv"],
    [ "Equatorial Guinea",  "240",  "gq"],
    [ "Eritrea",  "291",  "er"],
    [ "Estonia",  "372",  "ee"],
    [ "Ethiopia",  "251",  "et"],
    [ "Faeroe Islands",  "298",  "dk"],
    [ "Falkland Islands",  "500",  "fk"],
    [ "Fiji",  "679",  "fj"],
    [ "Finland",  "358",  "fi"],
    [ "France",  "33",  "fr"],
    [ "French Guiana",  "594",  "gf"],
    [ "French Polynesia",  "689",  "pf"],
    [ "Gabon",  "241",  "ga"],
    [ "Gambia",  "220",  "gm"],
    [ "Georgia",  "995",  "ge"],
    [ "Germany",  "49",  "de"],
    [ "Ghana",  "233",  "gh"],
    [ "Gibraltar",  "350",  "gi"],
    [ "Global Personal Number",  "878",  ""],
    [ "Global Satellite",  "88",  ""],
    [ "Greece",  "30",  "gr"],
    [ "Greenland",  "299",  "gl"],
    [ "Grenada",  "1473",  "gd"],
    [ "Guadeloupe",  "590",  "gp"],
    [ "Guam",  "1671",  "gu"],
    [ "Guantanamo Bay",  "5399",  "us"],
    [ "Guatemala",  "502",  "gt"],
    [ "Guinea",  "224",  "gn"],
    [ "Guinea Bissau",  "245",  "gw"],
    [ "Guyana",  "592",  "gy"],
    [ "Haiti",  "509",  "ht"],
    [ "Honduras",  "504",  "hn"],
    [ "Hong Kong",  "852",  "hk"],
    [ "Hungary",  "36",  "hu"],
    [ "Iceland",  "354",  "is"],
    [ "India",  "91",  "in"],
    [ "Indonesia",  "62",  "id"],
    [ "Inmarsat Aero",  "87",  ""],
    [ "Inmarsat A Maritime",  "87",  ""],
    [ "Inmarsat BGAN",  "87077",  ""],
    [ "Inmarsat BGAN HSD",  "87078",  ""],
    [ "Inmarsat B HSD",  "87",  ""],
    [ "Inmarsat B Land",  "87",  ""],
    [ "Inmarsat B Maritime",  "87",  ""],
    [ "Inmarsat HSD",  "87",  ""],
    [ "Inmarsat Mini M",  "87",  ""],
    [ "Inmarsat M Land",  "87",  ""],
    [ "Inmarsat M Maritime",  "87",  ""],
    [ "Iran",  "98",  "ir"],
    [ "Iraq",  "964",  "iq"],
    [ "Ireland",  "353",  "ie"],
    [ "Israel",  "972",  "il"],
    [ "Italy",  "39",  "it"],
    [ "Italy Vatican City",  "379",  "va"],
    [ "Ivory Coast",  "225",  "ci"],
    [ "Jamaica",  "1876",  "jm"],
    [ "Japan",  "81",  "jp"],
    [ "Jordan",  "962",  "jo"],
    [ "Kazakhstan",  "77",  "kz"],
    [ "Kenya",  "254",  "ke"],
    [ "Kiribati",  "686",  "ki"],
    [ "Korea North",  "850",  "kp"],
    [ "Korea South",  "82",  "kr"],
    [ "Kosovo",  "381",  "ko"],
    [ "Kuwait",  "965",  "kw"],
    [ "Kyrgyzstan",  "996",  "kg"],
    [ "Laos",  "856",  "la"],
    [ "Latvia",  "371",  "lv"],
    [ "Lebanon",  "961",  "lb"],
    [ "Lesotho",  "266",  "ls"],
    [ "Liberia",  "231",  "lr"],
    [ "Libya",  "218",  "ly"],
    [ "Liechtenstein",  "423",  "li"],
    [ "Lithuania",  "370",  "lt"],
    [ "Luxembourg",  "352",  "lu"],
    [ "Macao",  "853",  "mo"],
    [ "Macedonia",  "389",  "mk"],
    [ "Madagascar",  "261",  "mg"],
    [ "Malawi",  "265",  "mw"],
    [ "Malaysia",  "60",  "my"],
    [ "Maldives",  "960",  "mv"],
    [ "Mali",  "223",  "ml"],
    [ "Malta",  "356",  "mt"],
    [ "Marshall Islands",  "692",  "mh"],
    [ "Martinique",  "596",  "mq"],
    [ "Mauritania",  "222",  "mr"],
    [ "Mauritius",  "230",  "mu"],
    [ "Mayotte",  "262269",  "yt"],
    [ "Mexico",  "52",  "mx"],
    [ "Micronesia",  "691",  "fm"],
    [ "Midway Islands",  "6998",  "us"],
    [ "Moldova",  "373",  "md"],
    [ "Monaco",  "377",  "mc"],
    [ "Mongolia",  "976",  "mn"],
    [ "Montserrat",  "1664",  "ms"],
    [ "Morocco",  "212",  "ma"],
    [ "Mozambique",  "258",  "mz"],
    [ "Myanmar",  "95",  "mm"],
    [ "Namibia",  "264",  "na"],
    [ "Nauru",  "674",  "nr"],
    [ "Nepal",  "977",  "np"],
    [ "Netherlands Antilles",  "599",  "an"],
    [ "Netherlands",  "31",  "nl"],
    [ "New Caledonia",  "687",  "nc"],
    [ "New Zealand",  "64",  "nz"],
    [ "Nicaragua",  "505",  "ni"],
    [ "Niger",  "227",  "ne"],
    [ "Nigeria",  "234",  "ng"],
    [ "Niue",  "683",  "nu"],
    [ "Norfolk Islands",  "6723",  "nf"],
    [ "Northern Marianas",  "1670",  "mp"],
    [ "Norway",  "47",  "no"],
    [ "Oman",  "968",  "om"],
    [ "Pakistan",  "92",  "pk"],
    [ "Palau",  "680",  "pw"],
    [ "Palestine",  "97",  "ps"],
    [ "Panama",  "507",  "pa"],
    [ "Papua New Guinea",  "675",  "pg"],
    [ "Paraguay",  "595",  "py"],
    [ "Peru",  "51",  "pe"],
    [ "Philippines",  "63",  "ph"],
    [ "Poland",  "48",  "pl"],
    [ "Portugal",  "351",  "pt"],
    [ "Portugal Madeira",  "351291",  "pt"],
    [ "Puerto Rico",  "1787",  "pr"],
    [ "Qatar",  "974",  "qa"],
    [ "Reunion",  "262",  "fr"],
    [ "Romania",  "40",  "ro"],
    [ "Russia",  "7",  "ru"],
    [ "Rwanda",  "250",  "rw"],
    [ "San Marino",  "378",  "sm"],
    [ "Sao Tome and Principe",  "239",  "st"],
    [ "Saudi Arabia",  "966",  "sa"],
    [ "Senegal",  "221",  "sn"],
    [ "Serbia",  "381",  "rs"],
    [ "Montenegro",  "382",  "me"],
    [ "Seychelles",  "248",  "sc"],
    [ "Sierra Leone",  "232",  "sl"],
    [ "Singapore",  "65",  "sg"],
    [ "Slovakia",  "421",  "sk"],
    [ "Slovenia",  "386",  "si"],
    [ "Solomon Islands",  "677",  "sb"],
    [ "Somalia",  "252",  "so"],
    [ "South Africa",  "27",  "za"],
    [ "Spain",  "34",  "es"],
    [ "Sri Lanka",  "94",  "lk"],
    [ "St. Helena",  "290",  "sh"],
    [ "St. Kitts and Nevis",  "1869",  "kn"],
    [ "St. Lucia",  "1758",  "lc"],
    [ "St. Pierre",  "508",  "pm"],
    [ "St. Vincents",  "1784",  "vc"],
    [ "Sudan",  "249",  "sd"],
    [ "Suriname",  "597",  "sr"],
    [ "Swaziland",  "268",  "sz"],
    [ "Sweden",  "46",  "se"],
    [ "Switzerland",  "41",  "ch"],
    [ "Syria",  "963",  "sy"],
    [ "Taiwan",  "886",  "tw"],
    [ "Tajikstan",  "992",  "tj"],
    [ "Tanzania",  "255",  "tz"],
    [ "Thailand",  "66",  "th"],
    [ "Togo",  "228",  "tg"],
    [ "Tokelau",  "690",  "tk"],
    [ "Tonga",  "676",  "to"],
    [ "Trinidad and Tobago",  "1868",  "tt"],
    [ "Tunisia",  "216",  "tn"],
    [ "Turkey",  "90",  "tr"],
    [ "Turkmenistan",  "993",  "tm"],
    [ "Turks and Caicos Island",  "1649",  "tc"],
    [ "Tuvalu",  "688",  "tv"],
    [ "United Arab Emirates",  "971",  "ae"],
    [ "Uganda",  "256",  "ug"],
    [ "UK",  "44",  "gb"],
    [ "Ukraine",  "380",  "ua"],
    [ "Uruguay",  "598",  "uy"],
    [ "Virgin Islands USA",  "1340",  "vi"],
    [ "Uzbekistan",  "998",  "uz"],
    [ "Vanuatu",  "678",  "vu"],
    [ "Venezuela",  "58",  "ve"],
    [ "Vietnam",  "84",  "vn"],
    [ "Wallis and Futuna",  "681",  "wf"],
    [ "Western Samoa",  "685",  "ws"],
    [ "Yemen",  "967",  "ye"],
    [ "Zambia",  "260",  "zm"],
    [ "Zimbabwe",  "263",  "zw"]
];

function timer() {
    var t = undefined;
    return {
        start : function(seconds) {
	        this.stop();
	        this.passed = 0;
	        var that = this;
	        t = setInterval(function(){
	            if (seconds -- > 0) {
	            	that.passed ++ ;
	                $(".infoMessage").html(messages['time_left'] + secondsToHms(seconds));
	            } else {
	            }
	        }, 1000) 
        },
        stop : function() {
	        if (t) {
	        	clearTimeout(t);
	        	t = undefined;
	        	return this.passed;
	        }
        },
        started: function() {
        	return t != undefined;
        }
    }
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + ":" : "0:") + (s < 10 ? "0" : "") + s);
}

function initSelector() {
    $.each(countryCodePrefixData, function(key, value) {
        $("select.selector").append($("<option></option>").attr("value",value[1]).attr("class", value[2]).text(value[0]));
    });
    var selector;
    $('select.selector').each(function(index, element) {
        selector = new FormSelector().init(element, {
            'offsetX': 0,
            'offsetY': 36,
            onItemSelect : function(e) {
                if (e.target) {
                    $(".phoneNumber").val(e.target.rel);
                }
            }
        });
    });

    var arrOfCountries = new Array();
    $.each(countryCodePrefixData, function(key, value) {
        arrOfCountries[value[1]] = [value[0], value[2]];
    });

    var phoneNumber = undefined, prevPhoneNumber = undefined; 

    $(".phoneNumber").keyup(function(e){
        
        if (!haveFlashOrWebRtc()){
            return false;
        }
        
        phoneNumber = $(".phoneNumber").val().replace(/\+/g,'').replace(/\-/g,'');
        if (phoneNumber.length == 0) {
            clearSelector();
            $(".infoMessage").html(default_message);
            return;
        }
        if ( e.which == 13 ) {
            $(".callHang .call").trigger('click');
        }
		
		if (phoneNumber == '0000') {
			$(".infoMessage").html('Local echo test');
			return;
		}
		
		if (phoneNumber == '12345678') {
			$(".infoMessage").html('Latency test');
			return;
		}

		
        var l = (phoneNumber.length > 4) ? 4 : phoneNumber.length;
        if (prevPhoneNumber == undefined || prevPhoneNumber.substring(0,l) != phoneNumber.substring(0,l)) {
            changeCountry(phoneNumber);
        }
        if (isPaidCall()) {
            $.get('/flash/getDirectionByPhone', {"phone" : phoneNumber}, function(resp){
            	if (resp) {
					$(".infoMessage").html(localize(messages['price_per_minute'], resp.name, resp.pricePerMinute, resp.duration));
            	} else {
            		$(".infoMessage").html(invalid_phone_number_message);
            	}
            });
        } else {
            $.get('/getDirectionByPhone', {"phone" : phoneNumber}, function(resp){
                if (resp) {
                    if (resp.talkingTime == 0 ){
						var msg = localize(messages['no_free_minutes'], resp.name);
						
						if (domainParam == 'CALL2FRIENDS' && !registeredUser){
							$(".infoMessage").html(msg + 'Come to us tomorrow or <a style="color:white;text-decoration:underline;" href="/register">register</a> to perform paid call.');
						} else {
							$(".infoMessage").html(msg);
						}
                        
                    } else {
                        $(".infoMessage").html(localize(messages['direction_name'], resp.name, resp.talkingTime));
                    }
                } else {
                	$(".infoMessage").html(invalid_phone_number_message);
                }
            });
        }
        prevPhoneNumber = phoneNumber;
    });

    $('.button.back_btn').click(function(e){
        var phone = $(".phoneNumber").val();
        if (phone.length > 1) {
            $(".phoneNumber").val(phone.substr(0, phone.length-1));
        } else {
            clearSelector();
            $(".phoneNumber").val("");
        }
    });

    function changeCountry(prefix) {
        var found = false;
        var i = (prefix.length > 4) ? 4 : prefix.length;
        while ( !found && i > 0) {
            prefix = prefix.substring(0, i);
            i--;
            if (arrOfCountries[prefix]) {
                var selected = $('a.item[rel='+ prefix +']', selector.list);
                selector.selectItem({currentTarget: selected});
                $("#selector-language .indicator span").attr("class", arrOfCountries[prefix][1]).text("");
                found = true;
            }
        }
        if (!found) {
            clearSelector();
        }
    }
    function clearSelector() {
        var selected = $('a.item[rel=""]', selector.list);
        selector.selectItem({currentTarget: selected});
    }
}

function hasGetUserMedia() {
	if (!webRtcEnabled) {
		return false;
	}
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

haveFlashOrWebRtc = function() {
	if (hasGetUserMedia()) {
		return true;
	}
	if (!swfobject.hasFlashPlayerVersion("9.0.18")) {
		$(".infoMessage").html(messages['need_flash_player']);
        return false;
	}
    return true;
}

function doCall(phone, paid) {
	if (hasGetUserMedia()) {
		webRtc.call(phone, paid);
	} else {
		swfobject.getObjectById('c2fCallerObject').call(phone, !paid, '');
	}
}

function doHang() {
	if (hasGetUserMedia()) {
		webRtc.hang();
	} else {
		swfobject.getObjectById('c2fCallerObject').hangup();
	}
}

// called from flash as well
function updateStatusOnHang(errMsg) {
	callStarted = false;
    timerObject.stop();
    if (!errMsg) {
    	errMsg = default_message;
    } else {
    	errMsg = localize(messages[errMsg]);
    }
    $(".infoMessage").html(errMsg);
}

function doDtfm(val) {
	if (hasGetUserMedia()) {
		webRtc.dtfm(val);
	} else {
		swfobject.getObjectById('c2fCallerObject').dtmf(val);
	}
}

$(document).ready(function(arg) {
	
	initSelector();
	haveFlashOrWebRtc();

    $(".phoneButton a").click(function(e){
        var val = $("span", $(this)).text();
        $(".phoneNumber").val($(".phoneNumber").val() + val);
		if (callStarted) {
			doDtfm(val);
		}
    });

    $(".callHang .call").click(function(e){
        if (haveFlashOrWebRtc()) {
        	
            var phone = $(".phoneNumber").val();
            if(phone == '') {
                $(".infoMessage").html(messages['connection_impossible']);
            } else {
				callStarted = true;
				if (phone == '0000') {
					$(".infoMessage").html('Local echo test');
				}
				
				if (phone == '12345678') {
					$(".infoMessage").html('Latency test');
				}
				
                if (isPaidCall()) {
                	doCall(phone, true);
                } else {
                	doCall(phone, false);
                }
            }
            
        }
    });

    $(".callHang .hang").click(function(e){
		doHang();
    });
});

var callStarted = false;
var flashIsReady = false;
flashUpdatePhoneStatus = function(args){
	var callStarted = args[0];
	var status = args[1];
	if (!callStarted) {
		updateStatus(status);
	} else {
		$('call-from-ievaphone').show();
	}
	
	if (status == "connection_failed") {
		$(".infoMessage").html(messages['connection_failed']);
	}
}

function updateStatus(status) {
	if (status == "not_enought_funds") {
		$(".infoMessage").text(messages['not_enought_funds']);
	} else if (status == "operation_status_unsupported_call_direction") {
		$(".infoMessage").text(messages['operation_status_unsupported_call_direction']);
	} else if (status == "free_direction_notsupported" || status == 'free_personal_call_limit_exceed'){
		var msg = messages['free_direction_notsupported'];
		if (domainParam == 'CALL2FRIENDS'){
			$(".infoMessage").html(msg + 'Come to us tomorrow or <a style="color:white;text-decoration:underline;" href="/register">register</a> to perform paid call.');
		} else {
			$(".infoMessage").html(msg);
		}
	} else if (status == "welcome_message"){
		$(".infoMessage").html(default_message);
		timerObject.stop();
	} else if (status == 'status_call_created') {
		$(".infoMessage").html('Calling...');
	} else if (status == 'status_busy') {
		$(".infoMessage").html('Busy...');
	} else if (status == 'free_personal_call_limit_exceed') {
		var msg = messages['free_personal_call_limit_exceed'];
		if (domainParam == 'CALL2FRIENDS'){
			$(".infoMessage").html(msg + 'Come to us tomorrow or <a style="color:white;text-decoration:underline;" href="/register">register</a> to perform paid call.');
		} else {
			$(".infoMessage").html(msg);
		}
	} else if (status == 'invalid_phone_number' || status == 'unsupported_direction') {
		$(".infoMessage").html(invalid_phone_number_message);
	} else if (status == 'phone_number_is_blocked') {
		$(".infoMessage").html('Phone number is blocked, please contact support');
	}
}

flashStateMicrophoneMute = function() {
	$(document).ready(function () {
	    $(".phoneButton").hide();
	    $(".infoMessage").html(messages['needs_access_to_microphone']);
		
		if (typeof phoneSettings != 'undefined') {
			$("#c2fCallerObject").attr("width", phoneSettings['width']).attr("height", phoneSettings['height']);
		} else {
			$("#c2fCallerObject").attr("width", "295").attr("height", "160").css("margin", "12px 20px");
		}
		
	    setTimeout(function(){
	    	swfobject.getObjectById('c2fCallerObject').showSecuritySettings();
	    }, 1000);
	});
}

flashGetCookie = function(){
	return $.cookie("smscookie");
}

flashAllowClick = function(allow) {
    if (allow[0]) { 
        $(".infoMessage").html(messages['check_remember']);
    } else {
		$(".infoMessage").html(messages['acess_to_mic']);  
    }
}

flashAllowClosed = function(allow) {
    if (allow == 'true') {
        flashReady();
    } else {
    	location.reload();
    }
}

flashReady = function() {
	flashIsReady = true;
    $(".phoneButton").show();
    $("#c2fCallerObject").attr("width", "1").attr("height", "1").css("margin", "0");
    $(".infoMessage").html(default_message);
}

flashNoMicrophone = function() {
    $(".infoMessage").html(messages['microphone_not_found']);
}

flashCallStart = function(maxCallDuration) {
    timerObject.start(maxCallDuration);
}

var micVolume = 50;
var micPrewVol = 50;
var volSlider;

flashMicList = function(args) {
	for (var i in args[0]) {
		if (i == args[1]) {
			$("#micList").append($('<option selected="selected"></option>').val(args[0][i]).html(args[0][i]));
		} else {
			$("#micList").append($('<option></option>').val(args[0][i]).html(args[0][i]));
		}
	  
	}
    micPrewVol = micVolume = args[2];
}

$(document).ready(function() {
	
	if (top != self) {
		top.location.href = location.href;
	}
	
	if (!hasGetUserMedia()) {

		var getFlashObjectName = function(){
			var flashObjectName = "/public/widgets/c2f_9_0_124_28122013.swf";
			var v = swfobject.getFlashPlayerVersion();
			if (v.major >= 11 || v.major >= 10 && v.minor >= 3) {
				flashObjectName = "/public/widgets/c2f_10_3_0_16072014.swf";
			}
			return flashObjectName;
		}
		
		if (navigator.userAgent.toLowerCase().indexOf('opera') !== -1) {
		    swfobject.embedSWF(getFlashObjectName(), "c2fCaller", 295, 160, "9.0", false, flashvars, false, attributes);
		} else {
		    swfobject.embedSWF(getFlashObjectName(), "c2fCaller", 1, 1, "9.0", false, flashvars, false, attributes);
		}
	}
	var micPrewVal = '';

	$("#settings_btn").click(function(e) {
	
		if (!callStarted && flashIsReady) {
			micPrewVal = $("#micList").val();
			
			$("#main-phone-panel").hide();
			$("#settings-phone-panel").show();
			$("#my-slider .handle").attr('style', '');

			volSlider = new Slider('my-slider', {
				value: (micPrewVol / 100).toFixed(2),
				steps: 100,
				snapping: true,
				callback: function(value) {
				   micVolume = Math.round(value*100);
				}
			});
		}
	});
	
	$("#cancel-settings-btn").click(function(e) {
		$("#micList").val(micPrewVal);
		$("#main-phone-panel").show();
		$("#settings-phone-panel").hide();
	});
	
	$("#save-settings-btn").click(function(e) {
		saveSettings();
		$("#main-phone-panel").show();
		$("#settings-phone-panel").hide();
	});
	
	$("#echo-test-settings-btn").click(function(e) {
		saveSettings();
		$(".phoneNumber").val('0000');
		$("#main-phone-panel").show();
		$("#settings-phone-panel").hide();
		$(".callHang .call").trigger('click');
	});
	
	$("#echo-test2-settings-btn").click(function(e) {
		saveSettings();
		$(".phoneNumber").val('12345678');
		$("#main-phone-panel").show();
		$("#settings-phone-panel").hide();
		$(".callHang .call").trigger('click');
	});
	
	$("#my-slider .handle").dblclick(function(e){
		volSlider.setValue(0.5);
		micVolume = 50;
	});
	
	saveSettings = function() {
		micPrewVol = micVolume;
		swfobject.getObjectById('c2fCallerObject').saveSettings($("#micList").val(), micVolume);
	}
	
});

(function( webRtc, $, undefined ) {
	
	var pingTimer = undefined;
	var callId = undefined;
	var peerConnection = undefined;
	var rtcCallFinished = false;
	var localStream = undefined;
	var calling = false;
	
	
	function closeCall(sendCloseEvent, errMessage) {
		rtcCallFinished = true;
		clearTimeout(pingTimer);
        if (callId && sendCloseEvent) {
            $.get( "/webRtc/ping", { 
                "talking"   : false,
                "callId" : callId
             }, function(result) {
             });
        }
        if (peerConnection) {
            //peerConnection.removeStream(localStream);
        }
        
        if (localStream) {
        	if (localStream.stop) {
        		// for some reason chrome starting from 47 does not support stop
        		localStream.stop();
        	}
        	localStream = undefined;
        }
        updateStatusOnHang(errMessage);
        calling = false;
	}
	
	function getBrowserVersion() {
		if (JSON && JSON.stringify && jQuery.browser) {
			return JSON.stringify(jQuery.browser)
		}
		return 'undefined;'
	}

    function makeCall(duration) {
    	rtcCallFinished = false;
        function doGetUserMedia() {
            getUserMedia({audio:true}, gotStream, function(result) {
            	console.log("getUserMedia -> " + result);
            	
                if (result && (result.name == "DevicesNotFoundError" || result == 'NO_DEVICES_FOUND')) {
                	$(".infoMessage").html(messages['microphone_not_found']);
                	calling = false;
                }
                
                // ff
                if (result && result.name && result.name && (typeof result.name === 'string' || result.name instanceof String) && result.name.indexOf('NotFoundError') != -1) {
                	$(".infoMessage").html(messages['microphone_not_found']);
                	calling = false;
                }
                
                if (result && (result.name == "PermissionDeniedError" || result == 'PERMISSION_DENIED')) {
                	$(".infoMessage").html(messages['needs_access_to_microphone']);
                	calling = false;
                }
            }, function (){
            	console.log("getUserMedia.failed ->");
            	$(".infoMessage").html(default_message);
            	calling = false;
            });
        }
        setTimeout(doGetUserMedia, 1);
            
        function gotStream(stream) {
        	localStream = stream;
            console.log("gotStream ->");
            peerConnection = new RTCPeerConnection();
            
            // TODO: maybe check connection state and close session
            /*setInterval(function(){
                console.log(peerConnection.iceConnectionState);
            }, 1000);*/
            
            peerConnection.onaddstream = function (event) {
                var myAudio = document.getElementById("myAudio");
                attachMediaStream(myAudio, event.stream);
            };
            
            peerConnection.addStream(stream)
            
            peerConnection.createOffer(function (offer) {
                console.log("peerConnection.createOffer ->");
                console.log(offer);
                
                peerConnection.setLocalDescription(offer, 
                    function() {
                        console.log("peerConnection.setLocalDescription ->");
                        console.log(offer.sdp);
                        
                        $.post( "/webRtc/doCall", { 
                            "sdp"   : offer.sdp,
                            "callId" : callId
                          }
                          ,function(sdp) {
                                console.log("have remote sdp ->");
                                console.log(sdp);
                                var sdpAnswer = new RTCSessionDescription({
                                    type: 'answer',
                                    sdp: sdp
                                });
                                
                                peerConnection.setRemoteDescription(new RTCSessionDescription(sdpAnswer), function(ev){
                                    console.log("peerConnection.setRemoteDescription");
                                    pingTimer = setInterval(function(){
                                        //console.info(peerConnection.iceConnectionState);
                                        $.get("/webRtc/ping", { 
                                            "talking"   : true,
                                            "callId" : callId
                                         }, function(result) {
                                        	 if (rtcCallFinished) {
                                        		 return ;
                                        	 }
                                        	 console.log(result);
                                        	 if (result.response === 'trying') {
                                        		 $(".infoMessage").html('Calling...');
                                        	 } else if (result.response === 'talking') {
                                        		 if (!timerObject.started()) {
                                        			 console.log("starting timer");
                                        			 timerObject.start(duration);
                                        		 } else {
                                        			 console.log("timer is already started");
                                        		 }
                                        	 } else if (result.response === 'finished') {
                                        		 console.log("remote side pressed hang");
                                        		 closeCall(false)                                    		 
                                        	 } else if (result.response === 'busy') {
                                        		 console.log("remote side sent busy");
                                        		 closeCall(false, 'busy')                                    		 
                                        	 } else if (result.response === 'bad_responce') {
                                        		 console.log("remote side sent bad responce");
                                        		 closeCall(false, 'bad_responce')                                    		 
                                        	 }
                                         });
                                        
                                    }, 1000);	 
                                }, function(ev){ 
                                    console.log("peerConnection.setRemoteDescription failed");
                                    console.log(ev);
                                    closeCall(true);
                                });
                                   
                                
                        });
                    },
                    function(ev) {
                        console.log("peerConnection.setLocalDescription -> failed");
                        console.log(ev);
                        calling = false;
                    }
                );
                
            }, function (error) {
                console.log("peerConnection.createOffer -> failed");
                calling = false;
            });
        }	        	
    }
	
	
	webRtc.hang = function() {
		closeCall(true)
	}

    webRtc.call = function(phone, paid) {
        if (calling) {
        	console.log("already calling, do not allow second attempt");
        	return ;
        }
        
        calling = true;
        $.get( "/webRtc/requestCall", {
        	"phone"    : phone,
        	"domain"   : domainParam,
        	"browser"  : getBrowserVersion(),
        	"paidCall" : paid
         }, function (answ) {
        	console.log(answ);
        	if (answ.errorCode == 'success') {
        		callId = answ.callID;
        		$(".infoMessage").html('Calling...');
        		makeCall(answ.maxCallDuration);
        	} else {
        		calling = false;
        		updateStatus(answ.errorCode);
        	}
        });    	
    }
    webRtc.dtfm = function(val) {
    	if (!timerObject.started()) {
    		return ;
    	}
        $.get( "/webRtc/dtmf", {
        	"dtmf"    : val,
        	"callId"  : callId
         }, function (answ) { });
    }
    
}( window.webRtc = window.webRtc || {}, jQuery ));
