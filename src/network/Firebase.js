/* eslint-disable no-undef */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Firebase = {
	initFirebase() {
		if (!firebase.apps.length) {
			var firebaseConfig = {
				apiKey: process.env.REACT_APP_FIREBASE_KEY,
				authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
				databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
				projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
				storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
				messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
				appId: process.env.REACT_APP_FIREBASE_APP_ID,
				measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID,
			};
			firebase.initializeApp(firebaseConfig);
		}
	},
	addEmailToMaillingList(email) {
		return new Promise((resolve, reject) => {
			var db = firebase.firestore();
			db.collection('Maillist').get().then((querySnapshot) => {
				let emailExists = false;
				querySnapshot.forEach((doc) => {
					if (!emailExists && doc.data().email === email) {
						emailExists = true;
					}
				});
				if (!emailExists) {
					db.collection('Maillist').add({
						email: email,
					})
						.then(function () {
							console.log('email added and resolved');
							resolve();
						})
						.catch(function () {
							console.log('email NOT added and rejected');
							reject();
						});
				}
				else {
					resolve();
				}
			});
		});
	},
	onVisitPage() {
		const analytics = firebase.analytics();
		analytics.logEvent('hello there');
	}
};

export default Firebase;
