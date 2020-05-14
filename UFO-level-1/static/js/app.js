// from data.js
var tableData = data;


// YOUR CODE HERE!
//Use D3 to select the table:

var table = d3.select('table');
//Use D3 to create a boostrap Striped Table
table.classed('table-striped', true);

//Use D3 to select table body
var tbody = d3.select('tbody');
// Go rec by rec from table
tableData.forEach(function(fn){
    //console.log(fn);
    var row = tbody.append('tr');
    Object.entries(fn).forEach(function([a,b]){
        //console.log(a,b);
        var cell = row.append('td');
        zcc = cell.text(b)
        //console.log(tbody)
    });
    
    //row.append("td").text(tableData[fn]);
    
});

var inputFilter = d3.select("#datetime");

function handleFilter(){
    filterby = d3.event.target;
    console.log('f1',filterby)
};

inputFilter.on('change',function(){
    var oqee = d3.event.target.value;
    
    console.log("zl",oqee);
});


