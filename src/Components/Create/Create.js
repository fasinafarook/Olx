// import React, { Fragment,useContext,useState } from 'react';
// import './Create.css';
// import Header from '../Header/Header';
// import {useHistory} from 'react-router-dom'
// import {firebaseContext,AuthContext} from '../../store/Context'

// const Create = () => {
//   const {firebase} = useContext(firebaseContext)
//   const {user} = useContext(AuthContext)
//   const history = useHistory()
//   const [name , setName] = useState('')
//   const [category , setCategory] = useState('')
//   const [price , setPrice] = useState('')
//   const [image , setImage] = useState(null)
//   const date = new Date()
//   const handleSubmit = () =>{
//     firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
//       ref.getDownloadURL().then((url)=>{
//         console.log(url);
//         firebase.firestore().collection('products').add({
//           name,
//           category,
//           price,
//           url,
//           userId:user.uid,
//           createdAt:date.toDateString()
//         })
//         history.push('/')
//       })
//     })
//   }


//   return (
//     <Fragment>
//       <Header />
//       <card>
//         <div className="centerDiv">
         
//             <label htmlFor="fname">Name</label>
//             <br />
//             <input
//               className="input"
//               value={name}
//               type="text"
//               id="fname"
//               onChange={(e)=>setName(e.target.value)}
//               name="Name"
//               defaultValue="John"
//             />
//             <br />
//             <label htmlFor="fname">Category</label>
//             <br />
//             <input
//               className="input"
//               value={category}
//               type="text"
//               id="fname"
//               onChange={(e)=>setCategory(e.target.value)}

//               name="category"
//               defaultValue="John"
//             />
//             <br />
//             <label htmlFor="fname">Price</label>
//             <br />
//             <input 
//             className="input" 
//             value={price}
//             type="number"
//             id="fname"  
//             onChange={(e)=>setPrice(e.target.value)}
//             name="Price" />
//             <br />
   
//           <br />
//           <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
         
//             <br />
//             <input onChange={(e)=>{
//               setImage(e.target.files[0])
//             }} type="file" />
//             <br />
//             <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
//         </div>
//       </card>
//     </Fragment>
//   );
// };

// export default Create;


import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { firebaseContext, AuthContext } from '../../store/Context';

const Create = () => {
  const { firebase } = useContext(firebaseContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const date = new Date();

  const handleSubmit = () => {
    setError('');
    
    const trimmedName = name.trim();
    const trimmedCategory = category.trim();
    const trimmedPrice = price.trim();
    
    if (!trimmedName || !trimmedCategory || !trimmedPrice || !image) {
      setError('All fields are required');
      return;
    }

    if (isNaN(trimmedPrice) || trimmedPrice <= 0) {
      setError('Please enter a valid price');
      return;
    }

    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        firebase.firestore().collection('products').add({
          name: trimmedName,
          category: trimmedCategory,
          price: trimmedPrice,
          url,
          userId: user.uid,
          createdAt: date.toDateString()
        });
        history.push('/');
      });
    }).catch((error) => {
      setError(error.message);
    });
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="input"
            value={name}
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            value={category}
            type="text"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            name="category"
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            className="input"
            value={price}
            type="number"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            name="price"
          />
          <br />
          <label htmlFor="image">Image</label>
          <br />
          <input
            className="input"
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            name="image"
          />
          <br />
          {error && <span className="error">{error}</span>}
          <br />
          <button type="submit" className="uploadBtn">Upload and Submit</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Create;