import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const bankBrandImg =
    type === 'Visa' ? './../../visa.png' : './../../master-card.svg';

  return (
    <div
      className="credit-card d-flex flex-column p-4"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      <div className="row justify-content-end cc-brand">
        <img src={bankBrandImg} alt="credit card company" />
      </div>
      <div className="row justify-content-center cc-number">
        •••• •••• •••• {number.slice(12)}
      </div>
      <div className="row cc-details">
          {/* Expires {expirationMonth < 10 ? `0${expirationMonth}` : `${expirationMonth}`}/{`${expirationYear}`.slice(2)} {bank} */}
          <p className="row">Expires {`${expirationMonth}`.padStart(2, '0')}/{`${expirationYear}`.slice(2)} {bank}</p>
          <p className="row">{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
