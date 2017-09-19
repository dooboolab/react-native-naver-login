import { AsyncStorage, Alert, NativeModules, Platform, } from 'react-native';

// version for local example test
// const AuthAndroid = NativeModules.ReactNaverModule;
// const AuthIOS = NativeModules.ReactIosAuth;

// Below is version for real module test
import { RNNaverLogin } from 'react-native-naver-login';

const naverLogin = (props) => {
  return new Promise(function (resolve, reject) {
    /*
      야래 코드는 develop용으로 사용한다.
    */
    // if (Platform.OS === 'ios') {
      console.log(props);

      RNNaverLogin.login(props, (err, token) => {
        console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      });
    // } else {
    //   RNNaverLogin.login(initials, (err, response) => {
    //     if (err) {
    //       reject(err);
    //       return;
    //     }
    //     console.log('response');
    //     console.log(response);
    //     resolve(JSON.parse(response));
    //   });
    // }
    /*
      퍼블리싱 라이브러리 소스는 따로 ios와 android 구분없이 만들기로 한다.
    */
  });
};

const naverLogout = () => {
  RNNaverLogin.logout();
}

const getNaverProfile = (token) => {
  return new Promise(function (resolve, reject) {
    RNNaverLogin.getProfile(token, (err, response) => {
      if (err) {
        reject(err);
        return;
      }
      console.log('response');
      console.log(response);
      resolve(JSON.parse(response));
    });
  });
}

module.exports = {
  naverLogin,
  naverLogout,
  getNaverProfile,
};
