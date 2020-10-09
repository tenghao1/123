/*Lily队三场的得分*/

let Lily1=89

let Lily2=120

let Lily3=103

/*Lucy队三场的得分*/

let Lucy1=116

let Lucy2=94

let Lucy3=123

/*Lily队平均分*/ 

let Lilypj

Lilypj = (Lily1+Lily2+Lily3)/3

/*Lucy队*/

let Lucypj

Lucypj = (Lucy1+Lucy2+Lucy3)/3

if(Lilypj>Lucypj){

  console.log ("Lily队胜利，平均分为%"+Lilypj)

}

else if(Lucypj>Lilypj){

  console.log ("Lucy队胜利，平均分为"+Lucypj)

}

else{

  console.log ("两队平局，平均分一样为"+Lucypj)

}





/*mary队三场得分*/

let mary1=97

let mary2=134

let mary3=105

/*Lily队三场的得分*/

let Lily1=89

let Lily2=120

let Lily3=103

/*Lucy队三场的得分*/

let Lucy1=116

let Lucy2=94

let Lucy3=123

/*Lily队平均分*/ 

let Lilypj

Lilypj = (Lily1+Lily2+Lily3)/3

/*Lucy队平均分*/

let Lucypj

Lucypj = (Lucy1+Lucy2+Lucy3)/3

/*mary队平均分*/

let marypj=(mary1+mary2+mary3)/3

if(Lilypj>Lucypj&&Lilypj>marypj){

  console.log ("Lily队胜利，平均分为%"+Lilypj)

}

else if(Lucypj>Lilypj&&Lucypj>mary3){

  console.log ("Lucy队胜利，平均分为"+Lucypj)

}

else if(marypj>Lilypj&&marypj>Lucypj){

  console.log ("mary队胜利，平均分为"+marypj)

}

else{

  console.log ("三队平局，平均分一样为"+Lucypj)

}