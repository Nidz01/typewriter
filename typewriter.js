const sentence = "hello there from lighthouse labs";
let l = sentence.length;

for (const i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
}

setTimeout(() => {
  process.stdout.write('\n');
}, 50 * (l + 1));