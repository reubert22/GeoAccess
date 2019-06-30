//@flow
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Picker,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';

class NewPoint extends PureComponent {
  state = {
    option: 'Poço tubular',
    uf: 'MG',
    municipio: '',
    localizacao: '',
    bacia: '',
    subbacia: '',
    data: '',
    profundidade_inicial: '',
    profundidade_final: '',
    diametro_da_boca: '',
    tipo_penetracao: '',
    nivel_estatico: '',
    nivel_dinamico: '',
    vazao: '',
    vazao_especifica: ''
  };

  handleInformationSubmit = () => {
    const {
      option,
      uf,
      municipio,
      localizacao,
      bacia,
      subbacia,
      data,
      profundidade_inicial,
      profundidade_final,
      diametro_da_boca,
      tipo_penetracao,
      nivel_estatico,
      nivel_dinamico,
      vazao,
      vazao_especifica
    } = this.state;

    this.props.handleAdd({
      option,
      uf,
      municipio,
      localizacao,
      bacia,
      subbacia,
      data,
      profundidade_inicial,
      profundidade_final,
      diametro_da_boca,
      tipo_penetracao,
      nivel_estatico,
      nivel_dinamico,
      vazao,
      vazao_especifica
    });
  };

  render() {
    return (
      <Modal
        style={{
          flex: 1,
          margin: 10,
          position: 'absolute'
        }}
        onRequestClose={() => {}}
      >
        <ScrollView
          style={{
            width: '100%',
            marginBottom: 0,
            flex: 1
          }}
        >
          <View
            style={{
              width: '100%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              backgroundColor: '#cecece',
              paddingLeft: 15
            }}
          >
            <TouchableOpacity onPress={this.props.handleDismiss} style={{ width: '15%' }}>
              <Text style={{ color: '#000', fontSize: 20, marginRight: 0 }}>{'<'}</Text>
            </TouchableOpacity>
            <View style={{ width: '65%', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>Adicionar poço</Text>
            </View>
            <View style={{ width: '15%', backgroundColor: 'yellow' }} />
          </View>

          <View
            style={{
              width: '100%',
              flex: 1,
              padding: 10
            }}
          >
            <Picker
              style={{ height: 50, width: '100%', marginBottom: 20 }}
              selectedValue={this.state.option}
              onValueChange={itemValue => this.setState({ option: itemValue })}
            >
              <Picker.Item label="Tubular" value="Poço tubular" />
              <Picker.Item label="Escavado" value="Poço escavado(cacimba/cisterna)" />
            </Picker>

            <View style={styles.divisor}>
              <Text style={styles.txtDivisor}>Localização</Text>
            </View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextInput
                style={{
                  width: '30%',
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginBottom: 30,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 1
                }}
                onChangeText={uf => this.setState({ uf })}
                value={this.state.uf}
                placeholder="UF"
                editable={false}
              />
              <TextInput
                style={{
                  width: '65%',
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginBottom: 30,

                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 1
                }}
                onChangeText={municipio => this.setState({ municipio })}
                value={this.state.municipio}
                placeholder="Município"
              />
            </View>
            <TextInput
              style={styles.inputInfo}
              onChangeText={localizacao => this.setState({ localizacao })}
              value={this.state.localizacao}
              placeholder="Localização"
            />
            <TextInput
              style={styles.inputInfo}
              onChangeText={bacia => this.setState({ bacia })}
              value={this.state.bacia}
              placeholder="Bacia"
            />
            <TextInput
              style={styles.inputInfo}
              onChangeText={subbacia => this.setState({ subbacia })}
              value={this.state.subbacia}
              placeholder="Sub-bacia"
            />

            <View style={styles.divisor}>
              <Text style={styles.txtDivisor}>Perfuração</Text>
            </View>

            <TextInput
              style={styles.inputInfo}
              onChangeText={data => this.setState({ data })}
              value={this.state.data}
              placeholder="Data"
            />
            <TextInput
              style={styles.inputInfo}
              onChangeText={profundidade_inicial => this.setState({ profundidade_inicial })}
              value={this.state.profundidade_inicial}
              placeholder="Profundidade inicial"
            />
            <TextInput
              style={styles.inputInfo}
              onChangeText={profundidade_final => this.setState({ profundidade_final })}
              value={this.state.profundidade_final}
              placeholder="Profundidade final"
            />
            <TextInput
              style={styles.inputInfo}
              onChangeText={diametro_da_boca => this.setState({ diametro_da_boca })}
              value={this.state.diametro_da_boca}
              placeholder="Diâmetro da boca"
            />
            <TextInput
              style={styles.inputInfo}
              onChangeText={tipo_penetracao => this.setState({ tipo_penetracao })}
              value={this.state.tipo_penetracao}
              placeholder="Tipo de penetração"
            />

            <View style={styles.divisor}>
              <Text style={styles.txtDivisor}>Níveis</Text>
            </View>
            <TextInput
              style={styles.inputInfo}
              onChangeText={nivel_estatico => this.setState({ nivel_estatico })}
              value={this.state.nivel_estatico}
              placeholder="Estático"
            />
            <TextInput
              style={styles.inputInfo}
              onChangeText={nivel_dinamico => this.setState({ nivel_dinamico })}
              value={this.state.nivel_dinamico}
              placeholder="Dinâmico"
            />
            <TextInput
              style={styles.inputInfo}
              onChangeText={vazao => this.setState({ vazao })}
              value={this.state.vazao}
              placeholder="Vazão"
            />
            <TextInput
              style={styles.inputInfo}
              onChangeText={vazao_especifica => this.setState({ vazao_especifica })}
              value={this.state.vazao_especifica}
              placeholder="Vazão específica"
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: `${this.state.option.includes('tubular') ? '#4285f4' : '#E5454C'}`,
              width: '95%',
              bottom: 10,
              left: 10,
              right: 10,
              borderRadius: 30,
              height: 60,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => this.handleInformationSubmit()}
          >
            <Text style={{ fontSize: 20, color: '#fff' }}>Salvar</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  divisor: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cecece',
    marginBottom: 10,
    borderRadius: 3
  },
  txtDivisor: { fontSize: 20, color: '#fff' },
  inputInfo: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1
  }
});

export default NewPoint;
