//@flow
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import HollowIcon from '../../../imgs/water-well.svg';
import Divisor from '../Divisor';

const Hollow = ({ item, handleModal }) => (
  <View style={styles.generalContainer}>
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
            <SvgUri width="30" height="30" source={HollowIcon} />
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
        <Text style={{ color: 'white', fontSize: 18, marginRight: 10 }}>Poço escavado</Text>
        <Text style={{ color: 'white', fontSize: 12, marginRight: 10 }}>Cacimba/Cisterna</Text>
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
      <Divisor title="Localização" background="#E5454C" />
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
      <Text style={styles.info}>
        Situação: {item.situacao.length !== 0 ? item.situacao : 'Não informado'}
      </Text>

      <Divisor title="Perfuração" background="#E5454C" />
      <Text style={styles.info}>
        Data perfuração:{' '}
        {item.data_perfuracao.length !== 0 ? item.data_perfuracao : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Data medição: {item.data_medicao.length !== 0 ? item.data_medicao : 'Não informado'}
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

      <Divisor title="Níveis" background="#E5454C" />
      <Text style={styles.info}>
        Água: {item.nivel_agua.length !== 0 ? item.nivel_agua : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Dinâmico: {item.nivel_dinamico.length !== 0 ? `${item.nivel_dinamico} m` : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Estático: {item.nivel_estatico.length !== 0 ? `${item.nivel_estatico} m` : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Vazão: {item.vazao.length !== 0 ? item.vazao : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Vazão específica:{' '}
        {item.vazao_especifica.length !== 0 ? `${item.vazao_especifica} m³/h/m` : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Vazão estabilização:{' '}
        {item.vazao_estabilizacao.length !== 0
          ? `${item.vazao_estabilizacao} m³/h/m`
          : 'Não informado'}
      </Text>

      <Divisor title="Utilização" background="#E5454C" />
      <Text style={styles.info}>
        {item.uso_agua.length !== 0 ? item.uso_agua : 'Não informado'}
      </Text>

      <Divisor title="Mais detalhes" background="#E5454C" />
      <Text style={styles.info}>
        Tipo bomba: {item.tipo_bomba.length !== 0 ? item.tipo_bomba : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Tipo captação: {item.tipo_captacao.length !== 0 ? item.tipo_captacao : 'Não informado'}
      </Text>
      <Text style={styles.info}>
        Tipo formação: {item.tipo_formacao.length !== 0 ? item.tipo_formacao : 'Não informado'}
      </Text>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  generalContainer: { flex: 1 },
  container: {
    width: '100%',
    top: 0,
    position: 'absolute',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#E5454C'
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

export default Hollow;
