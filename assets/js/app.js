cl = console.log;


var stdArray = [{
    fname: "Tony",
    lname: 'Stark',
    nickName: 'Ironman',
    email: 'tony@stark.com'
},
{
    fname: "Peter",
    lname: 'Parkar',
    nickName: 'SpiderMan',
    email: 'peter@stark.com'
},
{
    fname: "Bruce",
    lname: 'Wayne',
    nickName: 'BatMan',
    email: 'bruce@wayne.com'
},
{
    fname: "Stephen",
    lname: 'Strange',
    nickName: 'Dr. Strange',
    email: 'dr@strange.com'
},
]
// var stdInfo = document.getElementById('stdInfo');
// var result = ''
// for (var i = 0; i < stdArray.length; i++){
//     result +="<tr>";
//     result +="<td>" + (i + 1) + "</td>";
//     result +="<td>" + stdArray[i].fname + "</td>";
//     result +="<td>" + stdArray[i].lname + "</td>";
//     result +="<td>" + stdArray[i].nickName + "</td>";
//     result +="<td>" + stdArray[i].email + "</td>";
//     result +="</tr>";

// }

// stdInfo.innerHTML = result;
// cl(result);


var stdinfo = document.getElementById('stdinfo')


var result = '';
for(var i = 0; i < stdArray.length; i++){
    result+= "<tr>";
    result+="<td>"+(i + 1)+"</td>";
    result+="<td class =table-primary>"+stdArray[i].fname+"</td>";
    result+="<td class =table-active>"+stdArray[i].lname+"</td>";
    result+="<td class =table-success>"+stdArray[i].nickName+"</td>";
    result+="<td class =table-dark>"+stdArray[i].email+"</td>";
    result+="</tr>";
}


stdinfo.innerHTML = result;


var info = document.getElementById('template');

var result = '';
for(i = 0; i < stdArray.length; i++){
    result = result + "<tr>";
    result = result + "<td>"+(i + 1)+"</td>";
    result = result + "<td>"+stdArray[i].fname+"</td>";
    result = result + "<td>"+stdArray[i].lname+"</td>";
    result = result + "<td>"+stdArray[i].nickName+"</td>";
    result = result + "<td>"+stdArray[i].email+"</td>";
    result+="</tr>";

}

info.innerHTML = result;