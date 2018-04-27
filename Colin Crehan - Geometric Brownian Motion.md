__Geometric Brownian Motion__
===========================
***Colin Crehan**    14172712*

![rando](https://github.com/ULStats/MA4128Assessment-2018/blob/master/rando.png)

## Introduction

A *Geomtric Brownian Motion* (GBM) is a continuous-time stochastic process in which the logarithm of the randomly varying quantity follows
a Brownian motion (also called a Wiener process) with drift.[1] It is an important example of stochastic processes satisfying a stochastic
differential equation (SDE); in particular, it is used in mathematical finance to model stock prices in the Black–Scholes model.

Geometric Brownian motion is used to model stock prices in the Black–Scholes model and is the most widely used model of stock price behavior.

Some of the arguments for using GBM to model stock prices are:

* The expected returns of GBM are independent of the value of the process (stock price), which agrees with what we would expect in reality.
* A GBM process only assumes positive values, just like real stock prices.
* A GBM process shows the same kind of 'roughness' in its paths as we see in real stock prices.
* Calculations with GBM processes are relatively easy.

## History

The Brownian motion is a mathematical model used to
describe the random mouvements of particles. It was named
after Scottish botanist Robert Brown (1773-1858) who has
published in 1827 a paper in which the chaotic mouvements
of pollen suspended in water were examined.
The Brownian motion was used by Louis Bachelier in his PhD
thesis completed in 1900 and devoted to pricing of options.
The Brownian motion was also used by physicists to describe
the diffusion mouvements of particles, in particular, by Albert
Einstein (1879-1955) in his famous paper published in 1905.
The Brownian motion is also known as the Wiener process
in honour of the famous American mathematician Norbert
Wiener (1894-1964).
The Brownian motion is nowadays widely used to model
uncertainty in engineering, economics and finance.

## Technical definition: the SDE

A stochastic process St is said to follow a GBM if it satisfies the following stochastic differential equation (SDE):

![rando](https://github.com/ULStats/MA4128Assessment-2018/blob/master/s.svg)

where W is a Wiener process or Brownian motion, and "u" ('the percentage drift') and sigma ('the percentage volatility') are constants.

The former is used to model deterministic trends, while the latter term is often used to model a set of unpredictable events occurring during this motion.

## Simulating Geometric Brownian Motion

The R code below allows us to simulate GBM for a given stock with expected rate of return μ and volatility σ, and initial price P0 and a time horizon T, simulate in R nt many trajectories of the price Pt from time  t=0  up until  t=T  through n many time periods, each of length  Δt = T/n, assuming the geometric Brownian motion model.

``` R

library(sde)
mu=0.16; sigma=0.2; P0=40; T = 1/12 ##1 month
nt=50; n=2^(8)
#############Generate nt trajectories
dt=T/n; t=seq(0,T,by=dt)
X=matrix(rep(0,length(t)*nt), nrow=nt)
for (i in 1:nt) {X[i,]= GBM(x=P0,r=mu,sigma=sigma,T=T,N=n)}
##Plot
ymax=max(X); ymin=min(X) #bounds for simulated prices
plot(t,X[1,],t='l',ylim=c(ymin, ymax), col=1,
    ylab="Price P(t)",xlab="time t")
for(i in 2:nt){lines(t,X[i,], t='l',ylim=c(ymin, ymax),col=i)}

```
