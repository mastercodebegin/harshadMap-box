import React from 'react'
import { Dimensions } from 'react-native'
const {width, height, scale: deviceScale, fontScale} = Dimensions.get('window');
const baseWidth = 360;
const baseHeight = 700;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

// const storageProvider = require('./StorageProvider');

export const scaleRatio = deviceScale;
export const deviceWidth = width;
export const deviceHeight = height;
export const deviceAspectRatio = width / height;
export const scaledSize = (size:any) => Math.ceil(size * scale);
export const widthFromPercentage = (per:number) => (width * per) / 100;
export const heightFromPercentage = (per:number) => (height * per) / 100;
