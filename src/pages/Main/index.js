import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import CurrencyFormat from 'react-currency-format';

import { Container, Title, ResultContainer } from './styles';
import Card from '~/components/Card';
import HistoricSearch from '~/components/HistoricSearch';
import Form from './Form';

import CalcValue from '../../utils/CalcValue';

const database = require('../../database.json');

const validation = Yup.object().shape({
  source: Yup.number().required('Informe a origem'),
  destiny: Yup.number()
    .required('Informe o destino')
    .when('source', (source, field) =>
      source
        ? field.notOneOf(
            [Yup.ref('source')],
            'Destino não pode ser igual a Origem'
          )
        : field
    ),
  minutes: Yup.number().required('Informe o tempo da chamada'),
  plan: Yup.number().required('Informe um plano'),
});

export default function Main() {
  const [historicSearch, setHistoricSearch] = useState([]);
  const [value, setValue] = useState(0);
  const [valuePlan, setValuePlan] = useState(0);

  useEffect(() => {
    function loadHistoric() {
      const historic = localStorage.getItem('@historicSearch');
      if (historic) setHistoricSearch(JSON.parse(historic));
    }
    loadHistoric();
  }, []);

  useEffect(() => {
    localStorage.setItem('@historicSearch', JSON.stringify(historicSearch));
  }, [historicSearch]);

  function handleDelete() {
    localStorage.removeItem('@historicSearch');
    toast.success('Histórico excluído com sucesso!');
    setHistoricSearch([]);
  }

  function handleSubmit({ source, destiny, minutes, plan }) {
    const searchTax = database.tax.find(
      tax => tax.source === source && tax.destiny === destiny
    );

    if (searchTax) {
      const { totalValue, totalValuePlan } = CalcValue(
        searchTax,
        minutes,
        plan
      );

      const result = [
        {
          totalValue,
          totalValuePlan,
          date: format(new Date(), 'dd/MM/yyyy HH:mm'),
          source,
          destiny,
          plan: database.plans.find(item => item.minutes === plan),
          minutes,
        },
        ...historicSearch,
      ];

      setValue(totalValue);
      setValuePlan(totalValuePlan);
      setHistoricSearch(result);
    } else {
      toast.error('Valor indisponível no momento.');
    }
  }
  return (
    <Container>
      <Card>
        <Title>Quanto vou pagar?</Title>
        <Formik
          validationSchema={validation}
          initialValues={{
            source: '11',
            destiny: '16',
            minutes: '',
            plan: '30',
          }}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          {props => <Form {...props} />}
        </Formik>

        <ResultContainer data-testid="result">
          {value ? (
            <>
              <p>O valor desta ligação será:</p>
              <CurrencyFormat
                value={valuePlan}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                fixedDecimalScale
                renderText={number => (
                  <p>
                    <strong>Com FaleMais:</strong>
                    <span className="valuePlan"> {number}</span>
                  </p>
                )}
                decimalScale={2}
                prefix="R$"
              />
              <CurrencyFormat
                value={value}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                fixedDecimalScale
                renderText={number => (
                  <p>
                    <strong>Sem FaleMais: </strong>
                    <span className="value"> {number}</span>
                  </p>
                )}
                decimalScale={2}
                prefix="R$"
              />
            </>
          ) : null}
        </ResultContainer>
      </Card>

      {historicSearch.length > 0 ? (
        <Card>
          <HistoricSearch
            historicList={historicSearch}
            handleDelete={handleDelete}
          />
        </Card>
      ) : null}
    </Container>
  );
}
