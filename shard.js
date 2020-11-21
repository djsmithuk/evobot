
const { ShardingManager } = require('discord.js');

let TOKEN, PREFIX;
try {
  const config = require("./config.json");
  TOKEN = config.TOKEN;
} catch (error) {
  TOKEN = process.env.TOKEN;
}

const manager = new ShardingManager('./index.js', {
    totalShards: 'auto',
    token: TOKEN
});

// Spawn your shards
manager.spawn();

// Emitted when a shard is created
manager.on('shardCreate', (shard) => console.log(`Shard ${shard.id} launched`));
