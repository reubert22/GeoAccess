import { motailsStore } from "../localStorage/GeoAccessStore";
import { initialPLaces } from "../utils/initialPlaces";
import * as actions from "../actions/places";

export const savePlaces = () => async () => {
  try {
    const firstAccess = await motailsStore.getItem("@first_access");
    if (firstAccess === null) {
      motailsStore.saveItem("@first_access", true);
      motailsStore.saveItem("@places", initialPLaces);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPlaces = () => async dispatch => {
  try {
    const places = await motailsStore.getItem("@places");
    dispatch(actions.successSavePlaces(JSON.parse(places)));
  } catch (error) {
    console.log(error);
  }
};

export const addNewPlace = data => async dispatch => {
  try {
    const places = await motailsStore.getItem("@places");

    const newPlace = {
      ponto: "",
      localizacao: data.localizacao || "",
      cota_terreno: "",
      latitude: "",
      longitude: "",
      latitude_decimal: `${data.latitude}` || "",
      longitude_decimal: `${data.longitude}` || "",
      utme: "",
      utmn: "",
      bacia: data.bacia || "",
      municipio: data.municipio || "",
      natureza: data.option || "",
      subbacia: data.subbacia || "",
      situacao: "",
      uf: data.uf || "",
      uso_agua: "",
      data_perfuracao: data.data || "",
      metodo_perfuracao: "",
      perfurador: "",
      diametro_boca_tubo_milimetros: data.diametro_da_boca || "",
      tipo_penetracao: data.tipo_penetracao || "",
      condicao: "",
      tipo_captacao: "",
      data_medicao: "",
      nivel_agua: "",
      vazao: data.vazao || "",
      nivel_bombeando: "",
      profundidade_inicial: data.profundidade_inicial || "",
      profundidade_final: data.profundidade_final || "",
      tipo_formacao: "",
      data_teste: "",
      tipo_teste_bombeamento: "",
      surgencia: "",
      nivel_dinamico: data.nivel_dinamico || "",
      nivel_estatico: data.nivel_estatico || "",
      vazao_especifica: "",
      vazao_estabilizacao: "",
      tipo_bomba: "",
      data_analise: "",
      data_coleta: "",
      condutividade_eletrica: "",
      cor: "",
      turbidez: ""
    };
    const obj = JSON.parse(places);
    const newPlaces = [...obj, newPlace];
    motailsStore.saveItem("@places", newPlaces);
    dispatch(actions.successSavePlaces(newPlaces));
  } catch (error) {
    console.log(error);
  }
};
