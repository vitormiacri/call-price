import React from 'react';
import PropTypes from 'prop-types';

import { Select } from './styles';

export default function Dropdown({ children, ...rest }) {
  return <Select {...rest}>{children}</Select>;
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};
