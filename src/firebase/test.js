import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("QdDcxWl5z45F7l6uKcrK")
  .collection("cartItems")
  .doc("T908HNCvpij9Gg4JJJ85");
