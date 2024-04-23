module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/__tests__/**/*.test.js'], // Menggunakan <rootDir> untuk merujuk ke root directory proyek
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',  "^@/(.*)$": "<rootDir>/src/$1",
  },
};
