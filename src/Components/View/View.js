// import React, { useEffect, useState, useContext } from 'react';
// import './View.css';
// import { postContext } from '../../store/postContext';
// import { firebaseContext } from '../../store/Context';

// function View() {
//   const [userDetails, setUserDetails] = useState();
//   const { postDetails } = useContext(postContext);
//   const { firebase } = useContext(firebaseContext);

//   useEffect(() => {
//     if (postDetails) {
//       const { userId } = postDetails;
//       firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
//         res.forEach(doc => {
//           setUserDetails(doc.data());
//         });
//       });
//     }
//   }, []);

//   if (!postDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="viewParentDiv">
//       <div className="imageShowDiv">
//         <img src={postDetails.url} alt="Product" />
//       </div>
//       <div className="rightSection">
//         <div className="productDetails">
//           <p>&#x20B9; {postDetails.price} </p>
//           <span>{postDetails.name}</span>
//           <p>{postDetails.category}</p>
//           <span>{new Date(postDetails.createdAt).toDateString()}</span>
//         </div>
//         {userDetails && <div className="contactDetails">
//           <p>Seller details</p>
//           <p>{userDetails.username}</p>
//           <p>{userDetails.phone}</p>
//         </div>}
//       </div>
//     </div>
//   );
// }

// export default View;
// import React, { useEffect, useState, useContext } from 'react';
// import './View.css';
// import { postContext } from '../../store/postContext';
// import { firebaseContext } from '../../store/Context';

// function View() {
//   const [userDetails, setUserDetails] = useState();
//   const { postDetails } = useContext(postContext);
//   const { firebase } = useContext(firebaseContext);

//   useEffect(() => {
//     if (postDetails) {
//       const { userId } = postDetails;
//       firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
//         res.forEach(doc => {
//           setUserDetails(doc.data());
//         });
//       });
//     }
//   }, [postDetails, firebase]);

//   if (!postDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="viewParentDiv">
//       <div className="imageShowDiv">
//         <img src={postDetails.url} alt="Product" />
//       </div>
//       <div className="rightSection">
//         <div className="productDetails">
//           <p>&#x20B9; {postDetails.price}</p>
//           <span>{postDetails.name}</span>
//           <p>{postDetails.category}</p>
//           <span>{new Date(postDetails.createdAt).toDateString()}</span>
//         </div>
//         {userDetails && <div className="contactDetails">
//           <p>Seller details</p>
//           <p>{userDetails.username}</p>
//           <p>{userDetails.phone}</p>
//         </div>}
//       </div>
//     </div>
//   );
// }

// export default View;
import React, { useEffect, useState, useContext } from 'react';
import './View.css';
import { postContext } from '../../store/postContext';
import { firebaseContext } from '../../store/Context';

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = useContext(postContext);
  const { firebase } = useContext(firebaseContext);

  useEffect(() => {
    if (postDetails) {
      const { userId } = postDetails;
      firebase.firestore().collection('users').where('id', '==', userId).get()
        .then((res) => {
          if (!res.empty) {
            res.forEach((doc) => {
              setUserDetails(doc.data());
            });
          } else {
            console.error('No user found with the specified userId');
          }
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [postDetails, firebase]);

  if (!postDetails) {
    return <div>Loading post details...</div>;
  }

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="Product" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{new Date(postDetails.createdAt).toDateString()}</span>
        </div>
        {userDetails ? (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default View;
