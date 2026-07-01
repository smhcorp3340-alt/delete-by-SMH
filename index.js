
client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.channel.id === "ID_DU_SALON") {
        setTimeout(() => {
            message.delete().catch(() => {});
        }, 60000); //
    }
});