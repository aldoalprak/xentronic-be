module.exports.hello = {
  tags: ['health'],
  handler: () => {
    return {service_running: "xentronic-be"}
  }
};

module.exports.notFound = {
  handler: () => {
    return { result: '404 Not Found.' };
  },
};
