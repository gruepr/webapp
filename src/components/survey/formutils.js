// formUtils.js
let storedFormId;

export function handleFormId(newFormId) {
  // Do something with the newFormId
  console.log("Form ID in another file", newFormId);
  storedFormId = newFormId;
  // You can perform additional actions here if needed
}

export function getStoredFormId() {
  return storedFormId;
}

export { storedFormId }; // Exporting the storedFormId directly
