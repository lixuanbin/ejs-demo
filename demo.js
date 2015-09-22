$(function() {
    var data = [{
        "2015-09-06": {
            "strife": 1,
            "longen": 13
        },
        "2015-09-07": {
            "strife": 0,
            "longen": 15
        },
        "total": {
            "strife": 1,
            "longen": 28
        }
    }];
    var transformData = function() {
        var myObj = {};
        var contents = [];
        var maps = [];
        for (var p in data[0]) {
            var content = {};
            var contentArray = [];
            if (p == 'total') {
                content.contentTitle = '总数';
            } else {
                content.contentTitle = p;
            }
            for (var pp in data[0][p]) {
                contentArray.push(data[0][p][pp]);
            }
            content.contentArray = contentArray;
            contents.push(content);
        }
        for (var ppp in data[0]['total']) {
            maps.push(ppp);
        }
        myObj.contents = contents;
        myObj.maps = maps;
        // console.log(myObj);
        return myObj;
    }
    var loadTable = function(myObj) {
        var htmlTable = new EJS({
            url: 'demo.ejs'
        }).render({
            myObj: myObj
        });
        $('.dataTable').html(htmlTable);
        decorateTable();
    };
    var decorateTable = function() {
        $("tr:odd").addClass("odd");
        $("tr:even").addClass("even");
        $("th").addClass("thead");
    }
    loadTable(transformData(data));
});
