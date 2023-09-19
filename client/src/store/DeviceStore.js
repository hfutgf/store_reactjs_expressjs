import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = { id: 34233324, name: "Not selected type" };
    this._selectedBrand = { is: 4223432, name: "Nor selected brand" };
    this._changeDevice = {};
    this._characteristics = [
      { id: 1, character: "Otta kuchlik eplab bomidi" },
      { id: 2, character: "Otta kuchlik eplab bomidi" },
      { id: 3, character: "Otta kuchlik eplab bomidi" },
    ];
    this._brandModal = false;
    this._typeModal = false;
    this._deviceModal = false;
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

  setCharacteristics(obj) {
    const characteristics = [...this._characteristics, obj];
    this._characteristics = characteristics;
  }

  setTypeModal(bool) {
    this._typeModal = bool;
  }

  setBrandModal(bool) {
    this._brandModal = bool;
  }

  setDeviceModal(bool) {
    this._deviceModal = bool;
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

  get characteristics() {
    return this._characteristics;
  }

  get brandModal() {
    return this._brandModal;
  }

  get typeModal() {
    return this._typeModal;
  }

  get deviceModal() {
    return this._deviceModal;
  }
}
