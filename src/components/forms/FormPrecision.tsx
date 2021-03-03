import * as React from 'react';
import styled from 'styled-components';
import Color from 'color';

import { Input } from './Input';
import { ColorPicker } from '../ColorPicker';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  div:first-of-type {
    margin-top: 0;
  }
`;

export interface IProps {
  value?: number;
  onValueChange: any;
}

export const FormPrecision: React.FC<IProps> = props => {
  const [inputValue, setInputValue] = React.useState<string>("4");

  const parseNumber = value => {
    setInputValue(value);
    try {
      let parsed = parseFloat(value);
      if (isNaN(parsed)) {
        console.log("nanananana")
        parsed = 1;
      }
      console.log(parsed)
      return props.onValueChange(parsed);
    } catch (_) {}
  };

  return (
    <Container>
      <Input
        placeholder="eg. #ABC123"
        label="Precision"
        type="number"
        maxLength="2"
        value={inputValue}
        onChange={parseNumber}
      />

      <ColorPicker onSelectColor={(color: Color) => parseNumber(color.hex())} />
    </Container>
  );
};
