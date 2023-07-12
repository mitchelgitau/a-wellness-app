import { useQuery } from "@tanstack/react-query";

export const fetchWeatherData = async (location: string) => {
  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current&key=812f296476174b1c9d88c6e1e9659e38&city=${location}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const useWeather = (location: string) => {
  return useQuery(["weather", location], () => fetchWeatherData(location));
};
