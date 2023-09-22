import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("/api/type", {
    name: type,
  });
  if (data) {
    alert("Successfully");
  }
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("/api/brand", {
    name: brand,
  });
  if (data) {
    alert("Successfully");
  }
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("/api/type");
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("/api/brand");
  return data;
};

export const fetchDevice = async () => {
  const { data } = await $host.get("/api/device");
  return data;
};

export const createDevice = async (formData) => {
  const { data } = await $authHost.post("/api/device", formData);

  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get(`/api/device/${id}`);
  return data;
};
