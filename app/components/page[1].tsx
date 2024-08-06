import React, { useState, useEffect, useRef } from 'react';
import { fetchHistoricalData } from '../actions/fetchHistoricalData';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from '../styles/BTCPricePredictor.module.css';
import CryptoSelector from './CryptoSelector';
import { Button } from "zebpay-ui";
import { Input } from "zebpay-ui";
import { InputDropDown } from "zebpay-ui";
import SkeletonWrapper from "../SkeletonWrapper";
import iconImage from "../components/iconImage.png";
import {
  Main,
  Graph,
  PredictionCards,
  Field,
  Heading,
  FieldRow,
  Cryptoselect,
  InputWrapper,
  SelectWrapper,
  ButtonWrapper,
  Component15,
  Rightsidecards,
  Breakdown,
  CurrentValue,
  Roww,
  Coll,
  Headercontent,
  Headercontent1,
  Frame461,
  Component15a,
  Component15b,
  Up,
  Down,
  History,
  labelStyle,
  Frame458,
  placeholderStyle,
  Wcontent,
  Divi,
  Rowww
} from '../styles/emotionStyles';

const BTCPricePredictor: React.FC = () => {
  const [historicalData, setHistoricalData] = useState<Array<number[]>>([]);
  const [investmentAmount, setInvestmentAmount] = useState<string>('0 INR');
  const [timeframe, setTimeframe] = useState<string>('2');
  const [crypto, setCrypto] = useState<string>('bitcoin');
  const chartRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHistoricalData = async () => {
      setLoading(true);
      const data = await fetchHistoricalData(crypto, timeframe);
      setHistoricalData(reduceDataPoints(data));
      setLoading(false);
    };
    getHistoricalData();
  }, [crypto, timeframe]);

  const handleDropdownChange = (value: string) => {
    console.log('Selected timeframe:', value); // Debugging line
    setTimeframe(value);
  };

  const reduceDataPoints = (data: Array<number[]>) => {
    const reductionFactor = Math.ceil(data.length / data.length/2); // Adjust this number to control the reduction
    return data.filter((_, index) => index % reductionFactor === 0);
  };

  const data = {
    labels: historicalData.map((price) => new Date(price[0]).toLocaleString()),
    datasets: [
      {
        label: 'Price (INR)',
        data: historicalData.map((price) => price[1]),
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointRadius: 0,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(145, 145, 145, 0.27)');
          gradient.addColorStop(0.46, 'rgba(145, 145, 145, 0.27)');
          gradient.addColorStop(0.81, 'rgba(157, 157, 157, 0.13)');
          gradient.addColorStop(1, 'rgba(206, 206, 206, 0)');

          return gradient;
        },
        opacity: 0.2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
          color: 'white',
          borderColor: 'white',
        },
        ticks: {
          display: true,
          maxRotation: 0,
          minRotation: 0,
          callback: function (value, index, values) {
            const date = new Date(this.getLabelForValue(value));
            if (parseInt(timeframe) >= 7) {
              return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
            } else {
              return date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
            }
          },
        },
      },
      y: {
        grid: {
          display: false,
          color: 'white',
          borderColor: 'white',
        },
        ticks: {
          display: true,
          callback: function (value) {
            return value.toLocaleString('en-IN');
          },
        },
      },
    },
    elements: {
      line: {
        borderColor: '#222245',
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Main>
      <Graph>
        <PredictionCards>
          <Heading>
            {loading ? (
              <SkeletonWrapper isLoading={loading} height={50.94} width={200} />
            ) : (
              <><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M12.236 1.43628H1.76324C1.12059 1.43628 0.599609 1.95725 0.599609 2.59991V15.3999C0.599609 16.0425 1.12059 16.5635 1.76324 16.5635H12.236C12.8786 16.5635 13.3996 16.0425 13.3996 15.3999V2.59991C13.3996 1.95725 12.8786 1.43628 12.236 1.43628Z" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.599609 7.25439H13.3996" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.79872 10.7454C3.63806 10.7454 3.50781 10.6151 3.50781 10.4545C3.50781 10.2938 3.63806 10.1636 3.79872 10.1636" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.79883 10.7454C3.95949 10.7454 4.08974 10.6151 4.08974 10.4545C4.08974 10.2938 3.95949 10.1636 3.79883 10.1636" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.99989 10.7454C6.83923 10.7454 6.70898 10.6151 6.70898 10.4545C6.70898 10.2938 6.83923 10.1636 6.99989 10.1636" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10.7454C7.16066 10.7454 7.29091 10.6151 7.29091 10.4545C7.29091 10.2938 7.16066 10.1636 7 10.1636" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.1991 10.7454C10.0384 10.7454 9.9082 10.6151 9.9082 10.4545C9.9082 10.2938 10.0384 10.1636 10.1991 10.1636" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.1992 10.7454C10.3599 10.7454 10.4901 10.6151 10.4901 10.4545C10.4901 10.2938 10.3599 10.1636 10.1992 10.1636" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.79872 13.6546C3.63806 13.6546 3.50781 13.5244 3.50781 13.3637C3.50781 13.203 3.63806 13.0728 3.79872 13.0728" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.79883 13.6546C3.95949 13.6546 4.08974 13.5244 4.08974 13.3637C4.08974 13.203 3.95949 13.0728 3.79883 13.0728" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.99989 13.6546C6.83923 13.6546 6.70898 13.5244 6.70898 13.3637C6.70898 13.203 6.83923 13.0728 6.99989 13.0728" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 13.6546C7.16066 13.6546 7.29091 13.5244 7.29091 13.3637C7.29091 13.203 7.16066 13.0728 7 13.0728" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.1991 13.6546C10.0384 13.6546 9.9082 13.5244 9.9082 13.3637C9.9082 13.203 10.0384 13.0728 10.1991 13.0728" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.1992 13.6546C10.3599 13.6546 10.4901 13.5244 10.4901 13.3637C10.4901 13.203 10.3599 13.0728 10.1992 13.0728" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.4898 4.34546H9.32617" stroke="white" strokeWidth="1.0505" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
<h3>Predict BTC Price</h3></>
            )}
          </Heading>
          <Cryptoselect>
            {loading ? (
              <SkeletonWrapper isLoading={loading} height={27} width={69} />
            ) : (
              <div>Crypto</div>
            )}
            {loading ? (
              <SkeletonWrapper isLoading={loading} height={50} width={775} />
            ) : (
              <form className={styles.form}>
                <CryptoSelector crypto={crypto} setCrypto={setCrypto} />
              </form>
            )}
          </Cryptoselect>
          <FieldRow>
            <Field>
              {loading ? (
                <SkeletonWrapper isLoading={loading} height={22} width={130} />
              ) : (
                <div>Investment Amount</div>
              )}
              {loading ? (
                <SkeletonWrapper isLoading={loading} height={50} width={360} />
              ) : (
                <Input
  
  onBlur={function noRefCheck(){}}
  onChange={function noRefCheck(){}}
  onFocus={function noRefCheck(){}}
  onKeyDown={function noRefCheck(){}}
  onWheel={function noRefCheck(){}}
  placeholder="0                                                                                      INR"
  style={{
    name: '3s4yqf',
    styles: 'width:400px'
  }}
  type="number"
/>
              )}
            </Field>
            <Field>
              {loading ? (
                <SkeletonWrapper isLoading={loading} height={22} width={130} />
              ) : (
                <>Timeframe</>
              )}
              {loading ? (
                <SkeletonWrapper isLoading={loading} height={50} width={370} />
              ) : (
                <InputDropDown
                  onClear={function noRefCheck(){}}
                  enableSearch
                  onChange={handleDropdownChange}
                  options={[
                    { label: <div></div>, value: '1' },
                    { label: '7 Days', value: '7' },
                    { label: '30 Days', value: '30' },
                    { label: '1 Year', value: '365' },
                  ]}
                  placeholder= {<Divi>lol</Divi>}
                  rowHeight={44}
                  search={{ onChange: () => { }, onClear: () => { }, placeholder: 'Search', value: '' }}
                  selected={timeframe} // selected is a string matching the value of an option
                  maxRows={4}
                  style={{ name: '3s4yqf', styles: 'height:38px' }}
                />
              )}
            </Field>
          </FieldRow>
          <ButtonWrapper>
            {loading ? (
              <SkeletonWrapper isLoading={loading} height={49} width={780} />
            ) : (
              <Button onClick={function noRefCheck(){}} size="full-width" type="primary">
                Predict BTC Future Price
              </Button>
            )}
          </ButtonWrapper>
        </PredictionCards>
        <Component15>
          {loading ? (
            <SkeletonWrapper isLoading={loading} height={214} width={768} />
          ) : (
            <div className={styles.chart}>
              <Line data={data} options={options} />
            </div>
          )}
        </Component15>
      </Graph>
      <Rightsidecards>
        <Breakdown>
        {loading ? (
                <SkeletonWrapper isLoading={loading} height={145} width={322} />
              ) : (
                <CurrentValue>
        <Roww>
         <img src={iconImage.src} alt="Icon" style={{ width: '7rem', height: '7rem'  }} />
         
         <Coll>
         <Up>
         <Headercontent>Current Value</Headercontent>
         <Headercontent1><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <mask id="path-1-inside-1_3145_113999" fill="white">
    <path d="M4.58188 0.628524L2.13796 3.09356C1.95401 3.2781 1.95401 3.56811 2.13796 3.75266C2.32191 3.9372 2.61098 3.9372 2.79493 3.75266L4.45048 2.09172V9.03863C4.45048 9.28909 4.66071 9.5 4.91036 9.5C5.16 9.5 5.37023 9.28909 5.37023 9.03863V2.05218L7.05207 3.73947C7.23602 3.92402 7.52508 3.92402 7.70903 3.73947C7.80101 3.6472 7.84043 3.52856 7.84043 3.40992C7.84043 3.29129 7.80101 3.17265 7.70903 3.08037L5.23884 0.628524C5.05489 0.457159 4.76583 0.457159 4.58188 0.628524Z"/>
  </mask>
  <path d="M4.58188 0.628524L2.13796 3.09356C1.95401 3.2781 1.95401 3.56811 2.13796 3.75266C2.32191 3.9372 2.61098 3.9372 2.79493 3.75266L4.45048 2.09172V9.03863C4.45048 9.28909 4.66071 9.5 4.91036 9.5C5.16 9.5 5.37023 9.28909 5.37023 9.03863V2.05218L7.05207 3.73947C7.23602 3.92402 7.52508 3.92402 7.70903 3.73947C7.80101 3.6472 7.84043 3.52856 7.84043 3.40992C7.84043 3.29129 7.80101 3.17265 7.70903 3.08037L5.23884 0.628524C5.05489 0.457159 4.76583 0.457159 4.58188 0.628524Z" fill="white"/>
  <path d="M4.58188 0.628524L3.90024 -0.103168L3.88571 -0.0896339L3.87173 -0.0755338L4.58188 0.628524ZM2.13796 3.09356L2.84622 3.79952L2.84811 3.79761L2.13796 3.09356ZM2.79493 3.75266L3.50318 4.45861L2.79493 3.75266ZM4.45048 2.09172H5.45048V-0.328035L3.74223 1.38577L4.45048 2.09172ZM5.37023 2.05218L6.07849 1.34622L4.37023 -0.36758V2.05218H5.37023ZM7.05207 3.73947L7.76032 3.03351L7.05207 3.73947ZM7.70903 3.08037L8.41729 2.3744L8.4135 2.37064L7.70903 3.08037ZM5.23884 0.628524L5.94331 -0.0812125L5.93207 -0.092371L5.92048 -0.103168L5.23884 0.628524ZM3.87173 -0.0755338L1.42782 2.3895L2.84811 3.79761L5.29202 1.33258L3.87173 -0.0755338ZM1.42971 2.3876C0.856763 2.9624 0.856763 3.88381 1.42971 4.45861L2.84622 3.0467C3.05126 3.25241 3.05126 3.5938 2.84622 3.79952L1.42971 2.3876ZM1.42971 4.45861C2.00445 5.03522 2.92845 5.03522 3.50318 4.45861L2.08668 3.0467C2.29351 2.83919 2.63938 2.83919 2.84622 3.0467L1.42971 4.45861ZM3.50318 4.45861L5.15873 2.79768L3.74223 1.38577L2.08668 3.0467L3.50318 4.45861ZM3.45048 2.09172V9.03863H5.45048V2.09172H3.45048ZM3.45048 9.03863C3.45048 9.83831 4.10537 10.5 4.91036 10.5V8.5C5.21605 8.5 5.45048 8.73986 5.45048 9.03863H3.45048ZM4.91036 10.5C5.71534 10.5 6.37023 9.83831 6.37023 9.03863H4.37023C4.37023 8.73986 4.60467 8.5 4.91036 8.5V10.5ZM6.37023 9.03863V2.05218H4.37023V9.03863H6.37023ZM4.66198 2.75814L6.34381 4.44543L7.76032 3.03351L6.07849 1.34622L4.66198 2.75814ZM6.34381 4.44543C6.91855 5.02203 7.84255 5.02203 8.41728 4.44543L7.00078 3.03351C7.20761 2.82601 7.55348 2.82601 7.76032 3.03351L6.34381 4.44543ZM8.41728 4.44543C8.72342 4.1383 8.84043 3.75182 8.84043 3.40992H6.84043C6.84043 3.30531 6.87859 3.1561 7.00078 3.03351L8.41728 4.44543ZM8.84043 3.40992C8.84043 3.06803 8.72342 2.68155 8.41728 2.37441L7.00078 3.78633C6.87859 3.66375 6.84043 3.51454 6.84043 3.40992H8.84043ZM8.4135 2.37064L5.94331 -0.0812125L4.53437 1.33826L7.00457 3.79011L8.4135 2.37064ZM5.92048 -0.103168C5.35251 -0.632277 4.46821 -0.632277 3.90024 -0.103168L5.26351 1.36022C5.06345 1.54659 4.75727 1.54659 4.55721 1.36022L5.92048 -0.103168Z" fill="white" mask="url(#path-1-inside-1_3145_113999)"/>
</svg>100%</Headercontent1>
         </Up>
         <Down>
         ₹88,11,06,349.88
         </Down>
            
          </Coll>
          
         
         
          
          
        </Roww>
        
        
      </CurrentValue>
              )} 
          {loading ? (
                <SkeletonWrapper isLoading={loading} height={40} width={322} />
              ) : (
                <Frame461><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M13.7608 6.4624V8.32H15.2008V4H10.8808V5.44H12.7384L9.52718 8.6512C9.24638 8.932 8.79278 8.932 8.51198 8.6512L7.66958 7.8088C6.82718 6.9664 5.45918 6.9664 4.61678 7.8088L0.800781 11.6248L1.81598 12.64L5.62478 8.8312C5.90558 8.5504 6.35918 8.5504 6.63998 8.8312L7.48238 9.6736C8.32478 10.516 9.69278 10.516 10.5352 9.6736L13.7608 6.4624Z" fill="white"/>
</svg> Future Price Estimates</Frame461>
              )}
          {loading ? (
            <SkeletonWrapper isLoading={loading} height={302} width={322} />
          ) : (
            <Component15a>
            <History>
              Timeframe</History>
          </Component15a>
          )}
          {loading ? (
            <SkeletonWrapper isLoading={loading} height={120} width={322} />
          ) : (
            <Component15b>
            <Frame458>
              <Rowww>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0009 13.9864C10.8168 14.7775 9.4248 15.1998 8.00078 15.1998C6.09122 15.1998 4.25987 14.4412 2.90961 13.091C1.55935 11.7407 0.800781 9.90936 0.800781 7.9998C0.800781 6.57578 1.22305 5.18373 2.0142 3.9997C2.80534 2.81567 3.92983 1.89283 5.24546 1.34788C6.56108 0.802924 8.00876 0.66034 9.40543 0.938154C10.8021 1.21597 12.085 1.9017 13.0919 2.90864C14.0989 3.91558 14.7846 5.19849 15.0624 6.59515C15.3402 7.99182 15.1977 9.4395 14.6527 10.7551C14.1078 12.0708 13.1849 13.1952 12.0009 13.9864ZM11.4666 2.81286C10.4407 2.12739 9.23459 1.76152 8.00078 1.76152C6.34712 1.76424 4.76197 2.42236 3.59265 3.59168C2.42333 4.76099 1.76521 6.34614 1.7625 7.9998C1.7625 9.23362 2.12836 10.4397 2.81384 11.4656C3.49931 12.4915 4.47359 13.2911 5.61349 13.7632C6.75339 14.2354 8.0077 14.3589 9.21781 14.1182C10.4279 13.8775 11.5395 13.2834 12.4119 12.4109C13.2843 11.5385 13.8785 10.4269 14.1192 9.21683C14.3599 8.00672 14.2364 6.75241 13.7642 5.61252C13.292 4.47262 12.4925 3.49833 11.4666 2.81286ZM7.41418 7.59968C7.41418 7.27901 7.67418 7.01301 7.99418 7.01301C8.32085 7.01301 8.58085 7.27901 8.58085 7.59968V10.5463C8.58085 10.8663 8.32085 11.1263 7.99418 11.1263C7.67418 11.1263 7.41418 10.8663 7.41418 10.5463V7.59968ZM7.42085 5.48634C7.42085 5.15968 7.68085 4.89968 8.00751 4.89968C8.32751 4.89968 8.58751 5.15968 8.58751 5.48634C8.58751 5.80568 8.32751 6.06634 7.99418 6.06634C7.68085 6.06634 7.42085 5.80568 7.42085 5.48634Z" fill="#F9C35C"/>
</svg>Warning</Rowww>
<Wcontent>
All price predictions are based on research model and is in continuous development. ZebPay does not hold responsible for any price prediction accuracy and is purely based for research purposes.
</Wcontent>
            </Frame458>
          </Component15b>
          )}
          
        </Breakdown>
      </Rightsidecards>
    </Main>
  );
};

export default BTCPricePredictor;
