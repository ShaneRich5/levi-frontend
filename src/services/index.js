import * as Firebase from 'firebase';

const configurations = {
  apiKey: 'AIzaSyAL8ZOrV59wqYvJe4xSQXED3NiGxKW8FZ8',
  authDomain: 'levi-99180.firebaseapp.com',
  databaseURL: 'https://levi-99180.firebaseio.com',
  projectId: 'levi-99180',
  storageBucket: 'levi-99180.appspot.com',
  messagingSenderId: '869954333964',
};

Firebase.initializeApp(configurations);

export const db = Firebase.database();

export const rootRef = db.ref();

export const districtRef = db.ref('districts');

export const churchRef = db.ref('churches');

export const churchReportRef = db.ref('churchReports');

export const districtReportRef = db.ref('districtReports');

export const sourceRef = db.ref('sources');

export const expenseRef = db.ref('expenses');
