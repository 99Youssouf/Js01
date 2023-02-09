var jour = prompt("Entrez le jour ");
  if(jour!=null) 
{
if(jour === " samedi" || jour === "dimanche")
{ 
console.log("weekend");
}
else if ( jour ="lundi" && jour !="mardi" && jour !="mercredi" && jour !="jeudi" && jour !="vendredi")
{
console.log("le jour est incorrecte ");
}
else
{
console.log("weekday");
}
}