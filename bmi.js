let LucyBMI

let LilyBMI

/*Lucy的身高体重*/

let Lucymass = 56

let Lucyheight = 1.73

/*Lily的身高体重*/

let Lilymass = 65

let Lilyheight = 185

/*Lucy的BMI*/

LucyBMI = Lucymass / (Lucyheight * Lucyheight)

/*Lily的BMI*/

LilyBMI = Lilymass / (Lilyheight * Lilyheight)

let asd = Boolean(LucyBMI-LilyBMI>0)

if(asd===true){

  console.log ('LucyBMI比Lily高')

} 

else if (asd===false){

  console.log ('LucyBMI比Lily低')

} 

else {

  console.log ('LucyBMI和Lily相同')

}