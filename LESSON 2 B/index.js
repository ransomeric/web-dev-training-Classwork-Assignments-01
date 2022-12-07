document.write("<table class='table table-bordered'>")
for(a = 1; a <1000;a=a+10){
    document.write("<tr>")
    for (b=a;b<a+10;b++){
        document.write("<td>"+b+"</td>");
    }
    document.write("</tr>")
}
document.write("<table>")