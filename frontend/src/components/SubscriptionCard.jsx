import React from "react";

const SubscriptionCard = ({ planType, price, billingCycle, propertyLimit }) => {
  return (
    <div className="flex flex-col gap-9 rounded-xl shadow-xl p-6 w-full">
      <div className="bg-gray-100 text-sm px-3 py-1 rounded-full self-start font-medium">
        {planType}
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-gray-500 text-sm">{billingCycle}ly Price</div>

        <div className="text-3xl font-bold">
          {price === 'Free' ? `${price}` : `Pkr ${price}` }
          <span className="text-gray-500 text-base font-normal">/{billingCycle}</span>
        </div>
      </div>

      <div className="flex items-center font-medium gap-1">
        ✅ <span className="text-black">Property limit: {propertyLimit}</span>
      </div>

      <button className="w-full bg-[#7A1233] text-white font-semibold py-2 rounded-lg hover:bg-[#600f2a] cursor-pointer">
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionCard;
