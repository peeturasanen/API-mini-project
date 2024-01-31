const uuid = require('uuid');
const tours = require('../models/tours');
  
  // usersController.js
  exports.createTour = (req, res) => {
    const newTour = {
      id: uuid.v4(),
      ...req.body,
    };

    if (!Object.values(newTour).every(Boolean)) {
      return res.status(400).json({ msg: 'Please include all required fields' });
    }
  };
  
  exports.getTour = (req, res) => {
    const found = tours.some((tour) => tour.id === parseInt(req.params.id));

    if (found) {
      res.json(tours.filter((tour) => tour.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
    }
  };
  
  exports.getAllTours = (req, res) => {
    res.json(tours);
  };

  exports.updateTour = (req, res) => {
    const found = tours.some((tour) => tour.id === parseInt(req.params.id));

    if (found) {
      tours.forEach((tour, i) => {
        if (tour.id === parseInt(req.params.id)) {
          tour[i] = { ...tour, ...req.body };
          res.json({ msg: 'Tour updated', tour: tours[i] });

        }
      });
    } else {
      res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
    }
  };
  
  exports.deleteTour = (req, res) => {
    const found = tours.some((tour) => tour.id === parseInt(req.params.id));

    if (found) {
      const updatedMembers = tours.filter((tour) => tour.id !== parseInt(req.params.id));
      res.json({msg: 'Tour deleted', tours: updatedMembers });
    } else {
      res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
    }
  };
  