#Censored regression 
  
  In engineering, economics and statistics, certain data analysis requires that a significant proportion of the dependent variable is censored. 
**For example**, if an engineering company wanted to examine the failure rate (*r*) of a newly developed electronic device within twenty-four hours (*T*) of operation.
  Since the data points with a failure rate of greater than 24 hours (*>T*), is more numerous than r, a high percentage of the data set is excluded from the analysis.
  Thus this data is deemed to be right-censored, or Type I censored data (*NIST, 2016*).
  In the case whereby the rate of observed failures (*r*) is fixed and T is unknown, the data is labelled left censored, or Type II data (NIST, 2016). 
  Censored regression models are not to be confused with truncated regression models (*Chen & Zhou, 2012*).
**For example**, supposing students must have a minimum IQ level of 120 to gain membership of a Gifted and Talented Education Programme.
  If a study sought to model achievement as a function of language abilities and hours spent studying then the entire sample could have to be truncated at an IQ score of 120, thus a truncated regression model would be applied.
  The main distinction between the two models concerns the availability of the independent variable. 
  The independent variable is available through a censored regression model whereas there is no availability or either the independent nor the dependent variable through a truncated regression model.
 
 
  *Calli and Weverbergh (2009)* make a case for the application of censored regression to the forecasting and distribution polices of business which sell goods with a short shelf-life. 
  They argue that censored regression models are particularly useful for providing estimates on supply excess and delivery shortages in the newspaper industry based on the principle that newspaper sales are derived from **two sources**:
  1. subscriptions.
  2. free float in newsagents. 
  3. newspaper stands. 
  
  Newspaper subscriptions are steady and do not create random fluctuations in sales unlike free float purchases. 
  Furthermore, judgemental modifications can be made to the volume of newspapers printed on any given day depending on a special edition of the paper or an exceptional news event. However, this can result in an over-supply of newspapers. 
  The authors argue that censored regression will provide a more accurate prediction of when production should be adjusted. 
  
  
Given that some data values are absent from the analysis, conventional regression models and data analytic tools, such as scatterplots, are not directly applicable to the sample under investigation (*Fan & Gijbels, 1994*).
  Indeed,*as Henningsen (2010) explains*, the use of such methods is counter-productive as it will give rise to biased parameter estimates. 
  To further aggravate matters, the it is not possible to simply correct the censored data by way of transformation, since this approach tends to trigger an iterative scheme. 
  Although many soothing techniques to address the increased variability as a result of data transformation have been proposed (*see Fan & Gijbels, 1994 for a review*), there are several limitations to each tool.
  Therefore, the most robust means of dealing with censored data is to apply censored regression models in exchange of their conventional equivalents (*Henningsen, 2010*). 
  
  
 Censored regression models and truncated regression models are usually estimated by Maximum Likelihood Methods (*Henningsen, 2010*). 
  The data itself can be left censored, right censored or a mix of both and the upper and lower limit of the dependent variable can be any number (*NIST, 2016*). 
  The most popular model for censored regression is the Tobin Model (1958) **because** it has the power to obtain consistent parameter estimates.Special data analytical packages exist to run censored regression models such as AER (*Kleiber & Zeileis, 2009*). 
  *Chen and Zhou (2012)* **argue** for the application of a semiparametric estimator to truncated regression models in addition to an independence restrictor. 
  
  
 There is much debate concerning the likelihood-based methods for both censored regression and truncated regression models. 
  Due to the parametric nature of the models, it has been claimed that likelihood-based methods increase the risk of inconsistent estimates, especially if the error distribution is misspecified (*Powell, 1994*). 
  *As Chen and Zhou (2012) explain,* many semi-parametric equivalents have been proposed to compensate for the complications which arise from their original parametric structure.
  In these semi-parametric models, the latent regression function is generally preserved while other elements of the model may be altered (*Chay & Powell, 2001*). The resulting hybrid model leads protects against the risk of misspecificating the error distribution. 
 However, as evidenced *by Chen and Zhou (2012)*, a semiparametric offering of censored regression or truncated regression are far from robust and not without flaws. 
  
  
##In summary 
  
   **censored regression models** are a useful, **but** by no means robust ways, of examining a sample in which come data points have been excluded from the analysis. Censored regression models are often mistaken for truncation regression models. 
   Although the distinction between the two is slight, censored data features all observations *but the "true"* values of certain observations are unknown.**On the other hand,** truncation models exclude certain observations entirely from the analysis depending on the value of the outcome variable.
   
 [Before and after regression analysis with censoring and truncation]
   
 ![Alt text](https://menghublog.files.wordpress.com/2014/12/regression-models-for-categorical-and-limited-dependent-variables-long-1997-figure-7-2.png "Before and After Censoring and Truncation")
   
   
##References:
   
  -	Calli, M. K., & Weverbergh, M. (2009;2008;). Forecasting newspaper demand with censored regression. *The Journal of the Operational Research Society,* 60(7), 944-951. doi:10.1057/palgrave.jors.2602637
  -	Chay, K. Y., & Powell, J. L. (2001). Semiparametric censored regression models.*The Journal of Economic Perspectives,* 15(4), 29-42. doi:10.1257/jep.15.4.29
  -	Chen, S., & Zhou, X. (2012). Semiparametric estimation of a truncated regression model.*Journal of Econometrics,*167(2), 297-304. doi:10.1016/j.jeconom.2011.09.016
  -	Fan, J., & Gijbels, I. (1994). Censored regression: local linear approximations and their applications. *Journal of the American Statistical Association,*89(426), 560-570.
  -	Henningsen, A. (2010). Estimating censored regression models in R using the censReg Package. *R package vignettes collection,* v0. 5, 2.
  -	Kleiber C, Zeileis A (2009). [AER: Applied Econometrics with R. R package version 1.1] (http://CRAN.R-project.org/package=AER)
  -	Tobin J (1958). “Estimation of relationship for limited dependent variables.” Econometrica, 26, 24–36.
  -	NIST  (2016). [Censoring [webpage] Retrieved from: ]
(http://itl.nist.gov/div898/handbook/apr/section1/apr131.htm) [Date Accessed: 08 March 2016]
  -	Powell, J. L. (1994). Estimation of semiparametric models, in Engle, R.F., & McFadden, D. (Eds.), *Handbook of Econometrics,*vol.4, North-Holland, Amsterdam. 
