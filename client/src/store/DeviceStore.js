import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Xolodilnik" },
      { id: 2, name: "Smartfon" },
    ];
    this._brands = [
      {
        id: 1,
        name: "Samsung",
      },
      {
        id: 2,
        name: "Apple",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 15",
        price: 34242,
        rating: 5,
        img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
      },
      {
        id: 2,
        name: "Iphone 15",
        price: 54435,
        rating: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFBeLTLm_KmI6bqTgjSNbopDbF68xtrIvPx8_mhIM7NabmcqiSI4Bgz7dQcRhFg9KGrc&usqp=CAU",
      },
    ];
    this._selectedType = { id: 34233324, name: "Selected Type" };

    this._selectedBrand = { is: 4223432, name: "Selected Brand" };

    this._changeDevice = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  setChangeDevice(id) {
    const device = this._devices.find((device) => device.id === id);
    this._changeDevice = device;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }

  get changeDevice() {
    return this._changeDevice;
  }
}
