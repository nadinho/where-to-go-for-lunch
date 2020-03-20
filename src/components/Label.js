import styled from '@emotion/styled';
import React from 'react';

export default function InputCheckbox({ props }) {
  const MultipleChoices = styled.input`
    margin: 15px;
  `;

  return (
    <label>
      <MultipleChoices
        type="checkbox"
        className="checkbox"
        name="italienisch"
        value={fieldKitchen}
        onChange={event => {
          setFieldKitchen(event.target.name);
        }}
      ></MultipleChoices>
    </label>
  );
}
