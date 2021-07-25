import { ref, firebaseAuth } from './constants'

export function auth (email, pw) {
  return firebaseAuth.createUserWithEmailAndPassword(email, pw)
    .then((e)=> saveUser(e))
}

export function logout () {
  return firebaseAuth.signOut()
}

export function login (email, pw) {
  return firebaseAuth.signInWithEmailAndPassword(email, pw)
}
export function currentUser(){
  return firebaseAuth.currentUser
}

export function resetPassword (email) {
  return firebaseAuth.sendPasswordResetEmail(email)
}

//Kullanıcı oluşturulunca otomatik çalışan fonksiyon
export function saveUser (user) {
    
    
  return ref.child(`users/${user.user.uid}/info`)
    .set({
      email: user.user.email,
      uid: user.user.uid
    })
    .then(() => user)
}
//Adding Data Function
export function addData(data,table){
  let id= ref.child(`${table}`)
  .push().key;
  data.id=id;
  return ref.child(`${table}/${id}`)
    .set(data)
}
//Adding Data Wishlist/Cart Function
export function addUserData(user,data,table){
  let id= ref.child(`users/${user.uid}/${table}`)
  .push().key;
  data.id=id;
  return ref.child(`users/${user.uid}/${table}/${id}`)
    .set(data)
}
//Reading Data Function
export function takeDataAdmin(user,table){
  return ref.child(`users/${user.uid}/${table}`);

}
//Reading Data Function
export function takeData(table){
    return ref.child(`${table}`);
  
  }
//Update Data Function
export function updateData(data,table){
  let id= ref.child(`${table}`)
  .child(data.id);
  id.set(data);
    
}
//Delete Data Function
export function deleteData(data,table){
  let id= ref.child(`${table}`)
  .child(data.id);
  id.remove();
    
}