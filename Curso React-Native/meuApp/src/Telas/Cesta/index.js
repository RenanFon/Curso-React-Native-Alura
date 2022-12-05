import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import Detalhes from './Componentes/Detalhes';
import itens from './Componentes/itens';
import Topo from './Componentes/Topo';

export default Cesta = function ({topo, detalhes, itens}) {
  return (
    <ScrollView>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <Itens {...itens} />
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
