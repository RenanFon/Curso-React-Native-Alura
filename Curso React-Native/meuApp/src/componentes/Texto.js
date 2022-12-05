import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default Texto = function ({children, style}) {
  let estilo = estilos.texto;
  if (style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }
  return <Text style={[style, estilo]}>{children}</Text>;
};

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'Montserrat-Regular',
  },
  textoNegrito: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'normal',
  },
});
