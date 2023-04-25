import * as babylon from 'babylon';

const code = `function square(n) {
  return n * n;
}`;

const result = babylon.parse(code, {
  sourceType: 'module',
  plugins: ['jsx'],
});
console.log(result);
