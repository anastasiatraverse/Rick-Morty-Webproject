import { SERVER_URL } from "../Utils";

export const getCharacters = async (params) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`${SERVER_URL}/character/${searchParams.toString()}`);
  return response.json();
};

export const getCharacter = async (id) => {
  const response = await fetch(`${SERVER_URL}/character/${id.toString()}`);
  return response.json();
};
