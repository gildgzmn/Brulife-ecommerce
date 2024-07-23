import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const AccountSec = () => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editType, setEditType] = useState("");
  const [formData, setFormData] = useState({
    name: "Jessica D. Unuisi",
    email: "jessica.unuisi@gmail.com",
    password: "********",
    address: "2982 Unknownat Parking, New Brunswick, Malabu, SWZ 20001",
    mobileNumber: "+1 (245) 455-6683",
    ewallet: "",  // New field
    phoneNumber: ""  // New field
  });

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

  const handleSave = () => {
    setEditDialogOpen(false);
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
            <span>Name: {formData.name}</span>
            <span>Email: {formData.email}</span>
            <span>Password: {formData.password}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Contact and Address Information</h2>
            <Button onClick={() => handleEditClick("contact")}>Edit</Button>
          </div>
          <div className="flex flex-col space-y-2 mb-2">
            <span>Name: {formData.name}</span>
            <span>Address: {formData.address}</span>
            <span>Mobile Number: {formData.mobileNumber}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-8 p-4">
        <h2 className="text-xl font-bold mb-4">E-wallet and Phone Number</h2>
        <div className="mb-4">
          <label className="block mb-1">E-wallet ID</label>
          <Input name="ewallet" placeholder="E-wallet ID" value={formData.ewallet} onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone Number</label>
          <Input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} />
        </div>
        <Button>Add E-wallet</Button>
      </div>

      {editDialogOpen && (
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogTitle>Edit {editType === "personal" ? "Personal Details" : "Contact and Address Information"}</DialogTitle>
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
