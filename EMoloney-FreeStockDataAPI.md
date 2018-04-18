## Python's API's

In this paper I give a run through some methods for getting free stock data using python. Up until mid 2017 Yahoo was the main website download data
through numerous api modules written for languages such as R/Python/Julia. Unfortunately that came to an end and one had to look to other
sources such as quandl which is an excellent for free economic and financial data. The following fucntion that is written in python 
connects through quandls api and once given a list of stocks, a start date and a finish date it will return a dataframe of the closing 
daily prices. To run the code you will need to download and install the [quandl](https://www.quandl.com/tools/python) package. 

```python
#author: Eric Moloney
import quandl
import pandas as pd

quandl.ApiConfig.api_key = api key
def Quandl_add_series(series,start,end):
    data = quandl.get_table('WIKI/PRICES', qopts = { 'columns': ['date', 'close'] }, ticker = series[0], date = { 'gte': start, 'lte': end })
    data = data.rename(columns={"close":series[0]})

        for i in range(1,len(series)):
        temp = quandl.get_table('WIKI/PRICES', qopts = { 'columns': ['close'] },
                                                ticker = series[i], date = { 'gte': start, 'lte': end })
        temp = temp.rename(columns={"close":series[i]})
        data = data.join(temp, how='inner')
        return data

series = ["XEL","CMS"]
df=Quandl_add_series(series,'2010-01-01',"2018-04-02") 

```
Unfortunately the universe of stocks availabe through quandl is limited and it does not hold ETF's. On top of this Quandl's CFO released
a statement last week that one of their main sources for stock data is no longer available and "As a result, the WIKI data feed is 
likely to be a lot less reliable in the future, with potentially missing or incorrect data or delayed updates".
So that leads to one other option, pulling data from the brokers. This can be easily done through Interactive Brokers and all you have to 
do is setup up a demo account with them. Once the account is setup you will need to download a specially build python API module such as [IBPY](https://github.com/blampe/IbPy). Below is a crude funciton IB_add_series() I wrote that takes in 6 parameters (series, lookback, bar_size,
time_break, client_id, regular_hours) and returns a dataframe consisting of stock prices for the desired list. The function also writes 
the dataframe to a csv file and saves it in a designated location on your computer. For more information on the data available from Interactive Brokers please click on the following [link](https://interactivebrokers.github.io/tws-api/index.html)



```python
#author: Eric Moloney
#series = list of stocks tickers
#lookback = how many years, months, days, hours ,mins, seconds of data to pull
#bar_size = can monthly, weekly, etc.
#time_break = pulling too much data too fast will cause IB to send back a empty dataframe, for exmaple it may take 20 seconds to get
#years of 5 in data whereas it would take 2 sec for 2 years of daily data.
#client_id = a unique id that allows the api to connect
#regular_hours = is either 1 or 0. 1 for normal trading hours(9:30 - 16:00) and 0 normal and extended hours.

import pandas as pd
import numpy as np
import time
from datetime import datetime
from IBWrapper import IBWrapper, contract
from ib.ext.EClientSocket import EClientSocket
from ib.ext.ScannerSubscription import ScannerSubscription
from time import sleep

def IB_add_series(series, lookback,bar_size,time_break, client_id, regular_hours):
    from datetime import datetime
    accountName = "XXXXXXXX"
    callback = IBWrapper()             # Instantiate IBWrapper. callback 
    tws = EClientSocket(callback)      # Instantiate EClientSocket and return data to callback
    host = ""
    port = 7497
    clientId = client_id
    tws.eConnect(host, port, clientId)    
    x=series
    
    create = contract()                # Instantiate contract class
    callback.initiate_variables()    
    contract_Details = create.create_contract(x[0], 'STK', 'SMART/ISLAND', 'USD')
    data_endtime = datetime.now().strftime("%Y%m%d %H:%M:%S")
    
    tickerId = 0
    tws.reqHistoricalData(tickerId, 
                      contract_Details, 
                      data_endtime ,
                      lookback, 
                      bar_size, 
                      "TRADES", 
                      regular_hours, 
                      1)
    
    sleep(time_break)
    data = pd.DataFrame(callback.historical_Data,columns = ["reqId", "date", "open",
                              "high", "low", "close", 
                              "volume", "count", "WAP", 
                              "hasGaps"])
    data.rename(columns={'close':x[0]}, inplace=True)
    
    data=data[["date", x[0]]][:-1]
    data["date"]=pd.to_datetime(data['date'])
    data.set_index('date')
    callback.historical_Data = []
    
    for i in range(1,len(x)):        
        contract_Details = create.create_contract(x[i], 'STK', 'SMART/ISLAND', 'USD')
        tickerId = i
        tws.reqHistoricalData(tickerId, 
                      contract_Details, 
                      data_endtime ,
                      lookback, 
                      bar_size, 
                      "TRADES", 
                      regular_hours, 
                      1)        
        sleep(time_break)       
        
        temp = pd.DataFrame(callback.historical_Data,columns = ["reqId", "date", "open",
                              "high", "low", "close", 
                              "volume", "count", "WAP", 
                              "hasGaps"])
    
        temp.rename(columns={'close':x[i]}, inplace=True)        
        temp=temp[["date", x[i]]][:-1]
        temp["date"]=pd.to_datetime(temp['date'])
        temp.set_index('date')     
        
        data = data.merge(temp, on='date', how='outer')        
        callback.historical_Data = []
        print(x[i])
        if i%2==0:
            data.to_csv("C:\\Users\\Dell\\Documents\\Mean Reversion Project\\Material Stocks Data.csv")       
               
        
    callback.historical_Data = []       
    tws.eDisconnect()       
    return data
``` 




