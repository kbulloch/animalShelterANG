animalShelter.controller('AnimalsCtrl', function AnimalsCtrl($scope, ShelterFactory) {
  $scope.animals = ShelterFactory.animals;
  $scope.ShelterFactory = ShelterFactory;

  $scope.addAnimal = function() {
    var name = $scope.animalName;
    var type = $scope.animalType;
    $scope.ShelterFactory.addAnimal(name, type);
  };
});
