import firebase from 'firebase/app';

const Firebase = {
	initFirebase() {
		var firebaseConfig = {
			apiKey: "AIzaSyA2NSlCTS4uiIKBI7e-yRvuMisCTQai2PU",
			authDomain: "pokerload.firebaseapp.com",
			databaseURL: "https://pokerload.firebaseio.com",
			projectId: "pokerload",
			storageBucket: "",
			messagingSenderId: "712812382202",
			appId: "1:712812382202:web:2d120497bc5072a5838643",
			measurementId: "G-68BZG22GFT",
		};
		firebase.initializeApp(firebaseConfig);
		return firebase;
	},
	addEmailToMaillingList(email) {
		return new Promise((resolve, reject) => {
			var db = firebase.firestore();
			db.collection("Maillist").get().then((querySnapshot) => {
				let emailExists = false;
				querySnapshot.forEach((doc) => {
					if (!emailExists && doc.data().email === email) {
						emailExists = true;
					}
				});
				if (!emailExists) {
					db.collection("Maillist").add({
						email: email,
					})
						.then(function (docRef) {
							console.log("email added and resolved");
							resolve();
						})
						.catch(function (error) {
							console.log("email NOT added and rejected");
							reject();
						});
				}
				else {
					resolve();
				}
			});
		});
	},
};

export default Firebase;