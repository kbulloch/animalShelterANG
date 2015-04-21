animalShelter.factory('ShelterFactory', function ShelterFactory() {
  var factory = {};
  factory.animals = [];

  factory.addAnimal = function(type) {
    this.animals.push( {type: type} );
  };

  return factory;
});
