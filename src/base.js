import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const FireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLwjCxiszbk-WUb4T4OUDQof9yfNsjAMo",
  authDomain: "chatbox-app-ef49b.firebaseapp.com",
  databaseURL: "https://chatbox-app-ef49b.firebaseio.com"
})


const base = Rebase.createClass(firebase.database())

export {FireBaseApp}

export default base
