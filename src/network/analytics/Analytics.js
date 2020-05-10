import firebase from 'firebase/app';
import 'firebase/analytics';
import Firebase from '../Firebase';

const Analytics = {
	onVisitPage(page) {
		Firebase.initFirebase();
		const analytics = firebase.analytics();
		analytics.logEvent('pageVisit', { page: page });
	}
};

export default Analytics;
