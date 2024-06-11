// import React, { useState,useContext } from 'react';

// import Logo from '../../olx-logo.png';
// import { firebaseContext } from '../../store/Context';
// import {useHistory} from 'react-router-dom'
// import './Signup.css';

// export default function Signup() {
//   const history = useHistory()
//   const [Username,setUsername] = useState (''); 
//   const [email,setEmail] = useState ('');
//   const [phone,setPhone] = useState (''); 
//   const [password,setPassword] = useState (''); 
//   const {firebase} = useContext(firebaseContext)
//   const handleSubmit = (e) => {
//       e.preventDefault()
//       firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
//         result.user.updateProfile({displayName:Username}).then(()=>{
//           firebase.firestore().collection('users').add({
//             id:result.user.uid,
//             Username:Username,
//             phone:phone
//           }).then(()=>{
//             history.push("/login")
//           })

//         })
//       })
//   }
//   return (
//     <div>
//       <div className="signupParentDiv">
//         <img width="200px" height="200px" src={Logo}></img>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="fname">Username</label>
//           <br />
//           <input
//             className="input"
//             type="text"
//             value={Username}
//             onChange={(e)=>setUsername(e.target.value)}
//             id="fname"
//             name="name"
//             defaultValue="John"
//           />
//           <br />
//           <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             value={email}
//             id="fname"
//             onChange={(e)=>setEmail(e.target.value)}
//             name="email"
//             defaultValue="John"
//           />
//           <br />
//           <label htmlFor="lname">Phone</label>
//           <br />
//           <input
//             className="input"
//             type="number"
//             value={phone}
//             id="lname"
//             onChange={(e)=>setPhone(e.target.value)}
//             name="phone"
//             defaultValue="Doe"
//           />
//           <br />
//           <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={password}
//             id="lname"
//             onChange={(e)=>setPassword(e.target.value)}
//             name="password"
//             defaultValue="Doe"
//           />
//           <br />
//           <br />
//           <button>Signup</button>
//         </form>
//         <a>Login</a>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useContext } from 'react';
// import Logo from '../../olx-logo.png';
// import { firebaseContext } from '../../store/Context';
// import { useHistory } from 'react-router-dom';
// import './Signup.css';

// export default function Signup() {
//   const history = useHistory();
//   const [Username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const { firebase } = useContext(firebaseContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
//       result.user.updateProfile({ displayName: Username }).then(() => {
//         firebase.firestore().collection('users').add({
//           id: result.user.uid,
//           Username,
//           phone,
//         }).then(() => {
//           history.push("/login");
//         });
//       });
//     });
//   };

//   return (
//     <div>
//       <div className="signupParentDiv">
//         <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="fname">Username</label>
//           <br />
//           <input
//             className="input"
//             type="text"
//             value={Username}
//             onChange={(e) => setUsername(e.target.value)}
//             id="fname"
//             name="name"
//           />
//           <br />
//           <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             value={email}
//             id="fname"
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//           />
//           <br />
//           <label htmlFor="lname">Phone</label>
//           <br />
//           <input
//             className="input"
//             type="number"
//             value={phone}
//             id="lname"
//             onChange={(e) => setPhone(e.target.value)}
//             name="phone"
//           />
//           <br />
//           <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={password}
//             id="lname"
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//           />
//           <br />
//           <br />
//           <button>Signup</button>
//         </form>
//         <button onClick={() => history.push('/login')}>Login</button>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useContext } from 'react';
// import Logo from '../../olx-logo.png';
// import { firebaseContext } from '../../store/Context';
// import { useHistory } from 'react-router-dom';
// import './Signup.css';

// export default function Signup() {
//   const history = useHistory();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { firebase } = useContext(firebaseContext);

//   const validateEmail = (email) => {
//     const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const validatePhone = (phone) => {
//     const re = /^[0-9]{10}$/;
//     return re.test(String(phone));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     if (!username || !email || !phone || !password) {
//       setError('All fields are required');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email');
//       return;
//     }

//     if (!validatePhone(phone)) {
//       setError('Please enter a valid 10-digit phone number');
//       return;
//     }

//     if (password.length < 6) {
//       setError('Password should be at least 6 characters');
//       return;
//     }

//     firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
//       result.user.updateProfile({ displayName: username }).then(() => {
//         firebase.firestore().collection('users').add({
//           id: result.user.uid,
//           username,
//           phone,
//         }).then(() => {
//           history.push("/login");
//         });
//       });
//     }).catch((error) => {
//       setError(error.message);
//     });
//   };

//   return (
//     <div>
//       <div className="signupParentDiv">
//         <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username</label>
//           <br />
//           <input
//             className="input"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             id="username"
//             name="username"
//           />
//           <br />
//           <label htmlFor="email">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             value={email}
//             id="email"
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//           />
//           <br />
//           <label htmlFor="phone">Phone</label>
//           <br />
//           <input
//             className="input"
//             type="number"
//             value={phone}
//             id="phone"
//             onChange={(e) => setPhone(e.target.value)}
//             name="phone"
//           />
//           <br />
//           <label htmlFor="password">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={password}
//             id="password"
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//           />
//           <br />
//           {error && <span className="error">{error}</span>}
//           <br />
//           <button type="submit">Signup</button>
//         </form>
//         <button onClick={() => history.push('/login')}>Login</button>
//       </div>
//     </div>
//   );
// }
import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import { firebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { firebase } = useContext(firebaseContext);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
  };

  const validateUsername = (username) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(username));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedEmail || !trimmedPhone || !trimmedPassword) {
      setError('All fields are required');
      return;
    }

    if (!validateUsername(trimmedUsername)) {
      setError('Username must contain only Characters');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email');
      return;
    }

    if (!validatePhone(trimmedPhone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    if (trimmedPassword.length < 6) {
      setError('Password must be at least 6 characters long,whitespace not allowed');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(trimmedEmail, trimmedPassword).then((result) => {
      result.user.updateProfile({ displayName: trimmedUsername }).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: trimmedUsername,
          phone: trimmedPhone,
        }).then(() => {
          history.push("/login");
        });
      });
    }).catch((error) => {
      setError(error.message);
    });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          {error && <span className="error">{error}</span>}
          <br />
          <button type="submit">Signup</button>
        </form>
        <button onClick={() => history.push('/login')}>Login</button>
      </div>
    </div>
  );
}
