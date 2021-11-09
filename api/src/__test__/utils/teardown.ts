import { exec } from 'child_process';

module.exports = async () => {
  await exec('yarn reset');
};
