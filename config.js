const config = {};

// Port
config.port = 8014;
// The Zendesk root end point
config.backendRootUrl = 'http://resumeback.local';
config.backendUserDataUrl = `${config.backendRootUrl}/api/defaultUser`;
config.backendAuthUrl = `${config.backendRootUrl}/api/auth`;
config.backendUsername = 'kenpeter';
config.backendPassword = 'password';

//
module.exports = config;
