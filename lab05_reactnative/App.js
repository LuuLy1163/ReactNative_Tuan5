import React, { useState } from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View, Modal} from "react-native";

const Screen = () => {
  	const [selectedColor, setSelectedColor] = useState({
      label: 'Xanh dương', // Mặc định là màu xanh dương
      image: require('./assets/vs_blue.png'),
    });
    const [selectCount, setSelectCount] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const colors = [
      { label: 'Đen', value: 'black', image: require('./assets/vs_black.png') },
      { label: 'Đỏ', value: 'red', image: require('./assets/vs_red.png') },
      { label: 'Xanh dương', value: 'blue', image: require('./assets/vs_blue.png') },
      { label: 'Xanh biển', value: '#56ffff', image: require('./assets/vs_silver.png') },
    ];

    const handleColorSelect = (color) => {
      setSelectedColor(color);
      setSelectCount(selectCount + 1); // Tăng đếm khi chọn màu
    };

  	return (
    		<View style={styles.screen01}>
      		<View style={styles.halfscreen}> 
            <Image style={styles.vsBlueIcon} resizeMode="cover" source={selectedColor.image} />
          </View>
          <View style={styles.halfscreen}> 
            <View style={styles.bottomScreen}>
               <Text style={styles.inThoiVsmart}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={styles.stars}> 
                    <View style={styles.sxdanhgia}> 
                      <Image style={styles.starIcon} resizeMode="cover" source={require('./assets/star.png')} />
                      <Image style={styles.starIcon} resizeMode="cover" source={require('./assets/star.png')} />
                      <Image style={styles.starIcon} resizeMode="cover" source={require('./assets/star.png')} />
                      <Image style={styles.starIcon} resizeMode="cover" source={require('./assets/star.png')} />
                      <Image style={styles.starIcon} resizeMode="cover" source={require('./assets/star.png')} />
                    </View>
                    <Text style={styles.xem828Nh}>(Xem 828 đánh giá)</Text>
                </View>
                <View style={styles.stars}> 
                    <View style={styles.sxdanhgia}> 
                      <Text style={styles.text}>1.790.000 đ</Text>
                    </View>
                    <Text style={styles.text2}>1.790.000 đ</Text>
                </View>
                <View style={styles.ghiChu}>
                  <Text style={styles.uRHn}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                  <Image style={styles.groupIcon} resizeMode="cover" source={require('./assets/Group1.png')} />
                </View>
             </View>
             <View style={styles.bottom} > 
               <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
                  <Text style={styles.dropdownText}>{selectCount >= 1 ? `4 MÀU-CHỌN LOẠI` : '4 MÀU-CHỌN MÀU'}</Text>
                  <Image style={styles.vectorIcon} resizeMode="cover" source={require('./assets/Vector.png')} />
                </TouchableOpacity>
                 <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => setModalVisible(false)}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.topModal}>
                      <Image style={styles.vsBlueIcon2} resizeMode="cover" source={selectedColor.image} />
                      <View style={styles.intro}> 
                        <Text style={styles.inThoiVsmart2}>{`Điện Thoại Vsmart Joy 3 Hàng chính hãng`}</Text>
                        <Text style={styles.xem828Nh2}>{selectCount >= 1 ? `Màu: ${selectedColor.label}` : ''}</Text>
                        <Text style={styles.cungCpBiContainer}>
                          <Text style={styles.cungCpBi}>{selectCount >= 1? `Cung cấp bởi `: ''}</Text>
                          <Text style={styles.tikiTradding}>{selectCount >= 1 ? 'Tiki Tradding' :''}</Text>
                        </Text>
                        <Text style={styles.text}>{selectCount >= 1? '1.790.000 đ': ''}</Text>
                      </View>
                    </View>
                    <View style={styles.botModal}> 
                      <Text style={styles.dropdownText}>CHỌN MỘT MÀU BÊN DƯỚI: </Text>
                      {colors.map((color) => (
                      <TouchableOpacity
                        key={color.value}
                        style={[styles.colorOption, { backgroundColor: color.value }]}
                        onPress={() => handleColorSelect(color)}
                      >
                      </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                      <Text style={styles.closeButtonText}>XONG</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>CHỌN MUA </Text>
                </TouchableOpacity>
             </View>
          </View>
    		</View>
        );
};

const styles = StyleSheet.create({
  	screen01: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		overflow: "hidden",
        padding: '5%'
  	},
    halfscreen: {
      flex: 1,
      padding: "5%",
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    vsBlueIcon: {
      margin: "5%",
      height: '100%',
    },
    inThoiVsmart: {
      fontSize: 16,
      fontFamily: "Roboto-Regular",
      color: "#000",
      textAlign: "left",
      alignSelf: 'flex-start',
      fontWeight: 500
    },
    stars: {
      flexDirection: 'row',
      width: '100%',
      alignSelf: 'flex-start',
    },
    starIcon: {
      height: 18
    },
    xem828Nh: {
      fontSize: 16,
      fontFamily: "Roboto-Regular",
      color: "#000",
      textAlign: "left",
      width: 135,
      marginStart: 20
    },
    sxdanhgia: {
       flexDirection: 'row',
    },
    bottomScreen: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    text: {
      fontSize: 18,
      fontWeight: "700",
      fontFamily: "Roboto-Bold",
      color: "#000",
      textAlign: "left"
    },
    text2: {
      fontSize: 16,
      fontWeight: "700",
      fontFamily: "Roboto-Bold",
      color: "#7f7f7f",
      textAlign: "right",
      textDecorationLine: 'line-through',
      marginStart: 50
    },
    uRHn: {
      fontSize: 15,
      fontWeight: "700",
      fontFamily: "Roboto-Bold",
      color: "#fa0000",
      textAlign: "left",
    },
    ghiChu: {
      flexDirection: 'row'
    },
    groupIcon: {
      flex: 1,
      width: 20,
      height: 20,
      marginStart: 10
    },
   dropdown: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
   },
   bottom: {
    width: '95%',
    flex: 1.4,
    justifyContent: 'space-between',
    marginTop: 15
   },
   vectorIcon: {
    width: 17,
    height: 17,
  }, 
  dropdownText: {
    alignSelf: 'center',
    fontSize: 18,
    width: '90%',
    textAlign: 'center'
  },
  button: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    width: '90%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 700,
    fontFamily: "Roboto-Bold",
  },
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  topModal: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  botModal: {
    flex: 3.5,
    backgroundColor: '#7f7f7f',
    width: '100%',
    justifyContent: 'Space-around',
    alignItems: 'center'
  },
  vsBlueIcon2: {
      margin: "5%",
      height: 132,
      width: 120
    },
    inThoiVsmart2: {
      fontSize: 17,
      fontFamily: "Roboto-Regular",
      color: "#000",
      textAlign: "left",
      alignSelf: 'flex-start',
      fontWeight: 500,
      marginTop: 40,
      width: '60%'
    },
    colorOption: {
    padding: 15,
    borderRadius: 4,
    margin: 5,
    width: '25%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#5f00bf',
  },
  closeButtonText: {
    alignSelf: 'center',
    fontSize: 20,
    width: '90%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 700,
    fontFamily: "Roboto-Bold",
  },
  xem828Nh2: {
      fontSize: 16,
      fontFamily: "Roboto-Regular",
      color: "#000",
    },
  intro: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cungCpBi: {
    fontFamily: "Roboto-Regular"
    },
    tikiTradding: {
    fontWeight: "700",
    fontFamily: "Roboto-Bold"
    },
    cungCpBiContainer: {
    fontSize: 15,
    color: "#000",
    textAlign: "left"
    }
});

export default Screen;
