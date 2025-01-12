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
  }
};

interface YearSelectorProps {
  value: string;
  onChange: (year: string) => void;
}


function YearSelector({ value, onChange }: YearSelectorProps) {
  const [yearOptions, setYearOptions] = useState<{ value: string; label: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadYears = async () => {
      try {
        const userId = extractUserIdFromToken(); 
        const registrationYear = await fetchRegistrationYear(userId); 
        const currentYear = new Date().getFullYear();
        const years = Array.from(
          { length: currentYear - registrationYear + 1 },
          (_, i) => {
            const year = (registrationYear + i).toString();
            return { value: year, label: year };
          }
        );
        setYearOptions(years); 
      } catch {
        setError("טעינת אפשרויות השנה נכשלה. אנא נסה שוב מאוחר יותר.");
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
      value={value}  // במקום year המקומי
      onChange={(e) => onChange(e.target.value)}  // במקום setYear המקומי
    />
  );
}

export default YearSelector;
