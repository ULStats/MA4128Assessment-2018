Financial Assets
===========================
![stock-market-3](https://github.com/DragonflyStats/MA4128Assessment/blob/master/stock-market-3.jpg)

A financial asset is an intangible asset whose value is derived from a contractual claim, such as bank deposits, bonds, and stocks. Financial assets are usually more liquid than other tangible assets, such as commodities or real estate, and may be traded on financial markets.
       
#### *_Stocks_* 
    
Common stock typically represents ownership in a company. Three types are provided to model stocks, Stock, LongStock and ShortStock. The Stock type can be used to represent both long and short positions, simply by providing positive or negative values in the basis element. LongStock and ShortStock types are provided as a convenience and methods dispatched on them assumes long and short positions, respectively.               

A derivative is a financial instrument whose value depends on, or is derived from, the values of other more basic underlying variable(s), such as bonds or stocks. Futures are derivative contracts that allow the control of a fixed size of underlying asset to the owner and an obligation to deliver the underlying asset at the strike price by the seller. The underlying asset can be a commodity, such as corn, or a financial index, such as the S&P 500.    

Three types are provided to model futures   
- Future, 
- LongFuture   
- ShortFuture.     
 
The Future type can be used to represent both long and short positions, simply by providing positive or negative values in the basis element. LongFuture and ShortFuture types are provided as a convenience and methods dispatched on them assumes long and short positions, respectively.
Traders will try to calculate the value of a stock at a future date. The most widely used model to find the expected value of a stock price is the Geometric Brownian Motion model. Using this model, one can evolve a stock price from time 0 (i.e today) to time T ( some timepoint in the future) using realistic stock market conditions. After finding out if the stock price will go up or down, then the trader will decide whether to invest or not.

#### *_Options_*:         
Options are derivative contracts written against an underlying asset. They come in four flavours depending whether they are calls or puts, and depending on whether they are short or long.
There are many different types of options available on the market. The most basic type of options are called Vanilla options. Vanilla options consist of calls and puts. An option is known as a European option if it can only be exercised on the expiration date. An option is known as an American option can be exercised at any point up to the expiration date. The more complex options are known as exotic options.           
* Forward-start options: Forward start options are options that start at some time in the future.   
* Barrier options: These are standard European options except the option can come into existence or cease to exist depending on whether the stock price crosses a pre determined barrier level. 
* Cliquet option: The Cliquet option is a series of consecutive forward-start options, one starting as the previous one expires. The payoff for each term in the series locks in the return on the underlying asset
* Asian option: This option pays the difference between the average of the stock price over its lifespan and the stike price at expiration. 

To value a call option the Black-Scholes-Merton pricing formula can be used. An assumption of the Black-Scholes-Merton pricing model is that all stock prices follow Geometric Brownian Motion.
<pre><code> % Black-Scholes formula
K=105 % strike price
S=100 % stock price at time 0
sig=0.2 % volatility
T=1 % end-time (in years)
ri=0.06 % risk-free interest rate
div=0.03 % dividend yield
d1=(log(S/K)+(ri-div+0.5*sig^2)*T)/(sig*sqrt(T));
d2=d1-sig*sqrt(T);
C=S*exp(-div*T)*(1+erf(d1/sqrt(2)))/2 - K*exp(-ri*T)*(1+erf(d2/sqrt(2)))/2</code></pre>

To understand how investors use these options, consider a European call option in which one has the right to buy 100 shares at €10 with maturity in one year. If at maturity, the stock price is €12, the option will be exercised. The investor will buy the 100 shares for €1000 and immediately sell these on the market at €12 a share making a profit of €200.
The different types of exotic options include forward-start options, the Cliquet option, Asian option and Barrier option. The holder or owner of the option is said to have a long position. The writer of the option is said to have a short position. 

#### *_Bonds_*:
Bonds are paper issued by governments, corporations etc.A bond has a maturity date T. A bond has a principal or  face value eV. We will usually take this to be 100 euro. On the maturity date the holder of the bond is paid the face value V euro. For a zero-coupon bond, this is the only payment. For a coupon bond, the bearer is paid coupons of a fixed amount, usually semi-annually, up to maturity. The coupon rate is the sum of the coupons payments paid in a year divided by the face value. The PV of a bond will usually not be its face value. A bond may be traded at any time up to its maturity. The value of a bond will change as interests rates change. If interest rates rise, bond prices fall; if interest rates fall, bond prices increase. The credit rating of a corporation can affect corporate bond prices. If a corporation defaults, only a fraction of the face value will be repaid.

There are two types of bonds:

1. Zero coupon bond
2. Coupon bonds

The value of a bond will change as interests rates change. If interest rates rise, bond prices fall; if interest rates fall, bond prices increase. The credit rating of a corporation can affect corporate bond prices. Examples of credit ratings are AAA, AA, BBB. If a corporation defaults, only a fraction of the face value will be repaid. 

If we want an example where financial assets failed, we consider the 2008 housing crisis in the US. 
It was triggered by a large decline in home prices after the collapse of a housing bubble, leading to mortgage delinquencies and foreclosures and the devaluation of housing-related securities. 

Credit rating agencies (CRAs) are firms which rate debt instruments/securities according to the debtor's ability to pay lenders back. The expansion of household debt was financed with mortgage-backed securities (MBS) and collateralized debt obligations (CDO), which initially offered attractive rates of return due to the higher interest rates on the mortgages; however, the lower credit quality ultimately caused massive defaults. In the end, the banks were unable to pay the lenders back which resulted in massive amounts of defaults. This was only one of the causes of the crisis. 

Of course there were some who bet that the the above financial assets will fail. These people created a credit default swap which gained them massive profits when the housing crisis occured.

#### *_References_*:
John C Hull, Options, futures and other Derivatives 2009.

https://en.wikipedia.org/wiki/Subprime_mortgage_crisis.



