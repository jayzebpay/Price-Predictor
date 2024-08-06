import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from '../styles/BTCPricePredictor.module.css';
import CryptoSelector from './CryptoSelector';
// import { css,jsx } from '@emotion/core';

const BTCPricePredictor: React.FC = () => {
  const [historicalData, setHistoricalData] = useState<Array<number[]>>([]);
  const [investmentAmount, setInvestmentAmount] = useState<number>();
  const [timeframe, setTimeframe] = useState<string>('2'); 
  const [crypto, setCrypto] = useState<string>('bitcoin'); 

  useEffect(() => {
    fetchHistoricalData();
  }, [crypto, timeframe]);

  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart`,
        {
          params: {
            vs_currency: 'inr',
            days: timeframe, 
          },
        }
      );
      setHistoricalData(response.data.prices);
    } catch (error) {
      console.error('Error fetching data from CoinGecko:', error);
    }
  };

  const data = {
    labels: historicalData.map((price) =>
      new Date(price[0]).toLocaleString()
    ),
    datasets: [
      {
        label: 'Price (INR)',
        data: historicalData.map((price) => price[1]),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointRadius: 0, // Remove the dots
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1>Predict Crypto Price</h1>
      <form className={styles.form}>
        <CryptoSelector crypto={crypto} setCrypto={setCrypto} />
        <div className={styles.formRow}>
          <label className={styles.label}>
            Investment Amount:
            <input
              type="number"
              className={styles.input}
              value={investmentAmount}
              placeholder="0 INR"
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
            />
          </label>
          <label className={styles.label}>
            Timeframe:
            <select
              className={styles.select}
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
            >
              <option value="2" disabled>Select Timeframe</option>
              <option value="1">1 Day</option>
              <option value="7">7 Days</option>
              <option value="30">30 Days</option>
              <option value="365">1 Year</option>
            </select>
          </label>
        </div>
        <button type="button" className={styles.button}>Predict Future Price</button>
      </form>
      <div className={styles.chart}>
        <Line data={data} />
      </div>
    </div>
  );
};

export default BTCPricePredictor;
