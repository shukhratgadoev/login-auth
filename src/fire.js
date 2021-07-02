import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyBTZNMie5IwdSRhyyfuNqZPe9OTQ_1Ctx4',
	authDomain: 'login-be712.firebaseapp.com',
	projectId: 'login-be712',
	storageBucket: 'login-be712.appspot.com',
	messagingSenderId: '906042749409',
	appId: '1:906042749409:web:47e5877d75ff52bda762a0',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
