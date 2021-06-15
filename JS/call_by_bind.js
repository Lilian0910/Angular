//1. bind
var pokemon={
    firstName:'Pika',
    lastName:'Chu',
    getPokeName: function(){
        var fullName=this.firstName+' '+this.lastName
        return fullName;
    }
}
var pokemonName=function(snack, hobby){
    console.log(this.getPokeName()+' I choose you')
    console.log(this.getPokeName()+' loves '+snack+' and '+hobby)
}
//bind-->react
//bind(): An object to which the this keyword can refer inside the new function.
var bindPokemon=pokemonName.bind(pokemon);
 bindPokemon('sushi','javascript')



 //2. call
 var pokemon={
    firstName:'Pika',
    lastName:'Chu',
    getPokeName: function(){
        var fullName=this.firstName+' '+this.lastName
        return fullName;
    }
}
var pokemonName=function(snack, hobby){
    console.log(this.getPokeName()+' I choose you')
    console.log(this.getPokeName()+' loves '+snack+' and '+hobby)
}
pokemonName.call(pokemon, 'sushi1','javascript1')
pokemonName.call(pokemon, ['sushi2','javascript2'])