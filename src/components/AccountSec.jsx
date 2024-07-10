import React, { useState } from 'react';
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AccountSec = () => {
  const [editDialog, setEditDialog] = useState(false);
  const [editType, setEditType] = useState("");
  const [formData, setFormData] = useState({
    name: "Jessica D. Unuisi",
    email: "jessica.unuisi@gmail.com",
    password: "********",
    address: "2982 Unknownat Parking, New Brunswick, Malabu, SWZ 20001",
    mobileNumber: "+1 (245) 455-6683",
  });

  const handleEditClick = (type) => {
    setEditType(type);
    setEditDialog(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditDialog(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold ml-56 mt-12 mb-8" style={{ fontSize: '2.15rem' }}>My Account</h1>

      <Card className="mb-4 max-w-4xl mx-auto p-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Personal Details</CardTitle>
            <Button onClick={() => handleEditClick("personal")}>Edit</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2 mb-2">
            <span>Name: {formData.name}</span>
            <span>Email: {formData.email}</span>
            <span>Password: {formData.password}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4 max-w-4xl mx-auto p-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Contact and Address Information</CardTitle>
            <Button onClick={() => handleEditClick("contact")}>Edit</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2 mb-2">
            <span>Name: {formData.name}</span>
            <span>Address: {formData.address}</span>
            <span>Mobile Number: {formData.mobileNumber}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-4xl mx-auto mb-8 p-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Bank and Cards</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>

      {editDialog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Edit {editType === "personal" ? "Personal Details" : "Contact and Address Information"}</h2>
            {editType === "personal" ? (
              <div>
                <div className="mb-4">
                  <label className="block mb-1">Name</label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <Input name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Password</label>
                  <Input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label className="block mb-1">Name</label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Address</label>
                  <Input name="address" value={formData.address} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Mobile Number</label>
                  <Input name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
                </div>
              </div>
            )}
            <div className="flex justify-end space-x-4">
              <Button onClick={() => setEditDialog(false)}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSec;
