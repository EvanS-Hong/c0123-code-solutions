var array = [ {
  "isbn": "1235846123",
  "title": "Hello World",
  "author": "Standard Code",
},
{
  "isbn": "987812315",
  "title": "Goodbye World",
  "author": "Reverse Order",
},
{
  "isbn": "159753654852",
  "title": "Dlrow Eyboog",
  "author": "Redro Dradnats",
},
];
 var string = JSON.stringify(array);
 console.log(string);

 var string2 = '{"numberID": "249675", "stringName": "Brandon Cho"}'
 console.log(typeof(string2));

 console.log(typeof(JSON.parse(string2)));
