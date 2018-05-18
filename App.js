import React from 'react';
import { Button, Text, TextInput, Image, StyleSheet, View, ActivityIndicator, FlatList, RefreshControl, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class LoginScreen extends React.Component {
  static navigationOptions = {
  };
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
      };
    }
render() {
  return (
       <View style = {{flex:1,backgroundColor:'#192a56'}}>
        <View style={{backgroundColor:'#192a56', alignItems: 'center', padding : 30 }}>
        <Image source={require('./src/image/teman2.png')}  style={styles.icon} />
         <View style={{margin:10, height: 20}}>
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>APLIKASI FRIENDSHIP</Text>
        </View>
        </View>
        <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:10}} >
            <TextInput
             style={{
              height: 35,
              width: 300,
              alignItems : 'center',
              marginLeft: 20,
              marginRight: 20,
              textAlign: 'left',
              backgroundColor: 'white'
               }}
              placeholder="Email / Telephone"
              onChangeText={(email) => this.setState({ email })}
              keyboardType='ascii-capable'
          />
          </View>
        </View>
        <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:10}} >
            <TextInput
            style={{
              height: 35,
              width: 300,
              marginLeft: 20,
              marginRight: 20,
              textAlign: 'left',
              alignItems : 'center',
              backgroundColor: 'white'
               }}
              placeholder="Password"
              onChangeText={(password) => this.setState({ password })}
              keyboardType='ascii-capable'
          />
          </View>
        </View>
      </View>
        <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:10, marginLeft : 30, marginRight: 30}} >
            <Button
                title="LOGIN"
                color="green"
                onPress={() => this.props.navigation.navigate('Home')}
                  
                />
          </View>
        </View>
      </View>
      <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:10, marginLeft : 30, marginRight: 30}} >
            <Button
                title="SIGN UP"
                color="#0D47A1"
                onPress={() => this.props.navigation.navigate('SignUp')}
                  
                />
          </View>
        </View>
      </View>
      </View>

    );
  }
}
class LogoSignUp extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> SIGN UP </Text>
      </View>
    );
  }
}
class SignUpScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoSignUp/>,
  };

  constructor()
    {
        super();

        this.state = {
          nama: '',
          email: '',
          password: '',
          ActivityIndicator_Loading: false,

        }
    }
  render() {
    return (
    <View style = {{flex:1,backgroundColor:'#192a56', alignItems : 'center', padding: 10}}>
    <Image source={require('./src/image/saya.png')}  style={styles.icon5} />
    <View style={{
                backgroundColor:'#192a56', 
                alignItems: 'center', 
                padding : 10,
                marginTop :10,
                marginLeft: 20, 
                marginRight: 20, 
                height: 200 }}>  
    <View style={{margin:7, height: 40}}>
        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>Create Your Account</Text>
        </View>     
        <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Name "
              onChangeText={(nama) => this.setState({ nama })}
              keyboardType='ascii-capable'
          />
           <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Email / Telephone"
              onChangeText={(email) => this.setState({ email})}
              keyboardType='ascii-capable'
          />      
          <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Password"
              onChangeText={(password) => this.setState({ password})}
              keyboardType='ascii-capable'
          />      
      </View>
       <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:20, flexDirection : 'row'}} >
            <Button
                onPress={() => this.Insert_Data_Into_MySQL()}
                  title="Create"
                  color="green"
                />
                {

                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null

                }
             <Button
                title="Batal"
                color="red"
                onPress={() => this.props.navigation.navigate('Login')}
                  
                />
          </View>
          </View>
      </View> 
      </View>
    );
  }
}



