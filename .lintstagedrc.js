module.exports = {
  "*.ts": ["node_modules/.bin/eslint --fix"],
  "*.ts": [() => "tsc --skipLibCheck --noEmit"],
  "*.ts": ["prettier --write"],
};
