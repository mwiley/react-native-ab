import React from 'react';
import {
  AdSupportIOS,
  Dimensions,
} from 'react-native';

module.exports = {
  getAdvertisingId(cb) {
    AdSupportIOS.getAdvertisingId(function(advertisingId) {
      cb(null, advertisingId);
    }, cb);
  },
  device: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
};
