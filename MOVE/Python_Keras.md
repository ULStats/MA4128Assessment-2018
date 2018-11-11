Keras
=======================


## History
Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano. It was developed with a focus on enabling fast experimentation. Being able to go from idea to result with the least possible delay is key to doing good research.

In 2017, Google's TensorFlow team decided to support Keras in TensorFlow's core library. Chollet explained that Keras was conceived to be an interface rather than a standalone machine-learning framework. It offers a higher-level, more intuitive set of abstractions that make it easy to develop deep learning models regardless of the computational backend used. Microsoft added a CNTK backend to Keras as well, available as of CNTK v2.0. 

## Features

Keras contains numerous implementations of commonly used neural network building blocks such as layers, objectives, activation functions, optimizers, and a host of tools to make working with image and text data easier. The code is hosted on GitHub, and community support forums include the GitHub issues page, and a Slack channel.

Keras allows users to productize deep models on smartphones (iOS and Android), on the web, or on the Java Virtual Machine.

It also allows use of distributed training of deep learning models on clusters of Graphics Processing Units (GPU).

## Neural Networks
Keras, through deep learning, is used to peprocess, model, evaluate and optimize neural networks. Deep learning is a subfield of machine learning that is a set of algorithms that is inspired by the structure and function of the brain. These algorithms are usually called Artificial Neural Networks (ANN). Neural networks found their inspiration and biology, where the term “neural network” can also be used for neurons. The human brain is then an example of such a neural network, which is composed of a number of neurons. The brain is capable of performing quite complex computations and this is where the inspiration for Artificial Neural Networks comes from. The network as a whole is a powerful modeling tool. Much like biological neurons, which have dendrites and axons, the single artificial neuron is a simple tree structure which has input nodes and a single output node, which is connected to each input node. Here’s a visual comparison of the two:
![Biological Neuron versus Artificial Neural Network](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Keras+Python+Tutorial/content_content_neuron.png)

## Loading Data
Data can be simply loaded using code like the example below.
```
# Import pandas 
import pandas as pd

# Read in white wine data 
white = ___________("http://archive.ics.uci.edu/ml/machine-learning-databases/wine-quality/winequality-white.csv", sep=';')

# Read in red wine data 
red = ___________("http://archive.ics.uci.edu/ml/machine-learning-databases/wine-quality/winequality-red.csv", sep=';')
```

