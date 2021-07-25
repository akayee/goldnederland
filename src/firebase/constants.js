import firebase from "./index"
import "firebase/database"
import "firebase/auth"

export const ref = firebase.database().ref("goldnederland/")
export const firebaseAuth = firebase.auth()