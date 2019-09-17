importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBbJMQG6PCUfD_kyHni6cZNQ1aDsKY51Hw",
  authDomain: "outlive.firebaseapp.com",
  databaseURL: "https://outlive.firebaseio.com",
  projectId: "outlive",
  storageBucket: "",
  messagingSenderId: "734287808356",
  appId: "1:734287808356:web:2a543963f82dfd202c9c71"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(() => {
    console.log("Permission granted!");
  })
  .catch(() => {
    console.log("Permission denied!");
  });

// messaging.usePublicVapidKey(
//   "BHaxJ58YCs9VFQYjPPo0KzeXAeAVpCXNhbhymeblFTand362yWEmpnRWqjCXfCg01vSEL1twic4_d-6rz7YdN28"
// );

messaging.getToken().then(tok => localStorage.setItem("notif-token", tok));
messaging.onMessage(payload => console.log("message", payload));
messaging.setBackgroundMessageHandler(payload => {
  console.log("background", payload);
  const title = payload.data.title;
  const options = {
    body: payload.data.score
  };
  return self.registration.showNotification(title, options);
});

console.log(messaging);

messaging.onMessage(payload => {
  console.log("onMessage: ", payload);
});
