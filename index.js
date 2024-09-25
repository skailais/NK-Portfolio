const helmet = require("helmet");
app.use(
  helmet({
    permissionsPolicy: {
      features: {
        fullscreen: ["self"],
        geolocation: ["self"],
        // Уберите interest-cohort
      },
    },
  })
);
