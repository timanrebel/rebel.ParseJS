module.exports = {
    XMLHttpRequest: function(config) {
        return Ti.Network.createHTTPClient(config);
    }
}