class LogoHome extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> FRIENDSHIP </Text>
      </View>
    );
  }
}
class HomeScreen extends React.Component {  
  static navigationOptions = {
    headerTitle: <LogoHome />,
  };
  constructor(props) {
      super(props);
      this.state = {
        nama: '',
        telephone: '',
        alamat: '',
      };
    }
render() {
  return (
        <View style = {{flex:1,backgroundColor:'#192a56'}}>
        <View style={{backgroundColor:'#192a56', alignItems: 'center', padding : 30 }}>
        <Image source={require('./src/image/teman2.png')}  style={styles.icon} />
        <View style={{margin:10, height: 45}}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>WELCOME APLIKASI FRIENDSHIP</Text>
        </View>
        </View>
        <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:10, height: 60, width: 100, flexDirection :'row', marginLeft: 20}} >
            <Button
                title="NEW FRIENDS"
                color="green"
                onPress={() => this.props.navigation.navigate('Sapa')}                  
                />
          <View style={{ height: 60, width: 100, flexDirection :'row',  marginRight:11, marginLeft: 11}} >
            <Button
                onPress={() => {
                this.props.navigation.navigate('Tampilan', {
                nama: this.state.nama,
                telephone: this.state.telephone,
                alamat: this.state.alamat,
              });
            }}
              title="VIEW FRIENDS"
              color="#0D47A1"
               />
           <View style={{height: 60, width: 100, flexDirection :'row',  marginRight:11, marginLeft: 11 }} >
            <Button
                title="INPUT ACTIVITY"
                color="#009688"
                onPress={() => this.props.navigation.navigate('Activity')}
                />
             </View>    
           </View>
         </View>
        </View>
       </View> 
      <View>
         <View style={{backgroundColor:'#192a56'}}>
           <View style={{margin:10, height: 60, width: 100, flexDirection :'row', marginLeft: 20 }} >
           <Button
                onPress={() => {
                this.props.navigation.navigate('Jadwal', {
                pembuatkegiatan: this.state.pembuatkegiatan,
                namakegiatan: this.state.namakegiatan,
                telephone: this.state.telephone,
                tanggal: this.state.tanggal,
                tempat: this.state.tempat,
                deskripsi: this.state.deskripsi,
              });
            }}
              title="JADWAL ACTIVITY"
              color="#3F51B5"
               />
             
           <View style={{height: 60, width: 100, flexDirection :'row',  marginRight:11, marginLeft: 11 }} >
            <Button
                title="MY GALLERY"
                color="red"
                onPress={() => this.props.navigation.navigate('')}                 
                />  
           <View style={{height: 60, width: 100, flexDirection :'row',  marginRight:11, marginLeft: 11 }} >
            <Button
                title="MY ACCOUNT"
                color="brown"
                onPress={() => this.props.navigation.navigate(' ')}                 
                />
              </View> 
           </View>                 
          </View>
        </View>
      </View>
    </View>
    );
  }
}

class LogoInput extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> Input Friends </Text>
      </View>
    );
  }
}
class SapaScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoInput/>,
  };

  constructor()
    {
        super();

        this.state = {
          nama: '',
          telephone: '',
          alamat: '',
          ActivityIndicator_Loading: false,

        }
    }
    //fungsi mengirim data ke database
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          //mengirim data ke database melalui api
            fetch('https://ketutindasundhari.000webhostapp.com/API/sentData.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  telephone : this.state.telephone,
                  alamat : this.state.alamat,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                /*Alert.alert(
                  'Oops!',
                  'Something went wrong!',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )*/
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
    <View style = {{flex:1,backgroundColor:'#192a56', alignItems : 'center', padding: 10}}>
    <Image source={require('./src/image/input.png')}  style={styles.icon2} />
    <View style={{
                backgroundColor:'#192a56', 
                alignItems: 'center', 
                padding : 10,
                marginTop :10,
                marginLeft: 20, 
                marginRight: 20, 
                height: 250 }}>  
    <View style={{margin:7, height: 40}}>
        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>Enter The Name Of Your Friend</Text>
        </View>     
        <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Name Friend"
              onChangeText={(nama) => this.setState({ nama })}
              keyboardType='ascii-capable'
          />
        <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Phone Number"
              onChangeText={(telephone) => this.setState({ telephone })}
              keyboardType='numeric'
          />    
           <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Address"
              onChangeText={(alamat) => this.setState({ alamat })}
              keyboardType='ascii-capable'
          />      
      </View>
       <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:20, flexDirection : 'row'}} >
            <Button
                onPress={() => this.Insert_Data_Into_MySQL()}
                  title="Save"
                  color="green"
                />
                {

                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null

                }
             <Button
              title="Home"
              color="#0D47A1"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          </View>
      </View> 
      </View>
    );
  }
}


