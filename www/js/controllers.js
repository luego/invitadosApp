angular.module('starter.controllers', [])

.controller('SharyCtrl', function ($scope, $ionicModal, $ionicLoading, People) {

		$scope.people = People.getShary();

		$scope.person = {
			name: ''
		};
		$scope.type = 1;
		$scope.options = [];
		$scope.correctlySelected = null;

		// Create and load the Modal
		$ionicModal.fromTemplateUrl('templates/new-person.html', function (modal) {
			$scope.personModal = modal;
		}, {
			scope: $scope,
			animation: 'slide-in-up'
		});

		$scope.newPerson = function () {
			$scope.personModal.show();
		};

		$scope.createPerson = function (person) {
			People.createShary(person);

			$scope.personModal.hide();
			person.name = "";
		};

		$scope.closeNewPerson = function () {
			$scope.personModal.hide();
		};

		$scope.deletePerson = function (person) {
			People.deletePersonByType(person, 1);
		};


	})
	.controller('LuegoCtrl', function ($scope, $ionicModal, $ionicLoading, People) {

		$scope.people = People.getLuego();
		$scope.person = {
			name: ''
		};
		$scope.type = 2;
		$scope.options = [];
		$scope.correctlySelected = null;
		// Create and load the Modal
		$ionicModal.fromTemplateUrl('templates/new-person.html', function (modal) {
			$scope.personModal = modal;
		}, {
			scope: $scope,
			animation: 'slide-in-up'
		});

		$scope.newPerson = function () {
			$scope.personModal.show();
		};

		$scope.createPerson = function (person) {
			People.createLuego(person);

			$scope.personModal.hide();
			person.name = "";
		};

		$scope.closeNewPerson = function () {
			$scope.personModal.hide();
		};

		$scope.deletePerson = function (person) {
			People.deletePersonByType(person, 2);
		};
	})
	.controller('ParticipacionCtrl', function ($scope, $ionicModal, $ionicLoading, People) {

		$scope.people = People.getParticipacion();
		$scope.person = {
			name: ''
		};
		$scope.type = 3;

		$scope.options = [{
			label: 'Shary',
			value: 'Shary'
		}, {
			label: 'Luego',
			value: 'Luego'
		}];

		$scope.correctlySelected = $scope.options[1];

		// Create and load the Modal
		$ionicModal.fromTemplateUrl('templates/new-person.html', function (modal) {
			$scope.personModal = modal;
		}, {
			scope: $scope,
			animation: 'slide-in-up'
		});

		$scope.newPerson = function () {
			$scope.personModal.show();
		};

		$scope.createPerson = function (person, correctlySelected) {
			person.owner = correctlySelected.value;
			People.createParticipacion(person);

			$scope.personModal.hide();
			person.name = "";
		};

		$scope.closeNewPerson = function () {
			$scope.personModal.hide();
		};

		$scope.deletePerson = function (person) {
			People.deletePersonByType(person, 3);
		};
	});