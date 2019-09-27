// Code your solutions in this file

function writeCards(names, event) {
  let results = [];
  for (let i = 0; i < names.length; i++) {
    results.push("Thank you, ${name}, for the wonderful ${event} gift!");
  }
  return results;
}