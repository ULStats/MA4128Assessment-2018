Geographically Weighted Regression.
===================================


In this essay I will provide some information about Geographically Weighted Regression which is excellent tool for testing model specification.
To understand (GWR) and its methodology we should know regression and spatial analysis. At the beginning the aim of data analysis is to provide relationship between two variables.

### Regression.
Actually, ***regression*** is the most common type to obtain this aim. *If* we want to define regression, we will say is the statistical measure that attempts to determine relationship between one dependent variable and many others changing variables.
![Alt text](http://image.slidesharecdn.com/simplelinearregressionpelatihan-090829234643-phpapp02/95/simple-linier-regression-9-728.jpg?cb=1251589640)
### Spatial Analysis
In spatial analysis the data pulled from geographical units and a single regression equation is estimated we assume a stationary process. What is happening has an impact in producing average or global parameter estimates. 
Usually the least squares method is used to estimate B_ks as what we done here. As the maximum likelihood estimate of B .


B ̀=(x^t*x)^(-1)x^t*y  
This method is applied to geographical data is that each case corresponds to geographical location.

The assumption of stationarity in regression is:
y=∝+Bx.
Assumption is that the values are the same everywhere.
The measured relationships ***vary spatially*** because several points.
<ol>
<li>Sampling variation. </li>
<li>, Relationships intrinsically different across space.</li>
<li>Model misspecification.</li>
</ol>

**Note**: If there is spatial nonstationary, we only see it through the residuals not directly because (GWR).

###Geographically weighted regression.
Is an exploratory technique mainly intended to indicate where non-stationarity is taking place on the map, that is where locally weighted regression coefficients move away from their global values. ‘It’s basis is the concern that the fitted coefficient values of a global model, fitted to all the data may not represent detailed local variations in the data adequately’.
y=B+B*x+....+ε.   and  (B(u)) ̀=(x^t* W(u)x)^(-1) x^t*W(u)y.
Where W(u) is a square matrix of weights specific to location u in the study area, X^T* W(u)*X is the geographically weighted variance-covariance matrix, and y is the vector of the values of the dependent variable.
The weight matrix W(u) contains the geographically weights in its leading diagonal and 0 in its off diagonal elements which is helpful for investigating the precision of spatially varying estimates .
The weight matrix W(u) contains the geographically weights in its leading diagonal and 0 in its off diagonal elements which is helpful for investigating the precision of spatially varying estimates .

![Alt text](http://docsdrive.com/images/ansinet/jas/2011/img2-2k11-630-638.gif)

Where W is the weight given to data point n for the estimate of the local parameters at location u. In fact this matrix is the key output of GWR. By selecting individual rows, it is possible to see how a coefficient corresponding to a given predictor variable changes geographically. More than that, this is possible to find the stander error of coefficient estimate.
Numerous weighting schemes can be used although they tend to be Gaussian.

###Gaussian.

![Alt text](http://www.mdpi.com/remotesensing/remotesensing-07-06454/article_deploy/html/images/remotesensing-07-06454-g003.png)

![Alt text](http://i.imgur.com/mp1D5.jpg)

The gradient of the kernel becomes less steep and more data points are included in the local calibration. 
W(u)=K
*Generally*, the Kernel functions K are:
<ol>
<li>K(0)=1</li>
<li>lim┬(d→∞)⁡〖K(d)=0</li>
<li>K is a monotone decreasing function for positive real numbers.</li> 
</ol>
The results of GWR appear to be relatively insensitive to the choice of weighting function as long as it is a continuous distance-based function. Whichever weighting function is used. However, be sensitive to the degree of distance-decay. Therefor an optimal value of either h or N has to be obtained.This can be found by minimizing a cross validation score (CV) or the Akaike Information Criterion (Hurvich et al, 1998) this takes the following form: 

AIC=2*n*log(σ ̂ )+*nloge* (2π)+n*((n+tr(s))/(n-2-tr(s))).

Where n is the number of observations in the dataset, σ ̂ is the estimate of standard deviation of residuals, and tr(s) is the trace of the hot matrix.  The AIC_C can be used to compare models of the same y variable which have very different right hand sides and it contains a penalty for the complexity of the model. Also can be used to compare the global ordinary least squares (OLS)model with local (GWR)model.
The Output from GWR is a set of location-specific parameter estimates which can be mapped and analyzed to provide information on spatial nonstationary in relationships and their associated standard error at the regression points. If the regression points are the same as the sample points then the GWR will produce predictions for the independent variable, residuals and standardized residuals. If the regression points are not the same as the sample points, and there are no the independent variable available for regression points then parameter estimates and standard errors will be available.

#### In GWR, we can also estimate:
<ul>
<li>local standard errors.</li>
<li>derive local t statistics.</li>
<li>calculate local goodness-of-fit measures.</li> 
<li> perform tests to assess the significance of the spatial variation in the local parameter estimates.</li> 
<li> perform tests to assess the significance of the spatial variation in the local parameter estimates.</li> 
</ul>


###Generalised geographically weighted regression.

The function implements generalised geographically weighted regression approach to exploring
spatial non-stationarity for given global bandwidth and chosen weighting scheme.

<pre><code>
library(maptools)
xx <- readShapePoly(system.file("shapes/sids.shp", package="maptools")[1],
IDvar="FIPSNO", proj4string=CRS("+proj=longlat +ellps=clrk66"))
bw <- 144.4813
Not run:
bw <- ggwr.sel(SID74 ~ I(NWBIR74/BIR74) + offset(log(BIR74)), data=xx,
family=poisson(), longlat=TRUE)
End(Not run)
nc <- ggwr(SID74 ~ I(NWBIR74/BIR74) + offset(log(BIR74)), data=xx,
family=poisson(), longlat=TRUE, bandwidth=bw)
nc
Not run:
nc <- ggwr(SID74 ~ I(NWBIR74/10000) + offset(log(BIR74)), data=xx,
family=poisson(), longlat=TRUE, bandwidth=bw)
nc
nc <- ggwr(SID74 ~ I(NWBIR74/10000) + offset(log(BIR74)), data=xx,
family=quasipoisson(), longlat=TRUE, bandwidth=bw)
nc
End(Not run)
</pre></code>

###In conclusion.
The basic idea behind GWR is to explore how the relationship between a dependent variable (Y) and one or more independent variables (the Xs) might vary geographically. This essay provide the reason of using (GWR).
###References

[Introduction to Geographically Weighted Regression](http://www.bristol.ac.uk/media-library/sites/cmpo/migrated/documents/gwr.pdf).

[Geographically Weighted Regression: A Method for Exploring SpatialNonstationarity](http://eprints.maynoothuniversity.ie/5895/1/CB_Weighted%20Regression.pdf).

[Geographically weighted regressionÐmodellingspatialnon-stationarity](http://onlinelibrary.wiley.com/doi/10.1111/1467-9884.00145/epdf)

[GEOGRAPHICALLY WEIGHTED REGRESSION](http://www.geos.ed.ac.uk/~gisteac/fspat/gwr/gwr_arcgis/GWR_WhitePaper.pdf).

[Package ‘spgwr’](https://cran.r-project.org/web/packages/spgwr/spgwr.pdf).







