import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Container, Header, InfoContainer } from './styles';

export default function HistoricSearch({ historicList, handleDelete }) {
  return (
    <Container>
      <Header>
        <strong>Suas consultas</strong>
        <button
          data-testid="btn-delete"
          type="button"
          title="Apagar histórico de consultas"
          onClick={() => handleDelete()}
        >
          <FaTrashAlt color="#F44336" />
        </button>
      </Header>

      {historicList.map((item, index) => (
        <InfoContainer key={index}>
          <p>
            <strong>Data:</strong> {item.date}
          </p>
          <p>
            <strong>Origem:</strong> 0{item.source}
          </p>
          <p>
            <strong>Destino:</strong> 0{item.destiny}
          </p>
          <p>
            <strong>Tempo:</strong> {item.minutes} minutos
          </p>
          <p>
            <strong>Plano</strong>: {item.plan.name}
          </p>
          <CurrencyFormat
            value={item.totalValuePlan}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            fixedDecimalScale
            renderText={value => (
              <p>
                <strong>Com Plano:</strong>
                <span className="valuePlan"> {value}</span>
              </p>
            )}
            decimalScale={2}
            prefix="R$"
          />
          <CurrencyFormat
            value={item.totalValue}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            fixedDecimalScale
            renderText={value => (
              <p>
                <strong>Sem Plano: </strong>
                <span className="value"> {value}</span>
              </p>
            )}
            decimalScale={2}
            prefix="R$"
          />
        </InfoContainer>
      ))}
    </Container>
  );
}

HistoricSearch.propTypes = {
  historicList: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
