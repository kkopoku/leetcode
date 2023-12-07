let newPerson = {
  name: "Kwame",
  reviews: [
    { id: 1, card: 123456 },
    { id: 1, card: 123459 },
    { id: 2, card: 789012 },
    { id: 3, card: 345678 }
  ]
}

function removeCardDetails(person) {

  const theReviews = JSON.parse(JSON.stringify(person.reviews)); //hard copy
  
  // const theReviews = [...person.reviews];   // shallow copy


  for (review of person.reviews){
    delete review.card;
  }

  // use filter to filter and find to find one
  let found = theReviews.find(review => review.id === 1);

  console.log(JSON.stringify(found));
} 

removeCardDetails(newPerson);
