Algorithmic Trading Using Matlab
=========================================


![MATLAB logo](https://github.com/DragonflyStats/MA4128Assessment/blob/master/images/matlablogo.jpg?raw=true)

####Introduction

MATLAB is a high-performance language for technical computing. It integrates computation, visualization, and programming in an easy-to-use environment where problems and solutions are expressed in familiar mathematical notation. Matlab was originally written by Cleve Moler, chairman of the computer science department at the University of New Mexico in 1970’s, to provide easy access to matrix software developed by the LINPACK and EISPACK for his students. Recognizing its commercial potential Jack Little, an engineer from Stamford, joined Moler to develop the language and interface into what it is today.

The programming environment was first adopted by researchers and practitioners in control engineering, Little's specialty, but quickly spread to many other domains such as data analysis, problem solving, and for experimentation and algorithm development. It is now also heavily used in education, in particular the teaching of linear algebra, numerical analysis, and is popular amongst scientists involved in image processing. Its influence in education is confirmed by the fact that more than 1000 textbooks use MATLAB as a teaching vehicle.


Over the years discipline-specific software written in MATLAB which is organized into libraries of functions called ***toolboxes***, are widely used as well, a particular advantage for algorithmic trading with MATLAB. These *toolboxes* are simply add-ons to the basic package subscription some example of which are *Statistics*, *Global Optimization*, *Financial* and *Trading* toolboxes. The Financial toolbox in particular is of great use for developing algorithms and testing them in MATLAB. The toolbox provides functions such as *sde()*, *ftsbound()* and *corrcoef()* for mathematical modelling and statistical analysis of financial data. The toolbox has the following features:
* Portfolio Optimization 
* Risk and Investment Analysis 
* Financial Time Series Analysis 
* Technical Indicators and Charts 
* Theoretical Simulation for Finance

The Trading toolbox provides functions for analyzing transaction costs, accessing trade pricing data, defining order types, and sending orders to financial trading markets. The toolbox lets you integrate event-based data into MATLAB, enabling you to develop financial trading strategies and algorithms that analyze and react to the market in real time. Trading toolbox lets you access real-time data, including quotes, volumes and trades. 

These features can be used and adapted for developing trading algorithms in MATLAB.


####Algorithmic Trading

***Algorithmic*** trading or **algo** trading are trading systems implemented by complex mathematical formulas and high-speed, computer programs to determine trading strategies. These strategies use electronic platforms to enter trading orders with an algorithm which executes pre-programmed trading instructions accounting for a variety of variables such as timing, price, and volume. Algorithmic trading is widely used by investment banks, pension funds, mutual funds, and other buy-side (investor-driven) institutional traders, to divide large trades into several smaller trades to manage risk. 

Algo trading or automated trading is the backbone of *high frequency trading* (HFT), an approach that uses mathematical algorithms to place high volume of trades on very minute timescales. HFT is a recent trend in finance that has exploded in popularity so much so that in 20009 it is estimated that HFT accounted for 60-73% of all US equity trading volume. The surge in HFT is primarily due to the rise in popularity of algorithmic trading.


#####MATLAB and Algorithmic Trading

Builders and users of algorithmic trading applications need to develop, backtest, and deploy mathematical models that detect and exploit market movements. The majority of  trading algos are backtested before being implemented on the real time market. Backtesting refers to testing a predictive model using existing historical financial data to see how it performs. Alterations and modifications can then be made if necessary. One of the advantages for using MATLAB for algorithmic trading is that MATLAB can use and handle large amounts of data easily and this makes bactesting models and algos more practicle for traders. Below is an example of some code that can be implemented in MATLAB to backtest a trading strategy for a time series that has the price vector in the first column and trading indicator in second column.


<pre><code>
function [pnl,val]= fbacktest(data,v1,pt,st,dd)

iter=1; buy(iter)=0; sell(iter)=0; pnl=0; doubleup=1;

for i=1:length(data(:,2))
   
   %if long indicator gets turn on buy
   if data(i,2)<=-v1 && buy(iter)==0 && sell(iter)==0 
        buy(iter)=1;
        b1(iter)=data(i,1);
   end
    
   %if short indicator gets turned on sell
   if data(i,2)>v1 && sell(iter)==0 && buy(iter)==0 
        sell(iter)=1;
        s1(iter)=data(i,1);
   end

   %If you are long and hit a profit target, run this code
   if buy(iter)==1 && data(i,1)>b1(iter)+pt      
        b2(iter)=data(i,1); 
        pnl(iter)=doubleup*pt;
        iter=iter+1;
        buy(iter)=0;
        sell(iter)=0;
        doubleup=1;
    end
    
    %If you are long and hit a stop loss, run this code
    if buy(iter)==1 && data(i,1)<=b1(iter)-st
        
        if doubleup<=dd
        b1(iter)=(data(i,1)+doubleup*b1(iter))/(doubleup+1);
        doubleup=doubleup+1;         
        else
        b2(iter)=data(i,1); 
        pnl(iter)=-doubleup*st;
        iter=iter+1;
        buy(iter)=0;
        sell(iter)=0;
        doubleup=1;   
        end        
    end
   
    %If you are short, and hit a profit target, run this code
     if sell(iter)==1 && data(i,1)<s1(iter)-pt 
        s2(iter)=data(i,1); 
        pnl(iter)=doubleup*pt;
        iter=iter+1;
        buy(iter)=0;
        sell(iter)=0;
        doubleup=1;
     end
     
     %If you are short, and hit a stop loss, run this code
     if sell(iter)==1 && data(i,1)>=s1(iter)+st       
        if doubleup<=dd
          s1(iter)=(data(i,1)+doubleup*s1(iter))/(doubleup+1);
          doubleup=doubleup+1;
        else
        s2(iter)=data(i,1); 
        pnl(iter)=-doubleup*st;
        iter=iter+1;
        buy(iter)=0;
        sell(iter)=0;
        doubleup=1; 
        end       
     end
     
end

val(1)=sum(pnl);
val(2)=length(find(pnl>0))/length(pnl);
val(3)=mean(pnl)/std(pnl);
val(4)=length(pnl);
end
</code></pre>

Using the *Trading* toolbox these backtested algos can be implement in MATLAB on the real time market. The toolbox provides interactive connection to brokers to execute trades and retrieve quotes.

#####Conclusion
There is general agreement in the technical computing community that the main reasons for MATLAB's success are its intuitive, concise syntax, the use of complex matrices as the default numeric data object, the power of the built-in operators, easily used graphics, and its simple and friendly programming environment, allowing easy extension of the language. These attributes are what makes it very appealling to algorithmic traders.

![Algo Trading](https://github.com/DragonflyStats/MA4128Assessment/blob/master/images/quant-trading-1200x609.jpg?raw=true)

##References 
[Mathworks-Financial Toolbox](http://uk.mathworks.com/products/finance/).<br/>
[Mathworks-Algorithmic Trading](http://uk.mathworks.com/discovery/algorithmic-trading.html). <br/>
[Mathworks-Trading Toolbox](http://uk.mathworks.com/products/trading/). <br/>
[Quantopian](https://www.quantopian.com/home).
