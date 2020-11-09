const config = require("./config.json");
const { ShardingManager } = require('discord.js');


const manager = new ShardingManager('./index.js', {
    totalShards: 'auto',
    token: config.TOKEN
});

// Spawn your shards
manager.spawn();

// Emitted when a shard is created
manager.on('shardCreate', (shard) => console.log(`Shard ${shard.id} launched`));
