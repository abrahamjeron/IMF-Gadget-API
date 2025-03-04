// helper function to append the codenames along with the product name
exports.generateCodename = () => {
    const codenames = [' The Nightingale', ' The Kraken', ' Shadow Fang', ' Echo Phantom'];
    return codenames[Math.floor(Math.random() * codenames.length)];
};

exports.generateSuccessProbability = () => Math.floor(Math.random() * 100);