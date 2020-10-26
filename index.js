const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'NzA0NjczMTIyODI1MDExMjcw.Xqgj_A.Gk3_5SI0Bmdsef9DWyNBZXM2pzg' });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();
