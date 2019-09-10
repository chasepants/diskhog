const filesize = require('filesize');

function printChildren(root, filter) {
  console.log(`${filter}(${filesize(root.stats.size)}) ${root.name}`);
  const next_filter = filter + '   ';
  if (root.leftChild) printDirs(root.leftChild, next_filter);
  if (root.rightSib) printChildren(root.rightSib, filter);
}

function printDirs(root, filter) {
  console.log(`${filter}(${filesize(root.stats.blksize)}) ${root.name}`);
  const next_filter = filter + '   ';
  if (root.leftChild) printChildren(root.leftChild, next_filter);
  if (root.rightSib) printDirs(root.rightSib, filter);
  // printableTree.push(root.name);
}

module.exports.print = function(root, filter) {
  console.log(`${filter}(${filesize(root.stats.blksize)}) ${root.name}`);
  // printableTree.push(root.name);
  const next_filter = filter + '   ';
  if (root.leftChild) printDirs(root.leftChild, next_filter);
};
