import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const AccountSec = () => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editType, setEditType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: '',
    email: "",
    userName: "",
    password: "",
    address: "",
    zipCode: "",
    contactNumber: "",
  });
  const [initialFormData, setInitialFormData] = useState({});

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("auth_token")}`,
          "Accept": "application/json",
        },
      });
      const data = await response.json();
      const profileData = {
        firstName: data.profileUser.first_name,
        lastName: data.profileUser.last_name,
        middleName: data.profileUser.middle_initial,
        userName: data.profileUser.username,
        email: data.profileUser.email,
        password: data.profileUser.password,
        address: data.profileUser.address,
        zipCode: data.profileUser.zip_code,
        contactNumber: data.profileUser.contact_number,
      };
      setFormData(profileData);
      setInitialFormData(profileData);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleEditClick = (type) => {
    setEditType(type);
    setEditDialogOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const updatedFields = {};
    for (let key in formData) {
      if (formData[key] !== initialFormData[key]) {
        updatedFields[key] = formData[key];
      }
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/profile", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(updatedFields),
      });
      const data = await response.json();
      if (data.message === "Profile updated successfully") {
        alert("Profile updated successfully");
        fetchUserProfile();
      } else {
        alert("Error updating profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setEditDialogOpen(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold ml-56 mt-12 mb-8" style={{ fontSize: '2.15rem' }}>My Account</h1>

      <div className="flex flex-col max-w-4xl mx-auto mb-8">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Personal Details</h2>
            <Button onClick={() => handleEditClick("personal")}>Edit</Button>
          </div>
          <div className="flex flex-col space-y-2 mb-2">
            <span>Name: {formData.firstName + " " + formData.middleName + " " + formData.lastName}</span>
            <span>Username: {formData.userName}</span>
            <span>Password: </span> {/* if possible change password should be via email */}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Contact and Address Information</h2>
            <Button onClick={() => handleEditClick("contact")}>Edit</Button>
          </div>
          <div className="flex flex-col space-y-2 mb-2">
            <span>Email: {formData.email}</span>
            <span>Address: {formData.address}</span>
            <span>Contact Number: {formData.contactNumber}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-8 p-4">
        <h2 className="text-xl font-bold mb-4">Bank and Cards</h2>
        <div className="mb-4">
          <label className="block mb-1">Card Number</label>
          <Input placeholder="Card Number" />
        </div>
        <div className="flex space-x-4 mb-8">
          <div>
            <label className="block mb-1">Expiry Date (MM/YY)</label>
            <Input placeholder="MM/YY" />
          </div>
          <div>
            <label className="block mb-1">CVV</label>
            <Input placeholder="CVV" />
          </div>
        </div>
        <Button>Add New Card</Button>
      </div>

      {editDialogOpen && (
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogTitle>Edit {editType === "personal" ? "Personal Details" : "Contact and Address Information"}</DialogTitle>
            {editType === "personal" ? (
              <div>
                <div className="mb-4">
                  <label className="block mb-1">First Name</label>
                  <Input name="firstName" value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Middle Name</label>
                  <Input name="middleName" value={formData.middleName} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Last Name</label>
                  <Input name="lastName" value={formData.lastName} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Username</label>
                  <Input name="userName" value={formData.userName} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Password</label>
                  <Input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <Input name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Address</label>
                  <Input name="address" value={formData.address} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Contact Number</label>
                  <Input name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
                </div>
              </div>
            )}
            <DialogFooter>
              <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AccountSec;