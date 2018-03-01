__Applications of Functional Data Analysis__ :running:
===========================
***Meadhbh O'Neill**    13128159*
![Jump](https://github.com/oneill-m/MA4128/blob/master/ProjectFolder/jump.PNG)

# Functional Data Analysis of Knee Joint Kinematics in the Vertical Jump
**Willie Ryan, Andrew Harrison, Kevin Hayes**

*Sports Biomechanics (2006)*

## Introduction

This is an interesting paper with the main aim of examining the application of functional data analysis of kinematic data in motor development. The paper sets out to address two issues. The paper demonstrates the usefulness of functional data analysis using data obtained from a cross-sectional study on the development of the vertical jump. Additionally, as functional data analysis is an emerging topic in statistics, the paper describes and explains the concepts and procedures completed in detail.

The vertical jump from standing is critical in sports performance and is recognised as one of the fundamental motor patterns. A three stage developmental process for the vertical jump is proposed with stage 1 representing a rudimentary performance. Stage 2 indicated elementary form and stage 3 the mature form. The jumping action becomes more organized and effective as the child develops in the progression from stage 1 to stage 3. The kinematic data used in the paper are typical of motor developmental studies. The data consists of 49 participants including 25 boys and 24 girls. The number of participants in each stage category varied. Stage 1 includes 11 participants, stage 2 has 14 participants and lastly there were 24 participants designated as stage 3. The analysis used only the knee joint angle for each participant.

Traditionally there is a reliance on sophisticated statistical techniques to analyse the descriptive kinematic data. The statistical analysis of kinematic data usually requires a vast amount of data to be sacrificed with entire sequences often reduced to a single measurement to allow analysis using classical univariate and multivariate statistical methods. Kinematic data consists of sets of measurements on groups of individuals gathered during the performance of a single task. As a result, it is natural to represent the set of measurements for an individual as a single entity - a function. The key concept in functional data analysis is that an entire sequence of measurements for an experimental unit is handles as a single entity rather than a set of individual numbers or values.

## Functional data analysis techniques

### Smoothing

The data were recorded discretely. The raw discrete data must be represented in functional form. Smoothing is incorporated to remove any observational noise present in the data resulting from the recording process. Beta-splines (B-splines) are used as base functions for smoothing. The structure of B-splines are designed to provide smooth function with the capacity to accommodate changing local behaviour. The aim of the smoothing process is to provide curves that are stable and interpretable but also fit the raw data well.

### Landmark Registration

The smooth curves follow a similar overall pattern but the curves for the knee joint angle kinematics seemed to be out of phase at the minimum stage of the jump. Therefore the curves are shifted accordingly so that these features occur at a fixed time. All the curves were registered to ensure that each curve passed through its respective minimum at the same relative instant in time. This allows a more intuitive comparison between participants. The benefit of landmark registration is that it allows effective examination of activities in which the relative sequence of events is more important than the speed of the task. The potential hazard is that registration of
data distorts the original measurements and should be interpreted in this context. The landmark feature used in these data, minimum knee joint flexion, is not only easily identifiable but also is a key biomechanical aspect of the vertical jump, since the changes in kinematics before the bottom of the crouch are crucially important and are likely to influence the effectiveness of the jump.

The figure below shows the landmark-registered knee curves for the 49 participants.

![Knee1](https://github.com/oneill-m/MA4128/blob/master/ProjectFolder/knee1.PNG)


### Functional Principal Component Analysis
*Principal components analysis* (PCA) is a classical multivariate statistical technique used to reduce the dimensionality of a problem. This technique transforms the original set of variables into a smaller set of linear combinations that account for most of the variance of the original set. The values of the linear combinations are known as principal component scores. They are useful in understanding what the principal components imply about the characteristics of specific participants. PCA is a useful method for assessing jumping performance as it reduces the analysis from many highly interrelated variables, to a few independent factors that better reflect the characteristics of a jump. *Functional principal component analysis* (FPCA) is an extension of the multivariate technique, in which the principal components are represented by functions rather that vectors. The functions are defined in the same domain as the original functional observations of the study, and so have a definite biomechanical interpretation. To visually examine the importance of each functional principal component at each developmental stage, the functional principal component scores for each component is plotted using boxplots across the three developmental stages.

FPCA was completed on both the unregistered and registered knee joint data. When functional principal components were calculated for the landmark-registered knee joint data, the first three functional principal components accounted for approximately 92% of the total variation.

The first functional principal component on landmark-registered data accounted for 67.5% of the total variation and represents variation around the mean landmark-registered curve. The figure below plots the functional principal component scores for this component. The most obvious feature of these scores is the decrease in variability with the developmental stage.

![Knee2](https://github.com/oneill-m/MA4128/blob/master/ProjectFolder/knee2.png)

The third functional principal component on landmark-registered data accounts for 7.9% of the variation. Participants who scored positively in this functional principal component were characterized by knee joint flexion during the counter-movement that was smoother, faster and involved a greater range of motion when compared with participants who scored negatively on this functional principal component. The third functional principal component scores are presented below and show a very clear developmental trend. This trend is illustrated by the progressively increasing medians of the functional principal component scores across stages and by the lower quartile of stage 3 being both above the median of stage 2 and greater that the upper quartile of stage 1.

![Knee3](https://github.com/oneill-m/MA4128/blob/master/ProjectFolder/knee3.png)

## Discussion

The results of the analysis of functional principal component scores indicated developmental trends in the first and third functional principal component scores. Landmark-registration of the data appeared to have made the developmental trends more obvious. Taken together, the functional principal component scores present a coherent description of the developmental trends in knee joint kinematics in the vertical jump. The first functional principal component describes progressive reductions in variability from stage 1 through stage 3 with the landmark-registered data indicating that most of the variation in knee joint kinematics is focused on the bottom of the crouch. Stage 1 participants are characterized by having a highly variable and inconsistent depth of crouch, which
becomes more consistent in the later stages of development. The third functional principal component provides the clearest evidence of developmental progression; the highest scoring participants in this functional principal component tended to be at developmental stage 3. The biomechanical interpretation of this functional principal component is that developmentally more advanced participants are characterized by a counter-movement that is faster, smoother and has a range of knee motion of approximately 80° to 90°.

## Conclusion
Functional data analysis provides a basis for ensuring that important data are not sacrificed in the analysis and, therefore, that important features or trends in the kinematic patterns are less likely to be missed through limitations in the statistical analysis procedures. This has positive implications for sports biomechanics as the data are essentially time-related functions. Functional data analysis has the potential to provide increased insight into the changes in the functional nature of kinematic patterns. It provides a very effective method of analysing developmental trends.




#### *_References_*:
[Functional data analysis of knee joint kinematics in the vertical jump](https://www.researchgate.net/profile/Andrew_Harrison6/publication/7255844_Functional_data_analysis_of_knee_joint_kinematics_in_the_vertical_jump/links/54abb6b20cf2bce6aa1d9bc1/Functional-data-analysis-of-knee-joint-kinematics-in-the-vertical-jump.pdf)

[Standing Vertical Jump](http://people.brunel.ac.uk/~spstnpl/BiomechanicsAthletics/VerticalJumping.htm)
