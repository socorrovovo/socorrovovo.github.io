import { auth, db } from './firebase';

// User API

export const doCreateUser = (username, email) => {
  const key = db.ref('users').push();
  db.ref(key).set({
    username,
    email,
  });
}

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetUser = (key) =>
  db.ref(`users/${key}`).once('value');

// Tool API

export const doCreateTool = (name, url, about, tagsString) => {
  const user = auth.currentUser.uid;
  console.log(user);
  const key = db.ref('tools').push();
  const tags = tagsString.split(', ');
  db.ref(key).set({
    name,
    url,
    about,
    tags,
    user
  });

}

export const onceGetTools = () =>
  db.ref('tools').once('value');

export const onceGetTool = (key) =>
  db.ref(`tools/${key}`).once('value');