class LogoTampilan extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> View Friends </Text>
      </View>
    );
  }
}
class TampilanScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTampilan />,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      ActivityIndicator_Loading: false, 
    };
}

GetIDFunction=(nama, telephone, alamat)=>{
          this.props.navigation.navigate('Details', { 
            nama : nama,
            telephone : telephone,
            alamat : alamat,

          });
        }

    componentDidMount()  {
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'https://ketutindasundhari.000webhostapp.com/API/getData.php';
       //this.setState({ loading: true });
        fetch (url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false, 

          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.telephone;
  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#192a56', alignItems : 'center', padding: 20}}>
       <Image source={require('./src/image/orang4.png')}  style={styles.icon2} />
       <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>The List Of Your Friends</Text>
          
           {
          this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null        
          }
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
          <View style={{
                backgroundColor:'white', 
                alignItems: 'flex-start', 
                padding : 10,
                marginBottom :10,
                marginTop :10,
                marginLeft: 20, 
                marginRight: 20, 
                width: 300,
                height: 130 }}>
            <Text>Nama : {item.nama}</Text>
            <Text>Telephone : {item.telephone}</Text>
            <Text>Alamat :  {item.alamat}</Text>
         <View>
         <View style={{backgroundColor:'white'}}>
         <View style={{margin:10, flexDirection : 'row'}} >
             <Button
              title="Edit Data"
              color="#00BCD4"
               onPress={this.GetIDFunction.bind(
                        this, item.nama,
                         item.telephone, 
                         item.alamat, 
                         )}
            />
            </View>
            </View>
            </View> 
        </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.componentDidMount.bind(this)}
          />
        }
        /> 
         <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:10, flexDirection : 'row'}} >
             <Button
              title="Home"
              color="#0D47A1"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
          </View>
      </View> 
          </View>
    );
  }
}


class LogoEdit extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> Edit Friends </Text>
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoEdit/>,  
  };
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telephone: '',
      alamat: '',
      ActivityIndicator_Loading: false, 
  };
}
  componentDidMount()  {
    this.setState({ 
        nama: this.props.navigation.state.params.nama,
        telephone: this.props.navigation.state.params.telephone,
        alamat: this.props.navigation.state.params.alamat,
      })
     }
  
  UpdateRecord = () =>{
      this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://ketutindasundhari.000webhostapp.com/API/updateData.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
              body: JSON.stringify({
      
              nama : this.state.nama,

              telephone : this.state.telephone,
      
              alamat: this.state.alamat,
      
            })
      
            }).then((response) => response.json())
                .then((responseJson) => {
                  this.setState({ ActivityIndicator_Loading : false });
                  // Showing response message coming from server updating records.
                  Alert.alert(responseJson);
      
                }).catch((error) => {
                  console.error(error);
                  this.setState({ ActivityIndicator_Loading : false });
                });
        });
      }
   DeleteRecord = () =>{
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          fetch('https://ketutindasundhari.000webhostapp.com/API/deleteData.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        
            telephone : this.state.telephone
        
          })
        
          }).then((response) => response.json())
          .then((responseJson) => {
            this.setState({ ActivityIndicator_Loading : false });
            // Menampilkan pesan yang ada di query
            Alert.alert(responseJson);
            this.props.navigation.navigate('Tampilan');
        
          }).catch((error) => {
             console.error(error);
             this.setState({ ActivityIndicator_Loading : false });
          });

          
          });
      }
    render() {
    return (
    <View style = {{flex:1,backgroundColor:'#192a56', alignItems : 'center', padding: 10}}>
    <Image source={require('./src/image/temanku.png')}  style={styles.icon2} />
    <View style={{
                backgroundColor:'#192a56', 
                alignItems: 'center', 
                padding : 0,
                marginTop :0,
                marginLeft: 0, 
                marginRight: 0, 
                height: 200 }}>  
    <View style={{margin:7, height: 40}}>
        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>Edit Your Friends</Text>
        </View>     
        <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Name Friend"
              value={this.state.nama}
              onChangeText={(nama) => this.setState({ nama })}
              keyboardType='ascii-capable'
          />
        <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Phone Number"
              value={this.state.telephone}
              onChangeText={(telephone) => this.setState({ telephone })}
              keyboardType='numeric'
          />    
           <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Address"
              value={this.state.alamat}
              onChangeText={(alamat) => this.setState({ alamat })}
              keyboardType='ascii-capable'
          />      
      </View>
       <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:20, flexDirection : 'row'}} >
            <Button
                onPress={() => this.UpdateRecord()}
                  title="Update"
                  color="green"
                />
                {
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                }
                <Button
                onPress={() => this.DeleteRecord()}
                  title="Delete"
                  color="red"
                />
                <Button
                    title="Home"
                    color="#0D47A1"
                    onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
          </View>
      </View> 
      </View>
    );
  }
}


