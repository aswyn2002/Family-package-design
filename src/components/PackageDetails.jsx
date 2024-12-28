import React, { useState } from "react";
import Counter from "./Counter";
import "../styles/PackageDetails.css";
import { HiUserGroup } from "react-icons/hi2";
import { BsPersonFillAdd } from "react-icons/bs";

const PackageDetails = ({ total, setTotal }) => {
  const [packageCount, setPackageCount] = useState(0);
  const [extraCount, setExtraCount] = useState(0);

  const handlePackageChange = (count) => {
    setPackageCount(count);
    setTotal(499 * count + 225 * extraCount);
  };

  const handleExtraChange = (count) => {
    setExtraCount(count);
    setTotal(499 * packageCount + 225 * count);
  };

  return (
    <div className="package-details">
      <Counter
        groupIcon={<HiUserGroup />}
        label="Family Adventure Package  "
        count={packageCount}
        packagename={
          <>
            <span>Inclusion:</span>5 adults <span>+</span>2 children{" "}
            <span>(Under 5 years old & below 1.22 m in height)</span>
          </>
        }
        price={499}
        info="5 Adults + 2 Children"
        onChange={handlePackageChange}
      />
      <Counter
        className="second-counter"
        groupIcon={<BsPersonFillAdd />}
        label={
          <>
            <h3>Additional ticket (adult or Junior) will be</h3>
          </>
        }
        info="Extra Adult / Junior"
        count={extraCount}
        price={225}
        onChange={handleExtraChange}
      />
      <div className="termsAndConditions">
        <div className="terms">
          <h4>Terms and Conditions</h4>
          <ol>
            <li>
              The package includes admission tickets for 5 guests + 2 children
              under 5 years old & below 1.22m in height.
            </li>
            <li>
              Additional guests (Adult or Junior) will be charged QAR 225 per
              person. (Maximum of 3 additional guests can be added to the
              package)
            </li>
            <li>
              Offer cannot be combined with other promotions or online bookings
            </li>
            <li> Offer applies only to direct family members</li>
            <li>General T&C applies</li>
          </ol>
        </div>
        <div className="total">
          <h3 className="total-price">Total: QAR {total}</h3>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
