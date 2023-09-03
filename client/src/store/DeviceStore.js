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

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