class LogoActivity extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> Activity </Text>
      </View>
    );
  }
}
class ActivityScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoActivity/>,
  };

  constructor()
    {
        super();

        this.state = {
          pembuatkegiatan: '',
          namakegiatan: '',
          telephone: '',
          tanggal: '',
          tempat:'',
          deskripsi: '',
          ActivityIndicator_Loading: false,
        }
    }
  //fungsi mengirim data ke database
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          //mengirim data ke database melalui api
            fetch('https://ketutindasundhari.000webhostapp.com/API/sentdataactivity.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  pembuatkegiatan : this.state.pembuatkegiatan,
                  namakegiatan : this.state.namakegiatan,
                  telephone : this.state.telephone,
                  tanggal : this.state.tanggal,
                  tempat : this.state.tempat,
                  deskripsi : this.state.deskripsi,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                /*Alert.alert(
                  'Oops!',
                  'Something went wrong!',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )*/
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
    <View style = {{flex:1,backgroundColor:'#192a56', alignItems : 'center', padding: 10}}>
    <Image source={require('./src/image/laporanku.png')}  style={styles.icon2} />
    <View style={{
                backgroundColor:'#192a56', 
                alignItems: 'center', 
                padding : 0,
                marginTop :0,
                marginLeft: 0, 
                marginRight: 0, 
                height: 330 }}>  
    <View style={{margin:4, height: 18}}>
        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>Input Your Activity</Text>
        </View>    
        <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Pembuat Kegiatan"
              onChangeText={(pembuatkegiatan) => this.setState({ pembuatkegiatan })}
              keyboardType='ascii-capable'
          />
          <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Nama Kegiatan"
              onChangeText={(namakegiatan) => this.setState({ namakegiatan })}
              keyboardType='ascii-capable'
          />
          <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Hubungi "
              onChangeText={(telephone) => this.setState({ telephone })}
              keyboardType='numeric'
          />    
            <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Tanggal Kegiatan"
              onChangeText={(tanggal) => this.setState({ tanggal })}
              keyboardType='ascii-capable'
          />   
           <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Tempat Kegiatan"
              onChangeText={(tempat) => this.setState({ tempat })}
              keyboardType='ascii-capable'
          />   
           <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Deskripsi"
              onChangeText={(deskripsi) => this.setState({ deskripsi })}
              keyboardType='ascii-capable'
          />      
      </View>
       <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:10, flexDirection : 'row'}} >
            <Button
                onPress={() => this.Insert_Data_Into_MySQL()}
                  title="Save"
                  color="green"
                />
                {

                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null

                }
             <Button
              title="Home"
              color="#0D47A1"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          </View>
      </View> 
      </View>
    );
  }
}

