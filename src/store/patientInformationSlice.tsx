import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  patientInfo: {},
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setPatientDetails: (state, action) => {
      state.patientInfo = action.payload;
    },
  },
});

export const {setPatientDetails} = patientSlice.actions;
export default patientSlice.reducer;
