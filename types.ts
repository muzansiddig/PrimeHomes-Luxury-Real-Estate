import React from 'react';

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  description: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
  isError?: boolean;
}