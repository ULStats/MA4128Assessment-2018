__INFORMATION CRITERION__

**Jack Hogan**
*14171716*

Information criterion is used in statisitcs in the form of model selection.
Model selection is a very important aspect of statistics when coming to conclusions about a best model of fit.
There are two main information criterion used when selecting models: the AIC and the BIC.

## AIC (Akiake Information Criterion)

The Akaike information Criterion, more commonly referred to as the AIC was used for variable selection in this study.  Formulated by the statistician Hirotugu Akaike,the AIC is an estimator for relative quality of statistical models, relative to other models. Additionally, the AIC provides no information about the absolute quality of a model,but only the quality relative to other models.  It is defined in the picture below. The AIC rewards goodnessof fit.  That is to say it encourages the simplest model fit by including a penalty on the number of estimated parameters present in the model.  Increasing parameters almost always improves goodness of fit and so the AIC gives an accurate representation of the most  important  variables  in  the  model.   To  summarise,  the  magnitude  of  the  AIC  is irrelevant when choosing the best model, but the AIC can only be compared to models with the same number of data entries. 

![AltText](https://github.com/ULStats/MA4128Assessment-2018/blob/master/Akaike%E2%80%99s%2BInformation%2BCriterion.jpg)

## BIC (Bayesian Information Criterion)
The Bayesian information criterion, also known as the Schwarz criterion is similar to the AIC but adds a higher penalty to those extra number of parameters. In essence, the information criterion solves the problem that is overfitting. In both models k stands for the number of different parameters in the model. In comparison to the AIC, in the formaula for the BIC we see there is a 2log(n) term, whereby n stands for the sample size being studied. It is clear to see that the BIC penalises models with more parameters greater than the AIC.
As a means of testing, the model with the lowest relative value is regarded as the model of best fit. If Δ (difference in BIC) BIC is less than 2, it is considered ‘barely worth mentioning’ as an argument either for the best theory or against the alternate one. The edge it gives our best model is too small to be significant. But if Δ BIC is between 2 and 6, one can say the evidence against the other model is positive; i.e. we have a good argument in favor of our ‘best model’. If it’s between 6 and 10, the evidence for the best model and against the weaker model is strong. A Δ BIC of greater than ten means the evidence favoring our best model vs the alternate is very strong indeed.
The definition of the BIC can be seen below.
![AltText](https://github.com/ULStats/MA4128Assessment-2018/blob/master/BIC.jpg)

## Conclusion

In reality, there is no 'better' way of testing for your model of best fit. The AIC and BIC both have their positives and negatives and so either choice is an acceptable.

__References__

Link: http://www.statisticshowto.com/bayesian-information-criterion/
Link: https://en.wikipedia.org/wiki/Akaike_information_criterion

