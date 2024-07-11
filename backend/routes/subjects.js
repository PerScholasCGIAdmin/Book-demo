var express = require('express');
var router = express.Router();

// Load the model
const Subjects = require('../models/subjects');

// Get all subjects - @route GET /subject 
router.get('/', (req, res) => {
    Subjects.find()
      .then(subjects => {
          console.log("Found subjects:", subjects); // Log the subjects retrieved
          if (subjects.length === 0) {
              return res.status(404).json({ nosubjectsfound: 'No Subjects found' });
          }
          res.json(subjects);
      })
      .catch(err => {
          console.error("Error finding subjects:", err);
          res.status(500).json({ error: err.message });
      });
});

// Get subject by id -  @route   GET /subject/:id 
router.get('/:id', (req, res) => {
    Subjects.findById(req.params.id)
      .then(subjects => res.json(subjects))
      .catch(err => res.status(404).json({  nosubjectsfound: 'No Subjects found' }));
  });

// Add Subject - @route   POST /subject
router.post('/', (req, res) => {
    Subjects.create(req.body)
      .then(subjects => res.json({ msg: 'Subject added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this subject' }));
  });

// Get subject by name -  @route   GET /subject/subject/:authorName 
router.get('/subject/:subjectName', (req, res) => {
    Subjects.findOne({ subject: req.params.subjectName }) 
      .then(subject => {
          if (!subject) {
              return res.status(404).json({ nosubjectfound: 'No Subject found' });
          }
          res.json(subject); 
      })
      .catch(err => res.status(400).json({ error: err.message })); 
});

module.exports = router;
