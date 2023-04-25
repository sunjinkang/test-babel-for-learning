import * as parser from '@babel/parser';
// import traverse from '@babel/traverse';
// https://github.com/babel/babel/issues/13855
import _traverse from '@babel/traverse';
const traverse = _traverse.default;

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code, {
  sourceType: 'module',
});

traverse(ast, {
  enter(path) {
    if (path.node.type === 'Identifier' && path.node.name === 'n') {
      path.node.name = 'x';
    }
    console.log(path);
  },
});
