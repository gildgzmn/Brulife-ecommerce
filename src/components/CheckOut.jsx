import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'; // Import Resizable components
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Import RadioGroup components
import { Label } from '@/components/ui/label'; // Import Label component

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod'); // Default payment method

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <h1>Check Out</h1>
      <ResizablePanelGroup direction="vertical" style={{ display: 'flex', height: 'calc(100vh - 40px)' }}>
        <ResizablePanel minSize={200} style={{ flex: '1', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', padding: '10px', overflow: 'auto' }}>
          <h2>Delivery Address</h2>
          <p>Jessie D. Ursel | (+63) 915 895 8843</p>
          <p>4986 Jadewood Farms, New Brunswick</p>

          <h2>Shopping Cart</h2>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ width: '100px', height: '100px', backgroundColor: '#f0f0f0', marginRight: '10px' }}></div>
            <div>
              <p>Alcorae</p>
              <p>₱ 999.99</p>
              <p>Quantity: 1 <a href="#">remove</a></p>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel minSize={200} style={{ flex: '1', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', padding: '10px', overflow: 'auto' }}>
          <h2>Order Summary</h2>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flexGrow: 1 }}>
              <p>Subtotal: ₱ 999.99</p>
              <p>Shipping Fee: ₱ 999.99</p>
              <p>Tax: ₱ 999.99</p>
            </div>
            <div>
              <h3>Vouchers</h3>
              <select>
                <option value="">Select Voucher</option>
                {/* Add voucher options here */}
              </select>
            </div>
            <h2>Estimated Total: ₱ 2999.97</h2>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel minSize={200} style={{ flex: '1', border: '1px solid #ccc', borderRadius: '4px', padding: '10px', overflow: 'auto' }}>
          <h2>Payment Information</h2>
          <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value)}>
            <div>
              <RadioGroupItem id="cod" value="cod" />
              <Label htmlFor="cod">Cash on Delivery</Label>
            </div>
            <div>
              <RadioGroupItem id="paypal" value="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
            <div>
              <RadioGroupItem id="credit" value="credit" />
              <Label htmlFor="credit">Credit or Debit Card</Label>
            </div>
          </RadioGroup>

          <Button style={{ marginTop: '20px' }} variant="primary">
            Place Order
          </Button>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default CheckOut;
