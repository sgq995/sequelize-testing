const express = require('express');
const { Part } = require('../../models');

const router = express.Router();

router.route('/')
  .get(async function (req, res, next) {
    try {
      const parts = await Part.findAll({
        attributes: {
          include: ['providerId'],
          exclude: ['createdAt', 'updatedAt']
        }
      });

      res
        .status(200)
        .json({
          status: 200,
          data: parts
        });
    } catch (err) {
      next(err);
    }
  })
  .post(async function (req, res, next) {
    const { body } = req;

    try {
      const part = await Part.upser(body);

      res
        .status(201)
        .json({
          status: 201,
          data: {
            id: part.id
          }
        });
    } catch (err) {
      next(err);
    }
  });

router.route('/:partId')
  .get(async function (req, res, next) {
    const { partId } = req.params;

    try {
      const provider = await Part.findByPk(partId, {
        attributes: {
          include: ['providerId'],
          exclude: ['createdAt', 'updatedAt']
        }
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
    const { partId } = req.params;

    try {

    } catch (err) {

    }
  })
  .delete(async function (req, res, next) {
    const { partId } = req.params;

    try {

    } catch (err) {

    }
  });

module.exports = router;
