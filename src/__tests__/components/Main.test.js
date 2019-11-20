import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { format } from 'date-fns';

import Main from '~/pages/Main';

describe('Main component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should be able to calc a call', async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Main />);
    fireEvent.change(getByLabelText('Origem'), { target: { value: '11' } });
    fireEvent.change(getByLabelText('Destino'), { target: { value: '16' } });
    fireEvent.change(getByLabelText('Tempo da Chamada'), {
      target: { value: '30' },
    });
    fireEvent.change(getByLabelText('Plano'), { target: { value: '30' } });
    fireEvent.submit(getByTestId('form'));

    const faleMais = await waitForElement(() => getByText('Com FaleMais:'));
    const semFaleMais = await waitForElement(() => getByText('Sem FaleMais:'));
    expect(faleMais).toBeTruthy();
    expect(semFaleMais).toBeTruthy();
  });

  it('minutes field are required', async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Main />);
    fireEvent.change(getByLabelText('Tempo da Chamada'), {
      target: { value: '' },
    });
    fireEvent.submit(getByTestId('form'));

    const minutes = await waitForElement(() =>
      getByText('Informe o tempo da chamada')
    );

    expect(minutes).toBeTruthy();
  });

  it('should store calcs in localstorage and show history of calcs', async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Main />);
    fireEvent.change(getByLabelText('Origem'), { target: { value: '11' } });
    fireEvent.change(getByLabelText('Destino'), { target: { value: '17' } });
    fireEvent.change(getByLabelText('Tempo da Chamada'), {
      target: { value: '68' },
    });
    fireEvent.change(getByLabelText('Plano'), { target: { value: '30' } });
    fireEvent.submit(getByTestId('form'));

    const history = await waitForElement(() => getByText('68 minutos'));

    expect(history).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      '@historicSearch',
      JSON.stringify([
        {
          totalValue: 115.6,
          totalValuePlan: 71.05999999999999,
          date: format(new Date(), 'dd/MM/yyyy HH:mm'),
          source: '11',
          destiny: '17',
          plan: { id: '30', name: 'FaleMais 30' },
          minutes: 68,
        },
      ])
    );
  });

  it('should be able delete history and clear localStorage', () => {
    localStorage.setItem(
      '@historicSearch',
      JSON.stringify([
        {
          totalValue: 115.6,
          totalValuePlan: 71.05999999999999,
          date: format(new Date(), 'dd/MM/yyyy HH:mm'),
          source: '11',
          destiny: '17',
          plan: { id: '30', name: 'FaleMais 30' },
          minutes: 68,
        },
      ])
    );

    const { getByTestId } = render(<Main />);

    fireEvent.click(getByTestId('btn-delete'));

    expect(localStorage.removeItem).toBeCalledWith('@historicSearch');
  });

  it('should validate if tax values exists', async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Main />);

    fireEvent.change(getByLabelText('Origem'), { target: { value: '16' } });
    fireEvent.change(getByLabelText('Destino'), { target: { value: '17' } });
    fireEvent.change(getByLabelText('Tempo da Chamada'), {
      target: { value: '68' },
    });
    fireEvent.change(getByLabelText('Plano'), { target: { value: '30' } });
    fireEvent.submit(getByTestId('form'));

    const element = await waitForElement(() => getByText('CALCULAR'));

    expect(element).toBeTruthy();
  });

  it('source and destiny must be different', async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Main />);

    fireEvent.change(getByLabelText('Origem'), { target: { value: '17' } });
    fireEvent.change(getByLabelText('Destino'), { target: { value: '17' } });

    fireEvent.submit(getByTestId('form'));

    const element = await waitForElement(() =>
      getByText('Destino não pode ser igual a Origem')
    );

    expect(element).toBeTruthy();
  });
});
