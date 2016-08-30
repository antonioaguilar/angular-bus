/**
 * @license
 * lodash (Custom Build) /license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="bind,extend,isEqual,after,some,debounce,throttle,map,each,filter,keys,every,identity"`
 */
;(function(){function t(t,r){return t.set(r[0],r[1]),t}function r(t,r){return t.add(r),t}function n(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function e(t,r){for(var n=-1,e=t?t.length:0;++n<e&&r(t[n],n,t)!==false;);return t}function u(t,r){for(var n=-1,e=t?t.length:0;++n<e;)if(!r(t[n],n,t))return false;return true}function o(t,r){for(var n=-1,e=t?t.length:0,u=0,o=[];++n<e;){var i=t[n];
r(i,n,t)&&(o[u++]=i)}return o}function i(t,r){var n=t?t.length:0;return!!n&&h(t,r,0)>-1}function a(t,r){for(var n=-1,e=t?t.length:0,u=Array(e);++n<e;)u[n]=r(t[n],n,t);return u}function c(t,r){for(var n=-1,e=r.length,u=t.length;++n<e;)t[u+n]=r[n];return t}function f(t,r,n,e){var u=-1,o=t?t.length:0;for(e&&o&&(n=t[++u]);++u<o;)n=r(n,t[u],u,t);return n}function l(t,r){for(var n=-1,e=t?t.length:0;++n<e;)if(r(t[n],n,t))return true;return false}function s(t,r,n,e){for(var u=t.length,o=n+(e?1:-1);e?o--:++o<u;)if(r(t[o],o,t))return o;
return-1}function h(t,r,n){if(r!==r)return s(t,p,n);for(var e=n-1,u=t.length;++e<u;)if(t[e]===r)return e;return-1}function p(t){return t!==t}function v(t){return function(r){return null==r?ln:r[t]}}function y(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}function _(t){return function(r){return t(r)}}function g(t,r){for(var n=t.length,e=0;n--;)t[n]===r&&e++;return e}function b(t,r){return null==t?ln:t[r]}function d(t){var r=false;if(null!=t&&typeof t.toString!="function")try{r=!!(t+"")}catch(t){}
return r}function w(t){var r=-1,n=Array(t.size);return t.forEach(function(t,e){n[++r]=[e,t]}),n}function j(t,r){return function(n){return t(r(n))}}function m(t,r){for(var n=-1,e=t.length,u=0,o=[];++n<e;){var i=t[n];i!==r&&i!==yn||(t[n]=yn,o[u++]=n)}return o}function O(t){var r=-1,n=Array(t.size);return t.forEach(function(t){n[++r]=t}),n}function A(){}function x(){}function k(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Pn,this.__views__=[];
}function E(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function S(){this.__data__=fu?fu(null):{}}function T(t){return this.has(t)&&delete this.__data__[t]}function $(t){var r=this.__data__;if(fu){var n=r[t];return n===vn?ln:n}return De.call(r,t)?r[t]:ln}function I(t){var r=this.__data__;return fu?r[t]!==ln:De.call(r,t)}function L(t,r){var n=this.__data__;return n[t]=fu&&r===ln?vn:r,this}function F(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];
this.set(e[0],e[1])}}function P(){this.__data__=[]}function B(t){var r=this.__data__,n=nt(r,t);if(n<0)return false;var e=r.length-1;return n==e?r.pop():Ye.call(r,n,1),true}function M(t){var r=this.__data__,n=nt(r,t);return n<0?ln:r[n][1]}function R(t){return nt(this.__data__,t)>-1}function z(t,r){var n=this.__data__,e=nt(n,t);return e<0?n.push([t,r]):n[e][1]=r,this}function C(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function N(){this.__data__={hash:new E,map:new(ou||F),
string:new E}}function U(t){return or(this,t).delete(t)}function W(t){return or(this,t).get(t)}function D(t){return or(this,t).has(t)}function V(t,r){return or(this,t).set(t,r),this}function q(t){var r=-1,n=t?t.length:0;for(this.__data__=new C;++r<n;)this.add(t[r])}function G(t){return this.__data__.set(t,vn),this}function K(t){return this.__data__.has(t)}function H(t){this.__data__=new F(t)}function J(){this.__data__=new F}function Q(t){return this.__data__.delete(t)}function X(t){return this.__data__.get(t);
}function Y(t){return this.__data__.has(t)}function Z(t,r){var n=this.__data__;if(n instanceof F){var e=n.__data__;if(!ou||e.length<hn-1)return e.push([t,r]),this;n=this.__data__=new C(e)}return n.set(t,r),this}function tt(t,r){var n=Lu(t)||Cr(t)?y(t.length,String):[],e=n.length,u=!!e;for(var o in t)!r&&!De.call(t,o)||u&&("length"==o||vr(o,e))||n.push(o);return n}function rt(t,r,n){var e=t[r];De.call(t,r)&&zr(e,n)&&(n!==ln||r in t)||(t[r]=n)}function nt(t,r){for(var n=t.length;n--;)if(zr(t[n][0],r))return n;
return-1}function et(t,r){return t&&Nt(r,tn(r),t)}function ut(t,r,n,u,o,i,a){var c;if(u&&(c=i?u(t,o,i,a):u(t)),c!==ln)return c;if(!qr(t))return t;var f=Lu(t);if(f){if(c=lr(t),!r)return Ct(t,c)}else{var l=ku(t),s=l==Un||l==Wn;if(Fu(t))return Tt(t,r);if(l==qn||l==Mn||s&&!i){if(d(t))return i?t:{};if(c=sr(s?{}:t),!r)return Ut(t,et(c,t))}else{if(!ke[l])return i?t:{};c=hr(t,l,ut,r)}}a||(a=new H);var h=a.get(t);if(h)return h;if(a.set(t,c),!f)var p=n?rr(t):tn(t);return e(p||t,function(e,o){p&&(o=e,e=t[o]),
rt(c,o,ut(e,r,n,u,o,t,a))}),c}function ot(t){return qr(t)?Qe(t):{}}function it(t,r){var n=true;return ju(t,function(t,e,u){return n=!!r(t,e,u)}),n}function at(t,r){var n=[];return ju(t,function(t,e,u){r(t,e,u)&&n.push(t)}),n}function ct(t,r){return t&&mu(t,r,tn)}function ft(t,r){r=_r(r,t)?[r]:St(r);for(var n=0,e=r.length;null!=t&&n<e;)t=t[kr(r[n++])];return n&&n==e?t:ln}function lt(t,r,n){var e=r(t);return Lu(t)?e:c(e,n(t))}function st(t){return Ve.call(t)}function ht(t,r){return null!=t&&r in Object(t);
}function pt(t,r,n,e,u){return t===r||(null==t||null==r||!qr(t)&&!Gr(r)?t!==t&&r!==r:vt(t,r,pt,n,e,u))}function vt(t,r,n,e,u,o){var i=Lu(t),a=Lu(r),c=Rn,f=Rn;i||(c=ku(t),c=c==Mn?qn:c),a||(f=ku(r),f=f==Mn?qn:f);var l=c==qn&&!d(t),s=f==qn&&!d(r),h=c==f;if(h&&!l)return o||(o=new H),i||Pu(t)?Yt(t,r,n,e,u,o):Zt(t,r,c,n,e,u,o);if(!(u&En)){var p=l&&De.call(t,"__wrapped__"),v=s&&De.call(r,"__wrapped__");if(p||v){var y=p?t.value():t,_=v?r.value():r;return o||(o=new H),n(y,_,e,u,o)}}return!!h&&(o||(o=new H),
tr(t,r,n,e,u,o))}function yt(t,r,n,e){var u=n.length,o=u,i=!e;if(null==t)return!o;for(t=Object(t);u--;){var a=n[u];if(i&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return false}for(;++u<o;){a=n[u];var c=a[0],f=t[c],l=a[1];if(i&&a[2]){if(f===ln&&!(c in t))return false}else{var s=new H;if(e)var h=e(f,l,c,t,r,s);if(!(h===ln?pt(l,f,e,kn|En,s):h))return false}}return true}function _t(t){if(!qr(t)||dr(t))return false;var r=Dr(t)||d(t)?qe:me;return r.test(Er(t))}function gt(t){return Gr(t)&&Vr(t.length)&&!!xe[Ve.call(t)]}function bt(t){
return typeof t=="function"?t:null==t?en:typeof t=="object"?Lu(t)?Ot(t[0],t[1]):mt(t):an(t)}function dt(t){if(!wr(t))return ru(t);var r=[];for(var n in Object(t))De.call(t,n)&&"constructor"!=n&&r.push(n);return r}function wt(t){if(!qr(t))return Ar(t);var r=wr(t),n=[];for(var e in t)("constructor"!=e||!r&&De.call(t,e))&&n.push(e);return n}function jt(t,r){var n=-1,e=Nr(t)?Array(t.length):[];return ju(t,function(t,u,o){e[++n]=r(t,u,o)}),e}function mt(t){var r=ir(t);return 1==r.length&&r[0][2]?mr(r[0][0],r[0][1]):function(n){
return n===t||yt(n,t,r)}}function Ot(t,r){return _r(t)&&jr(r)?mr(kr(t),r):function(n){var e=Yr(n,t);return e===ln&&e===r?Zr(n,t):pt(r,e,ln,kn|En)}}function At(t){return function(r){return ft(r,t)}}function xt(t,r){return r=nu(r===ln?t.length-1:r,0),function(){for(var e=arguments,u=-1,o=nu(e.length-r,0),i=Array(o);++u<o;)i[u]=e[r+u];u=-1;for(var a=Array(r+1);++u<r;)a[u]=e[u];return a[r]=i,n(t,this,a)}}function kt(t,r){var n;return ju(t,function(t,e,u){return n=r(t,e,u),!n}),!!n}function Et(t){if(typeof t=="string")return t;
if(Kr(t))return wu?wu.call(t):"";var r=t+"";return"0"==r&&1/t==-$n?"-0":r}function St(t){return Lu(t)?t:Tu(t)}function Tt(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}function $t(t){var r=new t.constructor(t.byteLength);return new He(r).set(new He(t)),r}function It(t,r){var n=r?$t(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Lt(r,n,e){var u=n?e(w(r),true):w(r);return f(u,t,new r.constructor)}function Ft(t){var r=new t.constructor(t.source,de.exec(t));
return r.lastIndex=t.lastIndex,r}function Pt(t,n,e){var u=n?e(O(t),true):O(t);return f(u,r,new t.constructor)}function Bt(t){return du?Object(du.call(t)):{}}function Mt(t,r){var n=r?$t(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Rt(t,r,n,e){for(var u=-1,o=t.length,i=n.length,a=-1,c=r.length,f=nu(o-i,0),l=Array(c+f),s=!e;++a<c;)l[a]=r[a];for(;++u<i;)(s||u<o)&&(l[n[u]]=t[u]);for(;f--;)l[a++]=t[u++];return l}function zt(t,r,n,e){for(var u=-1,o=t.length,i=-1,a=n.length,c=-1,f=r.length,l=nu(o-a,0),s=Array(l+f),h=!e;++u<l;)s[u]=t[u];
for(var p=u;++c<f;)s[p+c]=r[c];for(;++i<a;)(h||u<o)&&(s[p+n[i]]=t[u++]);return s}function Ct(t,r){var n=-1,e=t.length;for(r||(r=Array(e));++n<e;)r[n]=t[n];return r}function Nt(t,r,n,e){n||(n={});for(var u=-1,o=r.length;++u<o;){var i=r[u],a=e?e(n[i],t[i],i,n,t):ln;rt(n,i,a===ln?t[i]:a)}return n}function Ut(t,r){return Nt(t,xu(t),r)}function Wt(t){return xt(function(r,n){var e=-1,u=n.length,o=u>1?n[u-1]:ln,i=u>2?n[2]:ln;for(o=t.length>3&&typeof o=="function"?(u--,o):ln,i&&yr(n[0],n[1],i)&&(o=u<3?ln:o,
u=1),r=Object(r);++e<u;){var a=n[e];a&&t(r,a,e,o)}return r})}function Dt(t,r){return function(n,e){if(null==n)return n;if(!Nr(n))return t(n,e);for(var u=n.length,o=r?u:-1,i=Object(n);(r?o--:++o<u)&&e(i[o],o,i)!==false;);return n}}function Vt(t){return function(r,n,e){for(var u=-1,o=Object(r),i=e(r),a=i.length;a--;){var c=i[t?a:++u];if(n(o[c],c,o)===false)break}return r}}function qt(t,r,n){function e(){var r=this&&this!==$e&&this instanceof e?o:t;return r.apply(u?n:this,arguments)}var u=r&_n,o=Gt(t);return e;
}function Gt(t){return function(){var r=arguments;switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3]);case 5:return new t(r[0],r[1],r[2],r[3],r[4]);case 6:return new t(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new t(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var n=ot(t.prototype),e=t.apply(n,r);return qr(e)?e:n}}function Kt(t,r,e){function u(){for(var i=arguments.length,a=Array(i),c=i,f=er(u);c--;)a[c]=arguments[c];
var l=i<3&&a[0]!==f&&a[i-1]!==f?[]:m(a,f);if(i-=l.length,i<e)return Qt(t,r,Ht,u.placeholder,ln,a,l,ln,ln,e-i);var s=this&&this!==$e&&this instanceof u?o:t;return n(s,this,a)}var o=Gt(t);return u}function Ht(t,r,n,e,u,o,i,a,c,f){function l(){for(var b=arguments.length,d=Array(b),w=b;w--;)d[w]=arguments[w];if(v)var j=er(l),O=g(d,j);if(e&&(d=Rt(d,e,u,v)),o&&(d=zt(d,o,i,v)),b-=O,v&&b<f){var A=m(d,j);return Qt(t,r,Ht,l.placeholder,n,d,A,a,c,f-b)}var x=h?n:this,k=p?x[t]:t;return b=d.length,a?d=xr(d,a):y&&b>1&&d.reverse(),
s&&c<b&&(d.length=c),this&&this!==$e&&this instanceof l&&(k=_||Gt(k)),k.apply(x,d)}var s=r&On,h=r&_n,p=r&gn,v=r&(dn|wn),y=r&xn,_=p?ln:Gt(t);return l}function Jt(t,r,e,u){function o(){for(var r=-1,c=arguments.length,f=-1,l=u.length,s=Array(l+c),h=this&&this!==$e&&this instanceof o?a:t;++f<l;)s[f]=u[f];for(;c--;)s[f++]=arguments[++r];return n(h,i?e:this,s)}var i=r&_n,a=Gt(t);return o}function Qt(t,r,n,e,u,o,i,a,c,f){var l=r&dn,s=l?i:ln,h=l?ln:i,p=l?o:ln,v=l?ln:o;r|=l?jn:mn,r&=~(l?mn:jn),r&bn||(r&=~(_n|gn));
var y=[t,r,u,p,s,v,h,a,c,f],_=n.apply(ln,y);return br(t)&&Eu(_,y),_.placeholder=e,Su(_,t,r)}function Xt(t,r,n,e,u,o,i,a){var c=r&gn;if(!c&&typeof t!="function")throw new TypeError(pn);var f=e?e.length:0;if(f||(r&=~(jn|mn),e=u=ln),i=i===ln?i:nu(Jr(i),0),a=a===ln?a:Jr(a),f-=u?u.length:0,r&mn){var l=e,s=u;e=u=ln}var h=c?ln:Au(t),p=[t,r,n,e,u,l,s,o,i,a];if(h&&Or(p,h),t=p[0],r=p[1],n=p[2],e=p[3],u=p[4],a=p[9]=null==p[9]?c?0:t.length:nu(p[9]-f,0),!a&&r&(dn|wn)&&(r&=~(dn|wn)),r&&r!=_n)v=r==dn||r==wn?Kt(t,r,a):r!=jn&&r!=(_n|jn)||u.length?Ht.apply(ln,p):Jt(t,r,n,e);else var v=qt(t,r,n);
var y=h?Ou:Eu;return Su(y(v,p),t,r)}function Yt(t,r,n,e,u,o){var i=u&En,a=t.length,c=r.length;if(a!=c&&!(i&&c>a))return false;var f=o.get(t);if(f&&o.get(r))return f==r;var s=-1,h=true,p=u&kn?new q:ln;for(o.set(t,r),o.set(r,t);++s<a;){var v=t[s],y=r[s];if(e)var _=i?e(y,v,s,r,t,o):e(v,y,s,t,r,o);if(_!==ln){if(_)continue;h=false;break}if(p){if(!l(r,function(t,r){if(!p.has(r)&&(v===t||n(v,t,e,u,o)))return p.add(r)})){h=false;break}}else if(v!==y&&!n(v,y,e,u,o)){h=false;break}}return o.delete(t),o.delete(r),h}function Zt(t,r,n,e,u,o,i){
switch(n){case Zn:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return false;t=t.buffer,r=r.buffer;case Yn:return!(t.byteLength!=r.byteLength||!e(new He(t),new He(r)));case zn:case Cn:case Vn:return zr(+t,+r);case Nn:return t.name==r.name&&t.message==r.message;case Kn:case Jn:return t==r+"";case Dn:var a=w;case Hn:var c=o&En;if(a||(a=O),t.size!=r.size&&!c)return false;var f=i.get(t);if(f)return f==r;o|=kn,i.set(t,r);var l=Yt(a(t),a(r),e,u,o,i);return i.delete(t),l;case Qn:if(du)return du.call(t)==du.call(r);
}return false}function tr(t,r,n,e,u,o){var i=u&En,a=tn(t),c=a.length,f=tn(r),l=f.length;if(c!=l&&!i)return false;for(var s=c;s--;){var h=a[s];if(!(i?h in r:De.call(r,h)))return false}var p=o.get(t);if(p&&o.get(r))return p==r;var v=true;o.set(t,r),o.set(r,t);for(var y=i;++s<c;){h=a[s];var _=t[h],g=r[h];if(e)var b=i?e(g,_,h,r,t,o):e(_,g,h,t,r,o);if(!(b===ln?_===g||n(_,g,e,u,o):b)){v=false;break}y||(y="constructor"==h)}if(v&&!y){var d=t.constructor,w=r.constructor;d!=w&&"constructor"in t&&"constructor"in r&&!(typeof d=="function"&&d instanceof d&&typeof w=="function"&&w instanceof w)&&(v=false);
}return o.delete(t),o.delete(r),v}function rr(t){return lt(t,tn,xu)}function nr(t){for(var r=t.name+"",n=hu[r],e=De.call(hu,r)?n.length:0;e--;){var u=n[e],o=u.func;if(null==o||o==t)return u.name}return r}function er(t){var r=De.call(A,"placeholder")?A:t;return r.placeholder}function ur(){var t=A.iteratee||un;return t=t===un?bt:t,arguments.length?t(arguments[0],arguments[1]):t}function or(t,r){var n=t.__data__;return gr(r)?n[typeof r=="string"?"string":"hash"]:n.map}function ir(t){for(var r=tn(t),n=r.length;n--;){
var e=r[n],u=t[e];r[n]=[e,u,jr(u)]}return r}function ar(t,r){var n=b(t,r);return _t(n)?n:ln}function cr(t){var r=t.match(_e);return r?r[1].split(ge):[]}function fr(t,r,n){r=_r(r,t)?[r]:St(r);for(var e,u=-1,o=r.length;++u<o;){var i=kr(r[u]);if(!(e=null!=t&&n(t,i)))break;t=t[i]}if(e)return e;var o=t?t.length:0;return!!o&&Vr(o)&&vr(i,o)&&(Lu(t)||Cr(t))}function lr(t){var r=t.length,n=t.constructor(r);return r&&"string"==typeof t[0]&&De.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function sr(t){
return typeof t.constructor!="function"||wr(t)?{}:ot(Je(t))}function hr(t,r,n,e){var u=t.constructor;switch(r){case Yn:return $t(t);case zn:case Cn:return new u((+t));case Zn:return It(t,e);case te:case re:case ne:case ee:case ue:case oe:case ie:case ae:case ce:return Mt(t,e);case Dn:return Lt(t,e,n);case Vn:case Jn:return new u(t);case Kn:return Ft(t);case Hn:return Pt(t,e,n);case Qn:return Bt(t)}}function pr(t,r){var n=r.length,e=n-1;return r[e]=(n>1?"& ":"")+r[e],r=r.join(n>2?", ":" "),t.replace(ye,"{\n/* [wrapped with "+r+"] */\n");
}function vr(t,r){return r=null==r?In:r,!!r&&(typeof t=="number"||Ae.test(t))&&t>-1&&t%1==0&&t<r}function yr(t,r,n){if(!qr(n))return false;var e=typeof r;return!!("number"==e?Nr(n)&&vr(r,n.length):"string"==e&&r in n)&&zr(n[r],t)}function _r(t,r){if(Lu(t))return false;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Kr(t))||(le.test(t)||!fe.test(t)||null!=r&&t in Object(r))}function gr(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t;
}function br(t){var r=nr(t),n=A[r];if(typeof n!="function"||!(r in k.prototype))return false;if(t===n)return true;var e=Au(n);return!!e&&t===e[0]}function dr(t){return!!Ue&&Ue in t}function wr(t){var r=t&&t.constructor,n=typeof r=="function"&&r.prototype||Ce;return t===n}function jr(t){return t===t&&!qr(t)}function mr(t,r){return function(n){return null!=n&&(n[t]===r&&(r!==ln||t in Object(n)))}}function Or(t,r){var n=t[1],e=r[1],u=n|e,o=u<(_n|gn|On),i=e==On&&n==dn||e==On&&n==An&&t[7].length<=r[8]||e==(On|An)&&r[7].length<=r[8]&&n==dn;
if(!o&&!i)return t;e&_n&&(t[2]=r[2],u|=n&_n?0:bn);var a=r[3];if(a){var c=t[3];t[3]=c?Rt(c,a,r[4]):a,t[4]=c?m(t[3],yn):r[4]}return a=r[5],a&&(c=t[5],t[5]=c?zt(c,a,r[6]):a,t[6]=c?m(t[5],yn):r[6]),a=r[7],a&&(t[7]=a),e&On&&(t[8]=null==t[8]?r[8]:eu(t[8],r[8])),null==t[9]&&(t[9]=r[9]),t[0]=r[0],t[1]=u,t}function Ar(t){var r=[];if(null!=t)for(var n in Object(t))r.push(n);return r}function xr(t,r){for(var n=t.length,e=eu(r.length,n),u=Ct(t);e--;){var o=r[e];t[e]=vr(o,n)?u[o]:ln}return t}function kr(t){if(typeof t=="string"||Kr(t))return t;
var r=t+"";return"0"==r&&1/t==-$n?"-0":r}function Er(t){if(null!=t){try{return We.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Sr(t,r){return e(Bn,function(n){var e="_."+n[0];r&n[1]&&!i(t,e)&&t.push(e)}),t.sort()}function Tr(t,r,n){var e=Lu(t)?u:it;return n&&yr(t,r,n)&&(r=ln),e(t,ur(r,3))}function $r(t,r){var n=Lu(t)?o:at;return n(t,ur(r,3))}function Ir(t,r){var n=Lu(t)?e:ju;return n(t,ur(r,3))}function Lr(t,r){var n=Lu(t)?a:jt;return n(t,ur(r,3))}function Fr(t,r,n){var e=Lu(t)?l:kt;
return n&&yr(t,r,n)&&(r=ln),e(t,ur(r,3))}function Pr(t,r){if(typeof r!="function")throw new TypeError(pn);return t=Jr(t),function(){if(--t<1)return r.apply(this,arguments)}}function Br(t,r,n){function e(r){var n=h,e=p;return h=p=ln,b=r,y=t.apply(e,n)}function u(t){return b=t,_=setTimeout(a,r),d?e(t):y}function o(t){var n=t-g,e=t-b,u=r-n;return w?eu(u,v-e):u}function i(t){var n=t-g,e=t-b;return g===ln||n>=r||n<0||w&&e>=v}function a(){var t=$u();return i(t)?c(t):(_=setTimeout(a,o(t)),ln)}function c(t){
return _=ln,j&&h?e(t):(h=p=ln,y)}function f(){_!==ln&&clearTimeout(_),b=0,h=g=p=_=ln}function l(){return _===ln?y:c($u())}function s(){var t=$u(),n=i(t);if(h=arguments,p=this,g=t,n){if(_===ln)return u(g);if(w)return _=setTimeout(a,r),e(g)}return _===ln&&(_=setTimeout(a,r)),y}var h,p,v,y,_,g,b=0,d=false,w=false,j=true;if(typeof t!="function")throw new TypeError(pn);return r=Qr(r)||0,qr(n)&&(d=!!n.leading,w="maxWait"in n,v=w?nu(Qr(n.maxWait)||0,r):v,j="trailing"in n?!!n.trailing:j),s.cancel=f,s.flush=l,s}function Mr(t,r){
if(typeof t!="function"||r&&typeof r!="function")throw new TypeError(pn);var n=function(){var e=arguments,u=r?r.apply(this,e):e[0],o=n.cache;if(o.has(u))return o.get(u);var i=t.apply(this,e);return n.cache=o.set(u,i),i};return n.cache=new(Mr.Cache||C),n}function Rr(t,r,n){var e=true,u=true;if(typeof t!="function")throw new TypeError(pn);return qr(n)&&(e="leading"in n?!!n.leading:e,u="trailing"in n?!!n.trailing:u),Br(t,r,{leading:e,maxWait:r,trailing:u})}function zr(t,r){return t===r||t!==t&&r!==r}function Cr(t){
return Ur(t)&&De.call(t,"callee")&&(!Xe.call(t,"callee")||Ve.call(t)==Mn)}function Nr(t){return null!=t&&Vr(t.length)&&!Dr(t)}function Ur(t){return Gr(t)&&Nr(t)}function Wr(t,r){return pt(t,r)}function Dr(t){var r=qr(t)?Ve.call(t):"";return r==Un||r==Wn}function Vr(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=In}function qr(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Gr(t){return!!t&&typeof t=="object"}function Kr(t){return typeof t=="symbol"||Gr(t)&&Ve.call(t)==Qn}function Hr(t){
if(!t)return 0===t?t:0;if(t=Qr(t),t===$n||t===-$n){var r=t<0?-1:1;return r*Ln}return t===t?t:0}function Jr(t){var r=Hr(t),n=r%1;return r===r?n?r-n:r:0}function Qr(t){if(typeof t=="number")return t;if(Kr(t))return Fn;if(qr(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=qr(r)?r+"":r}if(typeof t!="string")return 0===t?t:+t;t=t.replace(ve,"");var n=je.test(t);return n||Oe.test(t)?Ee(t.slice(2),n?2:8):we.test(t)?Fn:+t}function Xr(t){return null==t?"":Et(t)}function Yr(t,r,n){var e=null==t?ln:ft(t,r);
return e===ln?n:e}function Zr(t,r){return null!=t&&fr(t,r,ht)}function tn(t){return Nr(t)?tt(t):dt(t)}function rn(t){return Nr(t)?tt(t,true):wt(t)}function nn(t){return function(){return t}}function en(t){return t}function un(t){return bt(typeof t=="function"?t:ut(t,true))}function on(){}function an(t){return _r(t)?v(kr(t)):At(t)}function cn(){return[]}function fn(){return false}var ln,sn="4.15.0",hn=200,pn="Expected a function",vn="__lodash_hash_undefined__",yn="__lodash_placeholder__",_n=1,gn=2,bn=4,dn=8,wn=16,jn=32,mn=64,On=128,An=256,xn=512,kn=1,En=2,Sn=150,Tn=16,$n=1/0,In=9007199254740991,Ln=1.7976931348623157e308,Fn=NaN,Pn=4294967295,Bn=[["ary",On],["bind",_n],["bindKey",gn],["curry",dn],["curryRight",wn],["flip",xn],["partial",jn],["partialRight",mn],["rearg",An]],Mn="[object Arguments]",Rn="[object Array]",zn="[object Boolean]",Cn="[object Date]",Nn="[object Error]",Un="[object Function]",Wn="[object GeneratorFunction]",Dn="[object Map]",Vn="[object Number]",qn="[object Object]",Gn="[object Promise]",Kn="[object RegExp]",Hn="[object Set]",Jn="[object String]",Qn="[object Symbol]",Xn="[object WeakMap]",Yn="[object ArrayBuffer]",Zn="[object DataView]",te="[object Float32Array]",re="[object Float64Array]",ne="[object Int8Array]",ee="[object Int16Array]",ue="[object Int32Array]",oe="[object Uint8Array]",ie="[object Uint8ClampedArray]",ae="[object Uint16Array]",ce="[object Uint32Array]",fe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/,se=/^\./,he=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pe=/[\\^$.*+?()[\]{}|]/g,ve=/^\s+|\s+$/g,ye=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,_e=/\{\n\/\* \[wrapped with (.+)\] \*/,ge=/,? & /,be=/\\(\\)?/g,de=/\w*$/,we=/^[-+]0x[0-9a-f]+$/i,je=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,Oe=/^0o[0-7]+$/i,Ae=/^(?:0|[1-9]\d*)$/,xe={};
xe[te]=xe[re]=xe[ne]=xe[ee]=xe[ue]=xe[oe]=xe[ie]=xe[ae]=xe[ce]=true,xe[Mn]=xe[Rn]=xe[Yn]=xe[zn]=xe[Zn]=xe[Cn]=xe[Nn]=xe[Un]=xe[Dn]=xe[Vn]=xe[qn]=xe[Kn]=xe[Hn]=xe[Jn]=xe[Xn]=false;var ke={};ke[Mn]=ke[Rn]=ke[Yn]=ke[Zn]=ke[zn]=ke[Cn]=ke[te]=ke[re]=ke[ne]=ke[ee]=ke[ue]=ke[Dn]=ke[Vn]=ke[qn]=ke[Kn]=ke[Hn]=ke[Jn]=ke[Qn]=ke[oe]=ke[ie]=ke[ae]=ke[ce]=true,ke[Nn]=ke[Un]=ke[Xn]=false;var Ee=parseInt,Se=typeof global=="object"&&global&&global.Object===Object&&global,Te=typeof self=="object"&&self&&self.Object===Object&&self,$e=Se||Te||Function("return this")(),Ie=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Le=Ie&&typeof module=="object"&&module&&!module.nodeType&&module,Fe=Le&&Le.exports===Ie,Pe=Fe&&Se.process,Be=function(){
try{return Pe&&Pe.binding("util")}catch(t){}}(),Me=Be&&Be.isTypedArray,Re=Array.prototype,ze=Function.prototype,Ce=Object.prototype,Ne=$e["__core-js_shared__"],Ue=function(){var t=/[^.]+$/.exec(Ne&&Ne.keys&&Ne.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),We=ze.toString,De=Ce.hasOwnProperty,Ve=Ce.toString,qe=RegExp("^"+We.call(De).replace(pe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ge=Fe?$e.Buffer:ln,Ke=$e.Symbol,He=$e.Uint8Array,Je=j(Object.getPrototypeOf,Object),Qe=Object.create,Xe=Ce.propertyIsEnumerable,Ye=Re.splice,Ze=Object.getOwnPropertySymbols,tu=Ge?Ge.isBuffer:ln,ru=j(Object.keys,Object),nu=Math.max,eu=Math.min,uu=ar($e,"DataView"),ou=ar($e,"Map"),iu=ar($e,"Promise"),au=ar($e,"Set"),cu=ar($e,"WeakMap"),fu=ar(Object,"create"),lu=function(){
var t=ar(Object,"defineProperty"),r=ar.name;return r&&r.length>2?t:ln}(),su=cu&&new cu,hu={},pu=Er(uu),vu=Er(ou),yu=Er(iu),_u=Er(au),gu=Er(cu),bu=Ke?Ke.prototype:ln,du=bu?bu.valueOf:ln,wu=bu?bu.toString:ln;k.prototype=ot(x.prototype),k.prototype.constructor=k,E.prototype.clear=S,E.prototype.delete=T,E.prototype.get=$,E.prototype.has=I,E.prototype.set=L,F.prototype.clear=P,F.prototype.delete=B,F.prototype.get=M,F.prototype.has=R,F.prototype.set=z,C.prototype.clear=N,C.prototype.delete=U,C.prototype.get=W,
C.prototype.has=D,C.prototype.set=V,q.prototype.add=q.prototype.push=G,q.prototype.has=K,H.prototype.clear=J,H.prototype.delete=Q,H.prototype.get=X,H.prototype.has=Y,H.prototype.set=Z;var ju=Dt(ct),mu=Vt(),Ou=su?function(t,r){return su.set(t,r),t}:en,Au=su?function(t){return su.get(t)}:on,xu=Ze?j(Ze,Object):cn,ku=st;(uu&&ku(new uu(new ArrayBuffer(1)))!=Zn||ou&&ku(new ou)!=Dn||iu&&ku(iu.resolve())!=Gn||au&&ku(new au)!=Hn||cu&&ku(new cu)!=Xn)&&(ku=function(t){var r=Ve.call(t),n=r==qn?t.constructor:ln,e=n?Er(n):ln;
if(e)switch(e){case pu:return Zn;case vu:return Dn;case yu:return Gn;case _u:return Hn;case gu:return Xn}return r});var Eu=function(){var t=0,r=0;return function(n,e){var u=$u(),o=Tn-(u-r);if(r=u,o>0){if(++t>=Sn)return n}else t=0;return Ou(n,e)}}(),Su=lu?function(t,r,n){var e=r+"";return lu(t,"toString",{configurable:true,enumerable:false,value:nn(pr(e,Sr(cr(e),n)))})}:en,Tu=Mr(function(t){t=Xr(t);var r=[];return se.test(t)&&r.push(""),t.replace(he,function(t,n,e,u){r.push(e?u.replace(be,"$1"):n||t)}),
r}),$u=function(){return $e.Date.now()},Iu=xt(function(t,r,n){var e=_n;if(n.length){var u=m(n,er(Iu));e|=jn}return Xt(t,e,r,n,u)});Mr.Cache=C;var Lu=Array.isArray,Fu=tu||fn,Pu=Me?_(Me):gt,Bu=Wt(function(t,r){Nt(r,rn(r),t)});A.after=Pr,A.assignIn=Bu,A.bind=Iu,A.constant=nn,A.debounce=Br,A.filter=$r,A.iteratee=un,A.keys=tn,A.keysIn=rn,A.map=Lr,A.memoize=Mr,A.property=an,A.throttle=Rr,A.extend=Bu,A.eq=zr,A.every=Tr,A.forEach=Ir,A.get=Yr,A.hasIn=Zr,A.identity=en,A.isArguments=Cr,A.isArray=Lu,A.isArrayLike=Nr,
A.isArrayLikeObject=Ur,A.isBuffer=Fu,A.isEqual=Wr,A.isFunction=Dr,A.isLength=Vr,A.isObject=qr,A.isObjectLike=Gr,A.isSymbol=Kr,A.isTypedArray=Pu,A.stubArray=cn,A.stubFalse=fn,A.noop=on,A.now=$u,A.some=Fr,A.toFinite=Hr,A.toInteger=Jr,A.toNumber=Qr,A.toString=Xr,A.each=Ir,A.VERSION=sn,Iu.placeholder=A,typeof define=="function"&&typeof define.amd=="object"&&define.amd?($e._=A, define(function(){return A})):Le?((Le.exports=A)._=A,Ie._=A):$e._=A}).call(this);

/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Antonio Aguilar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function (root, factory) {

  root.pubsub = factory(root._, root);

}(this, function (_, global, undefined) {

  var _defaultConfig = {
    DEFAULT_CHANNEL: '/',
    SYSTEM_CHANNEL: 'SYS',
    enableSystemMessages: false,
    cacheKeyDelimiter: '|',
    autoCompactResolver: false
  };

  var pubsub = { configuration: _.extend({}, _defaultConfig) };
  var _config = pubsub.configuration;

  var ChannelDefinition = function (channelName, bus) {
    this.bus = bus;
    this.channel = channelName || _config.DEFAULT_CHANNEL;
  };

  ChannelDefinition.prototype.subscribe = function () {
    return this.bus.subscribe({
      channel: this.channel,
      topic: ( arguments.length === 1 ? arguments[0].topic : arguments[0] ),
      callback: ( arguments.length === 1 ? arguments[0].callback : arguments[1] )
    });
  };

  ChannelDefinition.prototype.publish = function () {

    var envelope = {};
    var callback;

    if ( typeof arguments[0] === 'string' ) {
      envelope.topic = arguments[0];
      envelope.data = arguments[1];
      callback = arguments[2];
    }
    else {
      envelope = arguments[0];
      callback = arguments[1];
    }

    if ( typeof envelope !== 'object' ) {
      throw new Error('The first argument to ChannelDefinition.publish should be either an envelope object or a string topic.');
    }

    envelope.channel = this.channel;
    this.bus.publish(envelope, callback);

  };

  var SubscriptionDefinition = function (channel, topic, callback) {

    if ( arguments.length !== 3 ) {
      throw new Error('You must provide a channel, topic and callback when creating a SubscriptionDefinition instance.');
    }

    if ( topic.length === 0 ) {
      throw new Error('Topics cannot be empty');
    }

    this.channel = channel;
    this.topic = topic;
    this.callback = callback;
    this.pipeline = [];
    this.cacheKeys = [];
    this._context = undefined;
  };

  var ConsecutiveDistinctPredicate = function () {
    var previous;
    return function (data) {
      var eq = false;

      if ( typeof data === 'string' ) {
        eq = data === previous;
        previous = data;
      }
      else {
        eq = _.isEqual(data, previous);
        previous = _.extend({}, data);
      }

      return !eq;
    };
  };

  var DistinctPredicate = function DistinctPredicateFactory() {
    var previous = [];
    return function DistinctPredicate(data) {
      var isDistinct = !_.some(previous, function (p) {
        return _.isEqual(data, p);
      });

      if ( isDistinct ) {
        previous.push(data);
      }
      return isDistinct;
    };
  };

  SubscriptionDefinition.prototype = {

    'catch': function (errorHandler) {
      var original = this.callback;
      this.callback = function () {
        try {
          original.apply(this, arguments);
        }
        catch ( err ) {
          errorHandler(err, arguments[0]);
        }
      };
      return this;
    },

    defer: function defer() {
      return this.delay(0);
    },

    disposeAfter: function disposeAfter(maxCalls) {

      if ( typeof maxCalls !== 'number' || maxCalls <= 0 ) {
        throw new Error('The value provided to disposeAfter (maxCalls) must be a number greater than zero.');
      }

      var self = this;
      var dispose = _.after(maxCalls, _.bind(function () {
        self.unsubscribe();
      }));

      self.pipeline.push(function (data, env, next) {
        next(data, env);
        dispose();
      });

      return self;
    },

    distinct: function distinct() {
      return this.constraint(new DistinctPredicate());
    },

    distinctUntilChanged: function distinctUntilChanged() {
      return this.constraint(new ConsecutiveDistinctPredicate());
    },

    invokeSubscriber: function invokeSubscriber(data, env) {
      if ( !this.inactive ) {
        var self = this;
        var pipeline = self.pipeline;
        var len = pipeline.length;
        var context = self._context;
        var idx = -1;
        var invoked = false;

        if ( !len ) {
          self.callback.call(context, data, env);
          invoked = true;
        }
        else {
          pipeline = pipeline.concat([self.callback]);
          var step = function step(d, e) {
            idx += 1;
            if ( idx < len ) {
              pipeline[idx].call(context, d, e, step);
            } else {
              self.callback.call(context, d, e);
              invoked = true;
            }
          };
          step(data, env, 0);
        }

        return invoked;
      }
    },

    logError: function logError() {
      if ( console ) {
        var report;

        if ( console.warn ) {
          report = console.warn;
        }
        else {
          report = console.log;
        }

        this.catch(report);
      }
      return this;
    },

    once: function once() {
      return this.disposeAfter(1);
    },

    subscribe: function subscribe(callback) {
      this.callback = callback;
      return this;
    },

    unsubscribe: function unsubscribe() {
      if ( !this.inactive ) {
        pubsub.unsubscribe(this);
      }
    },

    constraint: function constraint(predicate) {
      if ( typeof predicate !== 'function' ) {
        throw new Error('Predicate constraint must be a function');
      }
      this.pipeline.push(function (data, env, next) {
        if ( predicate.call(this, data, env) ) {
          next(data, env);
        }
      });
      return this;
    },

    constraints: function constraints(predicates) {
      var self = this;
      _.each(predicates, function (predicate) {
        self.constraint(predicate);
      });
      return self;
    },

    context: function contextSetter(context) {
      this._context = context;
      return this;
    },

    debounce: function debounce(milliseconds, immediate) {
      if ( typeof milliseconds !== 'number' ) {
        throw new Error('Milliseconds must be a number');
      }
      this.pipeline.push(
        _.debounce(function (data, env, next) {
            next(data, env);
          },
          milliseconds,
          !!immediate
        )
      );
      return this;
    },

    delay: function delay(milliseconds) {
      if ( typeof milliseconds !== 'number' ) {
        throw new Error('Milliseconds must be a number');
      }
      var self = this;
      self.pipeline.push(function (data, env, next) {
        setTimeout(function () {
          next(data, env);
        }, milliseconds);
      });
      return this;
    },

    throttle: function throttle(milliseconds) {
      if ( typeof milliseconds !== 'number' ) {
        throw new Error('Milliseconds must be a number');
      }
      var fn = function (data, env, next) {
        next(data, env);
      };
      this.pipeline.push(_.throttle(fn, milliseconds));
      return this;
    }

  };

  /**
   * pubsub provides a default implementation called bindingsResolver.
   * The resolver is the mechanism by which published message topics are matched
   * to the subscribers which should receive the message.
   */
  var bindingsResolver = _config.resolver = {
    cache: {},
    regex: {},
    enableCache: true,

    compare: function compare(binding, topic, headerOptions) {
      var pattern;
      var rgx;
      var prevSegment;
      var cacheKey = topic + _config.cacheKeyDelimiter + binding;
      var result = ( this.cache[cacheKey] );
      var opt = headerOptions || {};
      var saveToCache = this.enableCache && !opt.resolverNoCache;

      // result is cached?
      if ( result === true ) {
        return result;
      }

      // plain string matching?
      if ( binding.indexOf('#') === -1 && binding.indexOf('*') === -1 ) {
        result = ( topic === binding );
        if ( saveToCache ) {
          this.cache[cacheKey] = result;
        }
        return result;
      }

      // ah, regex matching, then
      if ( !( rgx = this.regex[binding] ) ) {
        pattern = '^' + _.map(binding.split('.'), function mapTopicBinding(segment) {
            var res = '';
            if ( !!prevSegment ) {
              res = prevSegment !== '#' ? '\\.\\b' : '\\b';
            }
            if ( segment === '#' ) {
              res += '[\\s\\S]*';
            } else if ( segment === '*' ) {
              res += '[^.]+';
            } else {
              res += segment;
            }
            prevSegment = segment;
            return res;
          }).join('') + '$';
        rgx = this.regex[binding] = new RegExp(pattern);
      }

      result = rgx.test(topic);

      if ( saveToCache ) {
        this.cache[cacheKey] = result;
      }

      return result;
    },

    reset: function reset() {
      this.cache = {};
      this.regex = {};
    },

    purge: function (options) {
      var self = this;
      var keyDelimiter = _config.cacheKeyDelimiter;
      var matchPredicate = function (val, key) {
        var split = key.split(keyDelimiter);
        var topic = split[0];
        var binding = split[1];
        if ( ( typeof options.topic === 'undefined' || options.topic === topic ) &&
          ( typeof options.binding === 'undefined' || options.binding === binding ) ) {
          delete self.cache[key];
        }
      };

      var compactPredicate = function (val, key) {
        var split = key.split(keyDelimiter);
        if ( pubsub.getSubscribersFor({ topic: split[0] }).length === 0 ) {
          delete self.cache[key];
        }
      };

      if ( typeof options === 'undefined' ) {
        this.reset();
      } else {
        var handler = options.compact === true ? compactPredicate : matchPredicate;
        _.each(this.cache, handler);
      }
    }
  };

  var pubInProgress = 0;
  var unSubQueue = [];
  var autoCompactIndex = 0;

  function clearUnSubQueue() {
    while ( unSubQueue.length ) {
      pubsub.unsubscribe(unSubQueue.shift());
    }
  }

  function getCachePurger(subDef, key, cache) {
    return function (sub, i, list) {
      if ( sub === subDef ) {
        list.splice(i, 1);
      }
      if ( list.length === 0 ) {
        delete cache[key];
      }
    };
  }

  function getCacher(topic, pubCache, cacheKey, done, envelope) {

    var headers = envelope && envelope.headers || {};

    return function (subDef) {

      if ( _config.resolver.compare(subDef.topic, topic, headers) ) {

        subDef.cacheKeys.push(cacheKey);

        if ( done ) {
          done(subDef);
        }

      }
    };
  }

  function getSystemMessage(kind, subDef) {
    return {
      channel: _config.SYSTEM_CHANNEL,
      topic: 'subscription.' + kind,
      data: {
        event: 'subscription.' + kind,
        channel: subDef.channel,
        topic: subDef.topic
      }
    };
  }

  var sysCreatedMessage = _.bind(getSystemMessage, this, 'created');
  var sysRemovedMessage = _.bind(getSystemMessage, this, 'removed');

  function getPredicate(options, resolver) {

    if ( typeof options === 'function' ) {
      return options;
    }

    else if ( !options ) {
      return function () { return true; };
    }

    else {
      return function (sub) {

        var compared = 0;
        var matched = 0;

        // We use the bindings resolver to compare the options.topic to subDef.topic
        // Any other potential prop/value matching outside topic & context...
        _.each(options, function (val, prop) {
          compared += 1;
          if ( ( prop === 'topic' && resolver.compare(sub.topic, options.topic, { resolverNoCache: true }) ) || ( prop === 'context' && options.context === sub._context ) || ( sub[prop] === options[prop] ) ) {
            matched += 1;
          }
        });
        return compared === matched;
      };
    }
  }

  _.extend(pubsub, {
    cache: {},
    subscriptions: {},
    wireTaps: [],

    ChannelDefinition: ChannelDefinition,
    SubscriptionDefinition: SubscriptionDefinition,

    channel: function channel(channelName) {
      return new ChannelDefinition(channelName, this);
    },

    addWireTap: function addWireTap(callback) {
      var self = this;
      self.wireTaps.push(callback);
      return function () {
        var idx = self.wireTaps.indexOf(callback);
        if ( idx !== -1 ) {
          self.wireTaps.splice(idx, 1);
        }
      };
    },

    getSubscribersFor: function getSubscribersFor(options) {
      var result = [];
      var self = this;
      _.each(self.subscriptions, function (channel) {
        _.each(channel, function (subList) {
          result = result.concat(_.filter(subList, getPredicate(options, _config.resolver)));
        });
      });
      return result;
    },

    /**
     * Publish Method
     * @param envelope
     * @param cb
     */
    publish: function publish(envelope, cb) {

      ++pubInProgress;

      // using ISO date string as a preferred timestamp
      envelope.timestamp = new Date().toISOString();

      var channel = envelope.channel = envelope.channel || _config.DEFAULT_CHANNEL;
      var topic = envelope.topic;

      if ( this.wireTaps.length ) {
        _.each(this.wireTaps, function (tap) {
          tap(envelope.data, envelope, pubInProgress);
        });
      }

      var cacheKey = channel + _config.cacheKeyDelimiter + topic;
      var skipped = 0;
      var activated = 0;

      var cache = this.cache[cacheKey];

      if ( !cache ) {
        // resolverNoCache is disabled internally in getCacher method
        var cacherFn = getCacher(topic, this.cache, cacheKey, function (candidate) { if ( candidate.invokeSubscriber(envelope.data, envelope) ) { activated++; } else { skipped++; }}, envelope);

        _.each(this.subscriptions[channel], function (candidates) { _.each(candidates, cacherFn); });

      }
      else {
        _.each(cache, function (subDef) {
          if ( subDef.invokeSubscriber(envelope.data, envelope) ) {
            activated++;
          } else {
            skipped++;
          }
        });
      }

      if ( --pubInProgress === 0 ) { clearUnSubQueue(); }

      if ( cb ) { cb({ activated: activated, skipped: skipped }); }

    },

    /**
     * Subscribe Method
     * @param options
     * @returns {SubscriptionDefinition}
     */
    subscribe: function subscribe(options) {

      var subscriptions = this.subscriptions;
      var subDef = new SubscriptionDefinition(options.channel || _config.DEFAULT_CHANNEL, options.topic, options.callback);
      var channel = subscriptions[subDef.channel];
      var channelLen = subDef.channel.length;
      var subs;

      if ( !channel ) {
        channel = subscriptions[subDef.channel] = {};
      }

      subs = subscriptions[subDef.channel][subDef.topic];

      if ( !subs ) {
        subs = subscriptions[subDef.channel][subDef.topic] = [];
      }

      // First, add the SubscriptionDefinition to the channel list
      subs.push(subDef);

      // Next, add the SubscriptionDefinition to any relevant existing cache(s)
      _.each(_.keys(this.cache), function (cacheKey) {

        if ( cacheKey.substr(0, channelLen) === subDef.channel ) {
          getCacher(cacheKey.split(_config.cacheKeyDelimiter)[1], this.cache, cacheKey)(subDef);
        }

      }, this);

      if ( _config.enableSystemMessages ) {
        this.publish(sysCreatedMessage(subDef));
      }

      return subDef;
    },

    /**
     * Unsubscribe Method
     */
    unsubscribe: function unsubscribe() {
      var unSubLen = arguments.length;
      var unSubIdx = 0;
      var subDef;
      var channelSubs;
      var topicSubs;
      var idx;

      for ( ; unSubIdx < unSubLen; unSubIdx++ ) {
        subDef = arguments[unSubIdx];
        subDef.inactive = true;

        if ( pubInProgress ) {
          unSubQueue.push(subDef);
          return;
        }

        channelSubs = this.subscriptions[subDef.channel];
        topicSubs = channelSubs && channelSubs[subDef.topic];

        if ( topicSubs ) {
          var len = topicSubs.length;
          idx = 0;

          // remove SubscriptionDefinition from channel list
          while ( idx < len ) {

            if ( topicSubs[idx] === subDef ) {
              topicSubs.splice(idx, 1);
              break;
            }
            idx += 1;
          }

          if ( topicSubs.length === 0 ) {
            delete channelSubs[subDef.topic];
            if ( !_.keys(channelSubs).length ) {
              delete this.subscriptions[subDef.channel];
            }
          }

          // Remove SubscriptionDefinition from pubsub cache
          if ( subDef.cacheKeys && subDef.cacheKeys.length ) {
            var key;
            while ( key = subDef.cacheKeys.pop() ) {
              _.each(this.cache[key], getCachePurger(subDef, key, this.cache));
            }
          }

          if ( typeof _config.resolver.purge === 'function' ) {

            // check to see if relevant resolver cache entries can be purged
            var autoCompact = _config.autoCompactResolver === true ? 0 : typeof _config.autoCompactResolver === 'number' ? ( _config.autoCompactResolver - 1 ) : false;

            if ( autoCompact >= 0 && autoCompactIndex === autoCompact ) {
              _config.resolver.purge({ compact: true });
              autoCompactIndex = 0;
            }
            else if ( autoCompact >= 0 && autoCompactIndex < autoCompact ) {
              autoCompactIndex += 1;
            }
          }

        }

        if ( _config.enableSystemMessages ) {
          this.publish(sysRemovedMessage(subDef));
        }
      }
    },

    reset: function reset() {
      this.unsubscribeFor();
      _config.resolver.reset();
      this.subscriptions = {};
      this.cache = {};
    },

    unsubscribeFor: function unsubscribeFor(options) {
      var toDispose = [];

      if ( this.subscriptions ) {
        toDispose = this.getSubscribersFor(options);
        this.unsubscribe.apply(this, toDispose);
      }
    }
  });

  /**
   * Implements promise feature
   */
  var ForkJoin = function (queue, onSuccess, onError, options) {
    var self = this;
    var _onError = (Object.prototype.toString.call(onError) === '[object Function]') ? onError : function () {};
    var _options = (Object.prototype.toString.call(onError) === '[object Object]') ? onError : options || {};
    var _subscriptions = [];
    var _timeoutFn;

    var _startTimeOut = function () {
      if ( _options.timeout ) {
        _timeoutFn = setTimeout(function () {
          _onError({
            type: 'timeout',
            data: _.map(_subscriptions, 'data')
          });
        }, _options.timeout);
      }
    };

    var _reset = function () {
      _.each(_subscriptions, function (sub) {
        sub.data = undefined;
      });
    };

    var _checkFired = function () {
      var _data = _.map(_subscriptions, 'data');

      if ( _.every(_data, _.identity) ) {

        clearTimeout(_timeoutFn);
        onSuccess.apply(this, _data);

        if ( _options.once ) {
          self.dispose();
        }
        else {
          _reset();
          _startTimeOut();
        }
      }
    };

    self.dispose = function () {
      _.each(_subscriptions, function (sub) {
        sub.unsubscribe();
      });
      _subscriptions = [];
    };

    _.each(queue, function (sub) {
      var subscriptionDefinition = pubsub.subscribe(sub);
      subscriptionDefinition.data = undefined;
      subscriptionDefinition.subscribe(function (data) {
        subscriptionDefinition.data = data;
        _checkFired();
      });
      _subscriptions.push(subscriptionDefinition);
    });

    _startTimeOut();
  };

  /**
   * Implements the pubsub.when() method
   */
  pubsub.when = function (queue, onSuccess, onError, options) {
    return new ForkJoin(queue, onSuccess, onError, options);
  };

  return pubsub;
}) );

(function () {
  angular.module('ngBus', []).config(["$provide", function ($provide) {
    $provide.decorator('$rootScope', ["$delegate", function ($delegate) {
        Object.defineProperty($delegate.constructor.prototype, '$event', {
          get: function () {
            var self = this;
            return {
              when: pubsub.when.bind(pubsub),
              channel: pubsub.publish.bind(pubsub),
              publish: pubsub.publish.bind(pubsub),
              subscribe: function () {
                var fn = pubsub.subscribe.apply(pubsub, arguments);
                self.$on('$destroy', function () {
                  fn.unsubscribe();
                });
                return fn;
              },
              subscriptions: pubsub.subscriptions,
              getSubscribersFor: pubsub.getSubscribersFor.bind(pubsub),
              unsubscribeFor: pubsub.unsubscribeFor.bind(pubsub),
              addWireTap: pubsub.addWireTap.bind(pubsub),
              reset: pubsub.reset
            };
          },
          enumerable: false
        });
        return $delegate;
      }]
    );
  }]);
})();

/*
 * Lo-Dash custom build script:
 *    lodash include=bind,extend,isEqual,after,some,debounce,throttle,map,each,filter,keys,every,identity
 *
 * Uglify build script:
 *    uglifyjs -o angular-bus.min.js --mangle -- angular-bus.js
 */
