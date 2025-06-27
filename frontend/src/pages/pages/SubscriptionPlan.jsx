import React, { useState } from "react";
import TitleImage from "../../components/TitleImage";
import SubscriptionCard from "../../components/SubscriptionCard";

const SubscriptionPlan = () => {
  const [plan, setPlan] = useState("Monthly");
  return (
    <div>
      <TitleImage title={"Subscription Plan"} />
      <div className="max-w-[1450px] mx-auto px-4">
        <div className="flex justify-center my-10">
          <div className="inline-flex border border-[#7A1233] rounded-lg overflow-hidden">
            <p
              onClick={() => setPlan("Monthly")}
              className={`px-5 sm:px-7 py-2 sm:py-3 font-semibold text-base sm:text-xl cursor-pointer ${
                plan === "Monthly"
                  ? "bg-[#7A1233] text-white"
                  : "text-black bg-white"
              }`}
            >
              Monthly
            </p>
            <p
              onClick={() => setPlan("Yearly")}
              className={`px-5 sm:px-7 py-2 sm:py-3 font-semibold text-base sm:text-xl cursor-pointer ${
                plan === "Yearly"
                  ? "bg-[#7A1233] text-white"
                  : "text-black bg-white"
              }`}
            >
              Yearly
            </p>
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold">
          Choose a Plan that's right for you
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 pb-14 ">
          {plan === "Monthly" ? (
            <>
              <SubscriptionCard planType={"Basic"} billingCycle={'Month'} price={"Free"} propertyLimit={3} />
              <SubscriptionCard planType={"Budget"} billingCycle={'Month'} price={"200"} propertyLimit={5} />
              <SubscriptionCard planType={"Standard"} billingCycle={'Month'} price={"1000"} propertyLimit={10} />
              <SubscriptionCard planType={"Premium"} billingCycle={'Month'} price={"3000"} propertyLimit={20} />
            </>
          ) : (
            <>
              <SubscriptionCard planType={"Basic"} billingCycle={'Year'} price={"Free"} propertyLimit={3} />
              <SubscriptionCard planType={"Budget"} billingCycle={'Year'} price={"2200"} propertyLimit={5} />
              <SubscriptionCard planType={"Standard"} billingCycle={'Year'} price={"9000"} propertyLimit={10} />
              <SubscriptionCard planType={"Premium"} billingCycle={'Year'} price={"27000"} propertyLimit={20} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
