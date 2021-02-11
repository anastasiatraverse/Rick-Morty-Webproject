import { SERVER_URL } from "../Utils";

export const getCharacters = async (params) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(
    `${SERVER_URL}/character/${searchParams.toString()}`
  );
  return response.json();
};

export const getCharacter = async (id) => {
  // TODO: remove if unused
  // const searchParams = new URLSearchParams();
  const response = await fetch(`${SERVER_URL}/character/${id.toString()}`);
  return response.json();
};
