var googleATag = document.getElementById("googleLink");
var weblioATag = document.getElementById("weblioLink");
var ojadATag = document.getElementById("ojadLink");

var expression = document.getElementById("expression").innerText;

var googleLink = "http://www.google.com/search?q=" + expression;
var weblioLink = "https://www.weblio.jp/content/" + expression;
var ojadLink = "http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/word:"
    + expression;

googleATag.setAttribute("href", googleLink);
weblioATag.setAttribute("href", weblioLink);
ojadATag.setAttribute("href", ojadLink);
googleATag.setAttribute("target", "_blank");
weblioATag.setAttribute("target", "_blank");
ojadATag.setAttribute("target", "_blank");