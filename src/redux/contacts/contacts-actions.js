import { createAction } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contacts-types";
//---------------------- CLEAR REDUX----------------------------------
// function actionAddContacts(contact) {
//   return { type: addContact, payload: contact };
// }

// function actionDeleteContacts(contact) {
//   return { type: deleteContact, payload: contact };
// }
//---------------------- CLEAR REDUX----------------------------------

const actionAddContacts = createAction(addContact);
const actionDeleteContacts = createAction(deleteContact);
const actionTest = createAction(type.TEST, (text) => {
  return {
    payload: {
      text,
      completed: false,
    },
  };
});

console.log("actionTest", actionTest("Hello"));

export { actionAddContacts, actionDeleteContacts, actionTest };
