const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'NzA0NjczMTIyODI1MDExMjcw.Xqgj_A.To7TIsirSb-P5Me5wEwnNXoeo0s' });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();
