#  ** Tensorflow **
### ** What is Tensorflow **
TensorFlow is an open-source software library for dataflow programming across a range of tasks. It was originally developed by Google. It is the second machine learning framework that Google developed and used to design build and train deep learning models. Tensorflow can be used to complete numericial computations. Any statistical programme can be used for this, the difference with tensorflow is that it completes these computations with data flow graphs. In these graphs, nodes represent mathematical operations, while the edges represent the data. these are usually multidimensional arrays or tensors. A tensor is a  mathematical object analogous to but more general than a vector, represented by an array of components that are functions of the coordinates of a space. Simply speaking, a tensor is a mathematical representation of a physical entity that may be characterized by magnitude and multiple directions. The graph below shows this. The thing that makes tensors so special is the combination of components and basis vectors. basis vectors transform one way between reference frames and components transform in just such a way as to keep the combination between components and basis vectors the same. Tensorflow also allows the user to use lower-level APIs to build models by defining a series of mathematical operations. 
![alt text](https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2017/03/29102900/Image1-768x691.png)

### **How Tensorflow is used **
Tensorflow is used widely by a range of different mulinational companies including the likes of Snapchat, Ebay and Twitter. Tensorflow can run on multiple CPU's and GPU's. It is available on many plaforms such as Linux, Widows and macOS. The applications for which TensorFlow are automated image captioning software, such as DeepDream(DeepDream is a computer vision program created by Google engineer Alexander Mordvintsev which uses a convolutional neural network to find and enhance patterns in images) as well as handling large numbers of search queries. 
Tensorflow programs are usually ran as a chunk. Usually when using languages such as Python this is the opposite. One is expectd to be very comfortable with python before using Tensoflow. Tensorflow tutorials are widely available online making it quite easy to learn about deeep learning, what itmeans, how it works and develop the code necessary to build various algorithms.

 https://github.com/tensorflow/models

This link above gives examples of models ceated by tensorflow 

Tensorflow uses a dataflow graph to represent your computation in terms of the dependencies between individual operations. This leads to a low-level programming model in which you first define the dataflow graph, then create a TensorFlow session to run parts of the graph across a set of local and remote devices. So what ae dataflow graphs? Dataflow is used in proramming models.  In a dataflow graph, the nodes represent units of computation, and the edges represent the data consumed or produced by a computation. Tensorflow uses dataflow for Parallelism, distributed excution, compilation and Portability. A Tensorflow graph contains two types of information. Graph Structure and collections. Tensorflow also includes tools that can help you to understand the code in a graph.  The graph visualizer is a component of TensorBoard that renders the structure of your graph visually in a browser. 

A simple linear regression model in tensorflow is a good way to start in Tensorflow. It is described by the following equation:Y = aX + b. The slope and intercept we are looking for are respectively a=50 and b=40. Adding a bit of noise to the dependent variable the task is to minimize the mean squared error or in TensorFlow parlance — reduce the mean. Using the following code to minimise it using the gradient descent and using 330 steps as a learning process. Predicting this model and fitting it to the regression line it turns out to fit the data very well.
loss = tf.reduce_mean(tf.square(y_var - Y))
optimizer = tf.train.GradientDescentOptimizer(0.5)
train = optimizer.minimize(loss)
TRAINING_STEPS = 300
results = []
with tf.Session() as sess:
    sess.run(tf.global_variables_initializer())
    for step in range(TRAINING_STEPS):
        results.append(sess.run([train, a_var, b_var])[1:])
final_pred = results[-1]
a_hat = final_pred[0]
b_hat = final_pred[1]
y_hat = a_hat * X + b_hat

print("a:", a_hat, "b:", b_hat)
plt.plot(X, Y);
plt.plot(X, y_hat);

### **Conclusion**
Overall Tesorflow allows you to do computations on most devices. It is widely popular in many companies who use it in deartments such as production. It has become so popular because it is dependable, well documented and powerful. Before TensorFlow there were plenty of ML libraries that offered great functionality for a handful of methods and were reasonably well documented— but there never was one catch all library that was nearly limitless in potential and continuously supported. 