class LogoJadwal extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> Jadwal Activity </Text>
      </View>
    );
  }
}
class JadwalScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoJadwal />,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      ActivityIndicator_Loading: false, 
    };
}

GetIDFunction=(pembuatkegiatan, namakegiatan, telephone, tanggal, tempat, deskripsi)=>{
          this.props.navigation.navigate('EditKegiatan', { 
            pembuatkegiatan : pembuatkegiatan,
            namakegiatan : namakegiatan,
            telephone : telephone,
            tanggal : tanggal,
            tempat : tempat,
            deskripsi : deskripsi,

          });
        }

    componentDidMount()  {
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'https://ketutindasundhari.000webhostapp.com/API/getdataactivity.php';
       //this.setState({ loading: true });
        fetch (url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false, 

          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.telephone;
  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#192a56', alignItems : 'center', padding: 20}}>
       <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>The List Of Your Activity</Text>
         <Image source={require('./src/image/memo.png')}  style={styles.icon3} />  
           {
          this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null        
          }
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
          <View style={{
                backgroundColor:'white', 
                alignItems: 'flex-start', 
                padding : 10,
                marginBottom :10,
                marginTop :10,
                marginLeft: 20, 
                marginRight: 20, 
                width: 300,
                height: 250 }}>
            <Image source={require('./src/image/pinku.png')}  style={styles.icon4} />
            <Text>Pembuat Kegiatan : {item.pembuatkegiatan}</Text>
            <Text>Nama Kegiatan : {item.namakegiatan}</Text>
            <Text>Telephone : {item.telephone}</Text>
            <Text>Tanggal Kegiatan : {item.tanggal}</Text>
            <Text>Tempat Kegiatan : {item.tempat}</Text>
            <Text>Deskripsi :  {item.deskripsi}</Text>
         <View>
         <View style={{backgroundColor:'white'}}>
         <View style={{margin:10, flexDirection : 'row'}} >
             <Button
              title="Edit Data"
              color="#00BCD4"
              onPress={this.GetIDFunction.bind(
                        this, item.pembuatkegiatan,
                         item.namakegiatan, 
                         item.telephone,
                         item.tanggal, 
                         item.tempat,
                         item.deskripsi, 
                         )}
            />
            </View>
            </View>
            </View> 
        </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.componentDidMount.bind(this)}
          />
        }
        /> 
         <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:10, flexDirection : 'row'}} >
             <Button
              title="Home"
              color="#0D47A1"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
          </View>
      </View> 
          </View>
    );
  }
}

