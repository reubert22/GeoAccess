//@flow
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

export const motailsStore = {
  saveItem,
  getItem
};

const _credential = '@geoaccess_';

async function saveItem(item: any, selectedValue: any) {
  try {
    await AsyncStorage.setItem(item, JSON.stringify(selectedValue));
  } catch (error) {
    console.error('Error: failed on save item ' + error);
  }
}

async function getItem(item: any) {
  try {
    const value = await AsyncStorage.getItem(item);
    return value;
  } catch (error) {
    console.error('Error: failed on get credentials ' + error.message);
  }
}
