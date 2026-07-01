
client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.channel.id === "1519742136780587211") {
        setTimeout(() => {
            message.delete().catch(() => {});
        }, 60000); //
    }
});
