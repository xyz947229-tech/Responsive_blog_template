import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- STEP 1: FIREBASE CONFIG ---
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  storageBucket: "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId: "PASTE_HERE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// --- STEP 2: SEARCH LOGIC ---
const searchInput = document.getElementById('search-input');
const posts = document.querySelectorAll('.post-card');

searchInput.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    posts.forEach(post => {
        const title = post.getAttribute('data-title').toLowerCase();
        post.style.display = title.includes(term) ? 'block' : 'none';
    });
});

// --- STEP 3: GOOGLE AUTH LOGIC ---
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userProfile = document.getElementById('user-profile');
const userPic = document.getElementById('user-pic');

loginBtn.onclick = () => signInWithPopup(auth, provider);
logoutBtn.onclick = () => signOut(auth);

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginBtn.style.display = 'none';
        userProfile.style.display = 'flex';
        userPic.src = user.photoURL;
    } else {
        loginBtn.style.display = 'block';
        userProfile.style.display = 'none';
    }
});