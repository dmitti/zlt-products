var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
$jscomp.arrayFromIterator=function(a){for(var b,d=[];!(b=a.next()).done;)d.push(b.value);return d};$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".select").forEach(function(b){return new MySelect(b)});document.querySelectorAll(".filter-group").forEach(function(b){b.querySelector(".filter-group__header").onclick=function(){return b.classList.toggle("expanded")}});var a=document.querySelector(".filter__filters");filters.price(document.getElementById("price-filter"),function(b,d,e){e&&(e=a.querySelector('[data-type="'+b+'"]'))&&e.remove();a.insertAdjacentHTML("beforeEnd",
'\n      <div class="filter__filters-item" data-type="'+b+'">\n        <span>'+d+'</span>\n        <i class="close"></i>\n      </div>\n    ');return a.lastElementChild},function(b){(b=a.querySelector('[data-type="'+b+'"]'))&&b.remove()});a.addEventListener("click",function(b){b=b.target;b.classList.contains("close")&&b.parentElement.remove()});document.querySelector(".filter__clear").onclick=function(){return a.querySelectorAll(".close").forEach(function(b){return b.click()})}});
document.addEventListener("click",function(a){return"A"===a.target.tagName&&!a.target.href&&a.preventDefault()});
var filters={price:function(a,b,d){function e(c){a.querySelectorAll('[type="text"]').forEach(function(f){return f.value=""});b("price","\u0426\u0435\u043d\u0430: "+c.replace(/,/g,""),!0).onclick=g}var g=function(){return a.querySelectorAll('[name="price"]').forEach(function(c){return c.checked=!1})};a.querySelectorAll('[name="price"]').forEach(function(c){c.onclick=function(){return e(c.previousSibling.textContent)}});a.querySelector('[data-role="add"]').onclick=function(){var c=[].concat($jscomp.arrayFromIterable(a.querySelectorAll('[type="text"]'))).map(function(f){return f.value+
" RUB"}).join(" - ");g();e(c)};a.querySelector('[name="discount"]').onclick=function(){var c=this;if(!this.checked)return d(this.name);b(this.name,"\u041f\u0440\u043e\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439").onclick=function(){return c.checked=!1}}}};window.onscroll=function(){return document.body.classList[pageYOffset?"add":"remove"]("scroll")};
