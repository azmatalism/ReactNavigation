/* eslint-disable prettier/prettier */
import axios, {Axios} from 'axios';
import {baseUrl} from '../config';

export async function serviceCall(
  apiMethod: any,
  apiAddress: any,
  data: any,
  token: any,
) {
  const url = `${baseUrl}${apiAddress}`;
  // console.log('first call to service', url);
  // const headers = {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${token}`,
  // };

  try {
    let response;
    if (apiMethod === 'GET') {
      // response = await axios.get(url, {headers});
      response = await axios.get(url);
    } else if (apiMethod === 'POST') {
      if (data !== '') {
        response = await axios({
          method: apiMethod,
          url,
          data,
          // headers,
        });
      } else {
        response = await axios({
          method: apiMethod,
          url,
          // headers,
        });
      }
    } else if (apiMethod === 'PUT') {
      response = await axios({
        method: apiMethod,
        url,
        data,
        // headers,
      });
    } else if (apiMethod === 'DELETE') {
      response = await axios({
        method: apiMethod,
        url,

        // headers,
      });
    } else if (apiMethod === 'DELETEDATA') {
      response = await axios({
        method: 'DELETE',
        url,
        data,
        // headers,
      });
    } else {
      response = await axios({
        method: apiMethod,
        url,
        data,
        // headers,
      });
    }

    return response; // Adjust depending on how you want to handle the response
  } catch (error) {
    // console.log('gff', error?.request);

    // console.log('Error during API call:', error);
    return error?.request?._response;
  }
  // catch (error) {
  //   console.log(error.request._response);

  //   console.log('Error during API call:', error);
  //   return {status: 400};
  // }

  let requestOptions = {};
  if (apiMethod === 'GET') {
    requestOptions = {
      method: apiMethod,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Add bearer token here
      },
    };
  } else if (apiMethod === 'PATCH') {
    if (data !== '') {
      requestOptions = {
        method: apiMethod,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Add bearer token here
        },
      };
    } else {
      requestOptions = {
        method: apiMethod,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Add bearer token here
        },
      };
    }
  } else {
    requestOptions = {
      method: apiMethod,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  }
  try {
    console.log('here');
    console.log(baseUrl + apiAddress, requestOptions);

    const response = await fetch(baseUrl + apiAddress, requestOptions);
    console.log('here1');
    const json = await response;
    console.log('here2');
    return json;
  } catch (error) {
    console.log(error);

    return error;
    console.error('Error during API call:', error);
  }
}
