import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLogin = async payload => {
  try {
    const res = await axios.post(
      'https://erp.ibos.io/identity/TokenGenerate/IbosLogin',
      payload,
    );
    const token = res?.data?.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    getUserInfo(payload.password, payload.userName);

    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

const storeData = async (value, key = 'ibos') => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {}
};

export const getStoreData = async (setter, key = 'ibos') => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      setter(JSON.parse(jsonValue));
    }
  } catch (e) {
    // error reading value
  }
};

const getUserInfo = async (password, email) => {
  try {
    const req = await axios.get(
      `https://erp.ibos.io/domain/CreateUser/GetUserInformationByUserEmail?Email=${email}`,
    );
    const res = req.data;

    const selectedBusinessUnit = {
      value: res[0]?.defaultBusinessUnit,
      label: res[0]?.businessUnitName,
    };

    const userInfo = {
      isAuthenticate: true,
      profileData: res[0],
      selectedBusinessUnit,
      password,
    };
    await storeData({...userInfo});
  } catch (error) {}
};

export const uploadImageWithBase = async (img, setFile) => {
  try {
    const payload = [
      {
        data: img?.base64,
        fileName: img?.fileName,
      },
    ];

    const res = await axios.post(
      'https://erp.ibos.io/domain/Document/UploadFileBaseSixtyFour',
      payload,
    );

    return res?.data[0]?.id;
  } catch (error) {}
};

export const uploadImageWithoutBase = async img => {
  try {
    let formData = new FormData();
    img.forEach(file => {
      // console.log(JSON.stringify(file?.uri, null, 2));
      formData.append('file', file?.uri);
    });

    const res = await axios.post(
      'https://erp.ibos.io/domain/Document/UploadFile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return res?.status;
  } catch (error) {}
};
