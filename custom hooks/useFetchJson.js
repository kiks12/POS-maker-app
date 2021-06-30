/* useFetchJson dependencies */
import {} from "react";

/* useFetchJson function */
export const useFetchJson = async (apiUrl) => {
  try {
    const rawData = await fetch(apiUrl);
    const jsonData = await rawData.json();
    return jsonData;
  } catch (err) {
    console.error(err);
  }
};
