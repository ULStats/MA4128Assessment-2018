## Introduction to K-Means
This post is a follow on of my previous paper where I introduced Python and different methods to download stock data. With the downloaded data we are going to calculate three features, historic returns, volatility and correlation of the stocks in the portfolio to the SPY, an ETF of the S&P500 stock index, which is a measure of the US stock market. I will then proceed to use the K-Means clustering algorithm to divide the stocks into distinct groups based upon said features. Dividing assets into groups with similiar characteristics can help construct diversified, long/short or mean reverting portfolios to name a few.


![image](https://user-images.githubusercontent.com/35773761/39299112-e61fb0d6-493f-11e8-8f02-76139b2d401e.png)

K-means clustering is a type of unsupervised learning, which is used when you have unlabeled data (i.e., data without defined categories or groups). The goal of this algorithm is to find groups in the data, with the number of groups represented by the variable K. The algorithm works iteratively to assign each data point to one of K groups based on the features that are provided. Data points are clustered based on feature similarity. 

Rather than defining groups before looking at the data, clustering allows you to find and analyze the groups that have formed organically. Each centroid of a cluster is a collection of feature values which define the resulting groups. Examining the centroid feature weights can be used to qualitatively interpret what kind of group each cluster represents. The Κ-means clustering algorithm uses iterative refinement to produce a final result. The algorithm inputs are the number of clusters Κ and the data set.


## Coding it up
In the code that follows I run through necesssary steps for data collection, manipulationand analysis. First things first, we need to import python packages and the stock data from a csv file.

```
# import necessary packages
from numpy.random import rand
import numpy as np
from scipy.cluster.vq import kmeans,vq
import pandas as pd
from math import sqrt
from sklearn.cluster import KMeans
from matplotlib import pyplot as plt
import datetime as dt
from datetime import datetime

#reading in saved stock data from csv file
df = pd.read_csv("ETF Test Clean.csv")
df['date']=pd.to_datetime(df['date'])
df
```


![image](https://user-images.githubusercontent.com/35773761/39311187-23348bf8-4964-11e8-8b9e-a65bab496df0.png)

We can now analyse the data for our K-Means investigation. We need to decide how many clusters we want for the data. To do 
this we plot an “Elbow Curve” to highlight the relationship between how many clusters we choose, and the Sum of Squared Errors (SSE) 
resulting from using that number of clusters. 

From this plot we identify the optimal number of clusters to use – we would prefer a 
lower number of clusters, but also would prefer the SSE to be lower – so this trade off needs to be taken into account. In my analysis
I look the point at the center to the elbow. kmeans is a module imported from the 
[scipy](https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.vq.kmeans.html#scipy.cluster.vq.kmeans) package. Please 
refer to the link for a detailed review of this package.


 ```
 #Calculate average percentage return and volatilities from 2017-01-03 to 2018-03-02
ret = df.pct_change()
returns = df.pct_change().mean() * len(df)
returns = pd.DataFrame(returns)
returns.columns = ['Returns']
returns['Volatility'] = df.pct_change().std() * sqrt(len(df))
returns["CorrSPY"]=ret.corr()["SPY"]
#format the data as a numpy array to feed into the K-Means algorithm
data = np.asarray([np.asarray(returns['Returns']),np.asarray(returns['Volatility']),np.asarray(returns['CorrSPY'])]).T

X = data
distorsions = []
for k in range(2, 20):
    k_means = KMeans(n_clusters=k)
    k_means.fit(X)
    distorsions.append(k_means.inertia_)
 
fig = plt.figure(figsize=(15, 5))
plt.plot(range(2, 20), distorsions)
plt.grid(True)
plt.title('Elbow curve')
plt.show()
```

![image](https://user-images.githubusercontent.com/35773761/39311460-e33ef91a-4964-11e8-9ff1-01ffe12fccb4.png)

From analysing the graph I have aim to look at 7 clusters, from this point on the reduction in the SSE begins to slow down for each 
increase in cluster number. This leads me to believe the optimal number of clusters is 7.

The next part in the code is reorganising the data and its associated cluster group into a dataframe for plotting. 
```
# computing K-Means with K = 7 (7 clusters)
centroids,_ = kmeans(data,7)
# assign each sample to a cluster
idx,_ = vq(data,centroids)
details = [(name,cluster) for name, cluster in zip(returns.index,idx)]

details_df=pd.DataFrame(details)
pdf=returns
pdf["cluster"] = details_df.iloc[:,1].values
```

The code for the following visualization is a the bottom of the file, it is quite long but it is worth it as you are able to interact 
with the plot. From the plot we can see the clusters in different colours which is quite cool. Also shown is dataframe of the features
and cluster group each asset belongs to.

![image](https://user-images.githubusercontent.com/35773761/39313211-612643fc-4969-11e8-84c5-1074b0b001fa.png)
![image](https://user-images.githubusercontent.com/35773761/39350777-1a648ca6-49f7-11e8-8191-e2e1684660c9.png)



Code fo a 3D interactive plot with 7 clusters.
```
# Initialize plotting library and functions for 3D scatter plots 
from sklearn.datasets import make_blobs
from sklearn.datasets import make_gaussian_quantiles
from sklearn.datasets import make_classification, make_regression
from sklearn.externals import six
import argparse
import json
import re
import os
import sys
import plotly
import plotly.graph_objs as go
plotly.offline.init_notebook_mode()


# Visualize cluster shapes in 3d.

cluster1=pdf.loc[pdf['cluster'] == 0]
cluster2=pdf.loc[pdf['cluster'] == 1]
cluster3=pdf.loc[pdf['cluster'] == 2]
cluster4=pdf.loc[pdf['cluster'] == 3]
cluster5=pdf.loc[pdf['cluster'] == 4]
cluster6=pdf.loc[pdf['cluster'] == 5]
cluster7=pdf.loc[pdf['cluster'] == 6]


scatter1 = dict(
    mode = "markers",
    name = "Cluster 1",
    type = "scatter3d",    
    x = cluster1.as_matrix()[:,0], y = cluster1.as_matrix()[:,1], z = cluster1.as_matrix()[:,2],
    marker = dict( size=2, color='green')
)
scatter2 = dict(
    mode = "markers",
    name = "Cluster 2",
    type = "scatter3d",    
    x = cluster2.as_matrix()[:,0], y = cluster2.as_matrix()[:,1], z = cluster2.as_matrix()[:,2],
    marker = dict( size=2, color='blue')
)
scatter3 = dict(
    mode = "markers",
    name = "Cluster 3",
    type = "scatter3d",    
    x = cluster3.as_matrix()[:,0], y = cluster3.as_matrix()[:,1], z = cluster3.as_matrix()[:,2],
    marker = dict( size=2, color='red')
)

scatter4 = dict(
    mode = "markers",
    name = "Cluster 4",
    type = "scatter3d",    
    x = cluster4.as_matrix()[:,0], y = cluster4.as_matrix()[:,1], z = cluster4.as_matrix()[:,2],
    marker = dict( size=2, color='black')
)
scatter5 = dict(
    mode = "markers",
    name = "Cluster 5",
    type = "scatter3d",    
    x = cluster5.as_matrix()[:,0], y = cluster5.as_matrix()[:,1], z = cluster5.as_matrix()[:,2],
    marker = dict( size=2, color='purple')
)
scatter6 = dict(
    mode = "markers",
    name = "Cluster 6",
    type = "scatter3d",    
    x = cluster6.as_matrix()[:,0], y = cluster6.as_matrix()[:,1], z = cluster6.as_matrix()[:,2],
    marker = dict( size=2, color='yellow')
)

scatter7 = dict(
    mode = "markers",
    name = "Cluster 7",
    type = "scatter3d",    
    x = cluster7.as_matrix()[:,0], y = cluster7.as_matrix()[:,1], z = cluster7.as_matrix()[:,2],
    marker = dict( size=2, color='orange')
)

cluster1 = dict(
    alphahull = 5,
    name = "Cluster 1",
    opacity = .1,
    type = "mesh3d",    
    x = cluster1.as_matrix()[:,0], y = cluster1.as_matrix()[:,1], z = cluster1.as_matrix()[:,2],
    color='green', showscale = True
)
cluster2 = dict(
    alphahull = 5,
    name = "Cluster 2",
    opacity = .1,
    type = "mesh3d",    
    x = cluster2.as_matrix()[:,0], y = cluster2.as_matrix()[:,1], z = cluster2.as_matrix()[:,2],
    color='blue', showscale = True
)
cluster3 = dict(
    alphahull = 5,
    name = "Cluster 3",
    opacity = .1,
    type = "mesh3d",    
    x = cluster3.as_matrix()[:,0], y = cluster3.as_matrix()[:,1], z = cluster3.as_matrix()[:,2],
    color='red', showscale = True
)
cluster4 = dict(
    alphahull = 5,
    name = "Cluster 4",
    opacity = .1,
    type = "mesh3d",    
    x = cluster4.as_matrix()[:,0], y = cluster4.as_matrix()[:,1], z = cluster4.as_matrix()[:,2],
    color='black', showscale = True
)
cluster5 = dict(
    alphahull = 5,
    name = "Cluster 5",
    opacity = .1,
    type = "mesh3d",    
    x = cluster5.as_matrix()[:,0], y = cluster5.as_matrix()[:,1], z = cluster5.as_matrix()[:,2],
    color='purple', showscale = True
)
cluster6 = dict(
    alphahull = 5,
    name = "Cluster 6",
    opacity = .1,
    type = "mesh3d",    
    x = cluster6.as_matrix()[:,0], y = cluster6.as_matrix()[:,1], z = cluster6.as_matrix()[:,2],
    color='yellow', showscale = True
)
cluster7 = dict(
    alphahull = 5,
    name = "Cluster 7",
    opacity = .1,
    type = "mesh3d",    
    x = cluster7.as_matrix()[:,0], y = cluster7.as_matrix()[:,1], z = cluster7.as_matrix()[:,2],
    color='orange', showscale = True
)




layout = dict(
    title = 'Interactive Cluster Shapes in 3D',
    scene = dict(
        xaxis = dict( zeroline=True ),
        yaxis = dict( zeroline=True ),
        zaxis = dict( zeroline=True ),
    )
)
fig = dict( data=[scatter1, scatter2, scatter3,scatter4,scatter5,scatter6,scatter7,  
                  cluster1, cluster2, cluster3, cluster4, cluster5, cluster6,cluster7 ], layout=layout )
# Use py.iplot() for IPython notebook
plotly.offline.iplot(fig, filename='mesh3d_sample')
```




