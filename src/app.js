let pronouns = ['the', 'my', 'your', 'his', 'her', 'our'];
let adjectives = ['great', 'special', 'mega', 'huge', 'amazing', 'outstanding', 'big'];
let nouns = ['jogger', 'mailman', 'police', 'firefighters', 'giraffe', 'hunter', 'gardeners', 'racoon'];

let domainNames = [];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      let domainName = pronouns[i] + adjectives[j] + nouns[k] + '.com';
      domainNames.push(domainName);
    }
  }
}

console.log(domainNames);