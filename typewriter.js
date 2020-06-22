/*
Our goal is to animate the sentence, revealing one character at a time. 
This would make it look as though it is being typed in by someone, as shown in the GIF above.
Implement the logic to have each letter delay its appearance by 50ms .
*/

const sentence = "hello there from lighthouse labs";
let l = sentence.length;

for (const i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
}

/*
output a newline character before exiting, 
so that the next prompt starts on its own line.
*/
setTimeout(() => {
  process.stdout.write('\n');
}, 50 * l);
