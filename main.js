var paragraph1_array = [];
var paragraph2_array = [];

function collate1() {
    
    var display_para1_array = [];

    for (var i = 1; i <= 6; i++) 
    {
        var para1 = document.getElementById("sentence1_" + i).value;
        console.log (para1);
        paragraph1_array.push (para1);       
    }

    console.log (paragraph1_array);

    var length_of_paragraph1_array = paragraph1_array.length;
    console.log (length_of_paragraph1_array);

    for (var j = 0; j < length_of_paragraph1_array; j++) 
    {
        display_para1_array.push ("<p>" + paragraph1_array[j] + "<p>");
        console.log (display_para1_array)       
    }

    console.log (display_para1_array);
    var remove_commas1 = paragraph1_array.join(" ")
    console.log (remove_commas1);
    display_para1_array = remove_commas1;

    document.getElementById("para_1_real").innerHTML = "<p>" + display_para1_array + "</p>";

}

function collate2() {
    
    var display_para2_array = [];

    for (var ii = 1; ii <= 6; ii++) 
    {
        var para2 = document.getElementById("sentence2_" + ii).value;
        console.log (para2);
        paragraph2_array.push (para2);       
    }

    console.log (paragraph2_array);

    var length_of_paragraph2_array = paragraph2_array.length;
    console.log (length_of_paragraph2_array);

    for (var jj = 0; jj < length_of_paragraph2_array; jj++) 
    {
        display_para2_array.push ("<p>" + paragraph2_array[jj] + "<p>");
        console.log (display_para2_array)       
    }

    console.log (display_para2_array);
    var remove_commas2 = paragraph2_array.join(" ")
    console.log (remove_commas2);
    display_para2_array = remove_commas2;
    document.getElementById("para_2_real").innerHTML = "<p>" + display_para2_array + "</p>";
    
}