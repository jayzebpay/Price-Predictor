import React, { useRef } from 'react';
import styles from '../styles/BTCPricePredictor.module.css';

const cryptoOptions = [
  { value: 'bitcoin', label: 'Bitcoin', symbol: 'BTC', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { value: 'ethereum', label: 'Ethereum', symbol: 'ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { value: 'litecoin', label: 'Litecoin', symbol: 'LTC', icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png' },
  { value: 'ripple', label: 'Ripple', symbol: 'XRP', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
];

interface CryptoSelectorProps {
  crypto: string;
  setCrypto: (crypto: string) => void;
}

const CryptoSelector: React.FC<CryptoSelectorProps> = ({ crypto, setCrypto }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const selectedCrypto = cryptoOptions.find(option => option.value === crypto);

  const handleClick = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <div className={styles.cryptoSelector} onClick={handleClick}>
      {selectedCrypto && (
        <>
          <img src={selectedCrypto.icon} alt={selectedCrypto.label} className={styles.cryptoIcon} />
          <select
            ref={selectRef}
            className={styles.select}
            value={crypto}
            onChange={(e) => setCrypto(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          >
            {cryptoOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.symbol} | {option.label}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default CryptoSelector;
