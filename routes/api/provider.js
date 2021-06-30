const express = require('express');
const { Provider } = require('../../models');

const router = express.Router();

router.route('/')
  .get(async function (req, res, next) {
    try {
      const providers = await Provider.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [{
          association: 'parts',
          attributes: {
            exclude: ['ProviderId', 'createdAt', 'updatedAt']
          }
        }]
      });

      res
        .status(200)
        .json({
          status: 200,
          data: providers
        });
    } catch (err) {
      next(err);
    }
  })
  .post(async function (req, res, next) {
    const { body } = req;

    try {
      const provider = await Provider.upser(body);

      res
        .status(201)
        .json({
          status: 201,
          data: {
            id: provider.id
          }
        });
    } catch (err) {
      next(err);
    }
  });

router.route('/:providerId')
  .get(async function (req, res, next) {
    const { providerId } = req.params;

    try {
      const provider = await Provider.findByPk(providerId, {
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [{
          association: 'parts',
          attributes: {
            exclude: ['ProviderId', 'createdAt', 'updatedAt']
          }
        }]
      });

      res
        .status(201)
        .json({
          status: 201,
          data: provider
        });
    } catch (err) {
      next(err);
    }
  })
  .put(async function (req, res, next) {
    const { providerId } = req.params;

    try {

    } catch (err) {

    }
  })
  .delete(async function (req, res, next) {
    const { providerId } = req.params;

    try {

    } catch (err) {

    }
  });

module.exports = router;
