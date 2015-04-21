animalShelter.factory('ShelterFactory', function ShelterFactory() {
  var factory = {};
  factory.animals = [];

  factory.addAnimal = function(name, type) {
    this.animals.push( {name: name, type: type, adoptionStatus: false} );
  };

  factory.countAnimals = function() {
    return this.animals.length;
  };

  factory.countAnimalsByType = function(type) {
    var count = 0;
    for(var i = 0; i < this.animals.length; i++ ) {
      if(this.animals[i].type === type) {
        count ++;
      }
    }
    return count;
  };

  return factory;
});
