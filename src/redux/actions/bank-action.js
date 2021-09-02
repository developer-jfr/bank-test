import { bankAPI } from '../../api/api';

const actions  = {
    getData: (data) => ({type: 'GT/DATA/GET_DATA', payload: {data}}  ),
    deleteSpecificData: (bankId) => ({type: 'GT/DATA/DELETE_SPECIFIC_DATA', payload: {bankId}}  )
}

export const getData = () => async (dispatch) => {
    const response = await bankAPI.getData();
    console.log(response.data)
    dispatch(actions.getData(response.data))
}

export const createTranzaction = (id, amount, bankName) => async (dispatch) => {
    const response = await bankAPI.create(id, amount, bankName)
}

export const deleteThunk = (id) => async (dispatch) => {
    await bankAPI.delete(id)
}

