import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 36px 12px;
  align-items: flex-end;
  background-color: #eaedf1;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;
  margin-bottom: 16px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Line = styled.div`
  height: 1px;
  background-color: #97d28b;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  display: block;
  height: 22px;
  border: none;
  background-color: #eaedf1;

  &::placeholder {
    color: #828382;
    font-size: 18px;
    letter-spacing: -0.72px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 147px;
  resize: none;
  border: none;
  border-bottom: 1px solid #97d28b;
  background-color: #eaedf1;

  &::placeholder {
    color: #828382;
    font-size: 18px;
    letter-spacing: -0.72px;
  }
`;
