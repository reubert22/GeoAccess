//@flow
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import TubularIcon from '../../../imgs/sprinkler.svg';
import Divisor from '../Divisor';

const Tubular = ({ item, handleModal }) => (
  <View style={{ flex: 1 }}>
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleModal}
        style={{
          width: '20%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <Text style={{ color: '#000', fontSize: 20, marginRight: 10 }}>{'<'}</Text>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15
            }}
          >
            <SvgUri width="30" height="30" source={TubularIcon} />
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: '60%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, marginRight: 10 }}>Poço tubular</Text>
      </View>
      <View
        style={{
          width: '20%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    </View>

    <ScrollView
      style={{
        width: '100%',
        marginBottom: 50,
        flex: 1,
        top: 50
      }}
    >
      <Divisor title="Localização" background="#4285f4" />
      <Text style={styles.info}>Estado: {item.uf.length !== 0 ? item.uf : 'Não informado'}</Text>
      <Text style={styles.info}>
        Municipio: {item.municipio.length !== 0 ? item.municipio : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Localização: {item.localizacao.length !== 0 ? item.localizacao : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Bacia: {item.bacia.length !== 0 ? item.bacia : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Sub-bacia: {item.subbacia.length !== 0 ? item.subbacia : 'Não informado'}
      </Text>

      <Divisor title="Perfuração" background="#4285f4" />
      <Text style={styles.info}>
        Data: {item.data_perfuracao.length !== 0 ? item.data_perfuracao : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Profundidade inicial:{' '}
        {item.profundidade_inicial.length !== 0
          ? `${item.profundidade_inicial} m`
          : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Profundidade final:{' '}
        {item.profundidade_final.length !== 0 ? `${item.profundidade_final} m` : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Diâmetro da boca:{' '}
        {item.diametro_boca_tubo_milimetros.length !== 0
          ? `${item.diametro_boca_tubo_milimetros} mm`
          : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Tipo Penetração:{' '}
        {item.tipo_penetracao.length !== 0 ? item.tipo_penetracao : 'Não informado'}
      </Text>

      <Divisor title="Níveis" background="#4285f4" />
      <Text style={styles.info}>
        Estático: {item.nivel_estatico.length !== 0 ? `${item.nivel_estatico} m` : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Dinâmico: {item.nivel_dinamico.length !== 0 ? `${item.nivel_dinamico} m` : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Vazão: {item.vazao.length !== 0 ? `${item.vazao}m³/h` : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Vazão especifica:{' '}
        {item.vazao_especifica.length !== 0 ? `${item.vazao_especifica} m³/h/m` : 'Não informado'}
      </Text>

      <Divisor title="Mais detalhes" background="#4285f4" />
      <Text style={styles.info}>
        Tipo bomba: {item.tipo_bomba.length !== 0 ? item.tipo_bomba : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Tipo captação: {item.tipo_captacao.length !== 0 ? item.tipo_captacao : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Tipo formação: {item.tipo_formacao.length !== 0 ? item.tipo_formacao : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Teste bombeamento:{' '}
        {item.tipo_teste_bombeamento.length !== 0 ? item.tipo_teste_bombeamento : 'Não informado'}
      </Text>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    top: 0,
    position: 'absolute',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#4285f4'
  },
  info: {
    color: '#676262',
    fontSize: 15,
    fontFamily: 'Roboto',
    margin: 5,
    marginLeft: 10,
    marginRight: 10
  }
});

export default Tubular;
