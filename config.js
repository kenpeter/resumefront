const config = {};

// Port
config.port = 8016;
// The Zendesk root end point
config.backendRootUrl = 'https://resumeback.shopshop.space';
config.backendUserDataUrl = `${config.backendRootUrl}/api/defaultUser`;
config.backendAuthUrl = `${config.backendRootUrl}/api/auth`;
config.backendUsername = 'kenpeter';
config.backendPassword = 'password';

//
module.exports = config;
