## Principal Component Analysis

#### What is Principal Component Analysis

Principal components analysis (PCA) is a data reduction technique that lowers the dimensionality of data while retaining almost all of the variance in the data set. By creating a new coordinate system using principal components (PC), PCA manages to reduce the dimensionality of the data along with which the variation in the data is maximal. When using a select number of components, every sample can be presented using a relatively small number of values in contrast to having values for a large number of variables. This makes it easy to plot samples which in turn allows diﬀerences and similarities between these samples to be easily identiﬁable and makes the process of potentially grouping samples much more straight forward. PCA establishes new variables, the principal components, that are linear combinations of the initial variables.

The value of PCA become clear when we are dealing with very large data sets, such as spectroscopic (an optical device for producing and observing a spectrum of light or radiation from a source) data. In the case of near infrared (NIR data). It takes measurements every 2 nm (nanometer) over the range 1100-2498 nm. As a result over 700 variables are recorded, but the ﬁrst 20 PC’s will contain the vast majority of the information. The processes of ﬁnding PCs is quite straight forward. The ﬁrst PC is determined by ﬁnding the direction through the data that explains most of the variability in the data. The second, and ensuing, PCs have to be orthogonal (intersecting at right angles) to the previous PC and illustrate the maximum amount of variation that is remaining. When the directions of the PCs are known, geometrical knowledge enables expression of the values of the individual samples in terms of PCs as linear summations of the initial data multiplied by a coeﬃcient which describes the PC. The new values that we have calculated are called scores and every sample will have it own unique score for each PC. Because there is no notion of the output in PCA it is an unsupervised learning method.

![PCA](https://georgemdallas.files.wordpress.com/2013/10/pca13.jpg)

#### Why is Principal Component Analysis
PCA is mostly used as a tool in exploratory data analysis and for making predictive models. It's often used to visualize genetic distance and relatedness between populations. PCA can be done by eigenvalue decomposition of a data covariance (or correlation) matrix or singular value decomposition of a data matrix, usually after mean centering (and normalizing or using Z-scores) the data matrix for each attribute. The results of a PCA are usually discussed in terms of component scores, sometimes called factor scores (the transformed variable values corresponding to a particular data point), and loadings (the weight by which each standardized original variable should be multiplied to get the component score).

## Applications

#### Quantitative Finance
In quantitative finance, principal component analysis can be directly applied to the risk management of interest rate derivatives portfolios. Trading multiple swap instruments which are usually a function of 30-500 other market quotable swap instruments is sought to be reduced to usually 3 or 4 principal components, representing the path of interest rates on a macro basis. Converting risks to be represented as those to factor loadings (or multipliers) provides assessments and understanding beyond that available to simply collectively viewing risks to individual 30-500 buckets. PCA has also been applied to share portfolios in a similar fashion. One application is to reduce portfolio risk, where allocation strategies are applied to the "principal portfolios" instead of the underlying stocks. A second is to enhance portfolio return, using the principal components to select stocks with upside potential.

#### Neuroscience
A variation of principal components analysis is applied in neuroscience to identify the specific properties of a stimulus that increase a neuron's probability of generating an action potential. This technique is known as spike-triggered covariance analysis. In a usual application an experimenter presents a white noise process as a stimulus and notes a train of action potentials, or spikes, that the neurons produced as a result. Presumably, certain features of the stimulus make the neuron more likely to spike. In order to extract these features, the experimenter calculates the covariance matrix of the spike-triggered ensemble, the set of all stimuli that immediately preceded a spike. The eigenvectors of the difference between the spike-triggered covariance matrix and the covariance matrix of the prior stimulus ensemble then indicate the directions in the space of stimuli along which the variance of the spike-triggered ensemble differed the most from that of the prior stimulus ensemble. Specifically, the eigenvectors with the largest positive eigenvalues relate to the directions along which the variance of the spike-triggered ensemble showed the largest positive change compared to the variance of the prior. Since these were the directions in which varying the stimulus led to a spike, they are often good approximations of the sought after relevant stimulus features.

#### Factor Analysis
Principal component analysis produces variables that are linear combinations of the original variables. The new variables have the property that the variables are all orthogonal. The PCA transformation can be helpful as a pre-processing step before clustering. PCA is a variance-focused approach seeking to reproduce the total variable variance, in which components reflect both common and unique variance of the variable. PCA is generally preferred for purposes of data reduction (i.e., translating variable space into optimal factor space) but not when the goal is to detect the latent construct or factors.

Factor analysis is like principal component analysis, in that factor analysis also involves linear combinations of variables. However it is also different to PCA. Different from PCA, factor analysis is a correlation-focused approach hoping to reproduce the inter-correlations among variables, in which the factors "represent the common variance of variables, excluding unique variance". In terms of the correlation matrix, this corresponds with focusing on explaining the off-diagonal terms, while PCA focuses on explaining the terms that sit on the diagonal. However, as a side result, when trying to reproduce the on-diagonal terms, PCA also tends to fit relatively well the off-diagonal correlations. Results given by PCA and factor analysis are very similar in most situations, but this is not always the case, and there are some problems where the results are significantly different. Factor analysis is used when the research purpose is detecting data structure (i.e., latent constructs or factors) or causal modeling.

#### Usage in R
PCA can be used in R using the prcomp() command. Here is an example of PCA used on the iris dataset.
```
# Load data
data(iris)
head(iris, 3)
# log transform 
log.ir <- log(iris[, 1:4])
ir.species <- iris[, 5]
# apply PCA - scale. = TRUE is highly 
# advisable, but default is FALSE. 
ir.pca <- prcomp(log.ir,
                 center = TRUE,
                 scale. = TRUE) 
```
