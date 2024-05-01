export async function fetchAllCountriesData() {
  const baseUrl = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching countries:", error);
    return [];
  }
}
