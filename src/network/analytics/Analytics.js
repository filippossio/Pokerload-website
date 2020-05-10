import firebase from 'firebase';
import Firebase from '../Firebase';

const Analytics = {
	onVisitPage(page) {
		Firebase.initFirebase();
		const analytics = firebase.analytics();
		analytics.logEvent('pageVisit', { page: page });
	}
};

export default Analytics;
