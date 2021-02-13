import { SERVER_URL } from "../utils";

export const getCharacters = async (params) => {
  const searchParams = new URLSearchParams(params);
  const search = `${SERVER_URL}/character/?${searchParams.toString()}`;
  const response = await fetch(`${search}`);
  return response.json();
};

export const getCharacter = async (id) => {
  const response = await fetch(`${SERVER_URL}/character/${id}`);
  return response.json();
};

export const getEpisode = async (id) => {
  const response = await fetch(`${SERVER_URL}/episode/${id}`);
  return response.json();
};
