function compute()
{   var b = document.getElementsByTagName("div");
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = Number(document.getElementById("years").value);
    var d = Number(new Date().getFullYear());
    end_year = y+d;

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");

    if (p1 && p2 && p3 && p4) {
        p1.innerHTML = null;
        p2.innerHTML = null;
        p3.innerHTML = null;
        p4.innerHTML = null;

    } else {
        var p1 = document.createElement('P');
        var p2 = document.createElement('P');
        var p3 = document.createElement('P');
        var p4 = document.createElement('P');

        p1.setAttribute("id", "p1");
        p2.setAttribute("id", "p2");
        p3.setAttribute("id", "p3");
        p4.setAttribute("id", "p4");
    }

    p1.innerHTML = 'If you deposit ' + '<mark>' + p + '</mark>';
    p2.innerHTML = 'at an interest rate of ' + '<mark>' + r + '</mark>';
    p3.innerHTML = 'You will receive an amount of ' + '<mark>' + p * y * r/100 + '</mark>';
    p4.innerHTML = 'in the year ' + '<mark>' + end_year + '</mark>';

    b[0].append(p1);
    b[0].append(p2);
    b[0].append(p3);
    b[0].append(p4);

var footer = document.getElementsByTagName("footer");
footer[0].style.left=0
b[0].append(footer[0]);

};
        
// function to generate dropdown list of diposit year
(function(window, document, undefined) {
    window.onload = init;
    function init(){
        var min = 1;
        var max = 100;
        select = document.getElementById('years');
        for (var i = min; i<=max; i++){
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            select.appendChild(opt);
        }
    }
}(window, document, undefined));