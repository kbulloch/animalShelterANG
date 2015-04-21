animalShelter.factory('ShelterFactory', function ShelterFactory() {
  var factory = {};
  factory.animals = [];

  factory.addAnimal = function(name, type) {
    this.animals.push( {type: type, name: name} );
  };

  return factory;
});
