const uuid = require('uuid');
const services = require('../models/services');
  
  // usersController.js
  exports.createService = (req, res) => {
    const newService = {
      id: uuid.v4(),
      ...req.body,
    };

    if (!Object.values(newService).every(Boolean)) {
      return res.status(400).json({ msg: 'Please include all required fields' });
    }
  };
  
  exports.getService = (req, res) => {
    const found = services.some((service) => service.id === parseInt(req.params.id));

    if (found) {
      res.json(services.filter((service) => service.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
    }
  };
  
  exports.getAllServices = (req, res) => {
    res.json(services);
  };

  exports.updateService = (req, res) => {
    const found = services.some((service) => service.id === parseInt(req.params.id));

    if (found) {
      services.forEach((service, i) => {
        if (service.id === parseInt(req.params.id)) {
          service[i] = { ...service, ...req.body };
          res.json({ msg: 'Service updated', service: services[i] });

        }
      });
    } else {
      res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
    }
  };
  
  exports.deleteService = (req, res) => {
    const found = services.some((service) => service.id === parseInt(req.params.id));

    if (found) {
      const updatedMembers = services.filter((service) => service.id !== parseInt(req.params.id));
      res.json({msg: 'Service deleted', services: updatedMembers });
    } else {
      res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
    }
  };
  