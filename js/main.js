var isOldIE=$("html").is(".lt-ie9"),Portal={IsMobile:!1,IsTablet:!1,Init:function(){$(document).width()<767?Portal.IsMobile=!0:Portal.IsMobile=!1,!Portal.IsMobile&&$(document).width()<992?Portal.IsTablet=!0:Portal.IsTablet=!1,$(".showTooltip").tooltip(),$(".mainNav .menu").on("click",function(e){e.preventDefault();var t=$(this),a=t.data("rel");(a=$(a,".mainNav")).is(":visible")?(t.removeClass("opened"),a.slideUp("fast")):(t.addClass("opened"),a.slideDown("fast"))}),$(".shareFacebook,.shareTwitter,.shareDelicious,.shareGooglePlus,.shareLinkedIn,.shareReddit,.shareStambleUpon,.shareCiteULike,.shareMendeley").on("click",function(e){e.preventDefault();var t=escape(this.href),a="https://www.facebook.com/sharer/sharer.php?u=",i="https://twitter.com/intent/tweet?text=",o="https://delicious.com/save?url=",n="https://plus.google.com/share?url=",l="http://www.linkedin.com/shareArticle?mini=true&url=",r="http://www.reddit.com/submit?url=",s="http://www.stumbleupon.com/submit?url=",c="http://www.citeulike.org/posturl?url=",d="http://www.mendeley.com/import/?url=",u="";$(this).is(".shareFacebook")?u=a+t:$(this).is(".shareTwitter")?u=i+t:$(this).is(".shareDelicious")?u=o+t:$(this).is(".shareGooglePlus")?u=n+t:$(this).is(".shareLinkedIn")?u=l+t:$(this).is(".shareReddit")?u=r+t:$(this).is(".shareStambleUpon")?u=s+t:$(this).is(".shareCiteULike")?u=c+t:$(this).is(".shareMendeley")&&(u=d+t),window.open(u,"share")}),$(".sendViaMail").on("click",function(e){e.preventDefault(),$("#SendViaEmail").modal("show")}),$(".showBlock").on("click",function(){var e=$(this),t=e.data("rel"),a=e.data("hide");$(t).find("input:text,textarea").val(""),$(t).slideDown("fast"),$(a).hide()}),$(".showFloatInfo").on("click",function(){var e=$(this).data("rel");e=e.split(";"),$("a",e[0]).removeClass("selected"),$(e[2]).hide(),"null"!=e[1]&&($(this).addClass("selected"),$(e[1]).fadeIn("fast"))}),$(".slider").each(function(){var e=$(this);itens=e.find(".slide-item"),wrapper=e.find(".slide-wrapper"),prev=e.find(".slide-back"),next=e.find(".slide-next"),itemProps={w:itens.eq(0).outerWidth(),h:itens.eq(0).outerHeight()},wrapperWidth=itens.length*itemProps.w+100,containerWidth=e.find(".slide-container").outerWidth(),wrapper.width(wrapperWidth),e.find(".slide-container").height(itemProps.h),prev.css("top",itemProps.h/2+"px"),next.css("top",itemProps.h/2+"px"),prev.hide(),wrapper.width()<=e.width()&&next.hide(),prev.on("click",function(e){e.preventDefault();"auto"==wrapper.css("left")||parseInt(wrapper.css("left"));wrapper.animate({left:"+="+itemProps.w},300,function(){0==("auto"==wrapper.css("left")?0:parseInt(wrapper.css("left")))&&prev.hide()}),next.show()}),next.on("click",function(e){e.preventDefault();"auto"==wrapper.css("left")||parseInt(wrapper.css("left"));wrapper.animate({left:"-="+itemProps.w},300,function(){("auto"==wrapper.css("left")?0:parseInt(wrapper.css("left")))<=-(wrapperWidth-containerWidth-100)&&next.hide()}),prev.show()})}),$(".alternativeHeader").each(function(){var e=$(".mainMenu nav ul").html();$(this).find("nav ul").html(e)});var t=$("header").outerHeight();$(window).on("scroll",function(){var e=0<window.scrollY?window.scrollY:0<window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop;t<e?$(".alternativeHeader").stop(!0,!1).animate({top:"0"},200):$(".alternativeHeader").stop(!0,!1).animate({top:"-60px"},200)}),$(".expandCollapseContent").on("click",function(e){e.preventDefault();var t=$("#issueIndex"),a=$("#issueData"),i=this;t.css("float","right"),a.is(":visible")?a.fadeOut("fast",function(){t.animate({width:"100%"},300),$(i).find(".glyphBtn").removeClass("opened").addClass("closed")}):t.animate({width:"75%"},300,function(){a.fadeIn("fast"),$(i).find(".glyphBtn").removeClass("closed").addClass("opened")}),$(i).tooltip("hide")}),$(".collapse-title").on("click",function(){var e=$(this),t=e.next(".collapse-content");t.is(":visible")?(t.slideUp("fast"),e.addClass("closed")):(t.slideDown("fast"),e.removeClass("closed"))}),$(".goto").on("click",function(e){e.preventDefault();var t=$(this).attr("href");t=t.replace("#","");var a=$("a[name="+t+"]").offset();$("html,body").animate({scrollTop:a.top-60},500)}),$(".trigger").on("click",function(e){e.preventDefault();var t=$(this).data("rel");$(t).click()}),$("input[name='link-share']").focus(function(){$(this).select(),window.clipboardData&&clipboardData.setData&&clipboardData.setData("text",$(this).text())}).mouseup(function(e){e.preventDefault()})}},searchFormBuilder={SearchHistory:"",LanguageFilterCheckedBuffer:[],SubjectAreasFilterCheckedBuffer:[],Init:function(){var v="form.searchFormBuilder",w=document.language.lang.value;if(searchFormBuilder.SearchHistory=Cookie.Get("searchHistory"),$(v).on("submit",function(e){for(var i=Portal.IsMobile?$.trim("#iptQueryMobile"):$.trim("#iptQuery"),t=$("*[name='q[]']",v),a=$("select[name='bool[]']",v),o=$("select[name='index[]']",v),n="",l=0,r=t.length;l<r;l++){if(Portal.IsMobile)if("iptQueryMobile"==$(t[l]).attr("id"))var s=$(t[l]).text();else s=$(t[l]).val();else if("iptQuery"==$(t[l]).attr("id"))s=$(t[l]).text();else s=$(t[l]).val();if(""!=s){var c=$("option:selected",o[l]).val();if(1<=l){var d=$("option:selected",a[l-1]).val();n+=" "+d+" "}n+=""!=c?"("+c+":("+s+"))":2==r?s:"("+s+")"}}var u=$("input[name='collection']:checked",v).val();void 0!==u&&""!=u&&0==$("input[name='filter[in][]']").length&&(initial_filter_in=$("<input>").attr({type:"hidden",name:"filter[in][]",value:"scl"}).appendTo("#searchForm"));var h=$("input[name='publicationYear']:checked",v).val();if("1"==h)""!=(p=$("select[name='y1Start'] option:selected",v).val())&&(n+=" AND publication_year:["+p+" TO *]");else if("2"==h){var p=$("select[name='y2Start'] option:selected",v).val(),f=$("select[name='y2End'] option:selected",v).val();""!=p&&""!=f&&(n+=" AND publication_year:["+p+" TO "+f+"]")}""==(n=n.replace(/^AND|AND$|^OR|OR$/g,""))&&(n="*"),n=$.trim(n);var m=document.searchForm.action,g="q="+n;return get_result_total(m,g,function(e){if(0==e)if($("#ResultArea").hide(),$("#NoResults").removeClass("hide"),$("#TotalHits").html("0"),send_query_to_history(m,g),""!=i){document.updateHistoryPage;$("#updateHistoryPage #clear").val(""),$("#updateHistoryPage #noresult").val("true"),$("#updateHistoryPage").submit()}else{var t=parseInt($(".searchHistoryItem").data("history"));$(".searchHistoryItem").data("history",t+1),$(".searchHistoryItem").html("#"+(t+1)),$("#searchHistoryQuery").html(n)}else{var a=document.searchForm;manipulate_bookmark("c"),$("<input>").attr({type:"hidden",name:"q",value:n}).appendTo("#searchForm"),$("<input>").attr({type:"hidden",name:"lang",value:w}).appendTo("#searchForm"),$("<input>").attr({type:"hidden",name:"page",value:"1"}).appendTo("#searchForm"),a.submit()}}),!1}),$("textarea.form-control:visible",v).on("keyup",searchFormBuilder.TextareaAutoHeight).trigger("keyup"),$("a.clearIptText",v).on("click",searchFormBuilder.ClearPrevInput),$(v).on("keypress",function(e){13==e.keyCode&&$(v).submit()}),0<$("#btn-affix").length)var a=$("#btn-affix").offset().top;$(".searchActions").length&&(window.searchActionsStart=$(".searchActions").offset().top),$(".newSearchField",v).on("click",function(e){e.preventDefault(),searchFormBuilder.InsertNewFieldRow(this,"#searchRow-matriz .searchRow",".searchFormBuilder .searchRow-container");var t=$(".searchActions").offset().top;window.searchActionsStart=t,a=$("#btn-affix").offset().top}),$("select.setMinValue").on("change",function(){var e=$(this).val(),t=$(this).data("rel"),a=$(t).val();e=parseInt(e),(a=parseInt(a))<e&&$(t).val("0"),$("option",t).each(function(){parseInt($(this).text())<=e?$(this).prop("disabled",!0):$(this).prop("disabled",!1)})}),$(".collapseBlock .title a.action").on("click",function(){var e=$(this),t=e.parent().next(".content");t.is(":visible")?(t.slideUp("fast"),e.addClass("closed").removeClass("opened"),e.parent().addClass("closed")):(t.slideDown("fast"),e.addClass("opened").removeClass("closed"),e.parent().removeClass("closed"))}),$(".collapseBlock .filterCollapsedList",v).each(function(){var e=$(this),t=e.find(".filterItem"),a=$(".showAll",e);5<t.length&&a.show()}),$(".collapseBlock .showAll",v).on("click",function(){var e=$(this),t=e.parent(),a=e.data("texttoggle"),i=e.text();200<t.outerHeight()?t.removeClass("opened"):t.addClass("opened"),e.text(a).data("texttoggle",i)}),$(".collapseBlock .filterCollapsedList input:checkbox").on("click",function(){$("#apply_filters_button").removeProp("disabled")}),$(".articleAction, .searchHistoryItem, .colActions .searchHistoryIcon",v).tooltip(),$(".selectAll").on("click",function(){var e=$(this),t=$(".results .item input.checkbox"),a=$("#selectedCount",v);parseInt(a.text());action="a",values="",e.is(":checked")?(t.each(function(){$(this).prop("checked",!0),values+=$(this).val()+","}),e.data("all","1")):(action="d",t.each(function(){$(this).prop("checked",!1),values+=$(this).val()+","}),e.data("all","0")),window.manipulate_bookmark(action,values)}),$(".removeSelection").on("click",function(){var e=$(".results .item input.checkbox"),t="";action="d",e.each(function(){$(this).prop("checked",!1),t+=$(this).val()+","}),$(".selectAll").prop("checked",!1),$(".selectAll").data("all","0"),window.manipulate_bookmark(action,t)}),$(".clusterSelectAll").on("click",function(){var e=$(this),t=$("#selectClusterItens .filterBody input.checkbox"),a=e.is(":checked");t.each(function(){$(this).prop("checked",a),$(this).trigger("change")}),a?e.data("all","1"):(e.data("all","0"),console.log("esconder a barra de contagem"))}),$(".results .item input.checkbox").on("change",function(){var e=$(this),t=$(".selectAll",v),a=$("#selectedCount",v);parseInt(a.text());e.is(":checked")||"1"==t.data("all")&&t.prop("checked",!1).data("all","0")}),$("#form_clusters input.checkbox").on("change",function(){var e=$(this),t=e.val(),a=e.attr("id"),i=a.substr(0,a.lastIndexOf("_")),o=$("#"+i+"_ALL"),n=$("#form_clusters #ul_"+i+" input.checkbox");"*"!=t&&o.is(":checked")?o.prop("checked",!1):"*"==t&&n.each(function(){"*"!=$(this).val()&&$(this).prop("checked",!1)})}),$("a.orderBy").on("click",function(){var e=$(this),i=e.data("field"),t=$(e.data("rel")),o=[],a=e.data("group");void 0!==a&&$("a.orderBy[data-group='"+a+"']").removeClass("orderBy_selected");$("a.orderBy").removeClass("orderBy_selected"),e.addClass("orderBy_selected"),$(".filterItem",t).each(function(){var e=$(this),t=e.data(i),a=[];isNaN(parseInt(t))||(t=parseInt(t)),a.push(t),a.push(e),o.push(a),e.remove()}),"number"==typeof o[0][0]?o.sort(function(e,t){return t[0]-e[0]}):o.sort(function(e,t){return e.toString().localeCompare(t)});for(var n=0;n<o.length;n++)t.append(o[n][1])}),$(".openNewWindow").on("click",function(e){e.preventDefault(),window.open(this.href,"print","width=760,height=550")}),searchFormBuilder.LanguageFilterInit(),searchFormBuilder.SubjectAreaFilterInit(),$(".openSelectItens").on("click",function(e){e.preventDefault();var t=$(this),a=(t.data("rel"),t.data("filter")),i=t.data("label"),o=$("#selectClusterItens"),n=$(".filterBody",o),l=$(".modal-title",o),r=document.language.lang.value,s="#filter_"+a,c=$("input[data-filter='"+a+"']");0<c.length&&c.remove(),$("#orderby_results").data("rel",s).addClass("orderBy_selected"),$("#orderby_alpha").data("rel",s).removeClass("orderBy_selected").html(i),$("#statistics").data("cluster",i),$("#statistics").data("chartsource",s),$("#exportcsv").data("cluster",i),$("#exportcsv").data("chartsource",s);var d=$("#selectClusterItens_all"),u=$("#"+a+"_ALL");d.attr("name","filter["+a+"][]"),u.is(":checked")?(d.prop("checked",!0),d.data("all","1")):(d.prop("checked",!1),d.data("all","0")),l.html(i),n.empty();var h=$("#selectClusterItensForm");$.ajax({data:h.serialize(),type:"GET",url:"list-filter/"+a+"?lang="+r,beforeSend:function(){$(".filterBody").html('<img src="'+STATIC_URL+'image/loading.gif" style="margin-left:190px"/>')},success:function(e){$(".filterBody").html(e),$(".filterBody input.checkbox").off("change.enableBtn").on("change.enableBtn",function(){var e=$(".filterBody input.checkbox:checked").length,t=$(".cluster-actions-menu a.singleBtn");0<e?t.removeClass("singleBtn_disabled").tooltip("disable"):t.addClass("singleBtn_disabled").tooltip("enable")}),u.is(":checked")&&(itens=$("#selectClusterItens .filterBody input.checkbox"),itens.each(function(){$(this).prop("checked",!0),$(this).trigger("change")}))},complete:function(){searchFormBuilder.FilterModalContentConfig(a),searchFormBuilder.FilterModalEnableDisableButtons()}}),searchFormBuilder.FilterModalConfig(a),o.modal("show")}),$("#selectClusterItens").on("click",".filterBody input.checkbox",function(){$(this);var e=$(".clusterSelectAll");$("#no_cluster_selected").slideUp("fast"),"1"==e.data("all")&&(e.prop("checked",!1),e.data("all","0"))}),$("#SendViaEmail,#Export").on("shown.bs.modal",function(){var e=$(this),t=parseInt($("#selectedCount").text());e.find("input:eq(0)").focus(),0<t?(e.find(".selection").show(),e.find(".selection strong").text(t)):e.find(".selection").hide()}),$("form.validate").on("submit",function(){var t=!0;return $("input.valid",this).each(function(){var e=$(this);e.is(".multipleMail")?!1===Validator.MultipleEmails(e.val(),";")?(e.parent().addClass("has-error"),t=!1):e.parent().removeClass("has-error"):""===e.val()?(e.parent().addClass("has-error"),t=!1):e.parent().removeClass("has-error")}),t}),$(".searchHistoryIcon.add",v).on("click",function(){$("html, body").animate({scrollTop:0},"fast"),searchFormBuilder.InsertSearchHistoryItem(this)}),$(".searchHistoryIcon.search",v).on("click",function(){$("#iptQuery").empty(),searchFormBuilder.InsertSearchHistoryItem(this),$("#searchHistoryForm").submit()}),$(".searchHistoryIcon.erase",v).on("click",function(e){e.preventDefault();var t=$(this).data("item");$("#confirmEraseItem span.item").text(t),$("#confirmEraseItem input.item").val(t),$("#confirmEraseItem").modal("show")}),$(".searchHistoryIcon.eraseAll",v).on("click",function(e){e.preventDefault(),$("#confirmEraseAll").modal("show")}),$("#iptQuery").on("keypress",function(e){13==e.keyCode&&$("#searchHistoryForm").submit()}),$(".showTooltip").tooltip(),$("input[data-show!=''],input[data-hide!='']").on("click",function(){var e=$(this).data("show"),t=$(this).data("hide");void 0!==e&&$(e).slideDown("fast").find("input[type='radio']:eq(0)").trigger("click"),void 0!==t&&$(t).slideUp("fast")}),$(".searchModal").on("click",function(){var e=$(this).data("modal"),t=$(this).data("expr");$(".searchExpression",e).text(t),$("#clipboardSearchExpression").val(t),$(e).modal("show")}),$(".editQuery").on("click",function(){$(this).data("modal");var e=$(this).data("expr"),t=Portal.IsMobile?$("#iptQueryMobile"):$("#iptQuery");t.append(e).focus(),$(this).effect("transfer",{to:t},1e3),searchFormBuilder.PlaceCaretToEnd(document.getElementById("iptQuery"))}),$(".openCitationModal").on("click",function(){var e=$("#CitationModal"),t=$(this).data("title");if(citationContainer=$("#CitationModal-Citations"),downloadContainer=$("#CitationModal-Downloads"),citation=$(this).data("citation"),citationCtt="",download=$(this).data("download"),downloadCtt="","undefined"!=typeof citation&&"undefined"!=typeof download){citation=citation.split(";;");for(var a=0,i=citation.length;a<i;a++)citation[a]=citation[a].split("::"),citation[a][1]=citation[a][1].replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\[b\]/g,"<strong>").replace(/\[\/b\]/g,"</strong>"),citationCtt+='<div class="modal-body searchExpression">',citationCtt+="\t<label>"+citation[a][0]+"</label>",citationCtt+="\t<div>"+citation[a][1]+"</div>",citationCtt+="</div>";download=download.split(";;");for(a=0,i=download.length;a<i;a++)download[a]=download[a].split("::"),downloadCtt+='<a href="'+download[a][1]+'" target="_blank" class="download">'+download[a][0]+"</a> ";citationContainer.html(citationCtt),downloadContainer.html(downloadCtt),e.find(".modal-title strong").html(t),e.modal("show")}}),$("#apply_filters_button").on("click",function(e){var a=$("#form_clusters"),i=a.attr("action"),o=a.serialize();return get_result_total(i,o,function(e){if(0==e){$("#ResultArea").hide(),$("#NoResults").removeClass("hide"),$("#TotalHits").html("0"),$("html,body").animate({scrollTop:0},700),send_query_to_history(i,o);var t=parseInt($(".searchHistoryItem").data("history"));$(".searchHistoryItem").data("history",t+1),$(".searchHistoryItem").html("#"+(t+1))}else manipulate_bookmark("c"),a.submit()}),!1}),$("input.onlyNumbers").on("keydown",function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110])||65==e.keyCode&&!0===e.ctrlKey||86==e.keyCode&&!0===e.ctrlKey||82==e.keyCode&&!0===e.ctrlKey||35<=e.keyCode&&e.keyCode<=39||!e.shiftKey&&48<=e.keyCode&&e.keyCode<=57||e.preventDefault()}).on("blur",function(){var e=$(this).val();e=e.replace(/[A-Za-z$-.\/\\\[\]=_@!#^<>;"]/g,""),$(this).val(e)}),$(".showContextHelper").on("focus.showContextHelper blur.showContextHelper",function(e){var t=$(this),a=$(t.data("helper")),i="contextHelper_focus",o=!1;if(0<a.length)if("focus"==e.type){if(a.hasClass(i))return!1;a.addClass(i)}else{if("blur"==e.type&&$(".clearIptText").is(":visible"))o=!0;o||setTimeout(function(){a.removeClass(i)},500),$(".clearIptText").on("click",function(e){$(".showContextHelper").focus()})}}),$("#BuscaAjuda").on("hidden.bs.modal",function(){$(".showContextHelper:eq(0)").focus()}),$(window).scroll(function(){$(window).scrollTop()>window.searchActionsStart?$(".searchActions").addClass("fixed"):$(".searchActions").removeClass("fixed"),$(window).scrollTop()>a?$("#btn-affix").addClass("fixed"):$("#btn-affix").removeClass("fixed")})},ShowCloseSelectedItemsBarMobile:function(e){Portal.IsMobile&&(0<e?$(".topbar-mobile").slideDown("fast"):$(".topbar-mobile").slideUp())},InsertSearchHistoryItem:function(e){var t=$(e).data("item"),a=$(e).parent().parent().find(".colSearch").text(),i=Portal.IsMobile?$("#iptQueryMobile"):$("#iptQuery");shItem='&#160;<div class="searchHistoryItem" contenteditable="false"  data-toggle="tooltip" data-placement="top" title="'+a+'">#'+t+"</div> AND&#160;",i.append(shItem).focus(),i.find(".searchHistoryItem").tooltip(),$(e).effect("transfer",{to:i.find(".searchHistoryItem:last-child")},1e3),searchFormBuilder.PlaceCaretToEnd(document.getElementById("iptQuery"))},InsertNewFieldRow:function(e,t,a){e=$(e),t=$(t).clone(),a=$(a);var i=e.data("count");t.attr("id","searchRow-"+i),t.find(".eraseSearchField").data("rel",i),t.find(".eraseSearchField").on("click",function(e){e.preventDefault(),searchFormBuilder.EraseFieldRow(this)}),""!=searchFormBuilder.SearchHistory&&t.find("input[name='q[]']").on("focus",function(){searchFormBuilder.SearchHistoryFocusIn(this)}).on("blur",function(){searchFormBuilder.SearchHistoryFocusOut(this)}),t.appendTo(a).slideDown("fast"),t.find("textarea.form-control:visible").on("keyup",searchFormBuilder.TextareaAutoHeight).trigger("keyup"),t.find("a.clearIptText").on("click",searchFormBuilder.ClearPrevInput),t.find(".showTooltip").tooltip(),i=parseInt(i),i++,e.data("count",i)},TextareaAutoHeight:function(){$(this).css("height","auto"),$(this).height(this.scrollHeight),""!=this.value?$(this).next("a").fadeIn("fast"):$(this).next("a").fadeOut("fast")},ClearPrevInput:function(){$(this).prev("input,textarea").val("").trigger("keyup")},EraseFieldRow:function(e){var t=(e=$(e)).data("rel");$("#searchRow-"+t).slideUp("fast",function(){$(this).remove()})},CountCheckedResults:function(e,t){window.manipulate_bookmark("count")},SearchHistoryFocusIn:function(e){if(""!=searchFormBuilder.SearchHistory){var t=$(e).offset();$("#searchHistory").data("rel",e).css({top:t.top+50+"px",left:t.left+"px"}).slideDown("fast")}},SearchHistoryFocusOut:function(e){""!=searchFormBuilder.SearchHistory&&setTimeout(function(){$("#searchHistory").slideUp("fast")},100)},SearchHistoryClick:function(e,t){e=(e=$(e).text()).substr(e.indexOf(": ")+2,e.length),$(t).val(e).focus()},PlaceCaretToEnd:function(e){if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var a=window.getSelection();a.removeAllRanges(),a.addRange(t)}else if(void 0!==document.body.createTextRange){var i=document.body.createTextRange();i.moveToElementText(e),i.collapse(!1),i.select()}},LanguageFilterInit:function(){$("input[id^='la_']").each(function(){$(this).is(":checked")&&searchFormBuilder.LanguageFilterCheckedBuffer.push($(this).attr("id"))}),$("input[id^='la_']").change(function(e){e.preventDefault(),$(this).is(":checked")&&$.when(get_languages_checked()).done(function(e){1<e.length&&$("#openSelectItens_la").click()})}),$("#selectClusterItens").on("hidden.bs.modal",function(){0<$("#mainLanguageSelect").length&&$.when($("input[id^='la_']").prop("checked",!1)).done(function(){for(var e=0;e<searchFormBuilder.LanguageFilterCheckedBuffer.length;e++){var t="#"+searchFormBuilder.LanguageFilterCheckedBuffer[e];$(t).prop("checked",!0)}})})},FilterModalConfig:function(e){"la"==e||"subject_area"==e?($(".filterHead").addClass("hidden"),$(".filterBody").addClass("filterBodyNoOverflow")):($(".filterHead").removeClass("hidden"),$(".filterBody").removeClass("filterBodyNoOverflow"))},FilterModalContentConfig:function(e){if("la"==e){var t=get_language_filter_translations();$("#mainLanguageTitle").text(t.mainLanguageTitle),$("#mainLanguageSelect").attr("placeholder",t.mainLanguageSelectPlaceholder),$("#addSecondLanguageRow").text(t.addSecondLanguageRowText),$.when(get_languages_checked()).done(function(e){0<e.length?add_languages_checked(e):($("#mainLanguageSelect").selectize()[0].selectize.setValue(null),$("#secondaryLanguageCtt").html(null))})}else if("subject_area"==e){t=get_subject_area_filter_translations();$("#mainThematicTitle").text(t.mainThematicTitle),$("#mainSubjectAreaSelect").attr("placeholder",t.mainSubjectAreaSelectPlaceholder),$("#addSecondSubjectAreaRow").text(t.addSecondSubjectAreaRowText),$.when(get_subject_areas_checked()).done(function(e){0<e.length?add_subject_areas_checked(e):($("#mainSubjectAreaSelect").selectize()[0].selectize.setValue(null),$("#secondarySubjectAreaCtt").html(null))})}},FilterModalEnableDisableButtons:function(){var e=!1;$(".selectize-input").each(function(){if(""!==$(this).val())return!(e=!0)}),e?($(".openStatistics").removeClass("singleBtn_disabled").tooltip("disable"),$(".exportCSV").removeClass("singleBtn_disabled").tooltip("disable")):($(".openStatistics").addClass("singleBtn_disabled").tooltip("enable"),$(".exportCSV").addClass("singleBtn_disabled").tooltip("enable"))},SubjectAreaFilterInit:function(){$("input[id^='subject_area_']").each(function(){$(this).is(":checked")&&searchFormBuilder.SubjectAreasFilterCheckedBuffer.push($(this).attr("id"))}),$("input[id^='subject_area_']").change(function(e){e.preventDefault(),$(this).is(":checked")&&$.when(get_subject_areas_checked()).done(function(e){1<e.length&&$("#openSelectItens_subject_area").click()})}),$("#selectClusterItens").on("hidden.bs.modal",function(){0<$("#mainSubjectAreaSelect").length&&$.when($("input[id^='subject_area_']").prop("checked",!1)).done(function(){for(var e=0;e<searchFormBuilder.SubjectAreasFilterCheckedBuffer.length;e++){var t="#"+searchFormBuilder.SubjectAreasFilterCheckedBuffer[e];$(t).prop("checked",!0)}})})}},Article={TopBinder:[],Init:function(){for(var e=$("#articleText"),t=e.offset(),a=$(".articleMenu").width(),i=$(".paragraph",e),o=0,n=i.length;o<n;o++){var l=$("p",i[o]).outerHeight(),r=$(".refList",i[o]);l<r.outerHeight()&&r.addClass("outer").css("height",l)}$("sup",i).on("mouseenter mouseleave",function(e){var t=this.className;t=t.replace("xref ","");var a=$("li."+t),i=a.parent("ul");0<=t.indexOf(" ")&&(t="li."+(t=t.split(" ")).join(",li."),i=(a=$(t)).parent("ul")),"mouseenter"===e.type?(i.addClass("full"),a.addClass("highlight").find(".opened").fadeIn("fast")):(i.removeClass("full"),a.removeClass("highlight").find(".opened").hide())}),$(".refList li",i).on("mouseenter mouseleave",function(e){var t=$(this).parent("ul");"mouseenter"===e.type?(t.addClass("full"),$(this).addClass("highlight").find(".opened").fadeIn("fast")):(t.removeClass("full"),$(this).removeClass("highlight").find(".opened").hide())}),$(".thumb").on("mouseenter mouseleave click",function(e){var t=$(this).parent().parent().find(".preview");"mouseenter"==e.type?t.fadeIn("fast"):"mouseleave"==e.type?t.fadeOut("fast"):"click"==e.type&&window.open(t.find("img").attr("src"))}),$(".collapseTitle").on("click",function(){var e=$(this).next(),t=$(this).find(".collapseIcon");e.is(":visible")?(e.slideUp("fast"),t.removeClass("opened")):(e.slideDown("fast"),t.addClass("opened"))}),$(".expandReduceText").on("click",function(e){e.preventDefault();var t=$("#articleText .ref"),a=$("#articleText .text"),i=$(this).data("expandreducetext"),o=$(this).data("defaultwidth");void 0===o&&$(this).data("defaultwidth",a.outerWidth()),1==i?(t.hide(),a.outerWidth("100%"),$(this).data("expandreducetext",!1)):(a.width(o),t.hide(),$(this).data("expandreducetext",!0));var n=$(window).scrollTop();setTimeout(function(){Article.ArticleStructureBuilder(),Article.ArticleStructureSelect(n)},100)}),$(".articleTxt sup.xref:not(.big)").on("click",function(){var e=$(this).text(),t=$(".ref-list");-1==e.indexOf(",")||(e=(e=e.split(","))[0]),parseInt(e),e--;var a=$("li:eq("+e+")",t).offset();$("html,body").animate({scrollTop:a.top-60},500)}),t.top=t.top-25,$(window).scroll(function(){var e=$(window).scrollTop();e>t.top?$(".articleMenu").addClass("fixed").width(a):$(".articleMenu").removeClass("fixed"),Article.ArticleStructureSelect(e)});var s=$(".downloadOptions li.group"),c=100/s.length;s.css("width",c+"%"),Article.ArticleStructureBuilder()},ArticleStructureBuilder:function(){var e=$(".articleMenu"),t=$("#articleText .articleSection"),o=0,n="";Article.TopBinder=[],t.each(function(){var e=$(this).data("anchor"),t=$(this).find("h1"),a=$(this).offset();if(0==o?Article.TopBinder.push(0):Article.TopBinder.push(a.top),void 0===e)return!0;if(n+="<li "+(0==o?'class="selected"':"")+">",n+='\t<a href="#articleSection'+o+'">'+e+"</a>",1<t.length){var i=0;n+="<ul>",t.each(function(){var e=$(this).offset();Article.TopBinder.push(e.top),n+="<li>",n+='\t<a href="#as'+o+"-heading"+i+'">'+$(this).text()+"</a>",n+="</li>",i++}),n+="</ul>"}n+="</li>",o++}),e.html(n),$("a",e).on("click",function(e){e.preventDefault();var t=$(this).attr("href");t=t.replace("#","");var a=$("a[name="+t+"]").offset();$("html,body").animate({scrollTop:a.top-60},500)})},ArticleStructureSelect:function(e){for(var t=$(".articleMenu"),a=0,i=Article.TopBinder.length;a<i;a++)if(e<=Article.TopBinder[a]-100){t.find("li").removeClass("selected"),t.find("li:eq("+(a-1)+")").addClass("selected");break}}},Validator={MultipleEmails:function(e,t){t=t||";";for(var a=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=!0,o=e.split(t),n=0;n<o.length;n++)o[n]=o[n].trim(),""!=o[n]&&0!=a.test(o[n])||(i=!1);return i}},Cookie={Get:function(e,t){return void 0===t?t="":t+="/",e=t+e,0<document.cookie.length&&(c_start=document.cookie.indexOf(e+"="),-1!=c_start)?(c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""},Set:function(e,t,a,i){var o;if(void 0!==a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3),o="; expires="+n.toGMTString()}else o="";void 0===i?i="":i+="/",""!=Cookie.Get(e)&&(document.cookie=i+e+"="+t+"expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"),document.cookie=i+e+"="+t+o+"; path=/"}};function get_language_filter_translations(){var e={mainLanguageTitle:"IDIOMAS SELECIONADOS",mainLanguageSelectPlaceholder:"Selecione o idioma",addSecondLanguageRowText:"Adicionar outro idioma +"};switch($(document.language.lang).val()){case"en":e.mainLanguageTitle="SELECTED LANGUAGES",e.mainLanguageSelectPlaceholder="Select the language",e.addSecondLanguageRowText="Add another language +";break;case"es":e.mainLanguageTitle="IDIOMAS SELECCIONADAS",e.mainLanguageSelectPlaceholder="Seleccione el idioma",e.addSecondLanguageRowText="Añadir otro idioma +"}return e}function add_second_language_row(e,a){var t=(new Date).getTime(),i=Math.floor(t*Math.random()),o="secondLanguageRow"+i,n="secondaryLanguageSelect"+i,l=$('input[name="filter_boolean_operator[la][]"]'),r="filter_boolean_operator"+i,s="";a--,l.each(function(e,t){if(e===a)return s=$(t).val(),!1});var c=$("#mainLanguageSelect"),d=c.attr("name"),u=Object.values(c.selectize()[0].selectize.options),h="";for(a=0;a<u.length;a++)h+='<option value="'+u[a].value+'">'+u[a].text+"</option>";var p='<div class="row row-margin" id="'+o+'" style="display:none;">\t\t\t\t\t<div class="col-md-1 col-sm-1">\t\t\t\t\t\t<button type="button" class="btn btn-default" onclick="javascript:remove_second_language_row('+i+');" data-uniq="'+i+'">\t\t\t\t\t\t\t<i class="glyphicon glyphicon-remove"></i>\t\t\t\t\t\t</button>\t\t\t\t\t</div>\t\t\t\t\t<div class="col-md-5 col-sm-5">\t\t\t\t\t\t<select name="filter_boolean_operator[la][]" id="'+r+'" class="form-control">\t\t\t\t\t\t\t<option value="OR">OR</option>\t\t\t\t\t\t\t<option value="AND">AND</option>\t\t\t\t\t\t</select>\t\t\t\t\t</div>\t\t\t\t\t<div class="col-md-6 col-sm-6">\t\t\t\t\t\t<select name="'+d+'" id="'+n+'" placeholder="'+get_language_filter_translations().mainLanguageSelectPlaceholder+'" class="selectize-input">\t\t\t\t\t\t'+h+"\t\t\t\t\t\t</select>\t\t\t\t\t</div>\t\t\t\t</div>";$("#secondaryLanguageCtt").append(p),$("#"+n).selectize({items:[e]}),""!==s&&$("#"+r).val(s),$("#"+o).fadeIn("fast")}function remove_second_language_row(e){$("#secondLanguageRow"+e).fadeOut("fast",function(){$(this).remove()})}function get_languages_checked(){var a=[];return $("input[id^='la_']").each(function(){var e=$(this),t=e.val();e.is(":checked")&&a.push(t)}),a}function add_languages_checked(e){$("#mainLanguageSelect").selectize()[0].selectize.setValue(e[0]),$("#secondaryLanguageCtt").html(null);for(var t=1;t<e.length;t++)add_second_language_row(e[t],t)}function get_subject_area_filter_translations(){var e={mainThematicTitle:"ÁREAS SELECIONADAS",mainSubjectAreaSelectPlaceholder:"Selecione a área temática",addSecondSubjectAreaRowText:"Adicionar outra área temática +"};switch($(document.language.lang).val()){case"en":e.mainThematicTitle="SELECTED AREAS",e.mainSubjectAreaSelectPlaceholder="Select the subject area",e.addSecondSubjectAreaRowText="Add another subject area +";break;case"es":e.mainThematicTitle="ÁREAS SELECCIONADAS",e.mainSubjectAreaSelectPlaceholder="Seleccione el área temática",e.addSecondSubjectAreaRowText="Añadir nueva área temática +"}return e}function add_second_subject_area_row(e,a){var t=(new Date).getTime(),i=Math.floor(t*Math.random()),o="secondSubjectAreaRow"+i,n="secondarySubjectAreaSelect"+i,l=$('input[name="filter_boolean_operator[subject_area][]"]'),r="filter_boolean_operator"+i,s="";a--,l.each(function(e,t){if(e===a)return s=$(t).val(),!1});var c=$("#mainSubjectAreaSelect"),d=c.attr("name"),u=Object.values(c.selectize()[0].selectize.options),h="",p=get_subject_area_filter_translations();for(a=0;a<u.length;a++)h+='<option value="'+u[a].value+'">'+u[a].text+"</option>";var f='<div class="row row-margin" id="'+o+'" style="display:none;">\t\t\t\t\t<div class="col-md-1 col-sm-1">\t\t\t\t\t\t<button type="button" class="btn btn-default" onclick="javascript:remove_second_subject_area_row('+i+');" data-uniq="'+i+'">\t\t\t\t\t\t\t<i class="glyphicon glyphicon-remove"></i>\t\t\t\t\t\t</button>\t\t\t\t\t</div>\t\t\t\t\t<div class="col-md-5 col-sm-5">\t\t\t\t\t\t<select name="filter_boolean_operator[subject_area][]" id="'+r+'" class="form-control">\t\t\t\t\t\t\t<option value="OR">OR</option>\t\t\t\t\t\t\t<option value="AND">AND</option>\t\t\t\t\t\t</select>\t\t\t\t\t</div>\t\t\t\t\t<div class="col-md-6 col-sm-6">\t\t\t\t\t\t<select name="'+d+'" id="'+n+'" placeholder="'+p.mainSubjectAreaSelectPlaceholder+'" class="selectize-input">\t\t\t\t\t\t'+h+"\t\t\t\t\t</select>\t\t\t\t\t</div>\t\t\t\t</div>";$("#secondarySubjectAreaCtt").append(f),$("#"+n).selectize({items:[e]}),""!==s&&$("#"+r).val(s),$("#"+o).fadeIn("fast")}function remove_second_subject_area_row(e){$("#secondSubjectAreaRow"+e).fadeOut("fast",function(){$(this).remove()})}function get_subject_areas_checked(){var a=[];return $("input[id^='subject_area_']").each(function(){var e=$(this),t=e.val();e.is(":checked")&&a.push(t)}),a}function add_subject_areas_checked(e){$("#mainSubjectAreaSelect").selectize()[0].selectize.setValue(e[0]),$("#secondarySubjectAreaCtt").html(null);for(var t=1;t<e.length;t++)add_second_subject_area_row(e[t],t)}function get_result_total(e,t,a){$.ajax({type:"GET",data:t+"&output=metasearch",url:e,success:function(e){total=$(e).find("total").text(),total=parseInt(total),a(total)}})}function send_query_to_history(e,t){$.ajax({type:"GET",data:t,url:e})}$(function(){Portal.Init(),$(document).on("shown.bs.dropdown",".dropdown",function(){var e=$(this).children(".dropdown-menu"),t=$(this).children(".dropdown-toggle"),a=e.offset(),i=a.top-t.height()-e.height()-$(window).scrollTop(),o=$(window).scrollTop()+$(window).height()-(a.top+e.height());o<0&&(0<=i||o<i)&&$(this).addClass("dropup")}).on("hidden.bs.dropdown",".dropdown",function(){$(this).removeClass("dropup")}),$("form.searchFormBuilder").length&&searchFormBuilder.Init(),$("#articleText").length&&Article.Init(),$(".goto_page").keyup(function(e){13==e.keyCode&&(new_page=$(this).val(),go_to_page(new_page))}),$(".exportCSV").on("click",function(e){e.preventDefault();var t=$(this),a=t.data("cluster"),o=t.data("chartsource"),n=$(o).find("li"),l=/<span>\d+<\/span>/i,r=[],s=!1;for(i=0;i<n.length;i++)clusterSelection=n[i].getElementsByTagName("input")[0],clusterSelection.checked&&(cluster=n[i].innerHTML,clusterLabel=n[i].getElementsByTagName("label")[0].innerHTML,clusterLabel=clusterLabel.replace(/^\s+|\s+$/g,""),ma=l.exec(cluster),null!=ma&&(clusterTotal=ma[0].replace(/(<([^>]+)>)/g,""),r[clusterLabel]=clusterTotal,s=!0));if(s){var c=SEARCH_URL+"chartjs/?type=export-csv&title="+a;isOldIE&&(c=encodeURI(c));var d=document.createElement("form");for(key in d.setAttribute("method","POST"),d.setAttribute("action",c),d.setAttribute("target","_blank"),r){var u=document.createElement("input"),h=document.createElement("input");u.type="hidden",u.name="l[]",u.value=key,d.appendChild(u),h.type="hidden",h.name="d[]",h.value=r[key],d.appendChild(h)}document.body.appendChild(d),d.submit()}else $("#no_cluster_selected").slideDown("fast")}),$(".openStatistics").on("click",function(e){e.preventDefault();var t=$(this),a=t.data("cluster"),o=t.data("type"),n=t.data("chartsource"),l=$(n).find("li"),r=!1;for(i=0;i<l.length;i++)if(clusterSelection=l[i].getElementsByTagName("input")[0],clusterSelection.checked){r=!0;break}0!=r?$("#Statistics").data({title:a,charttype:o,chartsource:n}).modal({show:!0}):$("#no_cluster_selected").slideDown("fast")}),$("#Statistics").on("shown.bs.modal",function(){var e=/<span>\d+<\/span>/i,t="",a=$(this),o=$(".chartBlock",this),n=a.data("title"),l=a.data("charttype"),r=a.data("chartsource"),s=$(r).find("li");for(i=0;i<s.length;i++)clusterSelection=s[i].getElementsByTagName("input")[0],clusterSelection.checked&&(cluster=s[i].innerHTML,clusterLabel=s[i].getElementsByTagName("label")[0].innerHTML,clusterLabel=clusterLabel.replace(/^\s+|\s+$/g,""),ma=e.exec(cluster),null!=ma&&(clusterTotal=ma[0].replace(/(<([^>]+)>)/g,""),t+="&l[]="+clusterLabel+"&d[]="+clusterTotal));var c="chartjs/?type="+l+"&title="+n,d="chartjs/?type=export-csv&title="+n+t;c=encodeURI(c),isOldIE&&(d=encodeURI(d)),a.find(".modal-title .cluster").text(n),o.html('<canvas id="chart" width="950" height="400"></canvas>');var u=$("#chart").get(0);isOldIE&&(u=G_vmlCanvasManager.initElement(u));var h=u.getContext("2d");h.clearRect(0,0,550,400),$.ajax({type:"POST",url:c,data:t,dataType:"json",beforeSend:function(){o.addClass("loading")}}).done(function(e){switch(o.removeClass("loading"),l){case"doughnut":window.graph=new Chart(h).Doughnut(e,{scaleGridLineWidth:1});break;case"bar":window.graph=new Chart(h).Bar(e,{scaleGridLineWidth:1});break;case"line":window.graph=new Chart(h).Line(e,{scaleGridLineWidth:1});break;case"pie":default:window.graph=new Chart(h).Pie(e,{scaleGridLineWidth:1})}})}).on("hidden.bs.modal",function(){window.graph.clear().destroy(),$(".chartBlock canvas",this).remove()}),$(".openExport, .sendViaMail").on("click",function(e){selection_count=$(".my_selection_count").html(),total=parseInt(selection_count),0<total?($("#export_selection_user_selection").prop("checked",!0),$("#sendViaEmail_selection_my_selection").prop("checked",!0)):($("#export_selection_current_page").prop("checked",!0),$("#sendViaEmail_selection_page").prop("checked",!0))}),$(".openJournalInfo").on("click",function(e){e.preventDefault();var t=$(this),a=t.data("issn"),i=t.data("publisher"),o=t.data("collection"),n=t.html();$("#JournalInfo").modal("show"),modal_body=$("#JournalInfo .modal-body"),modal_footer=$("#JournalInfo .modal-footer"),modal_body.html("<h2>"+n+"</h2>"),modal_body.append("<p>"+i+"</p>"),""!=a&&modal_body.append("<strong>ISSN:</strong> "+a+"<br/>"),$.ajax({type:"get",url:"http://analytics.scielo.org/ajx/bibliometrics/journal/google_h5m5_chart?",data:"journal="+a+"&collection="+o,dataType:"jsonp",success:function(e){h5_serie=e.options.series[0].data,h5_last=h5_serie[h5_serie.length-1],m5_serie=e.options.series[1].data,m5_last=m5_serie[h5_serie.length-1],year_list=e.options.xAxis.categories,last_year=year_list[year_list.length-1],modal_body.append("<strong>Google Scholar</strong><br/>"),modal_body.append("<strong>"+last_year+"</strong><br/>"),modal_body.append('<strong>índice h5:</strong> <a href="'+h5_last.ownURL+'" target="_blank">'+h5_last.y+"</a><br/>"),modal_body.append('<strong>mediana h5:</strong> <a href="'+m5_last.ownURL+'" target="_blank">'+m5_last.y+"</a><br/>")}}),$("#journal_info_more_link").attr("href","http://analytics.scielo.org/?journal="+a+"&collection="+o)})});
//# sourceMappingURL=main.js.map
