import { useState } from 'react';
import TranspTextBtn from '../TranspTextBtn/TranspTextBtn';

import {
  Form,
  Wrap,
  InputWrap,
  Label,
  Input,
  TextArea,
  Line,
} from './CallbackForm.styled';

const initialState = {
  name: '',
  mail: '',
  phone: '',
  message: '',
};

const CallbackForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);

    setFormData(initialState);
  };

  return (
    <Form id="contact-form" onSubmit={handleSubmit}>
      <Wrap>
        <InputWrap>
          <Label htmlFor="name">Full name:</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Rosie"
            pattern=""
            required
          />
          <Line />
        </InputWrap>

        <InputWrap>
          <Label htmlFor="mail">E-mail:</Label>
          <Input
            id="mail"
            type="email"
            name="mail"
            placeholder="johnrosie@gmail.com"
            value={formData.mail}
            onChange={handleChange}
            required
          />
          <Line />
        </InputWrap>

        <InputWrap>
          <Label htmlFor="phone">Phone:</Label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="380961234567"
            value={formData.phone}
            onChange={handleChange}
            pattern="380\d{9}"
            required
          />
          <Line />
        </InputWrap>

        <InputWrap>
          <Label htmlFor="message">Message:</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            maxLength="400"
          />
        </InputWrap>
      </Wrap>

      <TranspTextBtn type="submit" text={'Send'} />
    </Form>
  );
};

export default CallbackForm;
