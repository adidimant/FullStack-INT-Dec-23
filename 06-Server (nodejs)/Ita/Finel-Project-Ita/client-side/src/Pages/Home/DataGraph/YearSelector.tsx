import { useState, useEffect } from "react";
import InputSelect from "../../../components/InputSelect/InputSelect"; // Adjust the path as needed
import { axiosClient } from "../../../axiosClient";
import { extractUserIdFromToken } from "../../../utils";

async function fetchRegistrationYear (userId: string) {
  try {
    const response = await axiosClient.get(
      `/api/receipts/registrationYear/${userId}`
    );
    return response.data.registrationYear;
  } catch (error) {
    console.error("Error fetching registration year:", error);
    throw new Error("Unable to fetch registration year.");
  }
};


function YearSelector() {
  const [yearOptions, setYearOptions] = useState<{ value: string; label: string }[]>([]);
  const [year, setYear] = useState(new Date().getFullYear().toString()); // Default to the current year
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadYears = async () => {
      try {
        const userId = extractUserIdFromToken(); // Extract the user ID from the token
        const registrationYear = await fetchRegistrationYear(userId); // Pass the user ID
        const currentYear = new Date().getFullYear();
        const years = Array.from(
          { length: currentYear - registrationYear + 1 },
          (_, i) => {
            const year = (registrationYear + i).toString();
            return { value: year, label: year };
          }
        );
        setYearOptions(years); // Update the state with year options
      } catch {
        setError("Failed to load year options. Please try again later.");
      }
    };

    loadYears();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <InputSelect
      title="בחר שנה"
      options={yearOptions}
      id="year-select"
      width="180px"
      fullFrame={true}
      value={year}
      onChange={(e) => setYear(e.target.value)} // Adjusted to event handling
    />
  );
}

export default YearSelector;
