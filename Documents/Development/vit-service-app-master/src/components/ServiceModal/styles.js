import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
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
    backgroundColor: '#00000022'
  },
  modalContentUp: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    width: '90%',
    maxHeight: '70%',
    minHeight: '70%',
    borderRadius: 15,
  },
  modalInfoContentUp: {
    flex: 1,
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 6,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    width: '100%',
    maxHeight: '50%',
    minHeight: '50%',
  },
  modalInfoContentLeft: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: '50%',
    minHeight: '50%',
    width: '100%',
  },
  modalInfoContentRight: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: '60%',
    height: '100%',
    minWidth: '60%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalImageContainer: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: '40%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    flex: 1,
    backgroundColor: 'white',
    maxWidth: '60%',
    maxHeight: '70%',
    minHeight: '70%',
    borderRadius: 4,
  },
  modalRightContainer: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: '90%',
    minHeight: '70%',
    maxHeight: '70%',
    justifyContent: 'space-between',
  },
  modalItemTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 2,
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 4,
    maxHeight: '50%',
  },
  modalItemTitleLabel: {
    fontFamily: 'Poppins',
    fontSize: 15,
    textAlign: 'center'
  },
  modalRightMetaContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: '40%',
    minHeight: '40%',
    justifyContent: 'space-between',
  },
  modalPricingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    maxWidth: '40%',
    minWidth: '40%',
    borderRadius: 4,
  },
  modalPricingOffLabel: {
    backgroundColor: '#f00',
    color: 'white',
    borderRadius: 8,
    fontSize: 10,
    paddingHorizontal: 9,
    paddingVertical: 1,
    fontWeight: 'bold',
    lineHeight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  modalPricingLabel: {
    fontFamily: 'Poppins',
    color: '#3f3f3f',
    marginLeft: 2,
    letterSpacing: 0.6,
  },
  modalDurationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    maxWidth: '50%',
    borderRadius: 4,
  },
  modalDurationIcon: {
    marginLeft: 2,
  },
  modalDurationLabel: {
    fontFamily: 'Poppins',
    color: '#3f3f3f',
    marginLeft: 6,
  },
  modalDescriptionScroll: {
    flex: 1,
    maxHeight: '50%',
    width: '100%',
  },
  modalDescriptionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalDescriptionLabel: {
    fontFamily: 'Poppins',
    textAlign: 'justify',
  },
  modalQuantityContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: '50%',
    minHeight: '50%',
  },
  modalQuantityTitleLabel: {
  },
  modalQuantityInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxHeight: '35%',
    minHeight: '35%',
  },
  modalQuantityButtonLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalQuantityLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    width: 30,
    textAlign: 'center',
  },
  modalQuantityButtonLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
    maxWidth: 42,
    minWidth: 42,
    height: 42,
    backgroundColor: '#d3d3d3',
    borderRadius: 42,
  },
  modalQuantityButtonRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 24,
    maxWidth: 42,
    minWidth: 42,
    height: 42,
    backgroundColor: '#d3d3d3',
    borderRadius: 42,
  },
  modalFooterContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  modalAcceptButton: {
    marginLeft: 5,
    backgroundColor: '#28A745',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 48,
    minHeight: 48,
    borderRadius: 8,
    flex: 1,
    width: '90%',
  },
  modalRejectButton: {
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#6C757D',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 48,
    minHeight: 48,
    borderRadius: 8,
    flex: 1,
    width: '90%',
  },
  modalAcceptButtonContainer: {
    flex: 1,
    width: '50%',
    alignItems: 'flex-start',
  },
  modalRejectButtonContainer: {
    flex: 1,
    width: '50%',
    alignItems: 'flex-end',
  },
  modalFooterButtonsLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
