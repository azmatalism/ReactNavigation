import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {COLORS, IMGS, ROUTES} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {selectUserData, setUser} from '../../store/userSlice';
import {serviceCall} from '../../config/services/GenericApi';
import {useDispatch, useSelector} from 'react-redux';

function Login({navigation}: any) {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [values, setValues]: any = useState({
    email: 'azmi@gmail.com',
    password: 'Aa@12345',
  });

  const loginHandler = async () => {
    const data = {
      email_or_mobile: values.email,
      password: values.password,
    };

    try {
      // setIsLoading(true);
      const response = await serviceCall('POST', '/login', data, '');
      const userData = await response;
      if (userData?.data) {
        console.log(
          `Patient:==> ${userData?.data?.user?.first_name} : ID:==> ${userData?.data?.user?.id}`,
        );
        if (userData?.data?.user?.role?.toLowerCase() === 'patient') {
          dispatch(setUser(userData?.data?.user));
          console.log(userData?.data?.message);

          setTimeout(() => {
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'mainDrawer'}],
            // });
            navigation.navigate(ROUTES.REGISTER);
          }, 1000);
        } else {
          console.log('Invalid email/mobile number or password');
        }
      } else {
        const errorMessage = JSON.parse(userData);
        console.log('errorMessage:==>', errorMessage.error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      {/******************** STATUS BAR COLOR *********************/}
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Image
              source={IMGS.icon}
              style={{
                height: 55,
                width: 55,
                tintColor: COLORS.primary,
                marginRight: 5,
              }}
            />
            <Text style={styles.brandName}>Olors</Text>
          </View>
          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={values.email}
            onChangeText={text =>
              setValues(prevState => ({...prevState, email: text}))
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={values.password}
            onChangeText={text =>
              setValues(prevState => ({...prevState, password: text}))
            }
          />

          <View style={styles.loginBtnWrapper}>
            <LinearGradient
              colors={[COLORS.gradientForm, COLORS.primary]}
              style={styles.linearGradient}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.HOME)}
                activeOpacity={0.7}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                userId: 'X0001',
              })
            }>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>

          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity onPress={loginHandler}>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});
