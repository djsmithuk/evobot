
const { ShardingManager } = require('discord.js');

let TOKEN, PREFIX;
try {
  const config = require("./util/yambUtils");
  TOKEN = config.TOKEN;
} catch (error) {
  TOKEN = process.env.TOKEN;
}

const manager = new ShardingManager('./index.js', {
    totalShards: 'auto',
    token: TOKEN
});

manager.spawn();

manager.on('shardCreate', (shard) => console.log(`Shard ${shard.id} launched`));
