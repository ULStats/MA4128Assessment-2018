![AllText](https://github.com/ULStats/MA4128Assessment-2018/blob/master/Finance.jpg)

Survival analysis in Finanace
===================================
1) Background:

Survival analysis can be described as a collection of statistical procedures for data analysis:  for which the outcome variable of interest is time until an event occurs.The first use of survival analysis and duration models comes from medical research.
Survival analysis involves the modelling of time to event data; in this context, death or failure
is considered an "event" in the survival analysis literature. Although at the beginning the
survival analysis was used to study death as an event specific to medical studies.
In essence, the main reason for using survival analysis is because 

The key objectives of survival analysis are as follows:
1.Estimating time-to-event of a group of individuals:
Such as time until death for a patient with kidney disease.
2.To compare time-to-event between two more groups:
such as treated vs placebo patients.
3.To assess the relationship of co-variables to time-to-event:
Such as does Albuminuria, serum creatinine, respiratory or cardiovascular problems influence the survival time of kidney disease patients? We must now become familiar with the basic variables that we will use time and time again in our study:
•Time:
Time is the response variable of interest in survival analysis which can be the follow-up time (in months or years) from study entry to the occurrence of an event, or it may be the age of the individual when the event occurs.
•Event:
We mean death, disease incidence, relapse from remission, or any designated ex-perience of interest that may happen to an individual.A key factor is that we must assume only one event.  If more than one event then we havea recurrent event or a competing risk, both of which will be explained in later in our study.
•While studying survival analysis, we typically refer to the time variable as survival time, as it represents the time an individual has ’survived’.  Along with this we usually refer to the event as a failure, as it normally refers to the death/disease incidence or another negativeindividual experience.
•Censoring:
Censoring  is  a  key  data  analysis  problem  in  survival  analysis.   Essentially, censoring occurs when we have some information about an individuals survival time, but we don’t know the survival time exactly.

2) BREAKING DOWN 'Survival Analysis':

Within finance, survival analysis has applications to several areas, particularly insurance. For instance, a study of death rates would be directly applicable to the calculation of life insurance premiums. Given a large enough data set, statisticians can develop a hazard function, which outlines the incidence of death at different ages given certain health conditions. From this function, it is simple to compute the probability that the insured will become deceased during the term of the life insurance policy. Factoring in the value of the potential payouts under the policy, an appropriate insurance premium can be calculated for any policy.
Although medical use was the primary focus of survival analysis it has been adapted to suit the modern financial world.

Time-to-event data present themselves in different ways which create special problems in analyzing
such data. One peculiar feature, often present in time-to-event data, is known as censoring. 
Censoring, broadly speaking, occurs when some, but not all information about an individual exists.
Censoring can be broken into three main types: right/left and interval censoring. As censoring is not my main focus for this assignment 
I will not be focusing all my attention on the matter. In essence, censoring plays a huge role in any partivaular statistical study. The reason for this is that studies cannot be done over an infinite time period as the there are not infinite resources available to conduct studies. This is where survival analysis comes into play as it deals with censoring and allows us to continue to make estimations based and obtain results even though we may only have partial information on an individual. Right-censoring, also known as type 1 censoring is the most common form of censoruing and this occurs when true survival time is greater than observed sutrvival time. Informally, it just means a person has not experienced an 'event' before the study period ends.

![AltText](https://github.com/ULStats/MA4128Assessment-2018/blob/master/Rightcensoring.png)

3) BASIC-SURVIVAL:

One of the most important factors associated with survival analysis is the assumption underlying the time intervals. Time periods are broken up based on occuring events. So the period between t(1) and t(2) is essentially an 'event' happening. An important characteristic is that censored observations are included in time intervals but are not accounted for as events. So we must assume that the censored individual was lost at an infinitesimally small time period (delta) just before the actual event. This is key in survival analyisis and allows us to plot our estimated 'survivor curves' which are the plotted representations used in survival analysis.
Our standard estimated survival curve, also known as the empirical survivor curve is simply the number of individuals that survive past a time-point (t) divided by the total number of individuals in the dataset.
Theoretically speaking, the survivor curve is a decreasing function, with a probability of 1 beginning at t = 0 (i.e having a certain probability of survival at the first time period).
It is a decreasing step function and naturally at time point t= infinity there is exactly a 0% chance of survival.

![AltText](https://github.com/ULStats/MA4128Assessment-2018/blob/master/Survivalfunction.png)

Because survival analysis and credit scoring go hand in hand, let’s start with a brief discussion of credit scoring. In a
broad sense, credit scoring is the application of statistical techniques to determine if credit should be granted to a borrower. It
involves collecting information on a set of accounts reflecting satisfactory (good) payment status for a particular period of
time (called the observation window) and following their payment performance, say, for a period of one year. At the beginning
of the observation window, we may know a great deal about the account — its time on books, how many times it went 30, 60, or
90 days delinquent, its credit limit, etc. We then apply a regression technique that yields a predicted value that will hopefully
distinguish between accounts that will either pay or not pay in the year that follows. The choice of the 1-year window is optional
depending on the application of the score. What is important to know is that the score does not attempt to describe ‘when’ the
event will occur within the performance window. It only describes the likelihood of the event occurring during that 1-year block
of time. To address the timing issue, a more exacting approach is needed — Survival Analysis.
