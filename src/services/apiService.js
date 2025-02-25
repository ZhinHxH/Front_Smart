import axios from 'axios';
const baseUrl = 'http://localhost:8000/api/v1/';

//servicio para hacerle get a los valores de los medidores
const getAll = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`meters?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Servicio para crear una nueva incidencia
export const getIncidencia = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`incidencias?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//servicio para hacerle get a los valores de los medidores
const getAllAlarms = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`alarms?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching alarms:', error);
    throw error;
  }
};

//servicio para hacerle get a los valores de los medidores
const getAllCombined = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`vista-combinada?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching alarms:', error);
    throw error;
  }
};

//servicio para hacerle get a los valores de los medidores
const getCreator = async () => {
    try {
      const response = await axios.get(baseUrl+'unique-creators/?format=json');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

//servicio para hacerle get a los valores de los medidores
const getFallaType = async () => {
  try {
    const response = await axios.get(baseUrl+'unique-falla-type/?format=json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//servicio para hacerle get a los valores de los medidores
const getFallaDesc = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`unique-fallaDesc/?format=json&${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//servicio para hacerle get a los valores de los medidores
const getStatus = async () => {
  try {
    const response = await axios.get(baseUrl+'unique-status/?format=json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//servicio para hacerle post a un nuevo trigger del pipeline principal
export const postTrigger = async (data) => {
    try {
      const response = await axios.post(baseUrl+'dags/STG4_MEDIDORES/dagRuns', data);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : 'Network Error';
    }
};

//servicio para hacerle post a un nuevo trigger del pipeline principal
export const postTriggerIncidencia = async (data) => {
  try {
    const response = await axios.post(baseUrl+'dags/WF_INCIDENCIAS/dagRuns', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Network Error';
  }
};

//Servicio para generar el autocomplete
const autocompleteMeters = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`autocomplete/?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//Servicio para generar el autocomplete
const autocompleteGateway = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`autocomplete-gateway/?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//Servicio para generar el autocomplete de las alarmas
const autocompleteAlarms = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`autocomplete-alarma/?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//Servicio para generar el autocomplete de las alarmas
const autocompleteCombined = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`autocomplete-combinada/?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//Servicio para generar las tapas Unicas
const getTapas = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`unique-tapaDesc/?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//Servicio para actualizar los valores de un medidor
export const updateMeter = async (meterId, updates) => {
  try {
    const response = await axios.patch(`${baseUrl}meters/${meterId}/`, updates, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating meter:', error);
    throw error.response ? error.response : 'Network Error';
  }
};

// Servicio para crear una nueva incidencia
export const postIncidencia = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}incidencias/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating incidencia:', error);
    throw error.response ? error.response.data : 'Network Error';
  }
};

//Servicio para generar las tapas Unicas
const getGateways = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`gateways/?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//Servicio para generar las tapas Unicas
const getGatewaysMysql = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await axios.get(baseUrl+`gateways_mysql/?format=json&${queryString}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Servicio para crear una nueva incidencia
export const postGateways = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}gateways/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating incidencia:', error);
    throw error.response ? error.response.data : 'Network Error';
  }
};


export default {
  postTriggerIncidencia, 
  getAll, 
  postTrigger, 
  getCreator, 
  autocompleteMeters, 
  getTapas, 
  updateMeter, 
  getStatus, 
  getAllAlarms, 
  getFallaType, 
  getFallaDesc, 
  autocompleteAlarms, 
  postIncidencia, 
  getGateways, 
  postGateways, 
  getAllCombined, 
  autocompleteCombined,
  getGatewaysMysql,
  autocompleteGateway,
  getIncidencia
};
