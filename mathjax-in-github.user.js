// ==UserScript==
// @name           Run MathJax in Github
// @namespace      http://www.mathjax.org/
// @description    Runs MathJax on any page in github.com
// @include        http://github.com/*
// @include        https://github.com/*
// ==/UserScript==

/*****************************************************************/

(function () {

  function LoadMathJax() {
    if (!window.MathJax) {
      if (document.body.innerHTML.match(/$|\\\[|\\\(|<([a-z]+:)math/)) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
        script.text = [
          "MathJax.Hub.Config({",
          "  tex2jax: {inlineMath: [['$','$'],['\\\\\(','\\\\\)']]}",
          "});"
        ].join("\n");
        var parent = (document.head || document.body || document.documentElement);
        parent.appendChild(script);
      }
    }
  };

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.text = "(" + LoadMathJax + ")()";
  var parent = (document.head || document.body || document.documentElement);
  setTimeout(function () {
    parent.appendChild(script);
    parent.removeChild(script);
  },0);

})();
