module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e7473c831b895e9a9b01e349d44df34a'),
  },
});
