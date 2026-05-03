module.exports = {
  apps: [
    {
      name: "vali-backend",
      script: "dist/index.js",

      instances: 1,
      exec_mode: "fork",

      watch: false,

      env: {
        NODE_ENV: "production",
        PORT: 3001
      },

      error_file: "./logs/error.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",

      time: true,

      max_memory_restart: "500M"
    }
  ]
};