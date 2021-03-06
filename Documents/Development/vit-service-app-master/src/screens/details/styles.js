import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    backgroundColor: '#d3011c',
    zIndex: 11,
    maxHeight: 32,
    minHeight: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headingLabel: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    transform: [{ translateY: -8 }],
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'Poppins-bold',
    fontSize: 20,
    color: '#545454',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flex: 0.8,
  },
  options: {
    marginTop: 12,
    marginBottom: 40,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  optionTXT: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: '#545454',
  },
  optionsAddress: {
    marginTop: 5,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#707070',
    padding: 5,
    paddingVertical: 10,
  },
  finishContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 15,
  },
  btnFinish: {
    width: '100%',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#d6001b',
    paddingVertical: 19.9,
  },
  btnFinishTxt: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    fontSize: 16,
  },
  boxItem: {
    flexDirection: 'row',
    paddingLeft: 30,
    maxHeight: 80,
    minHeight: 80,
    backgroundColor: 'white',
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 1,
  },
  boxItemSub: {
    minWidth: '60%',
  },
  addrTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#404040',
  },
  addrInfo: {
    fontSize: 12,
    marginTop: 2,
  },
  modalScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  modalOverflow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  modalContentUp: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    maxHeight: '70%',
    minHeight: '70%',
    borderRadius: 15,
    padding: 5,
  },
  addressTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  addressTitleTXT: {
    fontFamily: 'Poppins-bold',
    fontSize: 18,
  },
  addressTaxTXT: {
    fontFamily: 'Poppins-bold',
    fontSize: 14,
  },
  selecAddresstTXT: {},
  closeModalbtn: {
    width: '50%',
    height: 50,
    backgroundColor: '#d6001b',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  modalFooter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
