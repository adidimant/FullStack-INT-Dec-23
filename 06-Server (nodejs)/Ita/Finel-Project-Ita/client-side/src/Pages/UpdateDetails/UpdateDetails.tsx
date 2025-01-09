import { memo, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "../../components/Box/Box";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Button from "../../components/Button/Button"; // Assuming a Button component exists
import { axiosClient } from "../../axiosClient";
import Alert from '@mui/material/Alert';
import "./UpdateDetails.css";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  userId: string;
  companyName: string;
}

const fieldLabels: Record<UserDetailsKeys, string> = {
    fullName: "שם מלא",
    companyName: "שם החברה",
    companyNumber: "מספר חברה",
    address: "כתובת",
    city: "עיר",
    profilePic: "תמונת פרופיל",
  };


function UpdateDetails() {
    const [userDetails, setUserDetails] = useState({
        fullName: "",
        companyName: "",
        companyNumber: "",
        address: "",
        city: "",
        profilePic: null,
      });
    
      const [editFields, setEditFields] = useState({
        fullName: false,
        companyName: false,
        companyNumber: false,
        address: false,
        city: false,
        profilePic: false,
      });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            throw new Error("No authentication token found");
        }

        const decodedToken = jwtDecode<DecodedToken>(token);
        const userId = decodedToken.userId;
        const { data } = await axiosClient.get(`/api/users/details/${userId}`);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleEditToggle = (field) => {
    setEditFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleFieldChange = (field, value) => {
    setUserDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdateDetails = async () => {
    setLoading(true);
    try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            throw new Error("No authentication token found");
        }

        const decodedToken = jwtDecode<DecodedToken>(token);
        const userId = decodedToken.userId;

        const formData = new FormData();
        formData.append("fullName", userDetails.fullName);
        formData.append("companyName", userDetails.companyName);
        formData.append("companyNumber", userDetails.companyNumber);
        formData.append("address", userDetails.address || '');
        formData.append("city", userDetails.city || '');
        if (userDetails.profilePic) {
            formData.append("profilePic", userDetails.profilePic);
        }

        await axiosClient.put(`/api/users/details/${userId}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        setSuccess(true);
    } catch (error) {
        console.error("Error updating user details:", error);
        setError("שגיאה בעדכון פרטים, נסה שוב מאוחר יותר");
    } finally {
        setLoading(false);
    }setLoading(true);
    try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            throw new Error("No authentication token found");
        }

        const decodedToken = jwtDecode<DecodedToken>(token);
        const userId = decodedToken.userId;

        const formData = new FormData();
        formData.append("fullName", userDetails.fullName);
        formData.append("companyName", userDetails.companyName);
        formData.append("companyNumber", userDetails.companyNumber);
        formData.append("address", userDetails.address || '');
        formData.append("city", userDetails.city || '');
        if (userDetails.profilePic) {
            formData.append("profilePic", userDetails.profilePic);
        }

        await axiosClient.put(`/api/users/details/${userId}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        setSuccess(true);
    } catch (error) {
        console.error("Error updating user details:", error);
        setError("שגיאה בעדכון פרטים, נסה שוב מאוחר יותר");
    } finally {
        setLoading(false);
    }
  };

  type UserDetailsKeys = keyof typeof userDetails;

  return (
    <Box className="update-details-form">
    <h3>עידכון פרטים</h3>
    {Object.keys(userDetails).map((field) => {
      const typedField = field as UserDetailsKeys; 
      return (
        <div className="update-details-field" key={typedField}>
          <label htmlFor={typedField}>{fieldLabels[typedField]}</label>
          {editFields[typedField] ? (
            <Input
              id={typedField}
              type={typedField === "profilePic" ? "file" : "text"}
              value={typedField === "profilePic" ? undefined : userDetails[typedField]}
              onChange={(e) =>
                handleFieldChange(
                  typedField,
                  typedField === "profilePic" ? e.target.files[0] : e.target.value
                )
              }
              fullFrame={true}
            />
          ) : (
            <p>{userDetails[typedField]}</p>
          )}
          <span className="icon" onClick={() => handleEditToggle(typedField)}>
            {editFields[typedField] ? <SaveIcon /> : <EditIcon />}
          </span>
        </div>
      );
    })}
    <Button
      name="updateDetailsButton"
      onClick={handleUpdateDetails}
      text={loading ? <CircularProgress size="20px" color="inherit" /> : "עדכן פרטים"}
    />
    {success && (
        <Alert severity="success" className="alert-message">
          פרטים עודכנו בהצלחה!
        </Alert>
      )}
      {error && (
        <Alert severity="error" className="alert-message">
          {error}
        </Alert>
      )}
  </Box>
  );
}

export default memo(UpdateDetails);
