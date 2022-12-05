import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Texto from '../../../componentes/Texto';

export default Botao = function ({children}) {
  return (
    <TouchableOpacity style={estilos.botao}>
      <Text style={estilos.textoBotao}>{children}</Text>
    </TouchableOpacity>
  );
};

const estilos = {
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
  },
};
