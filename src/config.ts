import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBlZMNBVs7M6XQPdXrWEFjJ2O98rNjbQlU',
  authDomain: 'memoapp-3fa78.firebaseapp.com',
  projectId: 'memoapp-3fa78',
  storageBucket: 'memoapp-3fa78.appspot.com',
  messagingSenderId: '109556149664',
  appId: '1:109556149664:web:3b21c5c4ed81b1146588c5'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
