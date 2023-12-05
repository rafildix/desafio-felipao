let nameCharacter, expCharacter, rankCharacter

nameCharacter = "Rafildix"
expCharacter = "6000"
rankCharacter 

if (expCharacter <= 1000){
  rankCharacter = "Ferro"
}  else if (expCharacter <= 2000 ){
  rankCharacter = "Bronze"
}  else if (expCharacter <= 5000){
  rankCharacter = "Prata"
}  else if (expCharacter < 7000) {
  rankCharacter = "Ouro"
}  else if (expCharacter < 8000) {
  rankCharacter = "Platina"
}  else if (expCharacter < 9000) {
  rankCharacter = "Ascendente"
}  else if (expCharacter < 10000) {
  rankCharacter = "Imortal"
}  else if (expCharacter >= 10001){
  rankCharacter = "Radiante"
} else
  console.log("Level inválido")

console.log("O Herói de nome "+ nameCharacter + " está no nível de " + rankCharacter)