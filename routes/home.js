const express = require('express');
const router = express.Router();

// Define route for the home page
router.get('/', (req, res) => {
    const companyInfo = {
        name: 'Boxer Remodeling',
    // other company info...
};

    res.render('home', { company: companyInfo });
});

module.exports = router;
