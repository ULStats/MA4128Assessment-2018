
## Option Basics
An option is a contract between a buyer and a seller. It gives the buyer the right, but not the obligation to exercise at an agreed maturity. There is a cost to acquire an option. This cost is known as the premium. There are two types of options, calls and puts. A call option gives the holder the right to buy the underlying asset by a certain date for a certain price. A put option gives the holder the right to sell the underlying asset by a certain date for a certain price. The price in the contract is known as the exercise price or strike price; the date in the contract is known as the expiration date or maturity. European options will be the type of option that is mainly focused on in this project. They can be exercised only on the expiration date itself.
The contract size of an option refers to the amount of the underlying asset covered by the options contract. For each call or put option, 100 shares of stock will be traded when one contract is exercised. 
* Premium = Cost of purchasing an option
* Call = Option to buy underlying 
* Put = Option to sell underlying
* Time to Maturity = The date that the option expires if not exercised
* Underlying = The asset which the option is trading
* Strike price = The agreed price in the contract



## Black-Scholes 
Black-Scholes, or sometimes Black-Scholes-Merton, is a mathematical model that seeks to explain the behaviour of financial derivatives, most commonly options. 
It was proposed by Black and Scholes in 1973. It gave theoretical support for trading options to hedge positions. From the model, we are able to calculate what the price of an option should be based on a number of different factors. Nowadays there are numerous variations of the Black-Scholes model, each of which seeks to improve the model based on certain criteria. 

The Black-Scholes formula allows us the calculate the price of European call and put options. Here is the formula for the price of a call using Black-Scholes
## Black Scholes in R-Code:
#Black-Scholes Option Value
#Call value is returned in values[1], put in values[2]
blackscholes <- function(S, X, rf, T, sigma) {  
values <- c(2)    
d1 <- (log(S/X)+(rf+sigma^2/2)*T)/(sigma*sqrt(T))  
d2 <- d1 - sigma * sqrt(T)    
values[1] <- S*pnorm(d1) - X*exp(-rf*T)*pnorm(d2)  
values[2] <- X*exp(-rf*T) * pnorm(-d2) - S*pnorm(-d1)    values}
#Returns value 1= call, 2= put 

# Example of code
blackscholes(100,110,.05,.25,.25)[1]  
1.980506 10.614064

#### *_References_*:
John C Hull, Options, futures and other Derivatives 2009.

https://en.wikipedia.org/wiki/Subprime_mortgage_crisis.


*** Luke O'Halloran ***