class LogoEditKegiatan extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> Edit Kegiatan </Text>
      </View>
    );
  }
}
class EditKegiatanScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoEditKegiatan/>,  
  };
  constructor(props) {
    super(props);
    this.state = {
      pembuatkegiatan: '',
      namakegiatan: '',
      telephone: '',
      tanggal: '',
      tempat: '',
      deskripsi: '',
      ActivityIndicator_Loading: false, 
  };
}
  componentDidMount()  {
    this.setState({ 
        pembuatkegiatan: this.props.navigation.state.params.pembuatkegiatan,
        namakegiatan: this.props.navigation.state.params.namakegiatan,
        telephone: this.props.navigation.state.params.telephone,
        tanggal: this.props.navigation.state.params.tanggal,
        tempat: this.props.navigation.state.params.tempat,
        deskripsi: this.props.navigation.state.params.deskripsi,
      })
     }
  
  UpdateRecord = () =>{
      this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://ketutindasundhari.000webhostapp.com/API/Updatekegiatan.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
              body: JSON.stringify({
      
              pembuatkegiatan : this.state.pembuatkegiatan,

              namakegiatan : this.state.namakegiatan,
      
              telephone: this.state.telephone,

              tanggal: this.state.tanggal,

              tempat: this.state.tempat,

              deskripsi: this.state.deskripsi,
      
            })
      
            }).then((response) => response.json())
                .then((responseJson) => {
                  this.setState({ ActivityIndicator_Loading : false });
                  // Showing response message coming from server updating records.
                  Alert.alert(responseJson);
      
                }).catch((error) => {
                  console.error(error);
                  this.setState({ ActivityIndicator_Loading : false });
                });
        });
      }
   DeleteRecord = () =>{
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          fetch('https://ketutindasundhari.000webhostapp.com/API/Deletekegiatan.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        
            telephone : this.state.telephone
        
          })
        
          }).then((response) => response.json())
          .then((responseJson) => {
            this.setState({ ActivityIndicator_Loading : false });
            // Menampilkan pesan yang ada di query
            Alert.alert(responseJson);
            this.props.navigation.navigate('Jadwal');
        
          }).catch((error) => {
             console.error(error);
             this.setState({ ActivityIndicator_Loading : false });
          });

          
          });
      }
    render() {
    return (
     <View style = {{flex:1,backgroundColor:'#192a56', alignItems : 'center', padding: 10}}>
    <Image source={require('./src/image/laporanbenar.png')}  style={styles.icon2} />
    <View style={{
                backgroundColor:'#192a56', 
                alignItems: 'center', 
                padding : 0,
                marginTop :0,
                marginLeft: 0, 
                marginRight: 0, 
                height: 330 }}>  
      <View style={{margin:4, height: 18}}>
        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>Edit Your Activity</Text>
        </View>    
        <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Pembuat Kegiatan"
              value={this.state.pembuatkegiatan}
              onChangeText={(pembuatkegiatan) => this.setState({ pembuatkegiatan })}
              keyboardType='ascii-capable'
          />
          <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Nama Kegiatan"
              value={this.state.namakegiatan}
              onChangeText={(namakegiatan) => this.setState({ namakegiatan })}
              keyboardType='ascii-capable'
          />
          <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Hubungi "
              value={this.state.telephone}
              onChangeText={(telephone) => this.setState({ telephone })}
              keyboardType='numeric'
          />    
            <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Tanggal Kegiatan"
              value={this.state.tanggal}
              onChangeText={(tanggal) => this.setState({ tanggal })}
              keyboardType='ascii-capable'
          />   
           <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Tempat Kegiatan"
              value={this.state.tempat}
              onChangeText={(tempat) => this.setState({ tempat })}
              keyboardType='ascii-capable'
          />   
           <TextInput
            style={{
              height: 35,
              width: 300,
              textAlign: 'center',
              backgroundColor: 'white',
              margin: 7 }}
              placeholder="Deskripsi"
              value={this.state.deskripsi}
              onChangeText={(deskripsi) => this.setState({ deskripsi })}
              keyboardType='ascii-capable'
          />      
      </View>
       <View>
         <View style={{backgroundColor:'#192a56'}}>
          <View style={{margin:10, flexDirection : 'row'}} >
            <Button
                onPress={() => this.UpdateRecord()}
                  title="Update"
                  color="green"
                />
                {
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                }
                <Button
                onPress={() => this.DeleteRecord()}
                  title="Delete"
                  color="red"
                />
                <Button
                    title="Home"
                    color="#0D47A1"
                    onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
          </View>
      </View> 
      </View>
    );
  }
}


const RootStack = StackNavigator(
  {
     Login: {
      screen: LoginScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
    
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Sapa: {
      screen: SapaScreen,
    },
    Tampilan: {
      screen: TampilanScreen,
    },
    Activity: {
      screen: ActivityScreen,
    },
      Jadwal: {
      screen: JadwalScreen,
    },
     EditKegiatan: {
      screen: EditKegiatanScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  icon: {
    height: 130,
    width: 200,
  },
   icon2: {
    height: 130,
    width: 130,
  },
  icon3: {
    height: 130,
    width: 130,
  },
  icon4: {
    height: 40,
    width: 40,
  },
   icon5: {
    height: 130,
    width: 130,
  }
});
