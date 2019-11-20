import React from 'react';

import { FormContainer, FormControl, Button } from './styles';
import Input from '~/components/Input';
import Dropdown from '~/components/Dropdown';

export default function Form({
  values: { source, destiny, minutes, plan },
  handleSubmit,
  handleChange,
  errors,
  touched,
}) {
  return (
    <FormContainer>
      <form data-testid="form" onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor="source">Origem</label>
          <Dropdown
            id="source"
            name="source"
            error={errors.source}
            value={source}
            onChange={handleChange}
          >
            <option value="11">011</option>
            <option value="16">016</option>
            <option value="17">017</option>
            <option value="18">018</option>
          </Dropdown>
        </FormControl>
        <FormControl>
          <label htmlFor="destiny">Destino</label>
          <Dropdown
            id="destiny"
            name="destiny"
            error={errors.destiny}
            value={destiny}
            onChange={handleChange}
          >
            <option value="11">011</option>
            <option value="16">016</option>
            <option value="17">017</option>
            <option value="18">018</option>
          </Dropdown>
          {errors.destiny && touched.destiny ? (
            <p className="error">{errors.destiny}</p>
          ) : null}
        </FormControl>
        <FormControl>
          <label htmlFor="minutes">Tempo da Chamada</label>
          <Input
            id="minutes"
            type="number"
            name="minutes"
            min="1"
            error={errors.minutes}
            value={minutes}
            onChange={handleChange}
            placeholder="Em minutos"
          />
          {errors.minutes && touched.minutes ? (
            <p className="error">{errors.minutes}</p>
          ) : null}
        </FormControl>
        <FormControl>
          <label htmlFor="plan">Plano</label>
          <Dropdown
            id="plan"
            name="plan"
            error={errors.plan}
            value={plan}
            onChange={handleChange}
          >
            <option value="30">FaleMais 30</option>
            <option value="60">FaleMais 60</option>
            <option value="120">FaleMais 120</option>
          </Dropdown>
        </FormControl>
        <Button type="submit">CALCULAR</Button>
      </form>
    </FormContainer>
  );
}
