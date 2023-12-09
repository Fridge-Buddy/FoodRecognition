import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BarcodeScan from './BarcodeScan';
import SmartScan from './SmartScan';

const Tab = createMaterialTopTabNavigator();

export default function ScanPage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Barcode" component={BarcodeScan} />
      <Tab.Screen name="Smart Scan" component={SmartScan} />
    </Tab.Navigator>
  );
}