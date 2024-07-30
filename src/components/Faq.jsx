import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FaChevronRight } from "react-icons/fa";

const FAQSection = () => {
  return (
    <div className="w-full max-w-lg mx-auto mt-32 mb-64" style={{ fontSize: '1.1rem' }}>
      <h2 className="text-2xl font-semibold mb-6" style={{ fontSize: '1.75rem' }}>FAQ's</h2>
      <Accordion type="multiple">
        {/* FAQ item about placing an order */}
        <AccordionItem value="order">
          <AccordionTrigger>
            <div className="flex items-center p-4 text-xl font-medium">
              How to Place an Order
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside pl-6" style={{ fontSize: '1.15rem' }}>
              <li>Add some item(s) into your Shopping Bag. Select the size, color, or quantity if necessary.</li>
              <li>Check out when item selection is completed. Click the VIEW BAG button to review the item(s) selected and make some modifications if necessary.</li>
              <li>Log in to your Account.</li>
              <li>Place your order.</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        {/* FAQ item about the shopping cart */}
        <AccordionItem value="cart">
          <AccordionTrigger>
            <div className="flex items-center p-4 text-xl font-medium">
              Shopping Cart
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside pl-6" style={{ fontSize: '1.15rem' }}>
              <li>Add some item(s) into your Shopping Bag. Select the size, color, or quantity if necessary.</li>
              <li>Check out when item selection is completed. Click the VIEW BAG button to review the item(s) selected and make some modifications if necessary.</li>
              <li>Log in to your Account.</li>
              <li>Place your order.</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;