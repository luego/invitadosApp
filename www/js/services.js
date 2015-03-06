angular.module('starter.services', [])

.factory('People', function ($firebaseArray, $ionicLoading, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);

	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 200,
		showDelay: 0
	});

	ref.once("value", function (data) {
		$ionicLoading.hide();
	});

	var sharies = $firebaseArray(ref.child('shary'));
	var luegos = $firebaseArray(ref.child('luego'));
	var partis = $firebaseArray(ref.child('participacion'));

	return {
		getParticipacion: getParticipacion,
		getShary: getShary,
		getLuego: getLuego,
		createShary: createShary,
		createLuego: createLuego,
		createParticipacion: createParticipacion,
		deletePersonByType: deletePersonByType
	};

	function getParticipacion() {
		return partis;
	}

	function getShary(ionicLoading) {

		return sharies;
	}

	function getLuego() {
		return luegos;
	}

	function deletePersonByType(person, type) {
		if (type == 1) {
			return sharies.$remove(person);
		} else if (type == 2) {
			return luegos.$remove(person);
		} else {
			return partis.$remove(person);
		}
	}

	function createShary(person) {
		sharies.$add(person);
	}

	function createLuego(person) {
		luegos.$add(person);
	}

	function createParticipacion(person) {
		partis.$add(person);
	}
});