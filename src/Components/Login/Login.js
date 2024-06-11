// import React,{useState,useContext} from 'react';
// import {firebaseContext} from '../../store/Context'

// import Logo from '../../olx-logo.png';
// import './Login.css';

// import {useHistory} from 'react-router-dom'

// function Login() {

//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('')
//   const {firebase} = useContext(firebaseContext)
//   const history = useHistory()
//   const handleLogin = (e) =>{
//     e.preventDefault()
//     firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
//       history.push('/')
//     }).catch((error)=>{
//       alert(error.message)
//     })

//   }
//   return (
//     <div>
//       <div className="loginParentDiv">
//         <img width="200px" height="200px" src={Logo}></img>
//         <form onSubmit={handleLogin}>
//           <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             value={email}
//             type="email"
//             id="fname"
//             onChange={(e)=>setEmail(e.target.value)}
//             name="email"
//             defaultValue="John"
//           />
//           <br />
//           <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             value={password}
//             type="password"
//             id="lname"
//             onChange={(e)=>setPassword(e.target.value)}
//             name="password"
//             defaultValue="Doe"
//           />
//           <br />
//           <br />
//           <button>Login</button>
//         </form>
//         <a>Signup</a>
//       </div>
//     </div>
//   );
// }

// export default Login;
// import React, { useState, useContext } from 'react';
// import { firebaseContext } from '../../store/Context';
// import Logo from '../../olx-logo.png';
// import './Login.css';
// import { useHistory } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { firebase } = useContext(firebaseContext);
//   const history = useHistory();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
//       history.push('/');
//     }).catch((error) => {
//       alert(error.message);
//     });
//   };

//   return (
//     <div>
//       <div className="loginParentDiv">
//         <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
//         <form onSubmit={handleLogin}>
//           <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             value={email}
//             type="email"
//             id="fname"
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//           />
//           <br />
//           <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             value={password}
//             type="password"
//             id="lname"
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//           />
//           <br />
//           <br />
//           <button>Login</button>
//         </form>
//         <button onClick={() => history.push('/signup')}>Signup</button>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState, useContext } from 'react';
// import { firebaseContext } from '../../store/Context';
// import Logo from '../../olx-logo.png';
// import './Login.css';
// import { useHistory } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { firebase } = useContext(firebaseContext);
//   const history = useHistory();

//   const validateEmail = (email) => {
//     const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email || !password) {
//       setError('Email and Password are required');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email');
//       return;
//     }

//     firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
//       history.push('/');
//     }).catch((error) => {
//       setError(error.message);
//     });
//   };

//   return (
//     <div>
//       <div className="loginParentDiv">
//         <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
//         <form onSubmit={handleLogin}>
//           <label htmlFor="email">Email</label>
//           <br />
//           <input
//             className="input"
//             value={email}
//             type="email"
//             id="email"
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//           />
//           <br />
//           <label htmlFor="password">Password</label>
//           <br />
//           <input
//             className="input"
//             value={password}
//             type="password"
//             id="password"
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//           />
//           <br />
//           {error && <span className="error">{error}</span>}
//           <br />
//           <button type="submit">Login</button>
//         </form>
//         <button onClick={() => history.push('/signup')}>Signup</button>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState, useContext } from 'react';
import { firebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { firebase } = useContext(firebaseContext);
  const history = useHistory();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError('Email and Password are required');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email');
      return;
    }

    firebase.auth().signInWithEmailAndPassword(trimmedEmail, trimmedPassword).then(() => {
      history.push('/');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = 'Incorrect email or password';

      // Check for specific error codes and set custom message
      if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-email') {
        setError(errorMessage);
      } else {
        setError(error.message);
      }
    });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            value={email}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            value={password}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          {error && <span className="error">{error}</span>}
          <br />
          <button type="submit">Login</button>
        </form>
        <button onClick={() => history.push('/signup')}>Signup</button>
      </div>
    </div>
  );
}

export default Login;
