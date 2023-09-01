const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async createDevice(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
        info,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          DeviceInfo.create({
            titile: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    let { typeId, brandId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;

    let offset = limit * page - limit;

    let devices;
    if (typeId && brandId) {
      devices = await Device.findAll({
        where: {
          typeId,
          brandId,
        },
        limit,
        offset,
      });
      return res.json(devices);
    }
    if (typeId && !brandId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
      return res.json(devices);
    }
    if (!typeId && brandId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
      return res.json(devices);
    }
    devices = await Device.findAndCountAll({ limit, offset });
    return res.json(devices);
  }
  async getOneById(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: {
        id,
      },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
