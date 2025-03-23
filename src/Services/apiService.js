import axios from "axios";

const apiService = async () => {
  const apiKey = '$2a$10$h3/JXpfIVLOC7GB8AD6Q0ODcusMSM8oVcIHS8Ohj3pbFX6ehSQsJ.';
  try {
    const response = await axios.get(
      "https://api.jsonbin.io/v3/b/67dfcdc58561e97a50f12f01",
      {
        headers: {
          "X-MASTER-KEY": apiKey,
        },
      }
    );
    console.log(response.data); // Log the entire response
    return response.data.record.contactDetails; // Return the actual data record
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default apiService;
