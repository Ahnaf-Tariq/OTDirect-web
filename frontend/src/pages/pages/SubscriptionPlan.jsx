import React, { useState } from "react";
import TitleImage from "../../components/TitleImage";
import SubscriptionCard from "../../components/SubscriptionCard";

const SubscriptionPlan = () => {
  const [plan, setPlan] = useState("Monthly");
  return (
    <div>
      <TitleImage title={"Subscription Plan"} />
      <div className="max-w-[1450px] mx-auto">
        <div className="flex justify-center my-10">
          <div className="inline-flex border border-[#7A1233] rounded overflow-hidden">
            <p
              onClick={() => setPlan("Monthly")}
              className={`px-7 py-3 font-semibold text-xl cursor-pointer ${
                plan === "Monthly"
                  ? "bg-[#7A1233] text-white"
                  : "text-black bg-white"
              }`}
            >
              Monthly
            </p>
            <p
              onClick={() => setPlan("Yearly")}
              className={`px-7 py-3 font-semibold text-xl cursor-pointer ${
                plan === "Yearly"
                  ? "bg-[#7A1233] text-white"
                  : "text-black bg-white"
              }`}
            >
              Yearly
            </p>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">
          Choose a Plan that's right for you
        </h1>
        <div>
          <SubscriptionCard />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
