
__NLP and R__
==========================

## Main uses of NLP
Some of the main uses of NLP in the modern world are Machine Translation, Fighting Spam, Information Extraction and Summarisation.

Machine Translation is critical to making information available to the masses. Today it is taken for granted that a webpage will automatically be translated if it is not in English. Apps such as Duolingo are also available because of NLP, making the learning of languages far more convenient. NLP has also made fighting spam very easy. Extracting the meaning from strings of data to filter out the unwanted content. A statistical technique known as Bayesian spam filtering is used, which measures the incidence of words typically associated with spam against each e-mail received.

<img src="https://github.com/ULStats/MA4128Assessment-2018/blob/master/NLP/Bayes%20Spam%20Filter.png">

Information extraction is similar to the spam filtering. However it can be used for many other purposes. Important decisions in the financial markets are moving away from human control altogether. Algorithm trading is becoming increasing popular. Extracting info from news announcements, stock prices and many other sources allow for more accurate predictions than a human brain could ever fathom. This is also known as text mining. It has become so popular over the last number of years over a wide platform of coding languages including java, python and R. 


## Text Mining and R

<img src="https://github.com/ULStats/MA4128Assessment-2018/blob/master/NLP/data%20github%20project.PNG">


Text mining encompasses a vast field of theoretical approaches and methods with one thing in common: text as input information. A text mining analysis involves several challenging process steps mainly influenced by the fact that texts, from a computer perspective, are rather unstructured collections of words. 

A text mining analyst typically starts with a set of highly heterogeneous input texts. 
So the first step is to import these texts into one’s favourite computing environment, in this case R. There is an R package “tm” available which provides a framework for text mining applications within R. 

Simultaneously it is important to organize and structure the texts to be able to access them in a uniform manner. Once the texts are organized in a repository, the second step is tidying up the texts, including pre-processing the texts to obtain a convenient representation for later analysis.

Since text documents are present in different file formats and in different locations, like a compressed file on the Internet or a locally stored text file with additional annotations, there has to be an encapsulating mechanism providing standardised interfaces to access the document data. 

This functionality is absorbed in so-called sources. Alongside the data infrastructure for text documents the framework must provide tools and algorithms to efficiently work with the documents. That means the framework has to have functionality to perform common tasks, like whitespace removal, stemming or stopword deletion. We denote such functions operating on text document collections as transformations. Another important concept is filtering which basically involves applying predicate functions on collections to extract patterns of interest.

Realistic scenarios in text mining use at least several hundred text documents ranging up to several hundred thousands of documents. This means a compact storage of the documents in a document collection is relevant for appropriate RAM usage — a simple approach would hold all documents in memory once read in and bring down even fully RAM equipped systems shortly with document collections of several thousand text documents.

The approach used by the package tm in R implements a framework for accessing data structures. This consists of several text mining classes. There are also methods which operate without explicitly knowing the details of internal text data structures. The text mining classes are written as abstract and generic as possible, so it is easy to add new methods on the application layer level. Some of teh reader commands are shown below.

<img src="https://github.com/ULStats/MA4128Assessment-2018/blob/master/NLP/data%20github%20project%202.PNG">

The framework uses the S4 class system to capture an object oriented design. This design seems best capable of encapsulating several classes with internal data structures and offers typed methods to the application layer. This modular structure enables tm to integrate existing functionality from other text mining tool kits such as the Weka and OpenNLP tool kits. In detail Weka gives stemming and tokenization methods, whereas OpenNLP offers amongst others tokenization, sentence detection, and part of speech tagging. This can be plugged into the functionality at various points in tm’s infrastructure.

