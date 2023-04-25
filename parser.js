import * as parser from '@babel/parser';

const code = `function square(n) {
  return n * n;
}`;

const result = parser.parse(code, {
  sourceType: 'module',
  plugins: ['jsx'],
});
console.log(result);
