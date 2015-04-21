animalShelter.factory('ShelterFactory', function ShelterFactory() {
  var factory = {};
  factory.animals = [];

  factory.addAnimal = function(name, type) {
    this.animals.push( {name: name, type: type, adoptionStatus: false} );
  };

  return factory;
});
