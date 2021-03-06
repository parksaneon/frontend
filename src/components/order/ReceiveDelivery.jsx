import React from 'react';
import ReceiveDeliveryChild from './ReceiveDeliveryChild';

const ReceiveDelivery = ({ title, state, onChange }) => {
  return (
    <div>
      <fieldset id="location">
        <legend className="pb-6 pt-10 text-1.4 font-semibold">
          {title}
          <span className="text-formStar">*</span>
        </legend>
        <ReceiveDeliveryChild id="door" title="문 앞" state={state} onChange={onChange} />
        <ReceiveDeliveryChild id="security" title="경비실" state={state} onChange={onChange} />
        <ReceiveDeliveryChild id="courier" title="택배함" state={state} onChange={onChange} />
        <ReceiveDeliveryChild id="other" title="기타 장소" state={state} onChange={onChange} />
      </fieldset>
    </div>
  );
};

export default ReceiveDelivery;
