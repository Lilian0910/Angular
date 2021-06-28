import React, { Component } from 'react'
import PropTypes from 'prop-types'

// ContextAPI 
//share state info across
const UserContext= React.createContext('default value');
const UserProvider=UserContext.Provider;
const UserConsumer=UserContext.Consumer;


export {UserProvider, UserConsumer}
